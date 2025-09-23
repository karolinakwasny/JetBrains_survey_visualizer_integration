export const decodeBase64 = (str) => {
  try {
    const binary = atob(str)
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
    return new TextDecoder().decode(bytes)
  } catch {
    return str
  }
}

export const decodeQuestion = (q) => ({
  ...q,
  type: decodeBase64(q.type),
  difficulty: decodeBase64(q.difficulty),
  category: decodeBase64(q.category),
  question: decodeBase64(q.question),
  correct_answer: decodeBase64(q.correct_answer),
  incorrect_answers: q.incorrect_answers.map((a) => decodeBase64(a)),
})
