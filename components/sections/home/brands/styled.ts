import { PlusIcon } from '../../../atomic/icons/PlusIcon'
import styled from 'styled-components'
import { breakpoints } from '../../../../styles/theme'

export const PlusIconStyled = styled(PlusIcon)`
  margin-right: 12px;
`

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
  padding-bottom: 0 0 100px;

  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) => (inView ? 'translateY(0)' : 'translateY(5%)')};
  transition: all 1s ease-out;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding-bottom: 200px;
  }
`
