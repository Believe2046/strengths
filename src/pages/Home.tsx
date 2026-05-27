import { ArrowRight, BarChart3, Brain, CheckCircle2, ShieldCheck } from 'lucide-react'
import { traits } from '../data/traits'
import { questions } from '../data/questions'

type Props = {
  onStart: () => void
  onResult: () => void
  answeredCount: number
}

export default function Home({ onStart, onResult, answeredCount }: Props) {
  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-5 py-3 shadow-sm backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
            <Brain size={20} />
          </div>
          <div>
            <p className="text-sm font-black text-slate-950">Talent Profile</p>
            <p className="text-xs text-slate-500">个人优势画像测试</p>
          </div>
        </div>
        {answeredCount > 0 && (
          <button onClick={onResult} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white hover:bg-slate-700">
            查看结果
          </button>
        )}
      </header>

      <section className="grid gap-8 rounded-[2.5rem] border border-white/80 bg-white/75 p-6 shadow-soft backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
            <ShieldCheck size={16} /> 本地运行 / 前端计分 / 可部署 GitHub Pages
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            发现你的优势倾向，生成一份清晰的个人画像。
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            这是一个可自由修改的优势测评网站模板。它采用双陈述题、五档选择、维度累计计分和 Top 优势报告展示，适合课程作业、产品原型、本地研究与二次开发。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={onStart} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-700">
              开始测试 <ArrowRight size={18} />
            </button>
            <a href="#features" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400">
              了解结构
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            { icon: BarChart3, title: `${questions.length} 道双陈述题`, text: '通过左右偏好判断优势倾向' },
            { icon: Brain, title: `${traits.length} 个优势维度`, text: '覆盖执行、影响、关系、思维四类能力' },
            { icon: CheckCircle2, title: '本地保存答案', text: '无需后端，localStorage 即可保存进度' }
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <item.icon className="mb-4 text-slate-900" size={24} />
              <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="grid gap-4 md:grid-cols-4">
        {['执行力', '影响力', '关系力', '思维力'].map((group) => (
          <div key={group} className="rounded-3xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur">
            <h2 className="text-lg font-black text-slate-950">{group}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {traits.filter((trait) => trait.group === group).map((trait) => (
                <span key={trait.key} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {trait.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
