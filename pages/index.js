import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BeOnMind yeah boiii!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src={'/gif/gif.1'} alt='logogif' />
      </main>

      <Footer />
    </div>
  )
}
