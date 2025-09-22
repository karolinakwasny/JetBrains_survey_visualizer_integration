import { TriviaProvider } from './context/TriviaContext'
import TriviaDashboard from './components/TriviaDashboard'
import './styles/main.css';

const App = () => {
  return (
    <TriviaProvider>
      <TriviaDashboard />
    </TriviaProvider>
  )
}

export default App
