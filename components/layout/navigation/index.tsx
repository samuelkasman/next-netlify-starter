import { useTranslation } from 'next-i18next'
import React, { FC } from 'react'
import { HeaderStyled, LinkWrapper, Text } from './styled'

export const Navigation: FC = (): JSX.Element => {
  const { t } = useTranslation('common')

  return (
    <HeaderStyled>
      <LinkWrapper>
        <Text>{t('header.title')}</Text>
      </LinkWrapper>
    </HeaderStyled>
  )
}
