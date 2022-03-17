import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { colors } from '../../../styles/theme'
import { TypographyType } from '../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { Glitch, PixelFont } from '../styled'
import { Centered, WorkText } from './styled'

type WorkProps = {
  setIsLogoBlack: Dispatch<SetStateAction<boolean>>
}

export const Work: FC<WorkProps> = ({ setIsLogoBlack }): JSX.Element => {
  const THRESHOLD_VALUE = 0.5

  const { ref, inView } = useInView({
    threshold: THRESHOLD_VALUE,
  })

  const { ref: refSection, inView: inViewSection } = useInView({
    threshold: 0.9,
  })

  useEffect(() => {
    if (inViewSection) {
      setIsLogoBlack(false)
    }
  }, [inViewSection])

  return (
    <>
      <FullWidthSection bgColor={colors.black} ref={refSection}>
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
