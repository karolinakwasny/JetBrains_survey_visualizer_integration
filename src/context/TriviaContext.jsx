import React, { createContext, useState, useEffect } from 'react'
import triviaService from '../services/trivia'
import testQuestions from '../../testquestions.json'
import { decodeQuestion } from '../utils/base64'

export const TriviaContext = createContext()

export const TriviaProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ categories: null, questions: null })

  const processData = (data) => {
    if (data.response_code !== 0) {
      console.warn('API response_code indicates failure', data.response_code)
    }

    const fetchedQuestions = data.results || []

    if (!fetchedQuestions.length) {
      console.warn(
        'No questions returned from API, response_code:',
        data.response_code
      )
      setQuestions([])
      setCategories([])
      return
    }

    const decodedQuestions = fetchedQuestions.map(decodeQuestion)

    const uniqueCategories = [
      ...new Set(decodedQuestions.map((q) => q.category)),
    ]

    setQuestions(decodedQuestions)
    setCategories(uniqueCategories.map((name, id) => ({ id, name })))
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      setError({ categories: null, questions: null })

      try {
        // Option 1: Use mock data for testing and development
        // processData(testQuestions)

        // Option 2: Use live API data for production
        const fetchedData = await triviaService.getQuestions(50)
        processData(fetchedData)
      } catch (err) {
        console.error('Error loading questions:', err.message || err)
        setError((prev) => ({
          ...prev,
          questions: 'Failed to load questions.',
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
