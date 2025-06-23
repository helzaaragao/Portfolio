import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Portfolio } from "./page"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle></GlobalStyle>
        <Portfolio></Portfolio>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
