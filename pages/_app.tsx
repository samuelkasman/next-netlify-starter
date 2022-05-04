import { AppProps } from 'next/app'
import { GlobalStyles } from '../styles'
import { appWithTranslation } from 'next-i18next'
import { useEffect, useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Router } from 'next/router'

const Application = ({ Component, pageProps }: AppProps): JSX.Element => {
  const containerRef = useRef(null)

  useEffect(() => {
    const scrollToTop = () => window.scrollTo(0, 0)
    Router.events.on('routeChangeComplete', scrollToTop)

    return () => {
      Router.events.off('routeChangeComplete', scrollToTop)
    }
  }, [])

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.2,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //...all the dependencies you want to watch to update the scroll
        ]
      }
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <GlobalStyles />

        <Component {...pageProps} />
      </div>
    </LocomotiveScrollProvider>
  )
}

export default appWithTranslation(Application)
