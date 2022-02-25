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
} from './styled'
import { ArrowTopRightIcon } from '../../atomic/icons/ArrowTopRightIcon'
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
    let interval = setInterval(
      () => setIndex((i) => (i + 1) % initialPixelsVisibilityValues.length),
      120
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
        <>
          <DefaultFont data-text="B">B</DefaultFont>
          <PixelFont data-text="e">e</PixelFont>
          <DefaultFont data-text="OnMi">OnMi</DefaultFont>
          <PixelFont>n</PixelFont>
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
        )
        setPixelsVisibilityState(finalPixelsVisibilityValues)
        setHeadlineTextLeft(true)

        timeout = setTimeout(() => {
          setHeadlineText(
            <>
              {/* <HeadlineVisibility visible={pixelsVisibilityState[18]}> */}W
              <PixelFont>e</PixelFont> {/* </HeadlineVisibility>{' '} */}
              {/* <HeadlineVisibility visible={pixelsVisibilityState[19]}> */}
              ca<PixelFont>t</PixelFont>ch {/* </HeadlineVisibility>{' '} */}
              {/* <HeadlineVisibility visible={pixelsVisibilityState[20]}> */}
              your {/* </HeadlineVisibility>{' '} */}
              {/* <HeadlineVisibility visible={pixelsVisibilityState[21]}> */}
              se<PixelFont>n</PixelFont>ses
              {/* </HeadlineVisibility> */}
            </>
          )
          setPixelsVisibilityState(finalPixelsVisibilityValues)
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
  }, [, index])

  return (
    <>
      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner>
          <Intro>
            <IntroContainer textLeft={headlineTextLeft} textUp={openIntro}>
              <IntroMask open={openIntro} />

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
                <IntroHeadline color={colors.white}>
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
                </IntroHeadline>
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
          </Intro>
        </FullWidthInner>
      </FullWidthSection>

      <VideoParallax id="cursorContainerVideo">
        <CustomCursorWrapper ref={secondaryCursorRef} isSmall={isSmall}>
          <ArrowTopRightIcon />
        </CustomCursorWrapper>
      </VideoParallax>
    </>
  )
}
