import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { breakpoints, colors, typography } from '../../styles/theme'

export enum TypographyType {
  BodyLarge = 'BodyLarge',
  BodyLargeBold = 'BodyLargeBold',
  BodyBig = 'BodyBig',
  BodyBigBold = 'BodyBigBold',
  BodyRegular = 'BodyRegular',
  BodySmall = 'BodySmall',
  BodyBold = 'BodyBold',
  BodySmallBold = 'BodySmallBold',
  BodyItalic = 'BodyItalic',
  BodySmallItalic = 'BodySmallItalic',
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

const BodyLarge = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.bodyLarge};
  line-height: ${typography.lineHeight.bodyLarge};
  font-weight: ${typography.fontWeight.normal};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.bodyLarge};
    line-height: ${typography.lineHeight.desktop.bodyLarge};
  }
`

const BodyLargeBold = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.bodyLarge};
  line-height: ${typography.lineHeight.bodyLarge};
  font-weight: ${typography.fontWeight.bold};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.bodyLarge};
    line-height: ${typography.lineHeight.desktop.bodyLarge};
  }
`

const BodyBig = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.bodyBig};
  line-height: ${typography.lineHeight.bodyBig};
  font-weight: ${typography.fontWeight.normal};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.bodyBig};
    line-height: ${typography.lineHeight.desktop.bodyBig};
  }
`

const BodyBigBold = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.bodyBig};
  line-height: ${typography.lineHeight.bodyBig};
  font-weight: ${typography.fontWeight.bold};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.bodyBig};
    line-height: ${typography.lineHeight.desktop.bodyBig};
  }
`

const BodyRegular = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.bodyRegular};
  line-height: ${typography.lineHeight.bodyRegular};
  font-weight: ${typography.fontWeight.normal};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.bodyRegular};
    line-height: ${typography.lineHeight.desktop.bodyRegular};
  }
`

const BodySmall = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.bodySmall};
  line-height: ${typography.lineHeight.bodySmall};
  font-weight: ${typography.fontWeight.normal};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.bodySmall};
    line-height: ${typography.lineHeight.desktop.bodySmall};
  }
`

const BodySmallBold = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.bodySmall};
  line-height: ${typography.lineHeight.bodySmall};
  font-weight: ${typography.fontWeight.bold};

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.bodySmall};
    line-height: ${typography.lineHeight.desktop.bodySmall};
  }
`

const BodyBold = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.bodyRegular};
  line-height: ${typography.lineHeight.bodyRegular};
  font-weight: ${typography.fontWeight.bold};
  letter-spacing: -0.01em;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.bodyRegular};
    line-height: ${typography.lineHeight.desktop.bodyRegular};
  }
`

const BodySmallItalic = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.bodySmall};
  line-height: ${typography.lineHeight.bodySmall};
  font-weight: ${typography.fontWeight.normal};
  font-style: italic;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.bodySmall};
    line-height: ${typography.lineHeight.desktop.bodySmall};
  }
`

const BodyItalic = styled.span<StyledTypography>`
  ${commonCss};
  font-size: ${typography.fontSize.bodyRegular};
  line-height: ${typography.lineHeight.bodyRegular};
  font-weight: ${typography.fontWeight.normal};
  font-style: italic;

  @media (min-width: ${breakpoints.minDesktop}) {
    font-size: ${typography.fontSize.desktop.bodyRegular};
    line-height: ${typography.lineHeight.desktop.bodyRegular};
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
      case TypographyType.BodySmall:
        return <BodySmall {...commonProps}>{children}</BodySmall>
      case TypographyType.BodyLarge:
        return <BodyLarge {...commonProps}>{children}</BodyLarge>
      case TypographyType.BodyLargeBold:
        return <BodyLargeBold {...commonProps}>{children}</BodyLargeBold>
      case TypographyType.BodyBig:
        return <BodyBig {...commonProps}>{children}</BodyBig>
      case TypographyType.BodyBigBold:
        return <BodyBigBold {...commonProps}>{children}</BodyBigBold>
      case TypographyType.BodySmallBold:
        return <BodySmallBold {...commonProps}>{children}</BodySmallBold>
      case TypographyType.BodyBold:
        return <BodyBold {...commonProps}>{children}</BodyBold>
      case TypographyType.BodySmallItalic:
        return <BodySmallItalic {...commonProps}>{children}</BodySmallItalic>
      case TypographyType.BodyItalic:
        return <BodyItalic {...commonProps}>{children}</BodyItalic>
      case TypographyType.BodyRegular:
      default:
        return <BodyRegular {...commonProps}>{children}</BodyRegular>
    }
  })(type)
}
