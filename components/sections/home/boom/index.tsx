import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { colors } from '../../../../styles/theme'
import { TypographyType } from '../../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../../layout/pageLayout'
import { Glitch, PixelFont, PixelFont1s } from '../../styled'
import {
  BoomText,
  BoomText2,
  BoomText3,
  Container,
  Container2,
  BoomIllustrationStyled,
  TextWrapper,
} from './styled'

type BoomProps = {
  setNavMixBlendMode: Dispatch<SetStateAction<boolean>>
}

export const Boom: FC<BoomProps> = ({ setNavMixBlendMode }): JSX.Element => {
  const THRESHOLD_VALUE = 0.5

  const { ref, inView } = useInView({
    threshold: THRESHOLD_VALUE,
  })

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: THRESHOLD_VALUE,
  })

  const { ref: refBlackSection, inView: inViewBlackSection } = useInView({
    threshold: 0.4,
  })

  const { ref: refWhiteSection, inView: inViewWhiteSection } = useInView()

  useEffect(() => {
    if (!inViewBlackSection && inViewWhiteSection) {
      setNavMixBlendMode(true)
    } else {
      setNavMixBlendMode(false)
    }
  }, [inViewBlackSection, inViewWhiteSection])

  return (
    <>
      <FullWidthSection bgColor={colors.black} ref={refBlackSection}>
        <FullWidthInner>
          <Container>
            <TextWrapper ref={ref} inView={inView}>
              <BoomText
                type={TypographyType.P1}
                color={colors.white}
                inlineBlock
              >
                <Glitch>
                  Boos
                  <PixelFont data-text="t" data-animation-delay="-1s">
                    t
                  </PixelFont>
                  ing ideas{' '}
                  <PixelFont1s data-text="t" animationDelay={1}>
                    t
                  </PixelFont1s>
                  hrough
                  <br />
                  audio-visual con
                  <PixelFont data-text="te" animationDelay={7}>
                    te
                  </PixelFont>
                  n
                  <PixelFont data-text="t" animationDelay={4}>
                    t
                  </PixelFont>{' '}
                  in
                  <br />
                  <PixelFont data-text="t" animationDelay={2}>
                    t
                  </PixelFont>
                  he nam
                  <PixelFont data-text="e" animationDelay={6}>
                    e
                  </PixelFont>{' '}
                  of mode
                  <PixelFont data-text="r" animationDelay={1}>
                    r
                  </PixelFont>
                  n ar
                  <PixelFont data-text="t" animationDelay={4}>
                    t
                  </PixelFont>
                </Glitch>
                {/* <Glitch>
                  <PixelFont>
                    Boosting ideas through
                    <br />
                    audio-visual content in
                    <br />
                    the name of modern art
                  </PixelFont>
                </Glitch> */}
              </BoomText>
            </TextWrapper>

            <BoomIllustrationStyled />
          </Container>
        </FullWidthInner>
      </FullWidthSection>

      <FullWidthSection bgColor={colors.grey} ref={refWhiteSection}>
        <FullWidthInner>
          <Container2 ref={ref3} inView={inView3}>
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
              <Glitch dark>
                Každý pries<PixelFont data-text="t">t</PixelFont>or, v kto
                <PixelFont data-text="r">r</PixelFont>om
                <br />
                sme za<PixelFont data-text="n">n</PixelFont>echali s
                <PixelFont data-text="t">t</PixelFont>op
                <PixelFont data-text="y">y</PixelFont>, bude
                <br />
                ese
                <PixelFont data-text="n">n</PixelFont>ciu našich projek
                <PixelFont data-text="t">t</PixelFont>
                ov
                <br />
                nasávať eš<PixelFont data-text="t">t</PixelFont>e dlho
              </Glitch>
            </BoomText3>
          </Container2>
        </FullWidthInner>
      </FullWidthSection>
    </>
  )
}
