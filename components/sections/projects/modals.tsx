import { Dispatch, FC, SetStateAction } from 'react'
import { colors } from '../../../styles/theme'
import { H2 } from '../../atomic/H2'
import { H5 } from '../../atomic/H5'
import { Typography, TypographyType } from '../../atomic/Typography'
import { Modal } from '../../layout/modal/Modal'
import {
  ModalContentContainer,
  ModalHeadingColumn,
  ModalListColumn,
  ModalListItem,
  ModalListItemNumber,
} from './styled'

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
  const contentIpsum = (
    <ModalContentContainer>
      <ModalHeadingColumn>
        <H2>
          Bacon ipsum dolor sit amet drumstick turkey chicken, tail venison beef
          tenderloin bacon meatloaf.
        </H2>
      </ModalHeadingColumn>

      <ModalListColumn>
        <ModalListItem>
          <ModalListItemNumber>1</ModalListItemNumber>

          <Typography type={TypographyType.P1} color={colors.black70}>
            Cupcake ipsum dolor sit amet carrot cake liquorice. Dragée oat cake
            cotton candy jelly pie cheesecake soufflé macaroon.
          </Typography>
        </ModalListItem>

        <ModalListItem>
          <ModalListItemNumber>2</ModalListItemNumber>

          <Typography type={TypographyType.P1} color={colors.black70}>
            Cheese ipsum dolor sit amet dolcelatte parmesan mascarpone. Airedale
            caerphilly blue castello cheese triangles melted cheese. Cheese and
            wine cheese on toast pecorino.
          </Typography>
        </ModalListItem>

        <ModalListItem>
          <ModalListItemNumber>3</ModalListItemNumber>

          <Typography type={TypographyType.P1} color={colors.black70}>
            Fish ipsum dolor sit amet tuna salmon yellowtail kingfish demoiselle
            woody sculpin lungfish Black angelfish flying gurnard. Pike red
            snapper black mackerel velvetfish longfin clownfish garden eel.
          </Typography>
        </ModalListItem>

        <ModalListItem>
          <ModalListItemNumber>1</ModalListItemNumber>

          <Typography type={TypographyType.P1} color={colors.black70}>
            Cupcake ipsum dolor sit amet carrot cake liquorice. Dragée oat cake
            cotton candy jelly pie cheesecake soufflé macaroon.
          </Typography>
        </ModalListItem>

        <ModalListItem>
          <ModalListItemNumber>2</ModalListItemNumber>

          <Typography type={TypographyType.P1} color={colors.black70}>
            Cheese ipsum dolor sit amet dolcelatte parmesan mascarpone. Airedale
            caerphilly blue castello cheese triangles melted cheese. Cheese and
            wine cheese on toast pecorino.
          </Typography>
        </ModalListItem>

        <ModalListItem>
          <ModalListItemNumber>3</ModalListItemNumber>

          <Typography type={TypographyType.P1} color={colors.black70}>
            Fish ipsum dolor sit amet tuna salmon yellowtail kingfish demoiselle
            woody sculpin lungfish Black angelfish flying gurnard. Pike red
            snapper black mackerel velvetfish longfin clownfish garden eel.
          </Typography>
        </ModalListItem>
        <ModalListItem>
          <ModalListItemNumber>1</ModalListItemNumber>

          <Typography type={TypographyType.P1} color={colors.black70}>
            Cupcake ipsum dolor sit amet carrot cake liquorice. Dragée oat cake
            cotton candy jelly pie cheesecake soufflé macaroon.
          </Typography>
        </ModalListItem>

        <ModalListItem>
          <ModalListItemNumber>2</ModalListItemNumber>

          <Typography type={TypographyType.P1} color={colors.black70}>
            Cheese ipsum dolor sit amet dolcelatte parmesan mascarpone. Airedale
            caerphilly blue castello cheese triangles melted cheese. Cheese and
            wine cheese on toast pecorino.
          </Typography>
        </ModalListItem>

        <ModalListItem>
          <ModalListItemNumber>3</ModalListItemNumber>

          <Typography type={TypographyType.P1} color={colors.black70}>
            Fish ipsum dolor sit amet tuna salmon yellowtail kingfish demoiselle
            woody sculpin lungfish Black angelfish flying gurnard. Pike red
            snapper black mackerel velvetfish longfin clownfish garden eel.
          </Typography>
        </ModalListItem>
      </ModalListColumn>
    </ModalContentContainer>
  )

  return (
    <>
      <Modal
        isVisible={filmModalVisible}
        onCloseRequest={() => setFilmModalVisible?.(false)}
      >
        <H5>Film</H5>
        {contentIpsum}
      </Modal>

      <Modal
        isVisible={advertisementModalVisible}
        onCloseRequest={() => setAdvertisementModalVisible?.(false)}
      >
        <H5>Advertisement</H5>
        {contentIpsum}
      </Modal>
    </>
  )
}
