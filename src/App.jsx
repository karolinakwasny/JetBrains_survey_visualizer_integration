import { TriviaProvider } from './context/TriviaContext'
import TriviaDashboard from './components/TriviaDashboard'

const App = () => {
  return (
    <TriviaProvider>
      <TriviaDashboard />
    </TriviaProvider>
  )
}

export default App
