import styled, { css, keyframes } from 'styled-components'
import {
  colors,
  elements,
  breakpoints,
  typography,
  spacing,
} from '../../../styles/theme'

export const HeaderStyled = styled.header<{ isScrolled?: boolean }>`
  position: fixed;
  line-height: 0;
  background-color: ${colors.transparent};
  height: ${elements.navigationHeight};
  width: 100%;
  z-index: 30;
  transition: all 0.3s ease-out;
`

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(${breakpoints.innerWidth} + 2 * ${spacing.pagePadding});
  padding: 20px ${spacing.pagePadding};
  margin: auto;

  @media (min-width: ${breakpoints.fullWidth}) {
    max-width: calc(${breakpoints.innerWidthFull} + 2 * ${spacing.pagePadding});
    padding: 20px ${spacing.pagePaddingLarge};
  }

  @media (min-width: ${breakpoints.wideWidth}) {
    max-width: calc(
      ${breakpoints.innerWidthUltra} + 2 * ${spacing.pagePadding}
    );
    padding: 20px ${spacing.pagePaddingExtraLarge};
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 150;
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: ${typography.fontSize.desktop.p1};
  line-height: ${typography.lineHeight.desktop.p1};
  font-weight: ${typography.fontWeight.light};
  margin-right: 24px;
`

export const BurgerStyled = styled.button<{ open: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 32px;
  height: ${({ open }) => (open ? '32px' : ' 14px')};
  background: transparent;
  padding: 0;
  border: none;
  outline: none;
  margin: 0 0 0 auto;
  overflow: visible;
  z-index: 100;

  div {
    width: 32px;
    height: 2px;
    border-radius: 0;
    transform-origin: 1px;
    transition: all 0.3s linear;

    ${({ open }) =>
      open
        ? css`
            background-color: ${colors.black};

            &:nth-child(1) {
              transform: rotate(45deg);
            }

            &:nth-child(2) {
              transform: translateX(100%);
              opacity: 0;
            }

            &:nth-child(3) {
              transform: rotate(-45deg);
            }
          `
        : css`
            background-color: ${colors.white};

            &:nth-child(1) {
              transform: rotate(0);
            }

            &:nth-child(2) {
              width: 28px;
              margin-left: auto;
              transform: translateX(0);
              opacity: 1;
            }

            &:nth-child(3) {
              transform: rotate(0);
              opacity: 0;
            }
          `}
  }
`

export const Overlay = styled.div<{ open: boolean }>`
  position: absolute;
  background: ${colors.transparent};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: -100vh;
  transition: opacity 0.3s;
  opacity: ${({ open }) => (open ? 0.8 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  z-index: 50;
`

export const Intro = styled.div<{ open: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: -100vh;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-110vh)')};
  transition: transform 1s ease-out;
  overflow: hidden;
  z-index: 200;
`

export const MenuList = styled.ul<{ open: boolean }>`
  list-style: none;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  line-height: 24px;
  background-color: ${colors.grey};
  padding: ${elements.navigationHeight} 20px;
  margin: 0;
  transform-origin: top center;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100vh)')};
  transition: transform 0.5s ease-out;
  overflow: hidden;
  z-index: 100;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 200px 40px;
  }
`

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const MenuItem = styled.li`
  align-items: center;
  text-align: center;
  width: auto;
  padding: 8px 0;
  margin: 20px 0 10px;
`
