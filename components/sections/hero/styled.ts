import styled from 'styled-components'
import { colors } from '../../../styles/theme'

export const Centered = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

export const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  z-index: -1000;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
`

export const Intro = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
  width: 100%;
  background: ${colors.black};
  /* z-index: 200; */
`

export const IntroMask = styled.div<{ open?: boolean }>`
  position: absolute;
  background: ${colors.grey};
  top: -120px;
  left: 0;
  height: calc(120px + 100vh);
  width: 100%;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-110vh)')};
  transition: transform 0.75s ease-in-out;
  z-index: 200;

  /* ~ h1 {
    color: white;
    mix-blend-mode: difference;
  }

  h2 {
    color: white;
    mix-blend-mode: difference;
  } */
`

export const IntroContainer = styled.div<{ textLeft?: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  z-index: 300;
  transform: ${({ textLeft }) =>
    textLeft
      ? 'translateX(0)'
      : 'translateX(30vw)'}; // TODO: better centering than 30vw
  transition: transform 0.75s ease-in-out;
`

export const IntroRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`

type IntroPixelProps = {
  visible?: boolean
  color?: string
}

export const IntroPixel = styled.div<IntroPixelProps>`
  width: 4px;
  height: 4px;
  background-color: ${({ visible, color }) =>
    visible && color ? color : colors.transparent};
`

export const HeadlineVisibility = styled.span<{ visible?: boolean }>`
  opacity: ${({ visible }) => (visible ? '1' : '0')};
`
