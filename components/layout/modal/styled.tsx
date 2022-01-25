import styled, { css, keyframes } from 'styled-components'
import { breakpoints, colors, typography } from '../../../styles/theme'

type ModalOverlayProps = {
  isVisible?: boolean
}

export const ModalOverlay = styled.div<ModalOverlayProps>`
  cursor: auto;
  position: absolute;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vh;
  top: 0;
  right: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 9999;

  /* @media (min-width: ${breakpoints.minDesktop}) {
    padding: 40px 60px 40px 40px;
  } */
`

export const DissmissArea = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${colors.transparent};
`

const fadeInAnimation = keyframes`
 0% { top: 50px; opacity: 0; }
 100% { top: 0; opacity: 1; }
`

const fadeOutAnimation = keyframes`
 100% { top: 0; opacity: 1; }
 0% { top: 50px; opacity: 0; }
`

type ModalContainerProps = {
  desktopMaxWidth: number
  isVisible?: boolean
}

export const ModalContainer = styled.div<ModalContainerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${colors.grey};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  ${({ isVisible }) =>
    isVisible
      ? css`
          animation-name: ${fadeInAnimation};
        `
      : css`
          animation-name: ${fadeOutAnimation};
        `}

  animation-duration: 0.5s;
  animation-iteration-count: 1;
`

export const ModalContent = styled.div`
  position: relative;
  color: ${colors.black};
  font-size: ${typography.fontSize.p1};
  line-height: ${typography.lineHeight.p1};
  height: 100%;
  padding: 24px;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 48px 64px;
  }
`

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  background-color: ${colors.transparent};
  padding: 0;
  border: 0;
  outline: 0;
  z-index: 50;

  @media (min-width: ${breakpoints.minDesktop}) {
    top: 48px;
    right: 64px;
  }
`
