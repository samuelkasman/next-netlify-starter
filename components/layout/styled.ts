import styled, { css } from 'styled-components'
import {
  typography,
  colors,
  breakpoints,
  elements,
  misc,
} from '../../styles/theme'

// Header
export const HeaderStyled = styled.header<{ isScrolled?: boolean }>`
  line-height: 0;
  background-color: ${colors.transparent};
  height: ${elements.navigationHeight};
  width: 100%;
  padding: 21px 20px;
  z-index: 30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-out;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 18px 40px;

    position: sticky;
    top: 0;

    ${({ isScrolled }) =>
      isScrolled &&
      css`
        background-color: ${colors.orange_bg_light};
        box-shadow: ${misc.headerShadow};
      `};
  }
`

export const LinkWrapper = styled.div`
  display: none;

  @media (min-width: ${breakpoints.minDesktop}) {
    display: flex;
    flex-direction: row;
  }
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: ${typography.fontSize.desktop.linkPrimary};
  line-height: ${typography.lineHeight.desktop.linkPrimary};
  font-weight: ${typography.fontWeight.bold};
  margin-right: 24px;
`

// Footer
export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: ${typography.fontSize.bodyMicro};
  line-height: ${typography.lineHeight.bodyMicro};
  font-weight: ${typography.fontWeight.normal};
  color: ${colors.gray_3};
  width: 100%;
  padding: 0 40px;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 0 120px;
  }
`

export const Row = styled.div`
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

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 256px;
  margin-top: 40px;

  @media (min-width: ${breakpoints.minDesktop}) {
    margin-top: 0;
  }
`

export const Legal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: ${breakpoints.minDesktop}) {
    flex-direction: row-reverse;
    align-items: flex-end;
    padding: 40px 0;
  }
`

export const LegalLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 24px;
  margin: 0;

  @media (min-width: ${breakpoints.minDesktop}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 0;
  }
`

export const LegalLink = styled.li<{ noBullet?: boolean }>`
  list-style: none;
  padding: 12px 0;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 0;

    ${({ noBullet }) =>
      !noBullet &&
      css`
        :before {
          content: '';
          display: inline-block;
          position: relative;
          top: -3px;
          width: 3px;
          height: 3px;
          background-color: ${colors.gray_3};
          border-radius: 50%;
          margin: 0 16px;
        }
      `};
  }
`

export const Copyright = styled.div`
  padding: 24px 0 32px;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 0 24px 0 0;
  }
`
