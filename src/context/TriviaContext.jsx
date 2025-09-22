import React, { createContext, useState, useEffect } from 'react'
import triviaService from '../services/trivia'
// import testQuestions from '../../testquestions.json' // Uncomment to use mock data

export const TriviaContext = createContext()

export const TriviaProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ categories: null, questions: null })

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      setError({ categories: null, questions: null })

      try {
        // --- Use API ---
        const fetchedQuestions = await triviaService.getQuestions(50)
        console.log('Fetched questions from API:', fetchedQuestions)
        setQuestions(fetchedQuestions)
        setCategories(
          [...new Set(fetchedQuestions.map((q) => q.category))].map(
            (name, id) => ({ id, name })
          )
        )

        // --- Use mock data (uncomment to use) ---
        /*
        if (testQuestions.response_code !== 0) {
          throw new Error('Test data response_code indicates failure')
        }
        setCategories(
          [...new Set(testQuestions.results.map((q) => q.category))].map(
            (name, id) => ({ id, name })
          )
        )
        setQuestions(testQuestions.results)
        */
      } catch (error) {
        console.error('Error fetching data from API:', error.message || error)
        setError((prev) => ({
          ...prev,
          questions: 'Failed to load questions from API.',
        }))
      }

      setLoading(false)
    }
    loadData()
  }, [])

  return (
    <TriviaContext.Provider value={{ categories, questions, loading, error }}>
      {children}
    </TriviaContext.Provider>
  )
}
