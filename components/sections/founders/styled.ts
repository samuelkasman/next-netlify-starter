import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles/theme'
import { Typography } from '../../atomic/Typography'

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
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

export const TextColumn = styled.div`
  display: flex;
  flex: 50%;
  flex-direction: column;
  align-items: flex-start;
  margin: auto 0;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding-right: 120px;
    justify-content: space-between;
  }

  @media (min-width: ${breakpoints.fullWidth}) {
    margin: auto 0 auto 200px;
  }
`

export const Heading = styled(Typography)`
  font-size: 40px;
  line-height: 48px;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: calc(1rem + 3vw);
    line-height: 1.15em;
    max-width: 600px;
  }

  @media (min-width: ${breakpoints.fullWidth}) {
    max-width: 1200px;
  }
`

export const Paragraph = styled(Typography)`
  font-size: 18px;
  line-height: 28px;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: calc(1rem + 0.5vw);
    line-height: 1.5em;
    max-width: 600px;
  }
`

export const ImgColumn = styled.div`
  display: flex;
  flex: 50%;
  justify-content: center;
  align-items: center;
`

export const ImgStyled = styled.img`
  width: calc(3rem + 40vw);
  height: auto;

  @media (min-width: ${breakpoints.minDesktop}) {
    width: calc(1rem + 40vw);
  }
`
