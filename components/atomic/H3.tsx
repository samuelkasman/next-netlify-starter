import React, { FC } from 'react'
import styled from 'styled-components'
import { typography, breakpoints, colors } from '../../styles/theme'

type H3Props = {
  id?: string
  className?: string
  color?: string
  mediumFontWeight?: boolean
  marginSize?: string
  textAlign?: 'center' | 'left' | 'right'
}

type H3StyledProps = Pick<
  H3Props,
  'color' | 'mediumFontWeight' | 'marginSize' | 'textAlign'
>

const H3Styled = styled.h3<H3StyledProps>`
  font-size: ${typography.fontSize.h3};
  line-height: ${typography.lineHeight.h3};
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
    font-size: ${typography.fontSize.desktop.h3};
    line-height: ${typography.lineHeight.desktop.h3};
  }
`

export const H3: FC<H3Props> = ({
  id,
  className,
  color = colors.black,
  marginSize,
  textAlign,
  children,
}) => {
  const commonProps = { className, color, marginSize, textAlign }

  return (
    <H3Styled id={id} {...commonProps}>
      {children}
    </H3Styled>
  )
}
