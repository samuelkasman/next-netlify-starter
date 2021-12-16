import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { colors } from '../../../styles/theme'
import { BeOnMindLogo } from '../../atomic/logos/BeOnMindLogo'
import { HeaderStyled, LinkWrapper, Text } from './styled'

export const Navigation: FC = (): JSX.Element => {
  const { t } = useTranslation('common')

  return (
    <HeaderStyled>
      <LinkWrapper>
        <Text>
          <BeOnMindLogo color={colors.black} />
        </Text>
      </LinkWrapper>
    </HeaderStyled>
  )
}
