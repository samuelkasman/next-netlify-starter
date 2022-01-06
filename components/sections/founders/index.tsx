import React, { FC } from 'react'
import { colors } from '../../../styles/theme'
import { PixelFont, Typography, TypographyType } from '../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { PlusIconStyled } from '../projects/styled'
import {
  Container,
  Heading,
  ImgColumn,
  ImgStyled,
  Paragraph,
  TextColumn,
} from './styled'

export const Founders: FC = (): JSX.Element => {
  return (
    <>
      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner fullWidth>
          <Container>
            <TextColumn>
              <Heading
                type={TypographyType.P1}
                color={colors.white}
                textAlign="left"
                inlineBlock
              >
                W<PixelFont>e</PixelFont> pa<PixelFont>rt</PixelFont>ner with
                fou<PixelFont>n</PixelFont>ders
              </Heading>

              <br />

              <Paragraph
                type={TypographyType.P1}
                color={colors.grey}
                textAlign="left"
                inlineBlock
              >
                A promising venture requires a compelling vision and the right
                people to translate it. We work with founders to accelerate
                growth and scalability by injecting tangible, measurable value
                into early-stage companies through the vehicle of branding,
                digital innovation, and marketing strategy.
              </Paragraph>

              <br />

              <div>
                <PlusIconStyled />

                <Typography
                  type={TypographyType.P1}
                  color={colors.white}
                  inlineBlock
                >
                  Read more
                </Typography>
              </div>
            </TextColumn>

            <ImgColumn>
              <ImgStyled src={'/img/balls.png'} alt="balls" />
            </ImgColumn>
          </Container>
        </FullWidthInner>
      </FullWidthSection>
    </>
  )
}
