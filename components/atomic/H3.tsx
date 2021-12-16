import React, { FC } from 'react'
import styled from 'styled-components'
import { typography, breakpoints, colors } from '../../styles/theme'

type H3Props = {
  id?: string
  className?: string
  color?: string
  marginSize?: string
  textAlign?: 'center' | 'left' | 'right'
}

const H3Styled = styled.h3<Pick<H3Props, 'color' | 'marginSize' | 'textAlign'>>`
  font-size: ${typography.fontSize.h3};
  line-height: ${typography.lineHeight.h3};
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
