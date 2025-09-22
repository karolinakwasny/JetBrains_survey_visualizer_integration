import axios from 'axios'

const BASE_URL = 'https://opentdb.com'

const getQuestions = async (amount = 50) => {
  const res = await axios.get(
    `${BASE_URL}/api.php?amount=${amount}&encode=url3986`
  )
  return res.data.results
}
export default { getQuestions }
