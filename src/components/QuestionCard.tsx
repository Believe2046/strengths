import { Question } from '../data/questions'
import { AnswerValue } from '../utils/scoring'

const options: { value: AnswerValue; label: string; short: string }[] = [
  { value: 1, label: '非常像左边', short: '左A' },
  { value: 2, label: '有点像左边', short: '左A' },
  { value: 3, label: '两者相当', short: '中立' },
  { value: 4, label: '有点像右边', short: '右B' },
  { value: 5, label: '非常像右边', short: '右B' }
]

type Props = {
  question: Question
  value?: AnswerValue
  onChange: (value: AnswerValue) => void
}

export default function QuestionCard({ question, value, onChange }: Props) {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-soft backdrop-blur md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">第 {question.id} 题</p>
          <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950 md:text-2xl">哪一句更像你平时的状态？</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600">五档选择</span>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        <div className={`rounded-3xl border p-5 transition ${value === 1 || value === 2 ? 'border-slate-900 bg-slate-50' : 'border-slate-200 bg-white'}`}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">A</p>
          <p className="text-lg font-semibold leading-relaxed text-slate-900">{question.left}</p>
        </div>
        <div className="flex items-center justify-center text-sm font-bold text-slate-400">VS</div>
        <div className={`rounded-3xl border p-5 transition ${value === 4 || value === 5 ? 'border-slate-900 bg-slate-50' : 'border-slate-200 bg-white'}`}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">B</p>
          <p className="text-lg font-semibold leading-relaxed text-slate-900">{question.right}</p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-5">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-2xl border px-4 py-4 text-center text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg ${
              value === option.value
                ? 'border-slate-900 bg-slate-900 text-white shadow-lg'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
            }`}
          >
            <span className="block text-base">{option.short}</span>
            <span className={`mt-1 block text-xs ${value === option.value ? 'text-slate-200' : 'text-slate-500'}`}>{option.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
