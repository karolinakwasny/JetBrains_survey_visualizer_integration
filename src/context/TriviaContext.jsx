import React, { createContext, useState, useEffect } from 'react'
import testQuestions from '../../testquestions.json'

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

      // Uncomment the following block to fetch data from the API
      /*
      try {
        const fetchedCategories = await triviaService.getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error.message || error);
        setError((prev) => ({ ...prev, categories: 'Failed to load categories.' }));
      }

      try {
        const fetchedQuestions = await triviaService.getQuestions(50);
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error.message || error);
        setError((prev) => ({ ...prev, questions: 'Failed to load questions. Please try again later.' }));
      }
      */

      // Use mock data from testquestions.json
      try {
        setCategories(
          [...new Set(testQuestions.results.map((q) => q.category))].map(
            (name, id) => ({ id, name })
          )
        )
        setQuestions(testQuestions.results)
      } catch (error) {
        console.error('Error loading mock data:', error.message || error)
        setError((prev) => ({
          ...prev,
          questions: 'Failed to load mock data.',
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
