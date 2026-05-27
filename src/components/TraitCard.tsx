import { ScoreResult } from '../utils/scoring'

type Props = {
  item: ScoreResult
  rank?: number
  compact?: boolean
}

export default function TraitCard({ item, rank, compact = false }: Props) {
  return (
    <article className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-soft backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            {rank && <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">TOP {rank}</span>}
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">{item.group}</span>
          </div>
          <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black text-slate-950">{item.score}</p>
          <p className="text-xs text-slate-500">分数</p>
        </div>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-slate-900" style={{ width: `${item.percent}%` }} />
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-700">{item.summary}</p>
      {!compact && (
        <>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
          <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
            <strong className="text-slate-950">建议：</strong>{item.advice}
          </div>
        </>
      )}
    </article>
  )
}
