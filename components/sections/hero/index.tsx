import React, { FC, useEffect } from 'react'
import { colors } from '../../../styles/theme'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { DefaultFont, PixelFont } from '../styled'
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
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let interval: NodeJS.Timer

    interval = setInterval(
      () => setIndex((i) => (i + 1) % initialPixelsVisibilityValues.length),
      120
    )

    let newState = [...pixelsVisibilityState]
    let item = newState[index]
    item = true
    newState[index] = item

    if (index === 21) {
      newState[26] = false
    }
    if (index === 22) {
      newState[26] = true
    }
    if (index === 24) {
      newState[26] = false
    }
    if (index === 25) {
      newState[26] = true
    }
    if (index === 26) {
      newState[26] = false
    }
    if (index === 27) {
      newState[26] = true
    }

    setPixelsVisibilityState(newState)

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

    if (index > 28) {
      clearInterval(interval)

      setHeadlineText(
        <>
          <DefaultFont data-text="B">B</DefaultFont>
          <PixelFont data-text="e">e</PixelFont>
          <DefaultFont data-text="OnMi">OnMi</DefaultFont>
          <PixelFont data-text="n">n</PixelFont>
          <DefaultFont data-text="d">d</DefaultFont>
        </>
      )

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
          // <PixelFont>We catch your senses</PixelFont>
        )
        setPixelsVisibilityState(finalPixelsVisibilityValues)
        setHeadlineTextLeft(true)

        timeout = setTimeout(() => {
          setHeadlineTextLeft(true)
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
                    visible={pixelsVisibilityState[6]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[8]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[10]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[12]}
                    color={colors.white}
                  />
                </IntroRow>

                <IntroRow>
                  <IntroHeadline color={colors.white}>
                    {headlineText ? (
                      <>{headlineText}</>
                    ) : (
                      <>
                        <HeadlineVisibility visible={pixelsVisibilityState[26]}>
                          B<PixelFont data-text="e">e</PixelFont>
                        </HeadlineVisibility>
                        <HeadlineVisibility visible={pixelsVisibilityState[20]}>
                          On
                        </HeadlineVisibility>
                        <HeadlineVisibility visible={pixelsVisibilityState[23]}>
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
                    visible={pixelsVisibilityState[20]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[22]}
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={pixelsVisibilityState[24]}
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
                </IntroRow>

                <IntroRow>
                  <IntroPixel
                    visible={
                      !pixelsVisibilityState[20] && pixelsVisibilityState[19]
                    }
                    color={colors.white}
                  />
                  <IntroPixel
                    visible={
                      !pixelsVisibilityState[22] && pixelsVisibilityState[21]
                    }
                    color={colors.white}
                  />
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
                </IntroRow>
              </IntroContainer>
            </IntroContainerWrapper>
          </Intro>
        </FullWidthInner>
      </FullWidthSection>

      <VideoParallax id="cursorContainerVideo">
        {/* <VideoText>
          <IntroHeadline color={colors.white}>Play</IntroHeadline>
        </VideoText> */}

        <CustomCursorWrapper ref={secondaryCursorRef} isSmall={isSmall}>
          <PlayButtonIconStyled />
        </CustomCursorWrapper>
      </VideoParallax>
    </>
  )
}
