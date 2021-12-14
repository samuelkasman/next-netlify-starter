import { AppProps } from 'next/app'
import { GlobalStyles } from '../styles'

const Application = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}

export default Application
