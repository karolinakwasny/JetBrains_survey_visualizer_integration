import React, { useContext, useState, useRef, useLayoutEffect } from 'react'
import { TriviaContext } from '../context/TriviaContext'
import CategoryDropdown from './CategoryDropdown'
import AllCategoriesBarChart from './AllCategoriesBarChart'
import Category from './Category'
import Loader from '../utils/Loader'
import DifficultyAndTypePieCharts from './DifficultyAndTypePieCharts'
import HeroSection from './HeroSection'
import { getDifficultyData, getTypeData } from '../utils/pieChartData'

const TriviaDashboard = () => {
  const { questions, categories, loading } = useContext(TriviaContext)

  const [selectedCategories, setSelectedCategories] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const chartsRef = useRef(null)
  const filteredRef = useRef(null)
  const prevOpenRef = useRef(dropdownOpen)

  const difficultyData = getDifficultyData(questions)
  const typeData = getTypeData(questions)

  useLayoutEffect(() => {
    const justClosed = prevOpenRef.current === true && dropdownOpen === false
    if (justClosed && filteredRef.current) {
      filteredRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    prevOpenRef.current = dropdownOpen
  }, [dropdownOpen])

  if (loading) return <Loader />

  return (
    <div className="trivia-dashboard-container">
      <HeroSection chartsRef={chartsRef} />
      <div ref={chartsRef}>
        <AllCategoriesBarChart questions={questions} />
        <DifficultyAndTypePieCharts
          difficultyData={difficultyData}
          typeData={typeData}
        />
      </div>

      <div className="filtered-section" ref={filteredRef}>
        <div className="dropdown-wrapper">
          <CategoryDropdown
            categories={categories}
            selected={selectedCategories}
            open={dropdownOpen}
            onToggle={setDropdownOpen}
            onApply={setSelectedCategories}
          />
        </div>

        <div className="filtered-categories">
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
