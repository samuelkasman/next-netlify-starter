import styled from 'styled-components'
import { elements, breakpoints, spacing } from '../../styles/theme'

export const PageLayout = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  width: 100%;
  padding: 0;
`

export const FullWidthSection = styled.section<{ bgColor?: string }>`
  flex: 1 0 auto;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
`
type FullWidthInnerProps = {
  fullWidth?: boolean
  noPadding?: boolean
}

export const FullWidthInner = styled.div<FullWidthInnerProps>`
  flex: 1 0 auto;
  width: 100%;
  max-width: ${({ fullWidth }) =>
    fullWidth
      ? '100%'
      : `calc(${breakpoints.innerWidth} + 2 * ${spacing.pagePadding})`};
  padding: 0 ${({ noPadding }) => (noPadding ? '0' : spacing.pagePadding)};
  margin: auto;
`
