import styled from 'styled-components'
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
    padding: 160px 20px;
  }
`

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  width: 100%;

  @media (min-width: ${breakpoints.minDesktop}) {
    min-height: 800px;
    padding: 160px 20px;
  }
`

export const TextWrapper = styled.div`
  color: ${colors.white};
  margin: auto 0;
`

export const BoomIllustrationStyled = styled(BoomIllustration)`
  max-width: 100px;
  height: auto;
  margin: 0 auto auto 0;

  @media (min-width: ${breakpoints.minDesktop}) {
    max-width: 300px;
    margin: 0 0 auto;
  }
`

export const BoomText = styled(Typography)`
  font-size: 40px;
  line-height: 48px;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: 72px;
    line-height: 80px;
    max-width: 810px;
  }
`

export const BoomText2 = styled(Typography)`
  font-size: 18px;
  line-height: 28px;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: 24px;
    line-height: 32px;
    max-width: 810px;
  }
`

export const BoomText3 = styled(Typography)`
  font-size: 40px;
  line-height: 48px;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: 56px;
    line-height: 68px;
    max-width: 1020px;
  }
`
