import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Public+Sans&display=swap');

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  * {
    font-family: Public Sans, sans-serif;;
  }

  body {
    /* background: #282c34; */
    /* color: #efefef; */
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0 0 1rem 0;
    line-height: 1.3rem;
  }

`

export default GlobalStyle
