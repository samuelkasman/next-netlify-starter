import { FullWidthSection } from './../../layout/pageLayout'
import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles/theme'
import { H1 } from '../../atomic/H1'

export const Intro = styled.div`
  display: flex;
  align-items: center;
  height: 85vh;
  width: 100%;
  background: ${colors.black};
`

type IntroContainerProps = {
  textLeft?: boolean
  textUp?: boolean
}

export const IntroContainer = styled.div<IntroContainerProps>`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  z-index: 300;
  margin: 0;

  @media (min-width: ${breakpoints.minDesktop}) {
    /* margin-left: ${({ textLeft }) => (textLeft ? '0' : '20%')}; */
    margin-top: ${({ textLeft }) => (textLeft ? '0' : '20%')};
    /* transition: margin-left 0.75s ease-in-out; */
    transition: margin-top 0.5s ease-in-out 0.6s;
  }
`

export const IntroHeadline = styled(H1)`
  font-size: calc(1rem + 4vw);
  line-height: 1.15em;
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
  transition: transform 1s cubic-bezier(0.75, 0.25, 0.5, 1);
  z-index: 200;
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
  mix-blend-mode: difference;
  z-index: 250;
`

export const HeadlineVisibility = styled.span<{ visible?: boolean }>`
  opacity: ${({ visible }) => (visible ? '1' : '0')};
`

export const VideoParallax = styled(FullWidthSection)`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`
