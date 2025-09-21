import React, { useContext, useState } from 'react'
import { TriviaContext } from '../context/TriviaContext'
import CategoryFilter from './CategoryFilter'
import AllCategoriesBarChart from './AllCategoriesBarChart'
import Category from './Category'
import Loader from './Loader'
import DifficultyAndTypePieCharts from './DifficultyAndTypePieCharts'

const TriviaDashboard = () => {
  const { questions, categories, loading } = useContext(TriviaContext)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filteredQuestions = selectedCategory
    ? questions.filter((q) => q.category === selectedCategory)
    : questions

  if (loading) return <Loader />

  // Prepare data for pie charts
  const difficultyData = [
    {
      name: 'Easy',
      value: questions.filter((q) => q.difficulty === 'easy').length,
    },
    {
      name: 'Medium',
      value: questions.filter((q) => q.difficulty === 'medium').length,
    },
    {
      name: 'Hard',
      value: questions.filter((q) => q.difficulty === 'hard').length,
    },
  ]

  const typeData = [
    {
      name: 'Multiple Choice',
      value: questions.filter((q) => q.type === 'multiple').length,
    },
    {
      name: 'True/False',
      value: questions.filter((q) => q.type === 'boolean').length,
    },
  ]

  return (
    <div style={{ maxWidth: '900px', margin: 'auto', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>Trivia Data Visualizer</h1>
      <AllCategoriesBarChart questions={questions} />
      <DifficultyAndTypePieCharts
        difficultyData={difficultyData}
        typeData={typeData}
      />
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />
      {selectedCategory && (
        <Category
          questions={filteredQuestions}
          selectedCategory={selectedCategory}
        />
      )}{' '}
      {/* Filtered charts visible only after selection */}
    </div>
  )
}

export default TriviaDashboard
