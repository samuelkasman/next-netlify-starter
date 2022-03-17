import React, { Dispatch, FC, SetStateAction } from 'react'

import { BurgerStyled } from './styled'

type BurgerProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  isBlack?: boolean
}

export const Burger: FC<BurgerProps> = ({ open, setOpen, isBlack }) => {
  return (
    <>
      <BurgerStyled
        open={open}
        onClick={() => setOpen(!open)}
        isBlack={isBlack}
      >
        <div />
        <div />
        <div />
      </BurgerStyled>
    </>
  )
}
