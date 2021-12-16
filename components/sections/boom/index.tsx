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
  Illustration,
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
                type={TypographyType.BodyBig}
                color={colors.white}
                inlineBlock
              >
                Boosting ideas through audio-visual content in the name of
                modern art
              </BoomText>
            </TextWrapper>

            <Illustration />
          </Container>
        </FullWidthInner>
      </FullWidthSection>

      <FullWidthSection bgColor={colors.grey}>
        <FullWidthInner>
          <Container2>
            <BoomText2
              type={TypographyType.BodyBig}
              color={colors.black}
              textAlign="center"
              inlineBlock
            >
              Keď pracujeme, vie sa o nás
            </BoomText2>

            <br />

            <BoomText3
              type={TypographyType.BodyBig}
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
