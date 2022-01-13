import React, { FC } from 'react'
import { colors } from '../../../styles/theme'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { Centered, Video } from './styled'

export const Hero: FC = (): JSX.Element => {
  return (
    <FullWidthSection>
      <FullWidthInner fullWidth noPadding>
        <Centered>
          <Video autoPlay muted loop>
            <source src="/video/hero.mp4" type="video/mp4" />
          </Video>
        </Centered>
      </FullWidthInner>
    </FullWidthSection>
  )
}
