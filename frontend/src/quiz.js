export const QUESTIONS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  },
  {
    id: 2,
    question: 'What color is the sky on a clear day?',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    answer: 'Blue',
  },
  {
    id: 3,
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    id: 4,
    question: 'How many days are in a week?',
    options: ['5', '6', '7', '8'],
    answer: '7',
  },
  {
    id: 5,
    question: 'What is 10 divided by 2?',
    options: ['3', '4', '5', '6'],
    answer: '5',
  },
]

/**
 * Returns true if the given answer matches the question's correct answer.
 */
export function isCorrect(question, answer) {
  // TODO: implement
  return false
}

/**
 * Given an answers object { [questionId]: selectedOption },
 * returns the number of correct answers.
 */
export function getScore(answers) {
  // TODO: implement
  return 0
}

/**
 * Returns a formatted score string like "3/5 correct".
 */
export function formatScore(correct, total) {
  // TODO: implement
  return ''
}
