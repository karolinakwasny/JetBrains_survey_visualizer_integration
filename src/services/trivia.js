import axios from 'axios'

const BASE_URL = 'https://opentdb.com'

const getQuestions = async (amount = 50) => {
  const res = await axios.get(
    `${BASE_URL}/api.php?amount=${amount}&encode=base64`
  )
  return res.data
}

export default { getQuestions }
