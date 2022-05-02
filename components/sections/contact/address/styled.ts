import styled, { css } from 'styled-components'
import { breakpoints, colors } from '../../../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: ${breakpoints.minDesktop}) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

const PanelCss = css`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px;
  overflow: hidden;

  @media (min-width: ${breakpoints.minDesktop}) {
    width: 50%;
    min-height: 700px;
    padding: 40px;
  }
`

export const AddressWrapper = styled.div`
  ${PanelCss};
  justify-content: center;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding-left: 10%;
  }
`

export const DirectionsLink = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`

export const ImagePanel = styled.div`
  ${PanelCss};
  background-image: url('/img/address.png');
`
