import { Dispatch, FC, SetStateAction } from 'react'
import { Modal } from '../../layout/modal/Modal'

type Props = {
  filmModalVisible?: boolean
  advertisementModalVisible?: boolean
  setFilmModalVisible?: Dispatch<SetStateAction<boolean>>
  setAdvertisementModalVisible?: Dispatch<SetStateAction<boolean>>
}

export const Modals: FC<Props> = ({
  filmModalVisible = false,
  advertisementModalVisible = false,
  setFilmModalVisible,
  setAdvertisementModalVisible,
}) => {
  return (
    <>
      {filmModalVisible && (
        <Modal onCloseRequest={() => setFilmModalVisible?.(false)} fullWidth>
          muhehaha
        </Modal>
      )}

      {advertisementModalVisible && (
        <Modal
          onCloseRequest={() => setAdvertisementModalVisible?.(false)}
          fullWidth
        >
          mahahehe
        </Modal>
      )}
    </>
  )
}
