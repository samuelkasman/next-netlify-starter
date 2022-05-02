import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { colors } from '../../../../styles/theme'
import { AudiLogo } from '../../../atomic/logos/AudiLogo'
import { BratislavaLogo } from '../../../atomic/logos/BratislavaLogo'
import { IIHFLogo } from '../../../atomic/logos/IIHFLogo'
import { RtvsLogo } from '../../../atomic/logos/RtvsLogo'
import { TescoLogo } from '../../../atomic/logos/TescoLogo'
import { VWLogo } from '../../../atomic/logos/VWLogo'
import { Typography, TypographyType } from '../../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../../layout/pageLayout'
import { PlusIconStyled, LogosContainer, AllProjectsWrapper } from './styled'

export const Brands: FC = () => {
  const THRESHOLD_VALUE = 0.9

  const { ref, inView } = useInView({
    threshold: THRESHOLD_VALUE,
  })

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: THRESHOLD_VALUE,
  })

  return (
    <FullWidthSection bgColor={colors.black}>
      <FullWidthInner>
        <LogosContainer ref={ref} inView={inView}>
          <RtvsLogo />
          <BratislavaLogo />
          <VWLogo />
          <TescoLogo />
          <AudiLogo />
          <IIHFLogo />
        </LogosContainer>

        <AllProjectsWrapper ref={ref2} inView={inView2}>
          <PlusIconStyled />

          <Typography type={TypographyType.P1} color={colors.white} inlineBlock>
            All projects
          </Typography>
        </AllProjectsWrapper>
      </FullWidthInner>
    </FullWidthSection>
  )
}
