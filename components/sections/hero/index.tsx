import React, { FC, ReactElement, useEffect, useState } from 'react'
import { colors } from '../../../styles/theme'
import { H1 } from '../../atomic/H1'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { DefaultFont, Glitch, PixelFont } from '../styled'
import {
  Centered,
  HeadlineVisibility,
  Intro,
  IntroContainer,
  IntroMask,
  IntroPixel,
  IntroRow,
  Video,
} from './styled'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export const Hero: FC = (): JSX.Element => {
  const [openIntro, setOpenIntro] = useState(true)

  const initialPixelsVisibilityValues = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]
  const finalPixelsVisibilityValues = [
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]
  const [pixelsVisibilityState, setPixelsVisibilityState] = useState(
    initialPixelsVisibilityValues
  )
  const [index, setIndex] = useState(0)

  const initialHeadlineText = null
  const [headlineText, setHeadlineText] = useState<ReactElement | null>(
    initialHeadlineText
  )
  const [headlineTextLeft, setHeadlineTextLeft] = useState(false)

  const { scroll } = useLocomotiveScroll()

  useEffect(() => {
    scroll?.stop()
  }, [])

  useEffect(() => {
    let interval = setInterval(
      () => setIndex((i) => (i + 1) % initialPixelsVisibilityValues.length),
      150
    )

    let newState = [...pixelsVisibilityState]
    let item = newState[index]
    item = true
    newState[index] = item

    setPixelsVisibilityState(newState)

    let timeout: NodeJS.Timeout

    if (index > 17) {
      clearInterval(interval)

      setHeadlineText(
        <Glitch isHeadline>
          <DefaultFont data-text="B">B</DefaultFont>
          <PixelFont data-text="e">e</PixelFont>
          <DefaultFont data-text="OnMi">OnMi</DefaultFont>
          <PixelFont>n</PixelFont>
          <DefaultFont data-text="d">d</DefaultFont>
        </Glitch>
      )

      timeout = setTimeout(() => {
        setHeadlineText(
          <Glitch isHeadline>
            <DefaultFont data-text="W">W</DefaultFont>
            <PixelFont data-text="e">e</PixelFont>{' '}
            <DefaultFont data-text="ca">ca</DefaultFont>
            <PixelFont data-text="t">t</PixelFont>
            <DefaultFont data-text="ch your se">ch your se</DefaultFont>
            <PixelFont data-text="n">n</PixelFont>
            <DefaultFont data-text="ses">ses</DefaultFont>
          </Glitch>
        )
        setPixelsVisibilityState(finalPixelsVisibilityValues)
        setHeadlineTextLeft(true)

        timeout = setTimeout(() => {
          setHeadlineText(
            <>
              W<PixelFont>e</PixelFont> ca<PixelFont>t</PixelFont>ch your se
              <PixelFont>n</PixelFont>ses
            </>
          )
          setPixelsVisibilityState(finalPixelsVisibilityValues)
          setHeadlineTextLeft(true)
          setOpenIntro(false)
          scroll?.start()
        }, 500)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [, index])

  return (
    <>
      <FullWidthSection>
        <FullWidthInner>
          <Intro>
            <IntroContainer textLeft={headlineTextLeft}>
              <IntroRow>
                <IntroPixel
                  visible={pixelsVisibilityState[0]}
                  color={colors.white}
                />
                <IntroPixel
                  visible={pixelsVisibilityState[1]}
                  color={colors.white}
                />
                <IntroPixel
                  visible={pixelsVisibilityState[2]}
                  color={colors.white}
                />
                <IntroPixel
                  visible={pixelsVisibilityState[3]}
                  color={colors.white}
                />
                <IntroPixel
                  visible={pixelsVisibilityState[4]}
                  color={colors.white}
                />
              </IntroRow>

              <IntroRow>
                <H1 color={colors.white} blendDifference>
                  {headlineText ? (
                    <>{headlineText}</>
                  ) : (
                    <>
                      <HeadlineVisibility visible={pixelsVisibilityState[7]}>
                        B<PixelFont data-text="e">e</PixelFont>
                      </HeadlineVisibility>
                      <HeadlineVisibility visible={pixelsVisibilityState[5]}>
                        On
                      </HeadlineVisibility>
                      <HeadlineVisibility visible={pixelsVisibilityState[6]}>
                        Mi<PixelFont>n</PixelFont>d
                      </HeadlineVisibility>
                    </>
                  )}
                </H1>
              </IntroRow>

              <IntroRow>
                <IntroPixel
                  visible={pixelsVisibilityState[9]}
                  color={colors.white}
                />
                <IntroPixel
                  visible={pixelsVisibilityState[11]}
                  color={colors.white}
                />
                <IntroPixel
                  visible={pixelsVisibilityState[13]}
                  color={colors.white}
                />
                <IntroPixel
                  visible={pixelsVisibilityState[15]}
                  color={colors.white}
                />
                <IntroPixel
                  visible={pixelsVisibilityState[17]}
                  color={colors.white}
                />
              </IntroRow>

              <IntroRow>
                <IntroPixel
                  visible={
                    !pixelsVisibilityState[9] && pixelsVisibilityState[8]
                  }
                  color={colors.white}
                />
                <IntroPixel
                  visible={
                    !pixelsVisibilityState[11] && pixelsVisibilityState[10]
                  }
                  color={colors.white}
                />
                <IntroPixel
                  visible={
                    !pixelsVisibilityState[13] && pixelsVisibilityState[12]
                  }
                  color={colors.white}
                />
                <IntroPixel
                  visible={
                    !pixelsVisibilityState[15] && pixelsVisibilityState[14]
                  }
                  color={colors.white}
                />
                <IntroPixel
                  visible={
                    !pixelsVisibilityState[17] && pixelsVisibilityState[16]
                  }
                  color={colors.white}
                />
              </IntroRow>
            </IntroContainer>

            <IntroMask open={openIntro} />
          </Intro>
        </FullWidthInner>
      </FullWidthSection>

      <FullWidthSection>
        <FullWidthInner fullWidth noPadding>
          <Centered>
            <Video autoPlay muted loop>
              <source src="/video/hero.mp4" type="video/mp4" />
            </Video>
          </Centered>
        </FullWidthInner>
      </FullWidthSection>
    </>
  )
}
