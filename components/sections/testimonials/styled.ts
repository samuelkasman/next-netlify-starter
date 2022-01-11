import styled from 'styled-components'
import { colors, spacing, breakpoints } from '../../../styles/theme'
import { Typography } from '../../atomic/Typography'

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.black};
  padding-top: 20px;
  padding-bottom: 32px;
  overflow: hidden;

  @media (min-width: ${breakpoints.minDesktop}) {
    padding: 48px 0;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
`

export const Item = styled.div`
  position: relative;
  width: 100%;
  padding: 48px;
`

export const ItemInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 48px;
  border: 1px solid ${colors.grey30};

  @media (min-width: ${breakpoints.minDesktop}) {
    max-width: 810px;
    padding: 56px 104px 72px;
    margin: 0 auto;
  }
`

export const PersonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const PersonImg = styled.img`
  height: 56px !important;
  width: 56px !important;
  margin-right: 24px;
`

export const PersonData = styled.div`
  display: flex;
  flex-direction: column;
`

export const TestimonialText = styled(Typography)`
  margin-bottom: 48px;
  z-index: 2;
`

export const TestimonialName = styled(Typography)`
  z-index: 2;
`

export const TestimonialDate = styled(Typography)`
  margin-bottom: 24px;
  z-index: 2;
`

export const CarouselWrapper = styled.div`
  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    transition: all 0.25s ease-in;
    opacity: 0.4;
    filter: alpha(opacity=40);
    position: absolute;
    z-index: 2;
    top: 20px;
    background: none;
    border: 0;
    font-size: 32px;
    cursor: pointer;
  }
  .carousel .control-arrow:hover {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before {
    margin: 0 5px;
    display: inline-block;
    content: '';
  }
  .carousel .control-disabled.control-arrow {
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: inherit;
    display: none;
  }
  .carousel .control-prev.control-arrow {
    left: 0;
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 2px solid #c2c2c2;
    border-bottom: 2px solid #c2c2c2;
    width: 20px;
    height: 20px;
    transform: rotate(-225deg);

    &:hover {
      border-color: #736e75;
    }
  }
  .carousel .control-next.control-arrow {
    right: 0;
  }
  .carousel .control-next.control-arrow:before {
    border-right: 2px solid #c2c2c2;
    border-bottom: 2px solid #c2c2c2;
    width: 20px;
    height: 20px;
    transform: rotate(-45deg);

    &:hover {
      border-color: #736e75;
    }
  }

  .carousel-root {
    outline: none;
  }

  .carousel {
    position: relative;
    width: 100%;
  }
  .carousel * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .carousel img {
    width: 100%;
    display: inline-block;
    pointer-events: none;
  }
  .carousel .carousel {
    position: relative;
  }
  .carousel .control-arrow {
    outline: 0;
    border: 0;
    background: none;
    top: 50%;
    margin-top: -13px;
    font-size: 18px;
  }
  .carousel .thumbs-wrapper {
    margin: 20px;
    overflow: hidden;
  }
  .carousel .thumbs {
    transition: all 0.15s ease-in;
    transform: translate3d(0, 0, 0);
    position: relative;
    list-style: none;
    white-space: nowrap;
  }
  .carousel .thumb {
    transition: border 0.15s ease-in;
    display: inline-block;
    margin-right: 6px;
    white-space: nowrap;
    overflow: hidden;
    border: 3px solid #fff;
    padding: 2px;
  }
  .carousel .thumb:focus {
    border: 3px solid #ccc;
    outline: none;
  }
  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 3px solid #333;
  }
  .carousel .thumb img {
    vertical-align: top;
  }
  .carousel.carousel-slider {
    position: relative;
    margin: 0;
    overflow: hidden;
  }
  .carousel.carousel-slider .control-arrow {
    top: 50%;
    color: #fff;
    font-size: 26px;
    transform: translateY(-50%);
    margin-top: 0;
    padding: 5px;
  }
  .carousel .slider-wrapper {
    overflow: hidden;
    margin: auto;
    width: 100%;
    transition: height 0.15s ease-in;
  }
  .carousel .slider-wrapper.axis-horizontal .slider {
    display: flex;
  }
  .carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column;
  }
  .carousel .slider-wrapper.axis-vertical {
    display: flex;
  }
  .carousel .slider-wrapper.axis-vertical .slider {
    flex-direction: column;
  }
  .carousel .slider {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    width: 100%;
  }
  .carousel .slider.animated {
    transition: all 0.35s ease-in-out;
  }
  .carousel .slide {
    min-width: 100%;
    margin: 0;
    position: relative;
    text-align: center;
    background: white;
  }
  .carousel .slide img {
    width: 100%;
    vertical-align: top;
    border: 0;
  }
  .carousel .slide iframe {
    display: inline-block;
    width: calc(100% - 80px);
    margin: 0 40px 40px;
    border: 0;
  }
  .carousel .slide .legend {
    transition: all 0.5s ease-in-out;
    position: absolute;
    bottom: 40px;
    left: 50%;
    margin-left: -45%;
    width: 90%;
    border-radius: 10px;
    background: #000;
    color: #fff;
    padding: 10px;
    font-size: 12px;
    text-align: center;
    opacity: 0.25;
    transition: opacity 0.35s ease-in-out;
  }
  .carousel .control-dots {
    position: absolute;
    bottom: 0;
    margin: 10px 0;
    padding: 0;
    text-align: center;
    width: 100%;
  }
  @media (min-width: 960px) {
    .carousel .control-dots {
      bottom: 0;
    }
  }
  .carousel .control-dots .dot {
    transition: opacity 0.25s ease-in;
    opacity: 0.3;
    filter: alpha(opacity=30);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
    background: #fff;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px;
  }
  .carousel .control-dots .dot.selected,
  .carousel .control-dots .dot:hover {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .carousel .carousel-status {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    font-size: 10px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
    color: #fff;
  }
  .carousel:hover .slide .legend {
    opacity: 1;
  }
`

export const CarouselWrapperStyled = styled(CarouselWrapper)`
  .carousel .control-dots {
    position: static;
    margin: 0;
    display: block;
  }
  .carousel .slide {
    background: none;
  }
`

export const RenderIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

type RenderIndicatorProps = {
  isSelected?: boolean
  isSmall?: boolean
}

export const RenderIndicator = styled.div<RenderIndicatorProps>`
  display: flex;
  align-items: center;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.25)};
  width: ${({ isSmall }) => (isSmall ? '6px' : '8px')};
  height: ${({ isSmall }) => (isSmall ? '6px' : '8px')};
  background-color: ${colors.grey};
  border-radius: 50%;
  margin: 12px 8px 0 0;

  :last-child {
    margin-right: 0;
  }
`
