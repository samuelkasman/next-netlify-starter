import { useTranslation } from 'next-i18next'
import React, { FC, useState } from 'react'
import ScrollLock from 'react-scrolllock'
import { colors } from '../../../styles/theme'
import { BeOnMindLogo } from '../../atomic/logos/BeOnMindLogo'
import { TypographyType, PixelFont, Typography } from '../../atomic/Typography'
import { EmailText, MenuLink } from '../../sections/footer/styled'
import { Burger } from './Burger'
import {
  HeaderStyled,
  LinkWrapper,
  MenuItem,
  MenuList,
  Overlay,
  Text,
} from './styled'

export const Navigation: FC = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation('common')

  return (
    <HeaderStyled>
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

      <Overlay open={open} />

      {open && <ScrollLock />}

      <Burger open={open} setOpen={setOpen} />
    </HeaderStyled>
  )
}
