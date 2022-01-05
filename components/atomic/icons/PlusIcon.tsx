import React, { FC } from 'react'

type Props = {
  className?: string
}

export const PlusIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="9" y="7" width="2" height="2" fill="white" />
    <rect x="1" y="7" width="2" height="2" fill="white" />
    <rect x="11" y="7" width="2" height="2" fill="white" />
    <rect x="13" y="7" width="2" height="2" fill="white" />
    <rect x="7" y="1" width="2" height="2" fill="white" />
    <rect x="7" y="9" width="2" height="2" fill="white" />
    <rect x="7" y="3" width="2" height="2" fill="white" />
    <rect x="7" y="11" width="2" height="2" fill="white" />
    <rect x="7" y="5" width="2" height="2" fill="white" />
    <rect x="7" y="13" width="2" height="2" fill="white" />
    <rect x="7" y="7" width="2" height="2" fill="white" />
  </svg>
)
