import React, { FC } from 'react'
import { colors } from '../../../styles/theme'
import { TypographyType } from '../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { Centered, WorkText } from './styled'

export const Work: FC = (): JSX.Element => {
  return (
    <>
      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner>
          <Centered>
            <WorkText type={TypographyType.P1} color={colors.white}>
              Work
            </WorkText>
          </Centered>
        </FullWidthInner>
      </FullWidthSection>
    </>
  )
}
