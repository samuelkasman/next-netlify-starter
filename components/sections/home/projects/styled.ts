import { PlusIcon } from '../../../atomic/icons/PlusIcon'
import { H1 } from '../../../atomic/H1'
import styled, { css } from 'styled-components'
import { breakpoints } from '../../../../styles/theme'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 300px;
  overflow: hidden;

  @media (min-width: ${breakpoints.minDesktop}) {
    flex-direction: row;
    min-height: 800px;
  }
`

export const CustomCursorWrapper = styled.div<{ isSmall?: boolean }>`
  position: absolute;
  display: none;
  z-index: 500;

  @media (min-width: ${breakpoints.minDesktop}) {
    display: block;
  }

  svg {
    position: absolute;
    pointer-events: none;
    transform: translate3d(0, 0, 0);
    z-index: 999;

    ${({ isSmall }) =>
      isSmall &&
      css`
        height: 0;
        width: 0;
        margin-left: 72px;
        margin-top: 72px;
      `}

    transition: all 0.5s ease-out;
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
    padding: 40px;
  }
`

export const FilmPanel = styled.div`
  ${PanelCss};
  background-image: url('/img/film.png');
`

export const AdPanel = styled.div`
  ${PanelCss};
  background-image: url('/img/advertisement.png');
`

export const PanelTitle = styled(H1)`
  margin-top: auto;
`

export const PanelModalToggle = styled.div`
  z-index: 100;
`

export const PlusIconStyled = styled(PlusIcon)`
  margin-right: 12px;
`
