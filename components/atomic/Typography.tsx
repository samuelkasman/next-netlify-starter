import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { breakpoints, colors, typography } from '../../styles/theme'

export const PixelFont = styled.span`
  font-family: ${typography.fontFamily.alternate};
`

export enum TypographyType {
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
}

type TypographyProps = {
  className?: string
  type: TypographyType
  color?: string
  textAlign?: 'center' | 'left' | 'right'
  wordBreak?: 'normal' | 'break-word'
  inlineBlock?: boolean
}

type StyledTypography = Pick<
  TypographyProps,
  'color' | 'textAlign' | 'wordBreak' | 'inlineBlock'
>

const commonCss = css<StyledTypography>`
  display: ${({ inlineBlock }) => (inlineBlock ? 'inline-block' : 'inline')};
  font-family: ${typography.fontFamily.default};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  word-break: ${({ wordBreak }) => wordBreak};
`

const P1 = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.p1};
  line-height: ${typography.lineHeight.p1};
  font-weight: ${typography.fontWeight.light};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.p1};
    line-height: ${typography.lineHeight.desktop.p1};
  }
`

const P2 = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.p2};
  line-height: ${typography.lineHeight.p2};
  font-weight: ${typography.fontWeight.light};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.p2};
    line-height: ${typography.lineHeight.desktop.p2};
  }
`

const P3 = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.p3};
  line-height: ${typography.lineHeight.p3};
  font-weight: ${typography.fontWeight.light};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.p3};
    line-height: ${typography.lineHeight.desktop.p3};
  }
`

export const Typography: FC<TypographyProps> = ({
  className,
  children,
  type,
  color = colors.black,
  textAlign = 'left',
  wordBreak = 'normal',
  ...props
}) => {
  const commonProps = { className, color, textAlign, wordBreak, ...props }

  return ((type) => {
    switch (type) {
      case TypographyType.P1:
        return <P1 {...commonProps}>{children}</P1>
      case TypographyType.P2:
        return <P2 {...commonProps}>{children}</P2>
      case TypographyType.P3:
        return <P3 {...commonProps}>{children}</P3>
      default:
        return <P1 {...commonProps}>{children}</P1>
    }
  })(type)
}
