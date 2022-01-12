import styled, { css } from 'styled-components'
import {
  colors,
  elements,
  breakpoints,
  misc,
  typography,
} from '../../../styles/theme'

export const HeaderStyled = styled.header<{ isScrolled?: boolean }>`
  position: absolute;
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
    top: 0;
    padding: 18px 40px;
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
  font-size: ${typography.fontSize.desktop.p1};
  line-height: ${typography.lineHeight.desktop.p1};
  font-weight: ${typography.fontWeight.light};
  margin-right: 24px;
`
