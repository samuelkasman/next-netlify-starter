import React, { FC, useState } from 'react'
import { colors } from '../../../styles/theme'
import { H1 } from '../../atomic/H1'
import { PixelFont, Typography, TypographyType } from '../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { Modals } from './modals'
import {
  Container,
  AdPanel,
  FilmPanel,
  PanelTitle,
  PlusIconStyled,
} from './styled'

export const Projects: FC = (): JSX.Element => {
  const [filmModalVisible, setFilmModalVisible] = useState(false)
  const [advertisementModalVisible, setAdvertisementModalVisible] =
    useState(false)

  return (
    <>
      <FullWidthSection bgColor={colors.black}>
        {/* <FullWidthInner noPadding> */}
        <Container>
          <FilmPanel onClick={() => setFilmModalVisible(true)}>
            <PanelTitle color={colors.white}>
              Fil<PixelFont>m</PixelFont>
            </PanelTitle>

            <div>
              <PlusIconStyled />

              <Typography
                type={TypographyType.P1}
                color={colors.white}
                inlineBlock
              >
                More about film
              </Typography>
            </div>
          </FilmPanel>

          <AdPanel onClick={() => setAdvertisementModalVisible(true)}>
            <PanelTitle color={colors.white}>
              Adve<PixelFont>rt</PixelFont>isemen<PixelFont>t</PixelFont>
            </PanelTitle>

            <div>
              <PlusIconStyled />

              <Typography
                type={TypographyType.P1}
                color={colors.white}
                inlineBlock
              >
                More about advertisement
              </Typography>
            </div>
          </AdPanel>
        </Container>
        {/* </FullWidthInner> */}
      </FullWidthSection>

      <Modals
        filmModalVisible={filmModalVisible}
        setFilmModalVisible={setFilmModalVisible}
        advertisementModalVisible={advertisementModalVisible}
        setAdvertisementModalVisible={setAdvertisementModalVisible}
      />
    </>
  )
}
