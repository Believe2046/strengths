import { Download, Home, RotateCcw } from 'lucide-react'
import TraitCard from '../components/TraitCard'
import { questions } from '../data/questions'
import { AnswerMap, calculateScores, getCompletionRate } from '../utils/scoring'

type Props = {
  answers: AnswerMap
  onRestart: () => void
  onHome: () => void
}

export default function Result({ answers, onRestart, onHome }: Props) {
  const scores = calculateScores(answers)
  const top5 = scores.slice(0, 5)
  const progress = getCompletionRate(answers)

  const exportJson = () => {
    const data = {
      app: 'Talent Profile',
      createdAt: new Date().toISOString(),
      answered: Object.keys(answers).length,
      total: questions.length,
      top5: top5.map((item) => ({ title: item.title, group: item.group, score: item.score })),
      scores
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'talent-profile-result.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      <header className="rounded-[2.5rem] border border-white/80 bg-white/80 p-6 shadow-soft backdrop-blur md:p-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-sm font-bold text-slate-500">完成度 {progress}% · 已答 {Object.keys(answers).length}/{questions.length}</p>
            <h1 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">你的 Top 5 优势画像</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              该报告基于当前题库和本地计分规则生成，适合研究、演示和原型验证，不代表临床、职业资格或官方心理测评结论。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={onHome} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-700 hover:border-slate-400">
              <Home size={18} /> 首页
            </button>
            <button onClick={exportJson} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-700 hover:border-slate-400">
              <Download size={18} /> 导出 JSON
            </button>
            <button onClick={onRestart} className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 font-bold text-white hover:bg-slate-700">
              <RotateCcw size={18} /> 重新测试
            </button>
          </div>
        </div>
      </header>

      {Object.keys(answers).length === 0 ? (
        <section className="rounded-[2rem] border border-white/80 bg-white/80 p-8 text-center shadow-soft">
          <h2 className="text-2xl font-black text-slate-950">还没有答题数据</h2>
          <p className="mt-3 text-slate-500">请先完成测试，再生成结果报告。</p>
          <button onClick={onRestart} className="mt-6 rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white">开始测试</button>
        </section>
      ) : (
        <>
          <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {top5.map((item, index) => <TraitCard key={item.key} item={item} rank={index + 1} />)}
          </section>

          <section className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-soft backdrop-blur md:p-8">
            <h2 className="mb-5 text-2xl font-black text-slate-950">完整维度排序</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {scores.map((item, index) => (
                <div key={item.key} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-black text-slate-600">{index + 1}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-black text-slate-950">{item.title}</p>
                      <p className="text-sm font-bold text-slate-500">{item.score}</p>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-slate-900" style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
