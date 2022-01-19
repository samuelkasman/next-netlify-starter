import { FC, MutableRefObject } from 'react'
import styled, { css } from 'styled-components'
import { breakpoints, colors, typography } from '../../styles/theme'

export enum TypographyType {
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
}

type TypographyProps = {
  className?: string
  type: TypographyType
  color?: string
  textAlign?: 'center' | 'left' | 'right'
  wordBreak?: 'normal' | 'break-word'
  inlineBlock?: boolean
  pixelFont?: boolean
  ref?: MutableRefObject<null>
}

type StyledTypography = Pick<
  TypographyProps,
  'color' | 'textAlign' | 'wordBreak' | 'inlineBlock' | 'pixelFont'
>

const commonCss = css<StyledTypography>`
  display: ${({ inlineBlock }) => (inlineBlock ? 'inline-block' : 'inline')};
  font-family: ${({ pixelFont }) =>
    pixelFont
      ? typography.fontFamily.alternate
      : typography.fontFamily.default};
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

const H1 = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.h1};
  line-height: ${typography.lineHeight.h1};
  font-weight: ${typography.fontWeight.light};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.h1};
    line-height: ${typography.lineHeight.desktop.h1};
  }
`

const H2 = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.h2};
  line-height: ${typography.lineHeight.h2};
  font-weight: ${typography.fontWeight.light};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.h2};
    line-height: ${typography.lineHeight.desktop.h2};
  }
`

const H3 = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.h3};
  line-height: ${typography.lineHeight.h3};
  font-weight: ${typography.fontWeight.light};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.h3};
    line-height: ${typography.lineHeight.desktop.h3};
  }
`

const H4 = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.h4};
  line-height: ${typography.lineHeight.h4};
  font-weight: ${typography.fontWeight.light};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.h4};
    line-height: ${typography.lineHeight.desktop.h4};
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
      case TypographyType.H1:
        return <H1 {...commonProps}>{children}</H1>
      case TypographyType.H2:
        return <H2 {...commonProps}>{children}</H2>
      case TypographyType.H3:
        return <H3 {...commonProps}>{children}</H3>
      case TypographyType.H4:
        return <H4 {...commonProps}>{children}</H4>
      default:
        return <P1 {...commonProps}>{children}</P1>
    }
  })(type)
}
