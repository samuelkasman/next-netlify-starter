import { useTranslation } from 'next-i18next'
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
  Intro,
  LinkWrapper,
  MenuItem,
  MenuList,
  Overlay,
  Text,
} from './styled'

export const Navigation: FC = (): JSX.Element => {
  const [openIntro, setOpenIntro] = useState(true)
  const [open, setOpen] = useState(false)
  const { t } = useTranslation('common')

  useEffect(() => {
    let timer1 = setTimeout(() => setOpenIntro(false), 5000)

    return () => {
      clearTimeout(timer1)
    }
  }, [])

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

      <Intro open={openIntro}>
        <img src="/gif/gif.1" alt="BeOnMind" />
      </Intro>

      {(open || openIntro) && <ScrollLock />}
    </HeaderStyled>
  )
}
