type Props = {
  value: number
  label?: string
}

export default function ProgressBar({ value, label }: Props) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
        <span>{label ?? '完成度'}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-slate-900 transition-all duration-300" style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }} />
      </div>
    </div>
  )
}
