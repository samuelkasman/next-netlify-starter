import { useTranslation } from 'next-i18next'
import React from 'react'
import { colors } from '../../../styles/theme'
import { TypographyType } from '../../atomic/Typography'
import { FullWidthInner, FullWidthSection } from '../../layout/pageLayout'
import {
  Address,
  AddressP,
  BottomRow,
  Column,
  EmailText,
  MainRow,
  MenuLink,
  TopRow,
} from './styled'

export const Footer = (): JSX.Element => {
  const { t } = useTranslation('common')

  return (
    <FullWidthSection bgColor={colors.grey}>
      <FullWidthInner>
        <TopRow>
          <EmailText type={TypographyType.P1} color={colors.black}>
            studio@beonmind.com
          </EmailText>
        </TopRow>

        <MainRow>
          <Column>
            <MenuLink type={TypographyType.P1} color={colors.black}>
              Home
            </MenuLink>

            <MenuLink type={TypographyType.P1} color={colors.black}>
              Work
            </MenuLink>

            <MenuLink type={TypographyType.P1} color={colors.black}>
              Partner
            </MenuLink>

            <MenuLink type={TypographyType.P1} color={colors.black}>
              Contact
            </MenuLink>
          </Column>

          <Column />
          <Column />

          <Column>
            <Address type={TypographyType.P1} color={colors.black}>
              <AddressP>Company data</AddressP>
              <br />
              <AddressP>BeOnMind s.r.o.</AddressP>
              <AddressP>Bosákova 7851 04</AddressP>
              <AddressP>Bratislava</AddressP>
              <br />
              <AddressP>IČO: 45 637 440</AddressP>
              <AddressP>DIČ: 202 306 3900</AddressP>
              <AddressP>IČ DPH: SK 202 306 3900</AddressP>
              <br />
              <AddressP>Číslo účtu: 109 707 6005 / 1111</AddressP>
            </Address>
          </Column>

          <Column>
            <Address type={TypographyType.P1} color={colors.black}>
              <AddressP>Where you find us</AddressP>
              <br />
              <AddressP>BeOnMind s.r.o.</AddressP>
              <AddressP>Hradné údolie 9/a,</AddressP>
              <AddressP>811 01 Bratislava,</AddressP>
              <AddressP>Slovak Republic</AddressP>
            </Address>
          </Column>

          <Column />
        </MainRow>

        <BottomRow>{t('footer.title')}</BottomRow>
      </FullWidthInner>
    </FullWidthSection>
  )
}
