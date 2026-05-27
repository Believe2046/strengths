import { ArrowLeft, ArrowRight, Home } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import { questions } from '../data/questions'
import { AnswerMap, AnswerValue, getCompletionRate } from '../utils/scoring'

type Props = {
  answers: AnswerMap
  setAnswers: React.Dispatch<React.SetStateAction<AnswerMap>>
  onHome: () => void
  onFinish: () => void
}

export default function Exam({ answers, setAnswers, onHome, onFinish }: Props) {
  const firstUnanswered = useMemo(() => {
    const index = questions.findIndex((question) => !answers[question.id])
    return index === -1 ? 0 : index
  }, [])
  const [index, setIndex] = useState(firstUnanswered)
  const current = questions[index]
  const progress = getCompletionRate(answers)
  const isLast = index === questions.length - 1

  const choose = (value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }))
    if (!isLast) {
      window.setTimeout(() => setIndex((old) => Math.min(old + 1, questions.length - 1)), 180)
    }
  }

  return (
    <div className="space-y-6">
      <header className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <button onClick={onHome} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 hover:border-slate-400">
            <Home size={16} /> 返回首页
          </button>
          <p className="text-sm font-bold text-slate-500">
            {index + 1} / {questions.length}
          </p>
        </div>
        <ProgressBar value={progress} label="答题进度" />
      </header>

      <QuestionCard question={current} value={answers[current.id]} onChange={choose} />

      <footer className="flex items-center justify-between gap-3">
        <button
          onClick={() => setIndex((old) => Math.max(old - 1, 0))}
          disabled={index === 0}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft size={18} /> 上一题
        </button>
        {isLast ? (
          <button onClick={onFinish} className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white hover:bg-slate-700">
            生成报告 <ArrowRight size={18} />
          </button>
        ) : (
          <button
            onClick={() => setIndex((old) => Math.min(old + 1, questions.length - 1))}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 hover:border-slate-400"
          >
            下一题 <ArrowRight size={18} />
          </button>
        )}
      </footer>
    </div>
  )
}
