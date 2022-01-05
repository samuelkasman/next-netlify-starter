import React, { FC, MouseEvent, useCallback, useEffect, useRef } from 'react'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import { colors } from '../../../styles/theme'

import {
  AdjustContent,
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
  fullWidth?: boolean
  noContentPadding?: boolean
}

export const Modal: FC<Props> = ({
  className,
  onCloseRequest,
  desktopMaxWidth = 1000,
  children,
  fullWidth = false,
  noContentPadding = false,
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
      <CloseButton
        type="button"
        onClick={(e) => onCloseRequest(e)}
        mobileColor={colors.black}
      />
      <ModalContainer
        className={className}
        ref={modal}
        desktopMaxWidth={desktopMaxWidth}
        data-cy="modal-container"
      >
        <ScrollLock />
        <TouchScrollable>
          <ModalContent
            fullWidth={fullWidth}
            noContentPadding={noContentPadding}
          >
            <AdjustContent
              fullWidth={fullWidth}
              noContentPadding={noContentPadding}
            >
              {children}
            </AdjustContent>
          </ModalContent>
        </TouchScrollable>
      </ModalContainer>
    </ModalOverlay>
  )
}
