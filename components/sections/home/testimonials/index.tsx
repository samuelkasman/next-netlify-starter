import { useTestimonials } from './useTestimonials'
import {
  CarouselWrapperStyled,
  Item,
  ItemInner,
  PersonData,
  PersonImg,
  PersonWrapper,
  TestimonialDate,
  TestimonialName,
  TestimonialText,
  Wrapper,
} from './styled'
import { FC } from 'react'
import { colors } from '../../../../styles/theme'
import { Typography, TypographyType } from '../../../atomic/Typography'
import { FullWidthInner } from '../../../layout/pageLayout'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import { useInView } from 'react-intersection-observer'

export const Testimonials: FC = () => {
  const THRESHOLD_VALUE = 0.5

  const { ref, inView } = useInView({
    threshold: THRESHOLD_VALUE,
  })

  const { selectedItem, setSelectedItem, items } = useTestimonials()

  return (
    <Wrapper>
      <FullWidthInner>
        <CarouselWrapperStyled ref={ref} inView={inView}>
          <ReactCarousel
            onChange={(index) => setSelectedItem(index)}
            preventMovementUntilSwipeScrollTolerance
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop
            showArrows={true}
          >
            {items.map((item, index) => {
              return (
                <Item key={`carousel-${index}`}>
                  <ItemInner>
                    <TestimonialDate
                      type={TypographyType.P1}
                      color={colors.grey70}
                      inlineBlock
                      pixelFont
                    >
                      {`${index + 1}/${items.length}`}
                    </TestimonialDate>

                    <TestimonialText
                      type={TypographyType.H4}
                      color={colors.white}
                      inlineBlock
                    >
                      {item.text}
                    </TestimonialText>

                    <PersonWrapper>
                      <PersonImg src={'/img/person.png'} alt="peson" />

                      <PersonData>
                        <TestimonialName
                          type={TypographyType.P1}
                          color={colors.white}
                          inlineBlock
                        >
                          {item.name}
                        </TestimonialName>

                        <Typography
                          type={TypographyType.P2}
                          color={colors.grey70}
                          inlineBlock
                        >
                          {item.date}
                        </Typography>
                      </PersonData>
                    </PersonWrapper>
                  </ItemInner>
                </Item>
              )
            })}
          </ReactCarousel>
        </CarouselWrapperStyled>
      </FullWidthInner>
    </Wrapper>
  )
}
