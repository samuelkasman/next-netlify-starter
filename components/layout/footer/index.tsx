import { useTranslation } from 'next-i18next'
import React from 'react'
import { colors } from '../../../styles/theme'
import { Typography, TypographyType } from '../../atomic/Typography'
import { FullWidthInner, FullWidthSection } from '../pageLayout'
import { PixelFont } from '../../sections/styled'
import {
  Address,
  AddressP,
  BottomRow,
  Column,
  HalfRow,
  EmailText,
  MainRow,
  MenuLink,
  TopRow,
  SocialLink,
  AStyled,
} from './styled'
import { BeOnMindLogo } from '../../atomic/logos/BeOnMindLogo'
import { ArrowTopRightSmallIcon } from '../../atomic/icons/ArrowTopRightSmallIcon'
import Link from 'next/link'

export const Footer = (): JSX.Element => {
  const { t } = useTranslation('common')

  return (
    <FullWidthSection bgColor={colors.grey}>
      <FullWidthInner>
        <TopRow>
          <EmailText type={TypographyType.P1} color={colors.black}>
            s<PixelFont>t</PixelFont>udio@beonmi<PixelFont>n</PixelFont>d.com
          </EmailText>
        </TopRow>

        <MainRow>
          <HalfRow>
            <Column>
              <Link href="/">
                <a>
                  <MenuLink
                    type={TypographyType.P1}
                    color={colors.black}
                    inlineBlock
                  >
                    Ho<PixelFont>m</PixelFont>e
                  </MenuLink>
                </a>
              </Link>

              <Link href="/contact">
                <a>
                  <MenuLink
                    type={TypographyType.P1}
                    color={colors.black}
                    inlineBlock
                  >
                    Con<PixelFont>t</PixelFont>act
                  </MenuLink>
                </a>
              </Link>
            </Column>

            <Column />
            <Column />
          </HalfRow>

          <HalfRow>
            <Column>
              <Address type={TypographyType.P1} color={colors.black}>
                <AddressP black>Company data</AddressP>
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
                <AddressP black>Where you find us</AddressP>
                <br />
                <AddressP>BeOnMind s.r.o.</AddressP>
                <AddressP>Hradné údolie 9/a,</AddressP>
                <AddressP>811 01 Bratislava,</AddressP>
                <AddressP>Slovak Republic</AddressP>
              </Address>
            </Column>

            <Column />
            <Column />
          </HalfRow>
        </MainRow>

        <BottomRow>
          <HalfRow>
            <BeOnMindLogo color={colors.black} />
          </HalfRow>

          <HalfRow flexStart>
            <SocialLink href="https://www.facebook.com/beonmind">
              <ArrowTopRightSmallIcon color={colors.black} size="20" />

              <Typography type={TypographyType.P2} color={colors.black}>
                Facebook
              </Typography>
            </SocialLink>

            <SocialLink href="https://www.instagram.com/beonmind/">
              <ArrowTopRightSmallIcon color={colors.black} size="20" />

              <Typography type={TypographyType.P2} color={colors.black}>
                Instagram
              </Typography>
            </SocialLink>

            <SocialLink href="https://vimeo.com/beonmind">
              <ArrowTopRightSmallIcon color={colors.black} size="20" />

              <Typography type={TypographyType.P2} color={colors.black}>
                Vimeo
              </Typography>
            </SocialLink>

            <SocialLink href="https://www.youtube.com/c/BeOnMind">
              <ArrowTopRightSmallIcon color={colors.black} size="20" />

              <Typography type={TypographyType.P2} color={colors.black}>
                Youtube
              </Typography>
            </SocialLink>
          </HalfRow>
        </BottomRow>
      </FullWidthInner>
    </FullWidthSection>
  )
}
