import { ThemeProvider } from "styled-components"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>
    <div>
      
         <h1>Ola</h1>
    </div>
    
    </ThemeProvider>
  )
}
