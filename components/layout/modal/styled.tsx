import styled from 'styled-components'
import { breakpoints, colors, typography } from '../../../styles/theme'

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
    padding: 40px 60px 40px 40px;
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
  background-color: ${colors.transparent};
`

export const ModalContainer = styled.div<{ desktopMaxWidth: number }>`
  width: 100%;
  height: 100%;
  background-color: ${colors.grey};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  @media (min-width: ${breakpoints.minDesktop}) {
    height: auto;
    min-height: 350px;
    max-width: 1920px;
  }
`

export const ModalContent = styled.div`
  color: ${colors.black};
  font-size: ${typography.fontSize.p1};
  line-height: ${typography.lineHeight.p1};
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  padding: 24px;

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
