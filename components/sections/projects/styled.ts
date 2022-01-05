import { PlusIcon } from './../../atomic/icons/PlusIcon'
import { H1 } from './../../atomic/H1'
import styled from 'styled-components'
import { breakpoints } from '../../../styles/theme'
import { Typography } from '../../atomic/Typography'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 300px;

  @media (min-width: ${breakpoints.minDesktop}) {
    flex-direction: row;
    min-height: 800px;
  }
`

export const FilmPanel = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  background-color: red;
  background-image: url('/img/film.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px;

  @media (min-width: ${breakpoints.minDesktop}) {
    width: 50%;
    padding: 40px;
    transition: width 1s;

    &:hover {
      width: 80%;
    }
  }
`

export const AdPanel = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  background-color: blue;
  background-image: url('/img/advertisement.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px;

  @media (min-width: ${breakpoints.minDesktop}) {
    width: 50%;
    padding: 40px;
    transition: width 1s;

    &:hover {
      width: 80%;
    }
  }
`

export const PanelTitle = styled(H1)`
  margin-top: auto;
`

export const PlusIconStyled = styled(PlusIcon)`
  margin-right: 12px;
`
