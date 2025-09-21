import axios from 'axios'

const BASE_URL = 'https://opentdb.com'

const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}/api_category.php`)
  return res.data.trivia_categories
}

const getQuestions = async (amount = 50) => {
  const res = await axios.get(`${BASE_URL}/api.php?amount=${amount}`)
  return res.data.results
}

export default { getCategories, getQuestions }
