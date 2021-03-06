import styled from 'styled-components'
import { colors, breakpoints } from '../../../styles/theme'
import { Typography } from '../../atomic/Typography'

export const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 64px 0 20px;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 120px 0 40px;
    flex-direction: row;
  }
`

export const EmailText = styled(Typography)`
  font-size: 26px;
  line-height: 34px;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: 60px;
    line-height: 72px;
  }
`

export const MainRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 64px 0 20px;

  @media (min-width: ${breakpoints.minDesktop}) {
    flex-direction: row;
    padding: 48px 0 40px;
  }
`

export const HalfRow = styled.div<{ flexStart?: boolean }>`
  flex: 50%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ flexStart }) =>
    flexStart ? 'flex-start' : 'space-between'};
  align-items: flex-start;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const AStyled = styled.a`
  margin-bottom: 24px;

  @media (min-width: ${breakpoints.minDesktop}) {
    margin-bottom: 32px;
  }
`

export const MenuLink = styled(Typography)`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 32px;
  }
`

export const Address = styled(Typography)`
  font-size: 17px;
  line-height: 28px;
`

export const AddressP = styled.p<{ black?: boolean }>`
  color: ${({ black }) => (black ? colors.black : colors.black70)};
  margin: 0;
`

export const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 64px 0 20px;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 48px 0 40px;
    flex-direction: row;
  }
`

export const SocialLink = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  margin-right: 30px;
`
