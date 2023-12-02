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

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

const Wrapper = ({ children }: Props) => {
  const [showSplash, setShowSplash] = useState(true)
  const [isRoute, setIsRoute] = useState<boolean>(true)
  const { data: session, status } = useSession()
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
      if (status == 'authenticated') {
        const res = await axios.get('http://localhost:3000/api/v1/users', { withCredentials: true })
        console.log(res.data, 'res.data')
      }
    })()
  }, [status])
  const loginCheck = async () => {
    await signIn('zammad', {
      redirect: false,
      callbackUrl: 'http://localhost:8080/blog',
    })
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
