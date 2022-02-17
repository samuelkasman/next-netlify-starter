import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'
import { Navigation } from '../components/layout/navigation'
import { Footer } from '../components/sections/footer'
import {
  FullWidthInner,
  FullWidthSection,
  PageLayout,
} from '../components/layout/pageLayout'
import { Hero } from '../components/sections/hero'
import { Boom } from '../components/sections/boom'
import { Work } from '../components/sections/work'
import { Projects } from '../components/sections/projects'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Founders } from '../components/sections/founders'
import { Testimonials } from '../components/sections/testimonials'
import { MediaQueryJS } from '../components/layout/MediaQueryJS'
import styled from 'styled-components'
import { useState } from 'react'
import { Modals } from '../components/layout/modal/modals'

export const Centered = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 123vh;
  width: 100%;
  overflow: hidden;
  margin: 99vh 0 0 0;
`

export const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  z-index: -1000;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
`

const VideoBackground = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: -1;
`

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  const [filmModalVisible, setFilmModalVisible] = useState(false)
  const [advertisementModalVisible, setAdvertisementModalVisible] =
    useState(false)

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <VideoBackground>
          <FullWidthSection>
            <FullWidthInner
              fullWidth
              noPadding
              data-scroll-section
              data-scroll-section-inview
            >
              <Centered data-scroll data-scroll-speed="-4">
                <Video autoPlay muted loop>
                  <source src="/video/hero.mp4" type="video/mp4" />
                </Video>
              </Centered>
            </FullWidthInner>
          </FullWidthSection>
        </VideoBackground>

        <Navigation />

        <MediaQueryJS>
          {(isMobileScreen: boolean) => (
            <div data-scroll-section={!isMobileScreen}>
              <Hero />
              <Boom />
              <Work />
              <Projects
                filmModalVisible={filmModalVisible}
                setFilmModalVisible={setFilmModalVisible}
                advertisementModalVisible={advertisementModalVisible}
                setAdvertisementModalVisible={setAdvertisementModalVisible}
              />
              <Testimonials />
              <Founders />
              <Footer />
            </div>
          )}
        </MediaQueryJS>

        <Modals
          filmModalVisible={filmModalVisible}
          setFilmModalVisible={setFilmModalVisible}
          advertisementModalVisible={advertisementModalVisible}
          setAdvertisementModalVisible={setAdvertisementModalVisible}
        />
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
