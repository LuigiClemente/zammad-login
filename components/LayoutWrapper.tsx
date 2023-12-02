'use client'
import siteMetadata from '@/data/siteMetadata'
import { Inter } from 'next/font/google'

import { ReactNode, useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'

import Stepper from '@/components/Stepper'
import PageLogin from '@/components/PageLogin'
import { SearchConfig, SearchProvider } from 'pliny/search'
import { useRouter } from 'next/navigation'
interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

const Wrapper = ({ children }: Props) => {
  const [showSplash, setShowSplash] = useState(true)
  const [login, setLogin] = useState<boolean>(false)
  const [isRoute, setIsRoute] = useState<boolean>(true)
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
  const loginCheck = () => {
    setLogin(true)
  }
  if (login === null) {
    return <div>Loading</div>
  }
  if (!login) {
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
