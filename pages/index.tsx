import Head from 'next/head'
import type { NextPage } from 'next'
import { Navigation } from '../components/layout/navigation'
import { Footer } from '../components/sections/footer'
import { PageLayout } from '../components/layout/pageLayout'
import { Hero } from '../components/sections/hero'
import { Boom } from '../components/sections/boom'
import { Work } from '../components/sections/work'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BeOnMind yeah boiii!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <Navigation />

        <Hero />
        <Boom />
        <Work />

        <Footer />
      </PageLayout>
    </>
  )
}

export default Home
