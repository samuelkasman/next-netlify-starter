import React, { FC } from 'react'
import { colors } from '../../../styles/theme'
import { PixelFont, TypographyType } from '../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import {
  BoomText,
  BoomText2,
  BoomText3,
  Container,
  Container2,
  BoomIllustrationStyled,
  TextWrapper,
} from './styled'

export const Boom: FC = (): JSX.Element => {
  return (
    <>
      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner>
          <Container>
            <TextWrapper>
              <BoomText
                type={TypographyType.P1}
                color={colors.white}
                inlineBlock
              >
                Boos<PixelFont>t</PixelFont>ing ideas <PixelFont>t</PixelFont>
                hrough audio-visual con<PixelFont>te</PixelFont>n
                <PixelFont>t</PixelFont> in <PixelFont>t</PixelFont>he nam
                <PixelFont>e</PixelFont> of mode<PixelFont>r</PixelFont>n ar
                <PixelFont>t</PixelFont>
              </BoomText>
            </TextWrapper>

            <BoomIllustrationStyled />
          </Container>
        </FullWidthInner>
      </FullWidthSection>

      <FullWidthSection bgColor={colors.grey}>
        <FullWidthInner>
          <Container2>
            <BoomText2
              type={TypographyType.P1}
              color={colors.black}
              textAlign="center"
              inlineBlock
            >
              Keď pracujeme, vie sa o nás
            </BoomText2>

            <br />

            <BoomText3
              type={TypographyType.P1}
              color={colors.black}
              textAlign="center"
              inlineBlock
            >
              Každý pries<PixelFont>t</PixelFont>or, v kto
              <PixelFont>r</PixelFont>om sme za<PixelFont>n</PixelFont>echali s
              <PixelFont>t</PixelFont>op<PixelFont>y</PixelFont>, bude ese
              <PixelFont>n</PixelFont>ciu našich projek<PixelFont>t</PixelFont>
              ov nasávať eš<PixelFont>t</PixelFont>e dlho
            </BoomText3>
          </Container2>
        </FullWidthInner>
      </FullWidthSection>
    </>
  )
}
