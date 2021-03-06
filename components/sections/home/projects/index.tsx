import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'
import { colors } from '../../../../styles/theme'
import { ArrowTopRightIcon } from '../../../atomic/icons/ArrowTopRightIcon'
import { Typography, TypographyType } from '../../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../../layout/pageLayout'
import { PixelFont } from '../../styled'
import {
  Container,
  AdPanel,
  FilmPanel,
  PanelTitle,
  PlusIconStyled,
  PanelModalToggle,
  CustomCursorWrapper,
} from './styled'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

type Props = {
  filmModalVisible: boolean
  advertisementModalVisible: boolean
  setFilmModalVisible: Dispatch<SetStateAction<boolean>>
  setAdvertisementModalVisible: Dispatch<SetStateAction<boolean>>
}

export const Projects: FC<Props> = ({
  filmModalVisible,
  advertisementModalVisible,
  setFilmModalVisible,
  setAdvertisementModalVisible,
}): JSX.Element => {
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

  const { scroll } = useLocomotiveScroll()

  useEffect(() => {
    scroll?.stop()

    if (!filmModalVisible && !advertisementModalVisible) {
      scroll?.start()
    }
  }, [filmModalVisible, advertisementModalVisible])

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
  )
}
