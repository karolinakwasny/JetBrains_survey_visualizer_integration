import React, { useContext, useState, useRef, useLayoutEffect } from 'react'
import { TriviaContext } from '../context/TriviaContext'
import CategoryDropdown from './CategoryDropdown'
import AllCategoriesBarChart from './AllCategoriesBarChart'
import Category from './Category'
import Loader from '../utils/Loader'
import DifficultyAndTypePieCharts from './DifficultyAndTypePieCharts'
import HeroSection from './HeroSection'

const TriviaDashboard = () => {
  const { questions, categories, loading } = useContext(TriviaContext)

  const [selectedCategories, setSelectedCategories] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const chartsRef = useRef(null)
  const filteredRef = useRef(null)
  const prevOpenRef = useRef(dropdownOpen)

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

  useLayoutEffect(() => {
    const justClosed = prevOpenRef.current === true && dropdownOpen === false
    if (justClosed && filteredRef.current) {
      filteredRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    prevOpenRef.current = dropdownOpen
  }, [dropdownOpen])

  if (loading) return <Loader />

  return (
    <div
      style={{
        margin: 'auto',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <HeroSection chartsRef={chartsRef} />
      <div ref={chartsRef}>
        <AllCategoriesBarChart questions={questions} />
        <DifficultyAndTypePieCharts
          difficultyData={difficultyData}
          typeData={typeData}
        />
      </div>

      <div className="filtered-section" ref={filteredRef}>
        <div
          className="dropdown-wrapper"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 5,
            background: '#0b0b0b',
            padding: '0.5rem 0',
          }}
        >
          <CategoryDropdown
            categories={categories}
            selected={selectedCategories}
            open={dropdownOpen}
            onToggle={setDropdownOpen}
            onApply={setSelectedCategories}
          />
        </div>

        <div
          className="filtered-categories"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          {selectedCategories.length > 0 &&
            selectedCategories.map((category) => (
              <div id={`category-${category}`} key={category}>
                <Category
                  questions={questions.filter((q) => q.category === category)}
                  selectedCategory={category}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TriviaDashboard
