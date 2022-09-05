import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

import { Transaction } from './pages/Transaction'
import { TransactionProvider } from './contexts/TransactionContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <Transaction />
      </TransactionProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
