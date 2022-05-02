import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { colors } from '../../../../styles/theme'
import { TypographyType } from '../../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../../layout/pageLayout'
import { Title, Main, Container } from './styled'

type Props = {
  setNavMixBlendMode: Dispatch<SetStateAction<boolean>>
}

export const StickyText: FC<Props> = ({ setNavMixBlendMode }): JSX.Element => {
  const THRESHOLD_VALUE = 0.5

  const { ref, inView } = useInView({
    threshold: THRESHOLD_VALUE,
  })

  const { ref: refWhiteSection, inView: inViewWhiteSection } = useInView()

  useEffect(() => {
    if (inViewWhiteSection) {
      setNavMixBlendMode(true)
    } else {
      setNavMixBlendMode(false)
    }
  }, [inViewWhiteSection])

  return (
    <FullWidthSection bgColor={colors.grey} ref={refWhiteSection}>
      <FullWidthInner>
        <Container ref={ref} inView={inView}>
          <Title
            type={TypographyType.P1}
            color={colors.black}
            textAlign="center"
            inlineBlock
          >
            Lorem ipsum is placeholder
          </Title>

          <br />

          <Main
            type={TypographyType.P1}
            color={colors.black}
            textAlign="center"
            inlineBlock
          >
            We are ready to work with any agency or client worldwide
          </Main>
        </Container>
      </FullWidthInner>
    </FullWidthSection>
  )
}
