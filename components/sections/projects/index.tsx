import React, { FC, useState } from 'react'
import { colors } from '../../../styles/theme'
import { AudiLogo } from '../../atomic/logos/AudiLogo'
import { BratislavaLogo } from '../../atomic/logos/BratislavaLogo'
import { IIHFLogo } from '../../atomic/logos/IIHFLogo'
import { RtvsLogo } from '../../atomic/logos/RtvsLogo'
import { TescoLogo } from '../../atomic/logos/TescoLogo'
import { VWLogo } from '../../atomic/logos/VWLogo'
import { PixelFont, Typography, TypographyType } from '../../atomic/Typography'
import { FullWidthSection, FullWidthInner } from '../../layout/pageLayout'
import { Modals } from './modals'
import {
  Container,
  AdPanel,
  FilmPanel,
  PanelTitle,
  PlusIconStyled,
  LogosContainer,
  AllProjectsWrapper,
} from './styled'

export const Projects: FC = (): JSX.Element => {
  const [filmModalVisible, setFilmModalVisible] = useState(false)
  const [advertisementModalVisible, setAdvertisementModalVisible] =
    useState(false)

  return (
    <>
      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner fullWidth noPadding>
          <Container>
            <FilmPanel>
              <PanelTitle color={colors.white}>
                Fil<PixelFont>m</PixelFont>
              </PanelTitle>

              <div onClick={() => setFilmModalVisible(true)}>
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

            <AdPanel>
              <PanelTitle color={colors.white}>
                Adve<PixelFont>rt</PixelFont>isemen<PixelFont>t</PixelFont>
              </PanelTitle>

              <div onClick={() => setAdvertisementModalVisible(true)}>
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
        </FullWidthInner>
      </FullWidthSection>

      <FullWidthSection bgColor={colors.black}>
        <FullWidthInner>
          <LogosContainer>
            <RtvsLogo />
            <BratislavaLogo />
            <VWLogo />
            <TescoLogo />
            <AudiLogo />
            <IIHFLogo />
          </LogosContainer>

          <AllProjectsWrapper>
            <PlusIconStyled />

            <Typography
              type={TypographyType.P1}
              color={colors.white}
              inlineBlock
            >
              All projects
            </Typography>
          </AllProjectsWrapper>
        </FullWidthInner>
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
