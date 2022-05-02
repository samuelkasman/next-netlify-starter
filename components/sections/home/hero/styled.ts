import { FullWidthSection } from '../../../layout/pageLayout'
import styled from 'styled-components'
import { breakpoints, colors } from '../../../../styles/theme'
import { H1 } from '../../../atomic/H1'
import { PlayButtonIcon } from '../../../atomic/icons/PlayButtonIcon'

export const Intro = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  width: 100%;
  background: ${colors.black};
`

export const IntroContainerWrapper = styled.div<{ textLeft?: boolean }>`
  width: fit-content;
  transition: all 0.65s cubic-bezier(0.7, 0.5, 0.3, 0.8); //cubic-bezier(0.5, 0.4, 0.3, 0.6);
  margin: 0;
  z-index: 300;

  @media (min-width: ${breakpoints.minDesktop}) {
    margin-left: ${({ textLeft }) => (textLeft ? '0' : '30%')};
  }

  @media (min-width: ${breakpoints.midDesktop}) {
    margin-left: ${({ textLeft }) => (textLeft ? '0' : '35%')};
  }

  @media (min-width: ${breakpoints.fullWidth}) {
    margin-left: ${({ textLeft }) => (textLeft ? '0' : '37%')};
  }

  @media (min-width: 2200px) {
    margin-left: ${({ textLeft }) => (textLeft ? '0' : '33%')};
  }

  @media (min-width: 2700px) {
    margin-left: ${({ textLeft }) => (textLeft ? '0' : '31%')};
  }
`

export const IntroContainer = styled.div<{ textUp?: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin: 0;

  @media (min-width: ${breakpoints.minDesktop}) {
    margin-top: ${({ textUp }) => (textUp ? '0' : '15%')};
    transition: all 0.4s ease-out 0.4s;
  }
`

export const IntroHeadline = styled(H1)`
  font-size: calc(1rem + 4vw);
  line-height: calc(0.5rem + 10vw); // 1.5em;
  width: 100%;
  mix-blend-mode: difference;
  z-index: 250;
`

export const VideoHeadline = styled(H1)`
  display: contents;
  font-size: calc(2rem + 8vw);
  line-height: calc(0.5rem + 10vw); // 1.5em;
  width: 100%;
  mix-blend-mode: difference;
  z-index: 250;
`

export const IntroMask = styled.div<{ open?: boolean }>`
  position: absolute;
  background: ${colors.grey};
  top: -120px;
  left: 0;
  height: calc(120px + 100vh);
  width: 100%;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-101vh)')};
  transition: transform 1s cubic-bezier(0.75, 0, 0.25, 1); // cubic-bezier(0.75, 0.25, 0.5, 1);
  z-index: 200;
`

type IntroRowProps = {
  noHeight?: boolean
}

export const IntroRow = styled.div<IntroRowProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ noHeight }) => noHeight && '0'};
  margin: ${({ noHeight }) => (noHeight ? '0' : '10px')} 0;
`

type IntroPixelProps = {
  visible?: boolean
  color?: string
}

export const IntroPixel = styled.div<IntroPixelProps>`
  width: 0.5vw;
  height: 0.5vw;
  background-color: ${({ visible, color }) =>
    visible && color ? color : colors.transparent};
  mix-blend-mode: difference;
  z-index: 250;

  @media (min-width: ${breakpoints.biggerDesktop}) {
    width: 0.4vw;
    height: 0.4vw;
  }
`

export const ChangingText = styled.div`
  text-align: right;
  width: 100%;
  padding-right: 80px;

  @media (min-width: ${breakpoints.biggerDesktop}) {
    padding-right: 100px;
  }
`

export const HeadlineVisibility = styled.span<{ visible?: boolean }>`
  opacity: ${({ visible }) => (visible ? '1' : '0')};
`

export const VideoParallax = styled(FullWidthSection)`
  position: relative;
  width: 100vw;
  height: 123vh;
  background-color: transparent;
  overflow: hidden;
`

export const PlayButtonIconStyled = styled(PlayButtonIcon)`
  width: 108px;
  height: 108px;
`

export const VideoText = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 400;
`
