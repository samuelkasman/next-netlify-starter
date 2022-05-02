import React, { FC } from 'react'
import { colors } from '../../../../styles/theme'
import { ArrowTopRightSmallIcon } from '../../../atomic/icons/ArrowTopRightSmallIcon'
import { Typography, TypographyType } from '../../../atomic/Typography'
import { FullWidthSection } from '../../../layout/pageLayout'
import { AddressWrapper, Container, DirectionsLink, ImagePanel } from './styled'

export const Address: FC = () => {
  return (
    <FullWidthSection bgColor={colors.black}>
      <Container>
        <AddressWrapper>
          <Typography type={TypographyType.H4} color={colors.white}>
            Hradné údolie 9/a,
            <br />
            811 01 Bratislava
            <br />
            Slovakia
          </Typography>

          <br />

          <DirectionsLink href="https://goo.gl/maps/fgPtPEyNzyzowBbY9">
            <ArrowTopRightSmallIcon />

            <Typography type={TypographyType.P1} color={colors.white}>
              Get direction
            </Typography>
          </DirectionsLink>
        </AddressWrapper>

        <ImagePanel />
      </Container>
    </FullWidthSection>
  )
}
