import React, { FC, useEffect, useState } from 'react'
import ScrollLock from 'react-scrolllock'
import { colors } from '../../../styles/theme'
import { H1 } from '../../atomic/H1'
import { BeOnMindLogo } from '../../atomic/logos/BeOnMindLogo'
import { TypographyType, Typography } from '../../atomic/Typography'
import { MenuLink } from '../../sections/footer/styled'
import { Glitch, PixelFont } from '../../sections/styled'
import { Burger } from './Burger'
import {
  HeaderInner,
  HeaderStyled,
  Intro,
  IntroContainer,
  IntroPixel,
  IntroRow,
  LinkWrapper,
  MenuItem,
  MenuList,
  Overlay,
  Text,
} from './styled'

export const Navigation: FC = (): JSX.Element => {
  const initialVisibilityValues = [
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

  const finalVisibilityValues = [
    true,
    false,
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

  const initialHeadlineText = (
    <>
      B<PixelFont data-text="e">e</PixelFont>
      OnMi
      <PixelFont>n</PixelFont>d
    </>
  )

  const [openIntro, setOpenIntro] = useState(true)
  const [open, setOpen] = useState(false)
  const [visibilityState, setVisibilityState] = useState(
    initialVisibilityValues
  )
  const [headlineText, setHeadlineText] = useState(initialHeadlineText)
  const [headlineTextLeft, setHeadlineTextLeft] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let interval = setInterval(
      () => setIndex((i) => (i + 1) % initialVisibilityValues.length),
      150
    )

    let newState = [...visibilityState]
    let item = newState[index]
    item = true
    newState[index] = item

    setVisibilityState(newState)

    let timeout: NodeJS.Timeout

    if (index > 14) {
      clearInterval(interval)

      setHeadlineText(
        <Glitch isHeadline>
          <span>B</span>
          <PixelFont data-text="e">
            <span>e</span>
          </PixelFont>
          <span>OnMi</span>
          <PixelFont>n</PixelFont>
          <span>d</span>
        </Glitch>
      )

      timeout = setTimeout(() => {
        setHeadlineText(
          <Glitch isHeadline>
            <span>W</span>
            <PixelFont>e</PixelFont> <span>ca</span>
            <PixelFont>t</PixelFont>
            <span>ch your se</span>
            <PixelFont>n</PixelFont>
            <span>ses</span>
          </Glitch>
        )
        setVisibilityState(finalVisibilityValues)
        setHeadlineTextLeft(true)

        timeout = setTimeout(() => {
          setHeadlineText(
            <>
              W<PixelFont>e</PixelFont> ca<PixelFont>t</PixelFont>ch your se
              <PixelFont>n</PixelFont>ses
            </>
          )
          setVisibilityState(finalVisibilityValues)
          setHeadlineTextLeft(true)
          setOpenIntro(false)
        }, 500)
      }, 500)
    }

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [, index])

  // useEffect(() => {
  //   let timeout = setTimeout(() => setOpenIntro(false), 5000)

  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, [])

  return (
    <HeaderStyled>
      <HeaderInner>
        <LinkWrapper>
          <Text>
            <BeOnMindLogo color={open ? colors.black : colors.white} />
          </Text>
        </LinkWrapper>

        <MenuList open={open}>
          <MenuItem>
            <Typography type={TypographyType.P1} color={colors.black}>
              s<PixelFont>t</PixelFont>udio@beo<PixelFont>n</PixelFont>mind.com
            </Typography>
          </MenuItem>

          <MenuItem>
            <MenuLink type={TypographyType.P1} color={colors.black}>
              Ho<PixelFont>m</PixelFont>e
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink type={TypographyType.P1} color={colors.black}>
              Wor<PixelFont>k</PixelFont>
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink type={TypographyType.P1} color={colors.black}>
              Par<PixelFont>t</PixelFont>ne<PixelFont>r</PixelFont>
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink type={TypographyType.P1} color={colors.black}>
              Con<PixelFont>t</PixelFont>act
            </MenuLink>
          </MenuItem>
        </MenuList>

        <Burger open={open} setOpen={setOpen} />
      </HeaderInner>

      <Overlay open={open} />

      <Intro open={openIntro} justifyStart={headlineTextLeft}>
        <IntroContainer>
          <IntroRow>
            <IntroPixel visible={visibilityState[0]} />
            <IntroPixel visible={visibilityState[1]} />
            <IntroPixel visible={visibilityState[2]} />
            <IntroPixel visible={visibilityState[3]} />
            <IntroPixel visible={visibilityState[4]} />
          </IntroRow>

          <IntroRow>
            <H1>{headlineText}</H1>
          </IntroRow>

          <IntroRow>
            <IntroPixel visible={visibilityState[6]} />
            <IntroPixel visible={visibilityState[8]} />
            <IntroPixel visible={visibilityState[10]} />
            <IntroPixel visible={visibilityState[12]} />
            <IntroPixel visible={visibilityState[14]} />
          </IntroRow>

          <IntroRow>
            <IntroPixel visible={!visibilityState[6] && visibilityState[5]} />
            <IntroPixel visible={!visibilityState[8] && visibilityState[7]} />
            <IntroPixel visible={!visibilityState[10] && visibilityState[9]} />
            <IntroPixel visible={!visibilityState[12] && visibilityState[11]} />
            <IntroPixel visible={!visibilityState[14] && visibilityState[13]} />
          </IntroRow>
        </IntroContainer>
      </Intro>

      {(open || openIntro) && <ScrollLock />}
    </HeaderStyled>
  )
}
