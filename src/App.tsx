import { useEffect, useMemo, useState } from 'react'
import Home from './pages/Home'
import Exam from './pages/Exam'
import Result from './pages/Result'
import { AnswerMap } from './utils/scoring'

type Route = 'home' | 'exam' | 'result'

const ANSWER_KEY = 'talent-profile-answers'

export default function App() {
  const [route, setRoute] = useState<Route>('home')
  const [answers, setAnswers] = useState<AnswerMap>(() => {
    try {
      const raw = localStorage.getItem(ANSWER_KEY)
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(ANSWER_KEY, JSON.stringify(answers))
  }, [answers])

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers])

  const reset = () => {
    setAnswers({})
    localStorage.removeItem(ANSWER_KEY)
    setRoute('exam')
  }

  return (
    <main className="min-h-screen px-4 py-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        {route === 'home' && <Home onStart={() => setRoute('exam')} onResult={() => setRoute('result')} answeredCount={answeredCount} />}
        {route === 'exam' && <Exam answers={answers} setAnswers={setAnswers} onHome={() => setRoute('home')} onFinish={() => setRoute('result')} />}
        {route === 'result' && <Result answers={answers} onRestart={reset} onHome={() => setRoute('home')} />}
      </div>
    </main>
  )
}
