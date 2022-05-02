import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { colors } from '../../../../styles/theme'
import { TypographyType } from '../../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../../layout/pageLayout'
import { PixelFont } from '../../styled'
import { Main, Container, HiIllustrationStyled } from './styled'

export const BigEmail: FC = (): JSX.Element => {
  const THRESHOLD_VALUE = 0.5

  const { ref, inView } = useInView({
    threshold: THRESHOLD_VALUE,
  })

  return (
    <FullWidthSection bgColor={colors.black}>
      <FullWidthInner>
        <Container ref={ref} inView={inView}>
          <HiIllustrationStyled />

          <Main
            type={TypographyType.P1}
            color={colors.white}
            textAlign="center"
            inlineBlock
          >
            s<PixelFont>t</PixelFont>udio@beonmi<PixelFont>n</PixelFont>d.com
          </Main>
        </Container>
      </FullWidthInner>
    </FullWidthSection>
  )
}
