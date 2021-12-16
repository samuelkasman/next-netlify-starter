import React, { FC } from 'react'
import styled from 'styled-components'
import { typography, breakpoints, colors } from '../../styles/theme'

type H4Props = {
  id?: string
  className?: string
  color?: string
  marginSize?: string
  textAlign?: 'center' | 'left' | 'right'
}

const H4Styled = styled.h4<Pick<H4Props, 'color' | 'marginSize' | 'textAlign'>>`
  font-size: ${typography.fontSize.h4};
  line-height: ${typography.lineHeight.h4};
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
