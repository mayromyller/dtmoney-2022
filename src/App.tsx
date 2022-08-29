import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

import { Transaction } from './pages/Transaction'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transaction />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
