import styled from 'styled-components'
import { breakpoints } from '../../../styles/theme'
import { Typography } from '../../atomic/Typography'

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  width: 100%;

  @media (min-width: ${breakpoints.minDesktop}) {
    min-height: 600px;
  }
`

export const WorkText = styled(Typography)`
  font-size: 96px;
  line-height: 104px;

  @media (min-width: ${breakpoints.minDesktop}) {
    /* font-size: 260px;
    line-height: 268px; */
    font-size: calc(1rem + 12vw);
    line-height: 1.5em;
  }
`
