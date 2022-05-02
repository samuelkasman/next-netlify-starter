import React, { FC, useEffect, useState } from 'react'
import ScrollLock from 'react-scrolllock'
import { colors } from '../../../styles/theme'
import { BeOnMindLogo } from '../../atomic/logos/BeOnMindLogo'
import { TypographyType, Typography } from '../../atomic/Typography'
import { AddressP } from '../footer/styled'
import { PixelFont } from '../../sections/styled'

import Link from 'next/link'
import {
  HeaderInner,
  HeaderStyled,
  Info,
  InfoColumn,
  LinkWrapper,
  MenuContainer,
  MenuItem,
  MenuList,
  MenuWrapper,
  Overlay,
  Text,
} from './styled'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { FullWidthInner, FullWidthSection } from '../pageLayout'

type NavigationProps = {
  mixBlendMode?: boolean
  withTimeout?: boolean
}

export const Navigation: FC<NavigationProps> = ({
  mixBlendMode,
  withTimeout = false,
}): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [wasOpen, setWasOpen] = useState(false)
  const [visible, setVisible] = useState(withTimeout ? false : true)

  const { scroll } = useLocomotiveScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  const [allowMixBlendMode, setAllowMixBlendMode] = useState(
    mixBlendMode || false
  )

  useEffect(() => {
    if (withTimeout) {
      const timeout = setTimeout(() => {
        setVisible(true)
      }, 5500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [])

  useEffect(() => {
    scroll?.on('scroll', (args: { scroll: { y: number } }) => {
      if (args.scroll.y > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }, [scroll])

  useEffect(() => {
    if (open) {
      scroll?.stop()
      setWasOpen(true)
    }
    if (!open) {
      scroll?.start()
      const timeout = setTimeout(() => {
        setWasOpen(false)
      }, 1000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [open])

  useEffect(() => {
    if (open || !mixBlendMode) {
      setAllowMixBlendMode(false)
    }

    if (mixBlendMode && !open && !wasOpen) {
      setAllowMixBlendMode(true)
    }

    if (mixBlendMode && !open && wasOpen) {
      const timeout = setTimeout(() => {
        setAllowMixBlendMode(true)
      }, 800)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [open, mixBlendMode])

  return (
    <>
      <HeaderStyled
        visible={visible}
        isScrolled={isScrolled}
        mixBlendMode={allowMixBlendMode}
      >
        <HeaderInner>
          <LinkWrapper>
            <Text>
              <Link href="/">
                <a>
                  <BeOnMindLogo color={open ? colors.black : colors.white} />
                </a>
              </Link>
            </Text>
          </LinkWrapper>

          <Link href="/contact">
            <a>
              <Typography
                type={TypographyType.P1}
                color={colors.white}
                inlineBlock
              >
                Contact
              </Typography>
            </a>
          </Link>

          <MenuContainer open={open}>
            <FullWidthSection>
              <FullWidthInner>
                <MenuWrapper>
                  <InfoColumn open={open}>
                    <div>
                      <Typography
                        type={TypographyType.H2}
                        color={colors.black}
                        inlineBlock
                      >
                        s<PixelFont>t</PixelFont>udio@beo
                        <PixelFont>n</PixelFont>
                        mind.com
                      </Typography>
                    </div>

                    <Info>
                      <Typography
                        type={TypographyType.P1}
                        color={colors.black}
                        inlineBlock
                      >
                        <AddressP black>Where you find us</AddressP>
                        <br />
                        <AddressP>BeOnMind s.r.o.</AddressP>
                        <AddressP>Hradné údolie 9/a,</AddressP>
                        <AddressP>811 01 Bratislava,</AddressP>
                        <AddressP>Slovak Republic</AddressP>
                      </Typography>
                    </Info>
                  </InfoColumn>

                  <MenuList open={open}>
                    <MenuItem>
                      <Typography type={TypographyType.H2} color={colors.black}>
                        Ho<PixelFont>m</PixelFont>e
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <Typography type={TypographyType.H2} color={colors.black}>
                        Wor<PixelFont>k</PixelFont>
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <Typography type={TypographyType.H2} color={colors.black}>
                        Par<PixelFont>t</PixelFont>ne<PixelFont>r</PixelFont>
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <Typography type={TypographyType.H2} color={colors.black}>
                        Con<PixelFont>t</PixelFont>act
                      </Typography>
                    </MenuItem>
                  </MenuList>
                </MenuWrapper>
              </FullWidthInner>
            </FullWidthSection>
          </MenuContainer>

          {/* <Burger open={open} setOpen={setOpen} /> */}
        </HeaderInner>

        <Overlay open={open} />

        {open && <ScrollLock />}
      </HeaderStyled>
    </>
  )
}
