import { createGlobalStyle } from 'styled-components'

import { breakpoints, colors, typography } from './theme'

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height: 100vh;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-family: ${typography.fontFamily.default};
    font-feature-settings: "liga", "kern";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: ${typography.lineHeight.p1}; 
    font-size: ${typography.fontSize.p1}; 
    color: ${colors.black};
    background-color: ${colors.white};
    height: 100vh;
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
`
