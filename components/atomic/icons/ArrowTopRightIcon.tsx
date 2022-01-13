import React, { FC, MutableRefObject } from 'react'

type Props = {
  className?: string
  ref?: MutableRefObject<null>
}

export const ArrowTopRightIcon: FC<Props> = ({ className, ref = null }) => (
  <svg
    ref={ref}
    className={className}
    width="144"
    height="144"
    viewBox="0 0 144 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="1" width="142" height="142" stroke="white" strokeWidth="2" />
    <rect x="72" y="68.5" width="3.5" height="3.5" fill="white" />
    <rect x="58" y="82.5" width="3.5" height="3.5" fill="white" />
    <rect x="51" y="89.5" width="3.5" height="3.5" fill="white" />
    <rect x="75.5" y="65" width="3.5" height="3.5" fill="white" />
    <rect x="61.5" y="79" width="3.5" height="3.5" fill="white" />
    <rect x="54.5" y="86" width="3.5" height="3.5" fill="white" />
    <rect x="79" y="61.5" width="3.5" height="3.5" fill="white" />
    <rect x="65" y="75.5" width="3.5" height="3.5" fill="white" />
    <rect x="82.5" y="58" width="3.5" height="3.5" fill="white" />
    <rect x="68.5" y="72" width="3.5" height="3.5" fill="white" />
    <rect x="75.5" y="51" width="3.5" height="3.5" fill="white" />
    <rect x="79" y="51" width="3.5" height="3.5" fill="white" />
    <rect x="68.5" y="51" width="3.5" height="3.5" fill="white" />
    <rect x="61.5" y="51" width="3.5" height="3.5" fill="white" />
    <rect x="54.5" y="51" width="3.5" height="3.5" fill="white" />
    <rect x="82.5" y="51" width="3.5" height="3.5" fill="white" />
    <rect x="72" y="51" width="3.5" height="3.5" fill="white" />
    <rect x="65" y="51" width="3.5" height="3.5" fill="white" />
    <rect x="58" y="51" width="3.5" height="3.5" fill="white" />
    <rect x="86" y="51" width="3.5" height="3.5" fill="white" />
    <rect x="89.5" y="51" width="3.5" height="3.5" fill="white" />
    <rect x="89.5" y="58" width="3.5" height="3.5" fill="white" />
    <rect x="89.5" y="68.5" width="3.5" height="3.5" fill="white" />
    <rect x="89.5" y="75.5" width="3.5" height="3.5" fill="white" />
    <rect x="89.5" y="82.5" width="3.5" height="3.5" fill="white" />
    <rect x="89.5" y="61.5" width="3.5" height="3.5" fill="white" />
    <rect x="89.5" y="72" width="3.5" height="3.5" fill="white" />
    <rect x="89.5" y="79" width="3.5" height="3.5" fill="white" />
    <rect x="89.5" y="86" width="3.5" height="3.5" fill="white" />
    <rect x="89.5" y="65" width="3.5" height="3.5" fill="white" />
  </svg>
)
