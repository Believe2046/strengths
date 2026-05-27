import { questions } from '../data/questions'
import { traitMap, traits } from '../data/traits'

export type AnswerValue = 1 | 2 | 3 | 4 | 5
export type AnswerMap = Record<number, AnswerValue>

export type ScoreResult = {
  key: string
  title: string
  group: string
  score: number
  percent: number
  summary: string
  detail: string
  advice: string
}

export function calculateScores(answers: AnswerMap): ScoreResult[] {
  const rawScores: Record<string, number> = Object.fromEntries(traits.map((trait) => [trait.key, 0]))
  const maxScores: Record<string, number> = Object.fromEntries(traits.map((trait) => [trait.key, 0]))

  for (const question of questions) {
    maxScores[question.leftTrait] += 2
    maxScores[question.rightTrait] += 2
    const answer = answers[question.id]
    if (!answer) continue

    if (answer === 1) rawScores[question.leftTrait] += 2
    if (answer === 2) rawScores[question.leftTrait] += 1
    if (answer === 4) rawScores[question.rightTrait] += 1
    if (answer === 5) rawScores[question.rightTrait] += 2
  }

  return Object.entries(rawScores)
    .map(([key, score]) => {
      const trait = traitMap[key]
      const max = Math.max(maxScores[key], 1)
      return {
        key,
        title: trait.title,
        group: trait.group,
        score,
        percent: Math.round((score / max) * 100),
        summary: trait.summary,
        detail: trait.detail,
        advice: trait.advice
      }
    })
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, 'zh-CN'))
}

export function getCompletionRate(answers: AnswerMap) {
  return Math.round((Object.keys(answers).length / questions.length) * 100)
}
