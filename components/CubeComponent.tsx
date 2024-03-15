/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
'use client'
import { CUBE_URL } from 'config-apps'
import { useTheme } from 'next-themes'
import { useAppProvider } from 'provider/AppProvider'
import React, { useEffect, useRef, useState } from 'react'

const CubeComponent = () => {
  const frameRef = useRef(null)
  const size = useWindowSize()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const {
    invited,
  } = useAppProvider()

  const [, setHeight] = React.useState('0px')
  const onLoad = () => {
    setHeight(size.height + 'px')
  }
  useEffect(() => {
    const daIframe: any = document.getElementById('da-iframe')
    // const daIframe: HTMLIFrameElement = document.getElementById('da-iframe')

    daIframe.onload = () => {
      const iFrameWindow = daIframe?.contentWindow
      iFrameWindow.postMessage({ message: 'getAppData', value: theme }, '*')
    }
    console.log('change theme is >>>', theme)
  }, [theme])

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <iframe
        id="da-iframe"
        src={CUBE_URL + (!invited ? "/products/family" : "/customer/sign-in")}
        title="this is cube chart"
        scrolling="yes"
        frameBorder={0}
        allowFullScreen={true}
        allow="autoplay; fullscreen"
        width="100%"
        ref={frameRef}
        height={size.height}
        onLoad={onLoad}
      />
    </div>
  )
}

export default CubeComponent

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}
