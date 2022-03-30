import { useRef, useEffect, useState } from 'react'

export const useCursor = () => {
  const [isSmall, setIsSmall] = useState(true)
  const secondaryCursorRef = useRef(null)
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  })

  const followMouse = () => {
    positionRef.current.key = requestAnimationFrame(followMouse)

    const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } =
      positionRef.current

    if (!destinationX || !destinationY) {
      positionRef.current.destinationX = mouseX
      positionRef.current.destinationY = mouseY
    } else {
      positionRef.current.distanceX = (mouseX - destinationX) * 0.1
      positionRef.current.distanceY = (mouseY - destinationY) * 0.1

      if (
        Math.abs(positionRef.current.distanceX) +
          Math.abs(positionRef.current.distanceY) <
        0.1
      ) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        positionRef.current.destinationX += distanceX
        positionRef.current.destinationY += distanceY
      }
    }

    // @ts-ignore
    secondaryCursorRef!.current!.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
  }

  useEffect(() => {
    const container = document.getElementById('cursorContainerVideo')

    container?.addEventListener('mousemove', (event) => {
      const rect = container.getBoundingClientRect()

      positionRef.current.mouseX = event.clientX - 54
      positionRef.current.mouseY = event.clientY - 54 - rect.top
    })
    container?.addEventListener('mouseenter', () => setIsSmall(false))
    container?.addEventListener('mouseleave', () => setIsSmall(true))
  }, [])

  useEffect(() => {
    followMouse()
  }, [])

  return {
    secondaryCursorRef,
    isSmall,
  }
}
