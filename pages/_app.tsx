import { AppProps } from 'next/app'
import { GlobalStyles } from '../styles'
import { appWithTranslation } from 'next-i18next'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

const Application = ({ Component, pageProps }: AppProps): JSX.Element => {
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
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
