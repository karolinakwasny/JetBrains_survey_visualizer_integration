export const getDifficultyData = (questions) => {
  const { easy, medium, hard } = questions.reduce(
    (acc, q) => {
      acc[q.difficulty]++
      return acc
    },
    { easy: 0, medium: 0, hard: 0 }
  )

  return [
    { name: 'Easy', value: easy },
    { name: 'Medium', value: medium },
    { name: 'Hard', value: hard },
  ]
}

export const getTypeData = (questions) => {
  const { multiple, boolean } = questions.reduce(
    (acc, q) => {
      acc[q.type]++
      return acc
    },
    { multiple: 0, boolean: 0 }
  )

  return [
    { name: 'Multiple Choice', value: multiple },
    { name: 'True/False', value: boolean },
  ]
}
