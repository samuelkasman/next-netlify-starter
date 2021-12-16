import { createGlobalStyle } from 'styled-components'

import { breakpoints, colors, typography } from './theme'

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-family: ${typography.fontFamily.default};
    font-feature-settings: "liga", "kern";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: ${typography.lineHeight.bodyRegular}; 
    font-size: ${typography.fontSize.bodyRegular}; 
    color: ${colors.black};
    background-color: ${colors.white};
  }

  a {
    color: inherit;
    text-decoration: none;
    color: ${colors.black70};
    cursor: pointer;
  }

  #__next {
    min-height: 100vh;
  }

  .async-hide { opacity: 0 !important; }

  // Locomotive scroll css
  @media (min-width: ${breakpoints.midDesktop}) {
    html.has-scroll-smooth {
      overflow: hidden; 
    }

    html.has-scroll-dragging {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none; 
    }

    .has-scroll-smooth body {
      overflow: hidden; 
    }

    .has-scroll-smooth [data-scroll-container] {
      min-height: 100vh; 
    }

    [data-scroll-direction="horizontal"] [data-scroll-container] {
      height: 100vh;
      display: inline-block;
      white-space: nowrap; 
    }

    [data-scroll-direction="horizontal"] [data-scroll-section] {
      display: inline-block;
      vertical-align: top;
      white-space: nowrap;
      height: 100%; 
    }

    .c-scrollbar {
      position: absolute;
      right: 0;
      top: 0;
      width: 11px;
      height: 100%;
      transform-origin: center right;
      transition: transform 0.3s, opacity 0.3s;
      opacity: 0; 
    }

    .c-scrollbar:hover {
      transform: scaleX(1.45); 
    }

    .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
      opacity: 1; 
    }

    [data-scroll-direction="horizontal"] .c-scrollbar {
      width: 100%;
      height: 10px;
      top: auto;
      bottom: 0;
      transform: scaleY(1); 
    }

    [data-scroll-direction="horizontal"] .c-scrollbar:hover {
      transform: scaleY(1.3); 
    }

    .c-scrollbar_thumb {
      position: absolute;
      top: 0;
      right: 0;
      background-color: black;
      opacity: 0.5;
      width: 7px;
      border-radius: 10px;
      margin: 2px;
      cursor: -webkit-grab;
      cursor: grab; 
    }

    .has-scroll-dragging .c-scrollbar_thumb {
      cursor: -webkit-grabbing;
      cursor: grabbing; 
    }

    [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
      right: auto;
      bottom: 0; 
    }
  }
`
