import React, { FC, useEffect, useState } from 'react'
import ScrollLock from 'react-scrolllock'
import { colors } from '../../../styles/theme'
import { BeOnMindLogo } from '../../atomic/logos/BeOnMindLogo'
import { TypographyType, Typography } from '../../atomic/Typography'
import { AddressP, MenuLink } from '../../sections/footer/styled'
import { PixelFont } from '../../sections/styled'
import { Burger } from './Burger'
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

export const Navigation: FC = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  const { scroll } = useLocomotiveScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true)
    }, 5000)

    return () => {
      clearTimeout(timeout)
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
    }
    if (!open) {
      scroll?.start()
    }
  }, [open])

  return (
    <>
      <HeaderStyled visible={visible} isScrolled={isScrolled}>
        <HeaderInner>
          <LinkWrapper>
            <Text>
              <BeOnMindLogo color={open ? colors.black : colors.white} />
            </Text>
          </LinkWrapper>

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

          <Burger open={open} setOpen={setOpen} />
        </HeaderInner>

        <Overlay open={open} />

        {open && <ScrollLock />}
      </HeaderStyled>
    </>
  )
}
