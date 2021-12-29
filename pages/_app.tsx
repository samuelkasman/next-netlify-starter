import { AppProps } from 'next/app'
import { GlobalStyles } from '../styles'
import { appWithTranslation } from 'next-i18next'

const Application = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(Application)
