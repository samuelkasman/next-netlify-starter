import { PlusIcon } from './../../atomic/icons/PlusIcon'
import { H1 } from './../../atomic/H1'
import styled, { css } from 'styled-components'
import { breakpoints, colors } from '../../../styles/theme'

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

const PanelCss = css`
  cursor: url('/img/cursorArrowTopRight.png') 50 50, pointer;
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
    transition: width 1s;

    &:hover {
      width: 80%;
    }
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

export const PlusIconStyled = styled(PlusIcon)`
  margin-right: 12px;
`

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  @media (min-width: ${breakpoints.minDesktop}) {
    flex-direction: row;
    padding: 120px 0;
  }
`

export const ModalHeadingColumn = styled.div`
  display: flex;
  flex: 50%;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 0 120px 0 0;
  }
`

export const ModalListColumn = styled.ul`
  display: flex;
  flex: 50%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 40px 0;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 0 120px 0 0;
  }
`

export const ModalListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 16px 0;

  @media (min-width: ${breakpoints.minDesktop}) {
    flex-direction: row;
    align-items: center;
    margin: 24px 0;
  }
`

export const ModalListItemNumber = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 1px;
  width: 56px;
  height: 56px;
  border: 1px solid ${colors.black30};
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.minDesktop}) {
    margin-right: 40px;
    margin-bottom: 0;
  }
`

//logos
export const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 100px 0;
  margin: 0 auto;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 200px 0 120px;
  }
`

export const AllProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 0 100px 0;
`