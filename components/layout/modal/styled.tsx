import styled, { css } from 'styled-components'
import { breakpoints, colors, misc, typography } from '../../../styles/theme'

export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 0;
  z-index: 9999;
  overflow-x: hidden;
  overflow-y: auto;
  cursor: auto;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 25px;
  }
`

export const DissmissArea = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${colors.grey70};
`

export const ModalContainer = styled.div<{ desktopMaxWidth: number }>`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  @media (min-width: ${breakpoints.minDesktop}) {
    height: auto;
    max-width: ${({ desktopMaxWidth }) => desktopMaxWidth}px;
  }

  & p:last-of-type {
    margin-bottom: 0;
  }
`

export const ModalContent = styled.div<{
  fullWidth: boolean
  noContentPadding: boolean
  takeFullSize?: boolean
}>`
  color: ${colors.black};
  font-size: ${typography.fontSize.p1};
  line-height: ${typography.lineHeight.p1};
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  ${({ takeFullSize }) =>
    takeFullSize &&
    css`
      width: 100%;
      max-width: calc(${breakpoints.innerWidth} + 40px);
    `}

  /* width */
  ::-webkit-scrollbar {
    width: 9px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.black70};
    border-radius: 10px;
  }

  @media (min-width: ${breakpoints.minDesktop}) {
    max-height: 90vh;
    margin: ${({ fullWidth, noContentPadding }) =>
      noContentPadding
        ? '0'
        : fullWidth
        ? '20px 8px 20px 0'
        : '20px 30px 20px 30px'};
    padding: ${({ fullWidth, noContentPadding }) =>
      noContentPadding
        ? '0'
        : fullWidth
        ? '0 32px 20px 32px'
        : '0 100px 20px 100px'};
  }
`

export const AdjustContent = styled.div<{
  fullWidth: boolean
  noContentPadding: boolean
}>`
  margin: ${({ fullWidth, noContentPadding }) =>
    noContentPadding ? '0' : fullWidth ? '0 0 0 0' : '0 30px 0 30px'};
  padding: ${({ fullWidth, noContentPadding }) =>
    noContentPadding
      ? '0'
      : fullWidth
      ? '50px 16px 0 16px'
      : '50px 20px 0 20px'};

  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: ${breakpoints.minDesktop}) {
    margin: 0;
    padding: 0;
  }
`

export const CloseButton = styled.button<{ mobileColor: string }>`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${colors.transparent};
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  cursor: pointer;
  outline: 0;
  z-index: 50;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 20px;
    left: 10px;
    width: 20px;
    height: 2px;
    background-color: ${({ mobileColor }) => mobileColor};
  }

  @media (min-width: ${breakpoints.minDesktop}) {
    top: 15px;
    &:before,
    &:after {
      background-color: ${colors.white};
    }
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`
