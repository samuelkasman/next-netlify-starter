import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { colors } from '../../../styles/theme'
import { PixelFont, TypographyType } from '../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { Centered, WorkText } from './styled'

export const Work: FC = (): JSX.Element => {
  const THRESHOLD_VALLUE = 0.5

  const { ref, inView } = useInView({
    threshold: THRESHOLD_VALLUE,
  })

  return (
    <>
      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner>
          <Centered ref={ref} inView={inView}>
            <WorkText type={TypographyType.P1} color={colors.white}>
              Wor<PixelFont>k</PixelFont>
            </WorkText>
          </Centered>
        </FullWidthInner>
      </FullWidthSection>
    </>
  )
}
