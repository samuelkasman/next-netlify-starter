import { useRef, useEffect, useState } from 'react'

export const useCursor = () => {
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

  useEffect(() => {
    document
      .getElementById('cursorContainerVideo')
      ?.addEventListener('mousemove', (event) => {
        // @ts-ignore
        const rect = event?.target?.getBoundingClientRect()

        const { clientX, clientY } = event

        positionRef.current.mouseX =
          // @ts-ignore
          clientX - 36

        positionRef.current.mouseY = clientY - 36 - rect.top
      })
  }, [])

  const [isSmall, setIsSmall] = useState(true)

  useEffect(() => {
    document
      .getElementById('cursorContainerVideo')
      ?.addEventListener('mouseenter', () => {
        // @ts-ignore
        setIsSmall(false)
      })

    document
      .getElementById('cursorContainerVideo')
      ?.addEventListener('mouseleave', () => {
        // @ts-ignore
        setIsSmall(true)
      })
  }, [])

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse)

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current

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

    followMouse()
  }, [])

  return {
    secondaryCursorRef,
    isSmall,
  }
}
