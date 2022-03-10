import { ReactElement, useState } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export const useHero = () => {
  const { scroll } = useLocomotiveScroll()

  const [openIntro, setOpenIntro] = useState(true)

  const initialPixelsVisibilityValues = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]
  const finalPixelsVisibilityValues = [
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
  ]

  const [pixelsVisibilityState, setPixelsVisibilityState] = useState(
    initialPixelsVisibilityValues
  )
  const [index, setIndex] = useState(0)

  const initialHeadlineText = null
  const [headlineText, setHeadlineText] = useState<ReactElement | null>(
    initialHeadlineText
  )
  const [headlineTextLeft, setHeadlineTextLeft] = useState(false)

  return {
    scroll,
    openIntro,
    setOpenIntro,
    initialPixelsVisibilityValues,
    finalPixelsVisibilityValues,
    pixelsVisibilityState,
    setPixelsVisibilityState,
    index,
    setIndex,
    headlineText,
    setHeadlineText,
    headlineTextLeft,
    setHeadlineTextLeft,
  }
}
