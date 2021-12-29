import Document, {
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'

export default class MyDocument extends Document<DocumentProps> {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Lausanne-300.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Lausanne-500.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/NeuePixelGrotesk_Regular.woff"
            as="font"
            crossOrigin=""
          />
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link href="/fonts/faces.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
