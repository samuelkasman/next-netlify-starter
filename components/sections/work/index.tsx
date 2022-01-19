import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { colors } from '../../../styles/theme'
import { TypographyType } from '../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { Glitch, PixelFont } from '../styled'
import { Centered, WorkText } from './styled'

export const Work: FC = (): JSX.Element => {
  const THRESHOLD_VALUE = 0.5

  const { ref, inView } = useInView({
    threshold: THRESHOLD_VALUE,
  })

  return (
    <>
      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner>
          <Centered ref={ref} inView={inView}>
            <WorkText type={TypographyType.P1} color={colors.white}>
              <Glitch>
                Wor<PixelFont data-text="k">k</PixelFont>
              </Glitch>
            </WorkText>
          </Centered>
        </FullWidthInner>
      </FullWidthSection>
    </>
  )
}
