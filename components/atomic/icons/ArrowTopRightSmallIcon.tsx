import React, { FC } from 'react'

type Props = {
  className?: string
}

export const ArrowTopRightSmallIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 6H18V15" stroke="white" stroke-width="2.25" />
    <path d="M18 6L4.5 19.5" stroke="white" stroke-width="2.25" />
  </svg>
)
