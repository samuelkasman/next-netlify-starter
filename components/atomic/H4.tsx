import React, { FC } from 'react'
import styled from 'styled-components'
import { typography, breakpoints, colors } from '../../styles/theme'

type H4Props = {
  id?: string
  className?: string
  color?: string
  mediumFontWeight?: boolean
  marginSize?: string
  textAlign?: 'center' | 'left' | 'right'
}

type H4StyledProps = Pick<
  H4Props,
  'color' | 'mediumFontWeight' | 'marginSize' | 'textAlign'
>

const H4Styled = styled.h4<H4StyledProps>`
  font-size: ${typography.fontSize.h4};
  line-height: ${typography.lineHeight.h4};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  padding: 0;
  margin: ${({ marginSize }) => (marginSize ? marginSize : 0)} 0;
  font-weight: ${({ mediumFontWeight }) =>
    mediumFontWeight
      ? typography.fontWeight.medium
      : typography.fontWeight.light};
  z-index: 1;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: 60px;
    line-height: 66px;
    padding: 0;
  }

  @media (min-width: ${breakpoints.bigDesktop}) {
    font-size: ${typography.fontSize.desktop.h4};
    line-height: ${typography.lineHeight.desktop.h4};
  }
`

export const H4: FC<H4Props> = ({
  id,
  className,
  color = colors.black,
  marginSize,
  textAlign,
  children,
}) => {
  const commonProps = { className, color, marginSize, textAlign }

  return (
    <H4Styled id={id} {...commonProps}>
      {children}
    </H4Styled>
  )
}
