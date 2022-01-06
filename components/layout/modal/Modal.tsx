import React, { FC, MouseEvent, useCallback, useEffect, useRef } from 'react'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import { CloseIcon } from '../../atomic/icons/CloseIcon'

import {
  CloseButton,
  DissmissArea,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './styled'

type Props = {
  className?: string
  onCloseRequest: (event?: MouseEvent) => void
  desktopMaxWidth?: number
  noContentPadding?: boolean
}

export const Modal: FC<Props> = ({
  className,
  onCloseRequest,
  desktopMaxWidth = 1000,
  children,
}) => {
  const modal = useRef(null)

  const handleKeyUp = useCallback(
    (e) => {
      const keys = {
        /* ESC key */
        27: () => {
          e.preventDefault()
          onCloseRequest(e)
          window.removeEventListener('keyup', handleKeyUp, false)
        },
      }

      // @ts-ignore
      if (keys[e.keyCode]) {
        // @ts-ignore
        keys[e.keyCode]()
      }
    },
    [onCloseRequest]
  )

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false)

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false)
    }
  }, [handleKeyUp])

  return (
    <ModalOverlay>
      <DissmissArea onClick={(e) => onCloseRequest(e)} />

      <ModalContainer
        className={className}
        ref={modal}
        desktopMaxWidth={desktopMaxWidth}
      >
        <CloseButton type="button" onClick={(e) => onCloseRequest(e)}>
          <CloseIcon />
        </CloseButton>

        <TouchScrollable>
          <ModalContent>{children}</ModalContent>
        </TouchScrollable>

        <ScrollLock />
      </ModalContainer>
    </ModalOverlay>
  )
}
