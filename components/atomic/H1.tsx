import React, { FC } from 'react'
import styled from 'styled-components'
import { typography, breakpoints, colors } from '../../styles/theme'

type H1Props = {
  id?: string
  className?: string
  color?: string
  blendDifference?: boolean
  mediumFontWeight?: boolean
  marginSize?: string
  textAlign?: 'center' | 'left' | 'right'
  contentEditable?: boolean
}

type H1StyledProps = Pick<
  H1Props,
  'color' | 'blendDifference' | 'mediumFontWeight' | 'marginSize' | 'textAlign'
>

const H1Styled = styled.h1<H1StyledProps>`
  font-size: ${typography.fontSize.h1};
  line-height: ${typography.lineHeight.h1};
  color: ${({ color }) => color};
  mix-blend-mode: ${({ blendDifference }) => blendDifference && 'difference'}
  text-align: ${({ textAlign }) => textAlign};
  padding: 0;
  margin: ${({ marginSize }) => (marginSize ? marginSize : 0)} 0;
  font-weight: ${({ mediumFontWeight }) =>
    mediumFontWeight
      ? typography.fontWeight.medium
      : typography.fontWeight.light};
  z-index: 1;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.h1};
    line-height: ${typography.lineHeight.desktop.h1};
  }
`

export const H1: FC<H1Props> = ({
  id,
  className,
  color = colors.black,
  blendDifference,
  marginSize,
  textAlign,
  contentEditable,
  children,
}) => {
  const commonProps = {
    className,
    color,
    blendDifference,
    marginSize,
    textAlign,
    contentEditable,
  }

  return (
    <H1Styled id={id} {...commonProps}>
      {children}
    </H1Styled>
  )
}
