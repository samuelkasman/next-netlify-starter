import React, { FC, MutableRefObject } from 'react'

type Props = {
  className?: string
  ref?: MutableRefObject<null>
}

export const PlayButtonIcon: FC<Props> = ({ className, ref = null }) => (
  <svg
    ref={ref}
    className={className}
    width="144"
    height="144"
    viewBox="0 0 144 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="72" cy="72" r="72" fill="white" />
    <rect width="144" height="144" fill="black" />
    <path
      d="M63.3877 58.8807L82.0544 70.8807C82.8708 71.4055 82.8708 72.599 82.0544 73.1238L63.3877 85.1238C62.5004 85.6943 61.3334 85.0572 61.3334 84.0023V60.0023C61.3334 58.9474 62.5004 58.3103 63.3877 58.8807Z"
      fill="white"
    />
  </svg>
)
