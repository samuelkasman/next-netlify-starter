import React, { FC } from 'react'
import { colors } from '../../../styles/theme'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { Centered } from './styled'

export const Hero: FC = (): JSX.Element => {
  return (
    <FullWidthSection>
      <FullWidthInner>
        <Centered>
          <img src={'/gif/gif.1'} alt="logogif" />
        </Centered>
      </FullWidthInner>
    </FullWidthSection>
  )
}
