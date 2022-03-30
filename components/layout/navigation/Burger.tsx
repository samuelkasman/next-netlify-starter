import React, { Dispatch, FC, SetStateAction } from 'react'

import { BurgerStyled } from './styled'

type BurgerProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const Burger: FC<BurgerProps> = ({ open, setOpen }) => {
  return (
    <>
      <BurgerStyled open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyled>
    </>
  )
}
