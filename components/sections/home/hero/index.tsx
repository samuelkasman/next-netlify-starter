import React, { FC, useEffect } from 'react'
import { colors } from '../../../../styles/theme'
import { FullWidthSection, FullWidthInner } from '../../../layout/pageLayout'
import { DefaultFont, PixelFont } from '../../styled'
import {
  VideoParallax,
  HeadlineVisibility,
  Intro,
  IntroContainer,
  IntroMask,
  IntroPixel,
  IntroRow,
  IntroHeadline,
  IntroContainerWrapper,
  ChangingText,
  PlayButtonIconStyled,
  VideoText,
  VideoHeadline,
} from './styled'
import { CustomCursorWrapper } from '../projects/styled'
import { useHero } from './useHero'
import { useCursor } from './useCursor'

export const Hero: FC = (): JSX.Element => {
  const {
    scroll,
    openIntro,
    setOpenIntro,
    initialPixelsVisibilityValues,
    finalPixelsVisibilityValues,
    pixelsVisibilityState,
    setPixelsVisibilityState,
    index,
    setIndex,
    headlineText,
    setHeadlineText,
    headlineTextLeft,
    setHeadlineTextLeft,
  } = useHero()

  const { secondaryCursorRef, isSmall } = useCursor()

  useEffect(() => {
    scroll?.stop()
  }, [scroll])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let interval: NodeJS.Timer

    interval = setInterval(
      () => setIndex((i) => (i + 1) % initialPixelsVisibilityValues.length),
      100
    )

    // changing text
    if (index === 4) {
      setHeadlineText(<ChangingText>Idea</ChangingText>)
    }
    if (index === 8) {
      setHeadlineText(<ChangingText>Story</ChangingText>)
    }
    if (index === 12) {
      setHeadlineText(<ChangingText>People</ChangingText>)
    }
    if (index === 16) {
      setHeadlineText(<ChangingText>Emotion</ChangingText>)
    }
    if (index === 19) {
      setHeadlineText(null)
    }

    // Be blinking
    let newState = [...pixelsVisibilityState]
    let item = newState[index]
    item = true
    newState[index] = item
    if (index === 32) {
      newState[34] = true
    }
    if (index === 33) {
      newState[34] = false
    }
    if (index === 34) {
      newState[34] = true
    }
    if (index === 35) {
      newState[34] = false
    }
    if (index === 36) {
      newState[34] = true
    }
    if (index === 37) {
      newState[34] = false
    }
    setPixelsVisibilityState(newState)

    // stop interval, roll animations
    if (index > 38) {
      clearInterval(interval)

      // hold BeOnMind for second, then set text to We catch...
      timeout = setTimeout(() => {
        setHeadlineText(
          <>
            <DefaultFont data-text="W">W</DefaultFont>
            <PixelFont data-text="e">e</PixelFont>{' '}
            <DefaultFont data-text="ca">ca</DefaultFont>
            <PixelFont data-text="t">t</PixelFont>
            <DefaultFont data-text="ch your se">ch your se</DefaultFont>
            <PixelFont data-text="n">n</PixelFont>
            <DefaultFont data-text="ses">ses</DefaultFont>
          </>
        )
        setPixelsVisibilityState(finalPixelsVisibilityValues)
        setHeadlineTextLeft(true)

        // rollout white overlay and allow scrolling
        timeout = setTimeout(() => {
          setOpenIntro(false)
          scroll?.start()
        }, 250)
      }, 250)
    }

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [index])

  return (
    <>
      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner>
          <Intro>
            <IntroContainerWrapper textLeft={headlineTextLeft}>
              <IntroContainer textUp={!openIntro}>
                <IntroMask open={openIntro} />

                <IntroRow>
                  <IntroPixel
                    visible={pixelsVisibilityState[4]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[8]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[12]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[16]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[20]}
                    color={colors.white}
                  />
                </IntroRow>

                <IntroRow>
                  <IntroHeadline color={colors.white}>
                    {headlineText ? (
                      <>{headlineText}</>
                    ) : (
                      <>
                        <HeadlineVisibility
                          visible={
                            pixelsVisibilityState[28] &&
                            !pixelsVisibilityState[34]
                          }
                        >
                          B<PixelFont data-text="e">e</PixelFont>
                        </HeadlineVisibility>
                        <HeadlineVisibility visible={pixelsVisibilityState[20]}>
                          On
                        </HeadlineVisibility>
                        <HeadlineVisibility visible={pixelsVisibilityState[24]}>
                          Mi<PixelFont data-text="n">n</PixelFont>d
                        </HeadlineVisibility>
                      </>
                    )}
                  </IntroHeadline>
                </IntroRow>

                <IntroRow noHeight>
                  <IntroHeadline color={colors.transparent}>
                    BeOnMind
                  </IntroHeadline>
                </IntroRow>

                <IntroRow>
                  <IntroPixel
                    visible={pixelsVisibilityState[24]} // 20
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[26]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[28]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[30]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[32]}
                    color={colors.white}
                  />
                </IntroRow>

                <IntroRow>
                  <IntroPixel
                    visible={
                      !pixelsVisibilityState[24] && pixelsVisibilityState[23]
                    }
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={
                      !pixelsVisibilityState[26] && pixelsVisibilityState[25]
                    }
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={
                      !pixelsVisibilityState[28] && pixelsVisibilityState[27]
                    }
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={
                      !pixelsVisibilityState[30] && pixelsVisibilityState[29]
                    }
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={
                      !pixelsVisibilityState[32] && pixelsVisibilityState[31]
                    }
                    color={colors.white}
                  />
                </IntroRow>
              </IntroContainer>
            </IntroContainerWrapper>
          </Intro>
        </FullWidthInner>
      </FullWidthSection>

      {/* <Scrambler startText="BeOnMind" endText="We catch your senses" />
      <Scrambler
        startText="BeOnMind"
        endText="We catch your senses"
        withSizeChange
      /> */}

      <VideoParallax id="cursorContainerVideo">
        <CustomCursorWrapper ref={secondaryCursorRef} isSmall={isSmall}>
          <PlayButtonIconStyled />
        </CustomCursorWrapper>

        <VideoText>
          <VideoHeadline color={colors.white} textAlign="center">
            Play
          </VideoHeadline>
        </VideoText>
      </VideoParallax>
    </>
  )
}
