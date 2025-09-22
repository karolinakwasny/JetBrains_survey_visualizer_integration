import React, { useContext } from 'react'
import { TriviaContext } from '../context/TriviaContext'
import TriviaCharts from './TriviaCharts'
import CategorySelector from './CategorySelector'
import Loader from '../utils/Loader'

const MainContent = () => {
  // Extract trivia-related data and states from context
  const {
    categories: triviaCategories,
    questions: triviaQuestions,
    loading,
    error,
  } = useContext(TriviaContext)

  // Show a loading spinner while data is being fetched
  if (loading) return <Loader />

  return (
    <div style={{ maxWidth: '900px', margin: 'auto', padding: '1rem' }}>
      {/* Main heading for the application */}
      <h1 style={{ textAlign: 'center' }}>Trivia Data Visualizer</h1>

      {/* Display category-related errors, if any */}
      {error.categories && (
        <p style={{ color: 'red', textAlign: 'center' }}>{error.categories}</p>
      )}

      {/* Render category selector if categories are available */}
      {triviaCategories.length > 0 && (
        <CategorySelector categories={triviaCategories} />
      )}

      {/* Display question-related errors, if any */}
      {error.questions && (
        <p style={{ color: 'red', textAlign: 'center' }}>{error.questions}</p>
      )}

      {/* Render trivia charts if questions are available */}
      {triviaQuestions.length > 0 && (
        <TriviaCharts questions={triviaQuestions} />
      )}
    </div>
  )
}

export default MainContent
