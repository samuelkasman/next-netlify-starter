import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'
import { Navigation } from '../components/layout/navigation'
import { Footer } from '../components/sections/footer'
import { PageLayout } from '../components/layout/pageLayout'
import { Hero } from '../components/sections/hero'
import { Boom } from '../components/sections/boom'
import { Work } from '../components/sections/work'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Home: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
})

export default Home
