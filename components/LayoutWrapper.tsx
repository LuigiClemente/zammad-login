'use client'
import siteMetadata from '@/data/siteMetadata'
import { Inter } from 'next/font/google'

import { ReactNode, useCallback, useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'

import Stepper from '@/components/Stepper'
import PageLogin from '@/components/PageLogin'
import { SearchConfig, SearchProvider } from 'pliny/search'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react' // Import the signIn function from NextAuth for authentication.
import { authOptions } from '@/lib/auth'
import axios from 'axios'
import { HTTPClient } from '@/lib/axios'
import Cookies from 'js-cookie'

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

const Wrapper = ({ children }: Props) => {
  const [showSplash, setShowSplash] = useState(true)
  const [isRoute, setIsRoute] = useState<boolean>(true)
  const [status, setStatus] = useState('loading')
  const [authToken, setAuthToken] = useState('')
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setShowSplash(false)
  //   }, 19000)

  //   return () => clearTimeout(timeoutId)
  // }, [])

  const checkRoute = () => {
    setShowSplash(false)
    console.log('isRoute ::>', isRoute)
  }
  useEffect(() => {
    ;(async () => {
      try {
        // Check auth token
        const authToken = Cookies.get('auth_token')
        if (authToken && typeof authToken === 'string') {
          const profile = (
            await HTTPClient.getInstance().client.get('users/me', {
              headers: {
                Authorization: `Token token=${authToken}`,
              },
            })
          ).data
          if (profile.id && typeof authToken === 'string') {
            setAuthToken(authToken)
            setStatus('authenticated')
            return
          }
        }
      } catch (err) {
        // pass
      }
      setStatus('unauthenticated')
    })()
  }, [])
  useEffect(() => {
    ;(async () => {
      if (status == 'authenticated') {
        const res = await axios.get('http://localhost:3000/api/v1/tags?object=Ticket&o_id=2', {
          headers: {
            Authorization: `Token token=${authToken}`,
          },
        })
        // await axios.post(
        //   'http://localhost:3000/api/v1/tickets',
        //   {
        //     title: 'Help me!',
        //     group: 'Users',
        //     customer: 'admin@example.com',
        //     article: {
        //       subject: 'My subject',
        //       body: 'I am a message!',
        //       type: 'note',
        //       internal: false,
        //     },
        //   },
        //   {
        //     headers: {
        //       Authorization: `Token token=${authToken}`,
        //     },
        //   }
        // )
        console.log(res.data, 'res.data')
      }
    })()
  }, [authToken, status])
  const loginCheck = async (username: string, password: string) => {
    const access_tokens = (
      await HTTPClient.getInstance().client.get('user_access_token', {
        auth: {
          username,
          password,
        },
      })
    ).data
    const found_access_token = access_tokens.tokens.find((token) => token.name == 'zammad-login')
    const res = await Promise.all([
      HTTPClient.getInstance().client.post(
        `user_access_token`,
        {
          name: 'zammad-login',
          permission: ['admin.ticket', 'ticket.agent', 'admin.tag'],
        },
        {
          auth: {
            username,
            password,
          },
        }
      ),
      found_access_token &&
        HTTPClient.getInstance().client.delete(`user_access_token/${found_access_token.id}`, {
          auth: {
            username,
            password,
          },
        }),
    ])
    setAuthToken(res[0].data.token)
    setStatus('authenticated')
    Cookies.set('auth_token', res[0].data.token)
  }
  if (status == 'loading') {
    return <div>Loading</div>
  }
  if (status == 'unauthenticated') {
    return (
      <div className="mt-10 pt-10">
        <PageLogin loginCheck={loginCheck} />
      </div>
    )
  }
  return (
    <div>
      {showSplash ? (
        <>
          <Stepper checkerRoute={checkRoute} />
          {/* <StepperOne /> */}
        </>
      ) : (
        <div className="flex h-screen flex-col justify-between font-sans">
          <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
            <Header />
            <main className="mb-auto">{children}</main>
          </SearchProvider>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Wrapper
