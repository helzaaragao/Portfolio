import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0; 
        padding: 0; 
        box-sizing: border-box; 
    }

    @font-face { 
        font-family: 'Apercu'; 
        src: url('./assets/font/Apercu Regular.otf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

   body, input, textarea, button {
    font-family: 'Apercu', sans-serif;
   
   }
`