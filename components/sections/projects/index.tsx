import React, { FC, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { colors } from '../../../styles/theme'
import { ArrowTopRightIcon } from '../../atomic/icons/ArrowTopRightIcon'
import { AudiLogo } from '../../atomic/logos/AudiLogo'
import { BratislavaLogo } from '../../atomic/logos/BratislavaLogo'
import { IIHFLogo } from '../../atomic/logos/IIHFLogo'
import { RtvsLogo } from '../../atomic/logos/RtvsLogo'
import { TescoLogo } from '../../atomic/logos/TescoLogo'
import { VWLogo } from '../../atomic/logos/VWLogo'
import { PixelFont, Typography, TypographyType } from '../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { Modals } from './modals'
import {
  Container,
  AdPanel,
  FilmPanel,
  PanelTitle,
  PlusIconStyled,
  LogosContainer,
  AllProjectsWrapper,
  PanelModalToggle,
  CustomCursorWrapper,
} from './styled'

export const Projects: FC = (): JSX.Element => {
  const THRESHOLD_VALLUE = 0.9

  const { ref, inView } = useInView({
    threshold: THRESHOLD_VALLUE,
  })

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: THRESHOLD_VALLUE,
  })

  const [filmModalVisible, setFilmModalVisible] = useState(false)
  const [advertisementModalVisible, setAdvertisementModalVisible] =
    useState(false)

  const secondaryCursorRef = useRef(null)
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  })

  useEffect(() => {
    document
      .getElementById('cursorContainer')
      ?.addEventListener('mousemove', (event) => {
        // @ts-ignore
        const rect = event?.target?.getBoundingClientRect()

        const { clientX, clientY } = event

        positionRef.current.mouseX =
          // @ts-ignore
          clientX - 72 - secondaryCursorRef.current.clientWidth / 2

        positionRef.current.mouseY = clientY - 72 - rect.top
      })
  }, [])

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse)

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.destinationX += distanceX
          positionRef.current.destinationY += distanceY
        }
      }

      // @ts-ignore
      secondaryCursorRef!.current!.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
    }

    followMouse()
  }, [])

  return (
    <>
      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner fullWidth noPadding>
          <Container id="cursorContainer">
            <CustomCursorWrapper ref={secondaryCursorRef}>
              <ArrowTopRightIcon />
            </CustomCursorWrapper>

            <FilmPanel>
              <PanelTitle color={colors.white}>
                Fil<PixelFont>m</PixelFont>
              </PanelTitle>

              <PanelModalToggle onClick={() => setFilmModalVisible(true)}>
                <PlusIconStyled />

                <Typography
                  type={TypographyType.P1}
                  color={colors.white}
                  inlineBlock
                >
                  More about film
                </Typography>
              </PanelModalToggle>
            </FilmPanel>

            <AdPanel>
              <PanelTitle color={colors.white}>
                Adve<PixelFont>rt</PixelFont>isemen<PixelFont>t</PixelFont>
              </PanelTitle>

              <PanelModalToggle
                onClick={() => setAdvertisementModalVisible(true)}
              >
                <PlusIconStyled />

                <Typography
                  type={TypographyType.P1}
                  color={colors.white}
                  inlineBlock
                >
                  More about advertisement
                </Typography>
              </PanelModalToggle>
            </AdPanel>
          </Container>
        </FullWidthInner>
      </FullWidthSection>

      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner>
          <LogosContainer ref={ref} inView={inView}>
            <RtvsLogo />
            <BratislavaLogo />
            <VWLogo />
            <TescoLogo />
            <AudiLogo />
            <IIHFLogo />
          </LogosContainer>

          <AllProjectsWrapper ref={ref2} inView={inView2}>
            <PlusIconStyled />

            <Typography
              type={TypographyType.P1}
              color={colors.white}
              inlineBlock
            >
              All projects
            </Typography>
          </AllProjectsWrapper>
        </FullWidthInner>
      </FullWidthSection>

      <Modals
        filmModalVisible={filmModalVisible}
        setFilmModalVisible={setFilmModalVisible}
        advertisementModalVisible={advertisementModalVisible}
        setAdvertisementModalVisible={setAdvertisementModalVisible}
      />
    </>
  )
}
