import { ReactElement, useState } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export const useHero = () => {
  const { scroll } = useLocomotiveScroll()

  const [openIntro, setOpenIntro] = useState(true)

  const initialPixelsVisibilityValues = new Array(40).fill(false)
  const finalPixelsVisibilityValues = [
    false, // 0
    false,
    false,
    false,
    true, // 4
    true, // 5
    false,
    true,
    false, // 8
    true,
    true, // 10
    true,
    true, // 12
    true,
    true,
    true, // 15
    true, // 16
    true,
    true,
    false,
    true, // 20
    false,
    true,
    false,
    false,
    false, // 25
    true,
    false,
    false,
    false,
    false, // 30
    false,
    false,
    false,
    false, // 34
    false,
    false,
    false,
    false,
    false,
    false, // 40
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
