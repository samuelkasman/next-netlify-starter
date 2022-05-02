import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'
import { Navigation } from '../components/layout/navigation'
import { Footer } from '../components/layout/footer'
import { PageLayout } from '../components/layout/pageLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { Hero } from '../components/sections/contact/hero'
import { MediaQueryJS } from '../components/layout/MediaQueryJS'
import { Address } from '../components/sections/contact/address'
import { StickyText } from '../components/sections/common/stickyText'
import { BigEmail } from '../components/sections/common/bigEmail'

const Contact: NextPage = () => {
  const { t } = useTranslation('common')

  const [navMixBlendMode, setNavMixBlendMode] = useState(false)

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <Navigation mixBlendMode={navMixBlendMode} />

        <MediaQueryJS>
          {(isMobileScreen: boolean) => (
            <div data-scroll-section={!isMobileScreen}>
              <Hero />

              <Address />

              <StickyText setNavMixBlendMode={setNavMixBlendMode} />

              <BigEmail />

              <Footer />
            </div>
          )}
        </MediaQueryJS>
      </PageLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
})

export default Contact
