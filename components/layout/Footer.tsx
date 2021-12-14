import { useTranslation } from 'next-i18next'
import React from 'react'
import { FooterStyled, Text } from './styled'

export const Footer = (): JSX.Element => {
  const { t } = useTranslation('common')

  return (
    <FooterStyled>
      <Text>{t('footer.title')}</Text>
    </FooterStyled>
  )
}
