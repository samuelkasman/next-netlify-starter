import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { colors } from '../../../styles/theme'
import { Typography, TypographyType } from '../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { PlusIconStyled } from '../projects/styled'
import { PixelFont } from '../styled'
import {
  Container,
  Heading,
  VideoColumn,
  VideoStyled,
  Paragraph,
  TextColumn,
} from './styled'

export const Founders: FC = (): JSX.Element => {
  const THRESHOLD_VALUE = 0.5

  const { ref, inView } = useInView({
    threshold: THRESHOLD_VALUE,
  })

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: THRESHOLD_VALUE,
  })

  return (
    <>
      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner>
          <Container>
            <TextColumn ref={ref} inView={inView}>
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

            <VideoColumn ref={ref2} inView={inView2}>
              <VideoStyled autoPlay muted loop>
                <source src="/video/founders.mp4" type="video/mp4" />
              </VideoStyled>
            </VideoColumn>
          </Container>
        </FullWidthInner>
      </FullWidthSection>
    </>
  )
}
