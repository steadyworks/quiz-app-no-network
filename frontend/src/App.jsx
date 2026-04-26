import { useState } from 'react'
import { QUESTIONS, isCorrect, getScore, formatScore } from './quiz.js'

export default function App() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)

  // TODO: implement the quiz flow
  // - Show one question at a time (data-testid="question-text", data-testid="question-number")
  // - Show four option buttons (data-testid="option-button") with class "selected" on the chosen one
  // - "Next" button (data-testid="next-button") advances to the next question or finishes
  // - After all questions, show a results screen (data-testid="results") with
  //   the score (data-testid="score-display") and a restart button (data-testid="restart-button")

  return (
    <div>
      <h1>Quiz</h1>
      {/* TODO */}
    </div>
  )
}
