import React, { FC } from 'react'
import styled from 'styled-components'
import { typography, breakpoints, colors } from '../../styles/theme'

type H5Props = {
  id?: string
  className?: string
  color?: string
  mediumFontWeight?: boolean
  marginSize?: string
  textAlign?: 'center' | 'left' | 'right'
}

type H5StyledProps = Pick<
  H5Props,
  'color' | 'mediumFontWeight' | 'marginSize' | 'textAlign'
>

const H5Styled = styled.h5<H5StyledProps>`
  font-size: ${typography.fontSize.h5};
  line-height: ${typography.lineHeight.h5};
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
    font-size: ${typography.fontSize.desktop.h5};
    line-height: ${typography.lineHeight.desktop.h5};
  }
`

export const H5: FC<H5Props> = ({
  id,
  className,
  color = colors.black,
  marginSize,
  textAlign,
  children,
}) => {
  const commonProps = { className, color, marginSize, textAlign }

  return (
    <H5Styled id={id} {...commonProps}>
      {children}
    </H5Styled>
  )
}
