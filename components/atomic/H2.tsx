import React, { FC } from 'react'
import styled from 'styled-components'
import { typography, breakpoints, colors } from '../../styles/theme'

type H2Props = {
  id?: string
  className?: string
  color?: string
  marginSize?: string
  textAlign?: 'center' | 'left' | 'right'
}

const H2Styled = styled.h2<Pick<H2Props, 'color' | 'marginSize' | 'textAlign'>>`
  font-size: ${typography.fontSize.h2};
  line-height: ${typography.lineHeight.h2};
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
    font-size: ${typography.fontSize.desktop.h2};
    line-height: ${typography.lineHeight.desktop.h2};
  }
`

export const H2: FC<H2Props> = ({
  id,
  className,
  color = colors.black,
  marginSize,
  textAlign,
  children,
}) => {
  const commonProps = { className, color, marginSize, textAlign }

  return (
    <H2Styled id={id} {...commonProps}>
      {children}
    </H2Styled>
  )
}
