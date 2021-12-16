import { useTranslation } from 'next-i18next'
import React from 'react'
import { FooterStyled } from './styled'

export const Footer = (): JSX.Element => {
  const { t } = useTranslation('common')

  return <FooterStyled>{t('footer.title')}</FooterStyled>
}
