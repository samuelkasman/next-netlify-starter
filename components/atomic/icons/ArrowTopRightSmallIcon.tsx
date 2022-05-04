import React, { FC } from 'react'
import { colors } from '../../../styles/theme'

type Props = {
  className?: string
  color?: string
  size?: string
}

export const ArrowTopRightSmallIcon: FC<Props> = ({
  className,
  color = colors.white,
  size = '24',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 6H18V15" stroke={color} stroke-width="2.25" />
    <path d="M18 6L4.5 19.5" stroke={color} stroke-width="2.25" />
  </svg>
)
