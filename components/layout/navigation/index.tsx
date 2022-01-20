import React, { FC, ReactElement, useEffect, useState } from 'react'
import ScrollLock from 'react-scrolllock'
import { colors } from '../../../styles/theme'
import { H1 } from '../../atomic/H1'
import { BeOnMindLogo } from '../../atomic/logos/BeOnMindLogo'
import { TypographyType, Typography } from '../../atomic/Typography'
import { MenuLink } from '../../sections/footer/styled'
import { DefaultFont, Glitch, PixelFont } from '../../sections/styled'
import { Burger } from './Burger'
import {
  HeaderInner,
  HeaderStyled,
  HeadlineVisibility,
  Intro,
  IntroContainer,
  IntroMask,
  IntroPixel,
  IntroRow,
  LinkWrapper,
  MenuItem,
  MenuList,
  Overlay,
  Text,
} from './styled'

export const Navigation: FC = (): JSX.Element => {
  const [openIntro, setOpenIntro] = useState(true)
  const [open, setOpen] = useState(false)

  const initialPixelsVisibilityValues = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]
  const finalPixelsVisibilityValues = [
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]
  const [pixelsVisibilityState, setPixelsVisibilityState] = useState(
    initialPixelsVisibilityValues
  )
  const [index, setIndex] = useState(0)

  const initialHeadlineText = null
  const [headlineText, setHeadlineText] = useState<ReactElement | null>(
    initialHeadlineText
  )
  const [headlineTextLeft, setHeadlineTextLeft] = useState(false)

  useEffect(() => {
    let interval = setInterval(
      () => setIndex((i) => (i + 1) % initialPixelsVisibilityValues.length),
      150
    )

    let newState = [...pixelsVisibilityState]
    let item = newState[index]
    item = true
    newState[index] = item

    setPixelsVisibilityState(newState)

    let timeout: NodeJS.Timeout

    if (index > 17) {
      clearInterval(interval)

      setHeadlineText(
        <Glitch isHeadline>
          <DefaultFont data-text="B">B</DefaultFont>
          <PixelFont data-text="e">e</PixelFont>
          <DefaultFont data-text="OnMi">OnMi</DefaultFont>
          <PixelFont>n</PixelFont>
          <DefaultFont data-text="d">d</DefaultFont>
        </Glitch>
      )

      timeout = setTimeout(() => {
        setHeadlineText(
          <Glitch isHeadline>
            <DefaultFont data-text="W">W</DefaultFont>
            <PixelFont data-text="e">e</PixelFont>{' '}
            <DefaultFont data-text="ca">ca</DefaultFont>
            <PixelFont data-text="t">t</PixelFont>
            <DefaultFont data-text="ch your se">ch your se</DefaultFont>
            <PixelFont data-text="n">n</PixelFont>
            <DefaultFont data-text="ses">ses</DefaultFont>
          </Glitch>
        )
        setPixelsVisibilityState(finalPixelsVisibilityValues)
        setHeadlineTextLeft(true)

        timeout = setTimeout(() => {
          setHeadlineText(
            <>
              W<PixelFont>e</PixelFont> ca<PixelFont>t</PixelFont>ch your se
              <PixelFont>n</PixelFont>ses
            </>
          )
          setPixelsVisibilityState(finalPixelsVisibilityValues)
          setHeadlineTextLeft(true)
          setOpenIntro(false)
        }, 500)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [, index])

  return (
    <>
      <HeaderStyled>
        <HeaderInner>
          <LinkWrapper>
            <Text>
              <BeOnMindLogo color={open ? colors.black : colors.white} />
            </Text>
          </LinkWrapper>

          <MenuList open={open}>
            <MenuItem>
              <Typography type={TypographyType.P1} color={colors.black}>
                s<PixelFont>t</PixelFont>udio@beo<PixelFont>n</PixelFont>
                mind.com
              </Typography>
            </MenuItem>

            <MenuItem>
              <MenuLink type={TypographyType.P1} color={colors.black}>
                Ho<PixelFont>m</PixelFont>e
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink type={TypographyType.P1} color={colors.black}>
                Wor<PixelFont>k</PixelFont>
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink type={TypographyType.P1} color={colors.black}>
                Par<PixelFont>t</PixelFont>ne<PixelFont>r</PixelFont>
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink type={TypographyType.P1} color={colors.black}>
                Con<PixelFont>t</PixelFont>act
              </MenuLink>
            </MenuItem>
          </MenuList>

          <Burger open={open} setOpen={setOpen} />
        </HeaderInner>

        <Overlay open={open} />

        {/* <Intro open={true} justifyStart={headlineTextLeft}>
        <IntroContainer>
          <IntroRow>
            <IntroPixel visible={pixelsVisibilityState[0]} />
            <IntroPixel visible={pixelsVisibilityState[1]} />
            <IntroPixel visible={pixelsVisibilityState[2]} />
            <IntroPixel visible={pixelsVisibilityState[3]} />
            <IntroPixel visible={pixelsVisibilityState[4]} />
          </IntroRow>

          <IntroRow>
            <H1 color={colors.white}>{headlineText}</H1>
          </IntroRow>

          <IntroRow>
            <IntroPixel visible={pixelsVisibilityState[6]} />
            <IntroPixel visible={pixelsVisibilityState[8]} />
            <IntroPixel visible={pixelsVisibilityState[10]} />
            <IntroPixel visible={pixelsVisibilityState[12]} />
            <IntroPixel visible={pixelsVisibilityState[14]} />
          </IntroRow>

          <IntroRow>
            <IntroPixel
              visible={!pixelsVisibilityState[6] && pixelsVisibilityState[5]}
            />
            <IntroPixel
              visible={!pixelsVisibilityState[8] && pixelsVisibilityState[7]}
            />
            <IntroPixel
              visible={!pixelsVisibilityState[10] && pixelsVisibilityState[9]}
            />
            <IntroPixel
              visible={!pixelsVisibilityState[12] && pixelsVisibilityState[11]}
            />
            <IntroPixel
              visible={!pixelsVisibilityState[14] && pixelsVisibilityState[13]}
            />
          </IntroRow>
        </IntroContainer>
      </Intro> */}

        <IntroMask open={openIntro} justifyStart={headlineTextLeft}>
          <IntroContainer>
            <IntroRow>
              <IntroPixel
                visible={pixelsVisibilityState[0]}
                color={colors.black}
              />
              <IntroPixel
                visible={pixelsVisibilityState[1]}
                color={colors.black}
              />
              <IntroPixel
                visible={pixelsVisibilityState[2]}
                color={colors.black}
              />
              <IntroPixel
                visible={pixelsVisibilityState[3]}
                color={colors.black}
              />
              <IntroPixel
                visible={pixelsVisibilityState[4]}
                color={colors.black}
              />
            </IntroRow>

            <IntroRow>
              <H1 color={colors.black}>
                {headlineText ? (
                  <>{headlineText}</>
                ) : (
                  <>
                    <HeadlineVisibility visible={pixelsVisibilityState[7]}>
                      B<PixelFont data-text="e">e</PixelFont>
                    </HeadlineVisibility>
                    <HeadlineVisibility visible={pixelsVisibilityState[5]}>
                      On
                    </HeadlineVisibility>
                    <HeadlineVisibility visible={pixelsVisibilityState[6]}>
                      Mi<PixelFont>n</PixelFont>d
                    </HeadlineVisibility>
                  </>
                )}
              </H1>
            </IntroRow>

            <IntroRow>
              <IntroPixel
                visible={pixelsVisibilityState[9]}
                color={colors.black}
              />
              <IntroPixel
                visible={pixelsVisibilityState[11]}
                color={colors.black}
              />
              <IntroPixel
                visible={pixelsVisibilityState[13]}
                color={colors.black}
              />
              <IntroPixel
                visible={pixelsVisibilityState[15]}
                color={colors.black}
              />
              <IntroPixel
                visible={pixelsVisibilityState[17]}
                color={colors.black}
              />
            </IntroRow>

            <IntroRow>
              <IntroPixel
                visible={!pixelsVisibilityState[9] && pixelsVisibilityState[8]}
                color={colors.black}
              />
              <IntroPixel
                visible={
                  !pixelsVisibilityState[11] && pixelsVisibilityState[10]
                }
                color={colors.black}
              />
              <IntroPixel
                visible={
                  !pixelsVisibilityState[13] && pixelsVisibilityState[12]
                }
                color={colors.black}
              />
              <IntroPixel
                visible={
                  !pixelsVisibilityState[15] && pixelsVisibilityState[14]
                }
                color={colors.black}
              />
              <IntroPixel
                visible={
                  !pixelsVisibilityState[17] && pixelsVisibilityState[16]
                }
                color={colors.black}
              />
            </IntroRow>
          </IntroContainer>
        </IntroMask>

        {(open || openIntro) && <ScrollLock />}
      </HeaderStyled>
    </>
  )
}
