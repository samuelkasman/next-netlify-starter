import React, { FC } from 'react'
import { colors } from '../../../styles/theme'
import { TypographyType } from '../../atomic/Typography'
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
                Boosting ideas through audio-visual content in the name of
                modern art
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
              Každý priestor, v ktorom sme zanechali stopy, bude esenciu našich
              projektov nasávať ešte dlho
            </BoomText3>
          </Container2>
        </FullWidthInner>
      </FullWidthSection>
    </>
  )
}
