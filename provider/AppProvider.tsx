'use client'
import React, { createContext, useContext, useState } from 'react'
import initHeaderNavLinks from '@/data/headerNavLinks'
export type HeaderNavLinks = {
  href: string;
  title: string;
}[]

interface AppContextProps {
  hasTicket: boolean
  setHasTicket: React.Dispatch<React.SetStateAction<boolean>>
  login: boolean
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
  showSplash: boolean
  setShowSplash: React.Dispatch<React.SetStateAction<boolean>>
  isForget: boolean
  setIsForget: React.Dispatch<React.SetStateAction<boolean>>
  isRestForm: boolean
  setIsRestForm: React.Dispatch<React.SetStateAction<boolean>>
  authToken: string
  setAuthToken: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  headerNavLinks: HeaderNavLinks
  setHeaderNavLinks: React.Dispatch<React.SetStateAction<HeaderNavLinks>>
  invited: boolean
  setInvited: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<AppContextProps>({} as AppContextProps)

export const AppProvider = ({ children }) => {
  const [hasTicket, setHasTicket] = useState(false)
  const [login, setLogin] = useState<boolean>(false)
  const [showSplash, setShowSplash] = useState(true)
  const [isForget, setIsForget] = useState<boolean>(false)
  const [isRestForm, setIsRestForm] = useState<boolean>(false)
  const [authToken, setAuthToken] = useState('')
  const [email, setEmail] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [headerNavLinks, setHeaderNavLinks] = useState(initHeaderNavLinks)
  const [invited, setInvited] = useState(false)

  return (
    <Context.Provider
      value={{
        hasTicket,
        setHasTicket,
        login,
        setLogin,
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
        currentStep,
        setCurrentStep,
        headerNavLinks,
        setHeaderNavLinks,
        invited,
        setInvited,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useAppProvider = () => useContext(Context)
