import React, { FC, useEffect, useState } from 'react'
import ScrollLock from 'react-scrolllock'
import { colors } from '../../../styles/theme'
import { BeOnMindLogo } from '../../atomic/logos/BeOnMindLogo'
import { TypographyType, Typography } from '../../atomic/Typography'
import { MenuLink } from '../../sections/footer/styled'
import { PixelFont } from '../../sections/styled'
import { Burger } from './Burger'
import {
  HeaderInner,
  HeaderStyled,
  LinkWrapper,
  MenuItem,
  MenuList,
  Overlay,
  Text,
} from './styled'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

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

          <MenuList open={open}>
            <MenuItem>
              <Typography type={TypographyType.P1} color={colors.black}>
                s<PixelFont>t</PixelFont>udio@beo<PixelFont>n</PixelFont>
                mind.com
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

        {open && <ScrollLock />}
      </HeaderStyled>
    </>
  )
}
