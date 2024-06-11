'use client'
import siteMetadata from '@/data/siteMetadata'
import { Inter } from 'next/font/google'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import Footer from './Footer'
import PageLogin from '@/components/PageLogin'
import { SearchConfig, SearchProvider } from 'pliny/search'
import { useAppProvider } from 'provider/AppProvider'
import ForgetPass from './ForgetPass'
import ResetForm from './ResetForm'

import QuestionForm from './QuestionForm'
import Stepper from './stepper/Stepper'
import { HTTPClient } from '@/lib/axios'
import Cookies from 'js-cookie'
import initHeaderNavLinks, { cubeheaderNavLinks } from '@/data/headerNavLinks'
import { GlobalHeader } from './global-header'
import { OtherHeader } from './other-header'
import { ModalProvider } from 'react-simple-modal-provider'
import QuestionModal from './QuestionForm'
// import { OtherHeader } from './header'

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

type Ticket = {
  id: number
  close_at: string
}

const Wrapper = ({ children }: Props) => {
  const appProviderContext = useAppProvider()
  const [questionModalOpen, setQuestionModalOpen] = useState<boolean>(true);
  const [openStepModal, setOpenStepModal] = useState<boolean>(true);


  const {
    login,
    setLogin,
    setHasTicket,
    hasTicket,
    showSplash,
    setShowSplash,
    isForget,
    setIsForget,
    isRestForm,
    setIsRestForm,
    authToken,
    setAuthToken,
    email,
    setEmail,
    setCurrentStep,
    setHeaderNavLinks,
    setInvited,
  } = appProviderContext

  const checkRoute = () => {
    setShowSplash(false)
  }
  useEffect(() => {
    const authToken = Cookies.get('auth_token')
    if (authToken && typeof authToken === 'string' && authToken.length) {
      setAuthToken(authToken)
    } else {
      return
    }
    const email = localStorage.getItem('email')
    if (email && typeof email === 'string' && email.length) {
      setEmail(email)
    }

    ;(async () => {
      const res = await Promise.all([
        HTTPClient.getInstance().client.get(`users/me`, {
          headers: {
            Authorization: `Token token=${authToken}`,
          },
        }),
        HTTPClient.getInstance().client.get(`roles`, {
          headers: {
            Authorization: `Token token=${process.env.NEXT_PUBLIC_ZAMMAD_TOKEN}`,
          },
        }),
      ])
      const userRoles = res[0].data.role_ids.map(
        (id: number) => res[1].data.find((role: { id: number; name: string }) => role.id == id).name
      )
      if (userRoles.includes('pro')) {
        setHeaderNavLinks(cubeheaderNavLinks)
      } else {
        setHeaderNavLinks(initHeaderNavLinks)
      }
      if (userRoles.includes('invited')) {
        setInvited(true)
      }
    })()
  }, [setAuthToken, setEmail, setHeaderNavLinks, setInvited])

  const showStepper = useCallback(() => {
    setShowSplash(true)
    setHasTicket(true)
  }, [setShowSplash, setHasTicket])

  const getTicketTags = useCallback(
    async (ticket: Ticket) => {
      const execute = async () => {
        const tagRes = await HTTPClient.getInstance().client.get(
          `tags?object=Ticket&o_id=${ticket.id}`,
          {
            headers: {
              Authorization: `Token token=${authToken}`,
            },
          }
        )
        const { tags } = tagRes.data
        let step = 0

        for (let i = 5; i >= 1; --i) {
          if (tags.find((tag) => tag == `step_${i}`)) {
            step = i
            break
          }
        }
        if (ticket.close_at) {
          step = 5
        }

        setCurrentStep(step)
      }
      await execute()

      showStepper()
    },
    [authToken, setCurrentStep, showStepper]
  )

  useEffect(() => {
    let executeTimeout
    ;(async () => {
      if (authToken && authToken.length && email && email.length) {
        // Check auth token
        const res = (
          await HTTPClient.getInstance().client.get('tickets/search', {
            params: {
              query: `Steps Ticket for Customer ${email}`,
            },
            headers: {
              Authorization: `Token token=${authToken}`,
            },
          })
        ).data
        if (res.tickets) {
          setLogin(true)
        }
        if (res.assets.Ticket) {
          const ticket = Object.values(res.assets.Ticket)[0] as Ticket
          await getTicketTags(ticket)
        }
      }
    })()
    return () => {
      clearTimeout(executeTimeout)
    }
  }, [authToken, email, getTicketTags, setLogin])

  const checkRouteQuestion = async () => {
    const res = await HTTPClient.getInstance().client.post(
      'tickets',
      {
        title: `[ZAMMAD_BLOG] Steps Ticket for Customer ${email}`,
        group: 'Users',
        article: {
          subject: 'Step Ticket',
          body: 'This is step ticket!',
          type: 'note',
          internal: false,
        },
      },
      {
        headers: {
          Authorization: `Token token=${authToken}`,
        },
      }
    )
    await getTicketTags(res.data)
  }

  const loginCheck = async (username: string, password: string) => {
    const auth = {
      auth: {
        username,
        password,
      },
    }
    const access_tokens = (await HTTPClient.getInstance().client.get('user_access_token', auth))
      .data
    const found_access_token = access_tokens.tokens.find(
      (token) => token.name == `zammad-login-${username}`
    )
    console.log(found_access_token, 'found_access_token')
    const res = await Promise.all([
      HTTPClient.getInstance().client.post(
        `user_access_token`,
        {
          name: `zammad-login-${username}`,
          permission: ['ticket.agent', 'ticket.customer'],
        },
        auth
      ),
      found_access_token &&
        HTTPClient.getInstance().client.delete(`user_access_token/${found_access_token.id}`, auth),
    ])

    setAuthToken(res[0].data.token)
    setEmail(username)
    Cookies.set('auth_token', res[0].data.token)
    localStorage.setItem('email', username)

    if (!hasTicket) {
      setShowSplash(false)
    }
  }
  const forgetPassFunc = () => {
    setIsRestForm(true)
    console.log('Rest Btn')
    setIsForget(false)
  }

  if (login === null) {
    return <div>Loading</div>
  }

  const forgetPassHandler = () => {
    setIsForget(true)
  }

  const redirectToLogin = () => {
    setIsForget(false)
    console.log('Redirect')
  }

  const restFormFunc = () => {
    setIsRestForm(false)
    setIsForget(false)
    console.log('Rest Btn', isRestForm)
  }

  if (!login) {
    if (isForget) {
      return <ForgetPass loginCheck={forgetPassFunc} forgetPassHandler={redirectToLogin} />
    } else if (isRestForm) {
      return <ResetForm loginCheck={restFormFunc} />
    } else {
      return (
        <div className="">
            {/* <QuestionModal checkerRoute={checkRouteQuestion} setQuestionModalOpen={setQuestionModalOpen} questionModalOpen={questionModalOpen}></QuestionModal> */}

          <PageLogin loginCheck={loginCheck} forgetPassHandler={forgetPassHandler} />
          
        </div>
      )
    }
  }

  // Handle the case when login is true here, if needed
  // return some component or null based on your requirement

  // if (login && !hasTicket) {
  //   return (
  //     <div className=" w-full">
      
  //     </div>
  //   )
  // }




  return (
   
        <div>
          {showSplash ? (
            <>
              <Stepper checkerRoute={checkRoute} setOpenStepModal={setOpenStepModal} openStepModal={openStepModal} />
            </>
          ) : (
            <div className="">
            {/* <Stepper checkerRoute={checkRoute} setOpenStepModal={setOpenStepModal} openStepModal={openStepModal} /> */}
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              
                <GlobalHeader />
                <OtherHeader noLocalModal={true} />
            <QuestionModal checkerRoute={checkRouteQuestion} setQuestionModalOpen={setQuestionModalOpen} questionModalOpen={questionModalOpen}></QuestionModal>
                {/* <main className="mx-auto  w-full max-w-screen-xl items-center justify-between gap-x-4 px-4 md:justify-normal md:px-8 py-3 ">{children}</main> */}
              </SearchProvider>
              <Footer />
            </div>
          )}
        </div>
      
      )
}

export default Wrapper
