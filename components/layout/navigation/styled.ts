import styled, { css } from 'styled-components'
import {
  colors,
  elements,
  breakpoints,
  misc,
  typography,
} from '../../../styles/theme'

export const HeaderStyled = styled.header<{ isScrolled?: boolean }>`
  line-height: 0;
  background-color: ${colors.transparent};
  height: ${elements.navigationHeight};
  width: 100%;
  padding: 21px 20px;
  z-index: 30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-out;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 18px 40px;

    position: sticky;
    top: 0;

    ${({ isScrolled }) =>
      isScrolled &&
      css`
        background-color: ${colors.redSoft};
        box-shadow: ${misc.headerShadow};
      `};
  }
`

export const LinkWrapper = styled.div`
  display: none;

  @media (min-width: ${breakpoints.minDesktop}) {
    display: flex;
    flex-direction: row;
  }
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: ${typography.fontSize.desktop.bodyLarge};
  line-height: ${typography.lineHeight.desktop.bodyLarge};
  font-weight: ${typography.fontWeight.bold};
  margin-right: 24px;
`
