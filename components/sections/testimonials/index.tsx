import { useTestimonials } from './useTestimonials'
import {
  CarouselWrapperStyled,
  Item,
  ItemInner,
  RenderIndicator,
  RenderIndicatorWrapper,
  TestimonialDate,
  TestimonialName,
  TestimonialText,
  Wrapper,
} from './styled'
import { FC } from 'react'
import { colors } from '../../../styles/theme'
import { TypographyType } from '../../atomic/Typography'
import { FullWidthInner } from '../../layout/pageLayout'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

export const Testimonials: FC = () => {
  const { selectedItem, setSelectedItem, items } = useTestimonials()

  return (
    <Wrapper>
      <FullWidthInner>
        <CarouselWrapperStyled>
          <ReactCarousel
            onChange={(index) => setSelectedItem(index)}
            preventMovementUntilSwipeScrollTolerance
            showStatus={false}
            showIndicators={false}
            showThumbs={true}
            infiniteLoop
            showArrows={true}
          >
            {items.map((item, index) => {
              return (
                <Item key={`carousel-${index}`}>
                  <ItemInner>
                    <TestimonialDate
                      type={TypographyType.P2}
                      color={colors.grey70}
                      inlineBlock
                    >
                      {`${index + 1}/${items.length}`}
                    </TestimonialDate>

                    <TestimonialText
                      type={TypographyType.P1}
                      color={colors.white}
                      inlineBlock
                    >
                      {item.text}
                    </TestimonialText>

                    <TestimonialName
                      type={TypographyType.P1}
                      color={colors.white}
                      inlineBlock
                    >
                      {item.name}
                    </TestimonialName>

                    <TestimonialDate
                      type={TypographyType.P2}
                      color={colors.grey70}
                      inlineBlock
                    >
                      {item.date}
                    </TestimonialDate>
                  </ItemInner>
                </Item>
              )
            })}
          </ReactCarousel>
        </CarouselWrapperStyled>

        {/* <RenderIndicatorWrapper>
          {items.map((_, index) => {
            return (
              <RenderIndicator
                key={`dot-${index}`}
                isSmall={index === items.length - 1 || index === 0}
                isSelected={index === selectedItem}
              />
            )
          })}
        </RenderIndicatorWrapper> */}
      </FullWidthInner>
    </Wrapper>
  )
}
