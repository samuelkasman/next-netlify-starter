import { UserAgent } from '@quentin-sommer/react-useragent'
import React, { FC } from 'react'
import Media from 'react-media'
import { breakpoints } from '../../styles/theme'

export const MediaQueryJS: FC = ({ children }) => (
  <UserAgent mobile>
    {(isMobile: boolean | undefined) => (
      <Media
        query={{
          maxWidth: breakpoints.maxMobileMediaQuery,
        }}
        defaultMatches={isMobile}
      >
        {children}
      </Media>
    )}
  </UserAgent>
)
