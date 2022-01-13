import { PlusIcon } from './../../atomic/icons/PlusIcon'
import { H1 } from './../../atomic/H1'
import styled, { css } from 'styled-components'
import { breakpoints, colors } from '../../../styles/theme'

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

export const CustomCursorWrapper = styled.div`
  display: none;

  @media (min-width: ${breakpoints.minDesktop}) {
    display: block;
  }

  svg {
    position: absolute;
    pointer-events: none;
    transform: translate3d(0, 0, 0);
    z-index: 999;
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
    transition: width 2s;

    &:hover {
      width: 52.5%;
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

export const PanelModalToggle = styled.div`
  z-index: 9999;
`

export const PlusIconStyled = styled(PlusIcon)`
  margin-right: 12px;
`

export const ModalContentContainer = styled.div`
  height: 100%;
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
  position: relative;
  display: flex;
  flex: 50%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 40px 0;
  overflow-x: hidden;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 9px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.black70};
    border-radius: 10px;
  }

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
export const LogosContainer = styled.div<{ inView?: boolean }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 100px 0;
  margin: 0 auto;

  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1s ease-out;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 200px 0 120px;
  }
`

export const AllProjectsWrapper = styled.div<{ inView?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  margin-bottom: 100px;

  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) => (inView ? 'translateX(0)' : 'translateX(-10%)')};
  transition: all 1s ease-out;

  @media (min-width: ${breakpoints.minDesktop}) {
    margin-bottom: 200px;
  }
`
