import styled, { keyframes } from 'styled-components'
import { breakpoints, colors } from '../../../styles/theme'
import { BoomIllustration } from '../../atomic/illustrations/BoomIllustration'
import { Typography } from '../../atomic/Typography'

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  min-height: 500px;
  width: 100%;
  padding: 70px 0;

  @media (min-width: ${breakpoints.minDesktop}) {
    flex-direction: row;
    min-height: 800px;
    padding: 160px 0;
  }
`

export const Container2 = styled.div<{ inView?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  width: 100%;

  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) => (inView ? 'translateY(0)' : 'translateY(5%)')};
  transition: all 1s ease-out;

  @media (min-width: ${breakpoints.minDesktop}) {
    min-height: 800px;
    padding: 160px 0;
  }
`

export const TextWrapper = styled.div<{ inView?: boolean }>`
  color: ${colors.white};
  margin: auto 0;

  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) => (inView ? 'translateX(0)' : 'translateX(-10%)')};
  transition: all 1s ease-out;
`

const heartBeat = keyframes`
  0% {
    transform: scale( 1 );
  }
  20% {
    transform: scale( 1.1 );
  }
  40% {
    transform: scale( 1 );
  }
  60% {
    transform: scale( 1.2 );
  }
  80% {
    transform: scale( 1 );
  }
  100% {
    transform: scale( 1 );
  }
`

export const BoomIllustrationStyled = styled(BoomIllustration)`
  max-width: 100px;
  height: auto;
  margin: 0 auto auto 0;
  animation: ${heartBeat} 3s infinite;

  @media (min-width: ${breakpoints.minDesktop}) {
    flex-shrink: 0;
    max-width: 300px;
    margin: 0 0 auto;
  }
`

export const BoomText = styled(Typography)`
  font-size: 40px;
  line-height: 48px;

  @media (min-width: ${breakpoints.minDesktop}) {
    /* font-size: 72px; */
    /* line-height: 80px; */
    font-size: calc(1rem + 3vw);
    line-height: 1.15em;
    max-width: 810px;
  }

  @media (min-width: ${breakpoints.fullWidth}) {
    max-width: 100%;
  }
`

export const BoomText2 = styled(Typography)`
  font-size: 18px;
  line-height: 28px;

  @media (min-width: ${breakpoints.minDesktop}) {
    /* font-size: 24px;
    line-height: 32px; */
    font-size: calc(0.6rem + 1vw);
    line-height: 3em;
    max-width: 810px;
  }

  @media (min-width: ${breakpoints.fullWidth}) {
    max-width: 100%;
  }
`

export const BoomText3 = styled(Typography)`
  font-size: 40px;
  line-height: 48px;

  @media (min-width: ${breakpoints.minDesktop}) {
    /* font-size: 56px;
    line-height: 68px; */
    font-size: calc(1rem + 3vw);
    line-height: 1.15em;
    max-width: 1020px;
  }

  @media (min-width: ${breakpoints.fullWidth}) {
    max-width: 100%;
  }
`
