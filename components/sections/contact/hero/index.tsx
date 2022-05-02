import React, { FC } from 'react'
import styled from 'styled-components'
import { breakpoints, colors, typography } from '../../../../styles/theme'
import { FullWidthSection } from '../../../layout/pageLayout'
import { Glitch, PixelFont } from '../../styled'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(4rem + 4vw);
  line-height: 1em;
  font-weight: ${typography.fontWeight.normal};
  width: 100%;
  height: 90vh;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: calc(8rem + 8vw);
  }
`

export const Hero: FC = () => {
  return (
    <FullWidthSection bgColor={colors.black}>
      <Container>
        <Glitch>
          Con<PixelFont>t</PixelFont>act
        </Glitch>
      </Container>
    </FullWidthSection>
  )
}
