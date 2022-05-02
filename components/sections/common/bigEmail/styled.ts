import styled from 'styled-components'
import { breakpoints } from '../../../../styles/theme'
import { HiIllustration } from '../../../atomic/illustrations/HiIllustration'
import { Typography } from '../../../atomic/Typography'

export const Container = styled.div<{ inView?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  hyphens: none;
  min-height: 500px;
  width: 100%;
  margin: 0 auto;

  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) => (inView ? 'translateY(0)' : 'translateY(5%)')};
  transition: all 1s ease-out;

  @media (min-width: ${breakpoints.minDesktop}) {
    height: 110vh;
    padding: 160px 0;
  }
`

export const Title = styled(Typography)`
  font-size: 18px;
  line-height: 28px;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: calc(0.6rem + 1vw);
    line-height: 3em;
    max-width: 810px;
  }

  @media (min-width: ${breakpoints.fullWidth}) {
    max-width: 100%;
  }
`

export const Main = styled(Typography)`
  font-size: 40px;
  line-height: 48px;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: calc(1rem + 3vw);
    line-height: 1.15em;
    max-width: 1020px;
  }

  @media (min-width: ${breakpoints.fullWidth}) {
    max-width: 100%;
  }
`

export const HiIllustrationStyled = styled(HiIllustration)`
  max-width: 100px;
  height: auto;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.minDesktop}) {
    flex-shrink: 0;
    max-width: 500px;
    margin: 0 10% 100px auto;
  }
`
