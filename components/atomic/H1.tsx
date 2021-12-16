import React, { FC } from 'react'
import styled from 'styled-components'
import { typography, breakpoints, colors } from '../../styles/theme'

type H1Props = {
  id?: string
  className?: string
  color?: string
  marginSize?: string
  textAlign?: 'center' | 'left' | 'right'
}

const H1Styled = styled.h1<Pick<H1Props, 'color' | 'marginSize' | 'textAlign'>>`
  font-size: ${typography.fontSize.h1};
  line-height: ${typography.lineHeight.h1};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  padding: 0 16px;
  margin: ${({ marginSize }) => (marginSize ? marginSize : 0)} 0;
  font-weight: ${typography.fontWeight.extraBold};
  z-index: 1;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: 60px;
    line-height: 66px;
    padding: 0;
  }

  @media (min-width: ${breakpoints.bigDesktop}) {
    font-size: ${typography.fontSize.desktop.h1};
    line-height: ${typography.lineHeight.desktop.h1};
  }
`

export const H1: FC<H1Props> = ({
  id,
  className,
  color = colors.black,
  marginSize,
  textAlign,
  children,
}) => {
  const commonProps = { className, color, marginSize, textAlign }

  return (
    <H1Styled id={id} {...commonProps}>
      {children}
    </H1Styled>
  )
}
