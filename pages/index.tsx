import Head from 'next/head'
import type { NextPage } from 'next'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>BeOnMind yeah boiii!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <img src={'/gif/gif.1'} alt="logogif" />
      </main>

      <Footer />
    </div>
  )
}

export default Home
