import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0; 
        padding: 0; 
        box-sizing: border-box; 
    }
    
    :focus { 
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['gold-brown']};
    }

   body, input, textarea, button {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
   }

   body { 
    background-color: ${(props) => props.theme['timberwolf']};
    color: ${(props) => props.theme['black']};
   }
`