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
    font-family: Public Sans;
  }

  body {
    /* background: #282c34; */
    /* color: #efefef; */
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
