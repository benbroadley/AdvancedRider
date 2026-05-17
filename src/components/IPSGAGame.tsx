import { useState, useMemo } from 'react'
import { questions, phaseInfo } from '../data/ipsga'
import type { Phase, Question } from '../data/ipsga'

interface IPSGAGameProps {
  onBack: () => void
}

type GameState = 'intro' | 'question' | 'feedback' | 'results'

const PHASES: Phase[] = ['I', 'P', 'S', 'G', 'A']

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function PhasePill({ phase, active = false }: { phase: Phase; active?: boolean }) {
  const p = phaseInfo[phase]
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
        active ? `${p.bg} ${p.border} ${p.colour}` : 'bg-white/5 border-white/10 text-zinc-500'
      }`}
    >
      <span className="font-bold">{phase}</span>
      <span>{p.name}</span>
    </span>
  )
}

export function IPSGAGame({ onBack }: IPSGAGameProps) {
  const deck = useMemo(() => shuffle(questions), [])
  const [state, setState] = useState<GameState>('intro')
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [results, setResults] = useState<Record<string, boolean>>({})

  const q: Question = deck[index]
  const isCorrect = selected === q?.correctIndex
  const isLast = index === deck.length - 1

  function handleSelect(i: number) {
    if (selected !== null) return
    setSelected(i)
    setState('feedback')
    setResults(r => ({ ...r, [q.id]: i === q.correctIndex }))
  }

  function handleNext() {
    if (isLast) {
      setState('results')
    } else {
      setSelected(null)
      setIndex(i => i + 1)
      setState('question')
    }
  }

  function handleRestart() {
    setIndex(0)
    setSelected(null)
    setResults({})
    setState('intro')
  }

  // Per-phase score for results screen
  const phaseScores = PHASES.map(phase => {
    const phaseQs = deck.filter(q => q.phase === phase)
    const correct = phaseQs.filter(q => results[q.id] === true).length
    return { phase, correct, total: phaseQs.length }
  })
  const totalCorrect = Object.values(results).filter(Boolean).length

  // ── Intro ──────────────────────────────────────────────────────────────────
  if (state === 'intro') {
    return (
      <div className="min-h-screen bg-zinc-950">
        <Header onBack={onBack} />
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">🎯</div>
            <h1 className="text-3xl font-bold text-white mb-3">The Riding System</h1>
            <p className="text-zinc-400">
              Test your knowledge of the five phases. Each question is tagged to a specific phase so you can see where to focus.
            </p>
          </div>

          <div className="grid gap-3 mb-10">
            {PHASES.map(phase => {
              const p = phaseInfo[phase]
              return (
                <div key={phase} className={`flex items-start gap-4 p-4 rounded-xl border ${p.border} ${p.bg}`}>
                  <div className={`text-2xl font-black ${p.colour} w-8 shrink-0 text-center`}>{phase}</div>
                  <div>
                    <div className={`font-semibold ${p.colour}`}>{p.name}</div>
                    <div className="text-zinc-400 text-sm mt-0.5">{p.description}</div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <p className="text-zinc-500 text-sm mb-6">{deck.length} questions — shuffled each time</p>
            <button
              onClick={() => setState('question')}
              className="px-10 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-colors"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Results ────────────────────────────────────────────────────────────────
  if (state === 'results') {
    const pct = Math.round((totalCorrect / deck.length) * 100)
    const grade = pct >= 90 ? '🏆' : pct >= 70 ? '✅' : pct >= 50 ? '📈' : '📖'
    return (
      <div className="min-h-screen bg-zinc-950">
        <Header onBack={onBack} />
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">{grade}</div>
            <h1 className="text-3xl font-bold text-white mb-2">{totalCorrect}/{deck.length} correct</h1>
            <p className="text-zinc-400">
              {pct >= 90
                ? 'Excellent. You have a solid command of the system.'
                : pct >= 70
                ? 'Good work — review the phases where you dropped marks.'
                : pct >= 50
                ? 'A reasonable start. Focus on the weaker phases below.'
                : 'Keep practising. Re-read the phase descriptions and try again.'}
            </p>
          </div>

          <div className="space-y-3 mb-10">
            {phaseScores.map(({ phase, correct, total }) => {
              const p = phaseInfo[phase]
              const phasePct = total > 0 ? Math.round((correct / total) * 100) : 0
              return (
                <div key={phase} className="p-4 rounded-xl border border-white/8 bg-white/3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`text-lg font-black ${p.colour}`}>{phase}</span>
                      <span className="text-white text-sm font-medium">{p.name}</span>
                    </div>
                    <span className="text-sm text-zinc-400">{correct}/{total}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        phasePct >= 75 ? 'bg-emerald-500' : phasePct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${phasePct}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/10 transition-colors"
            >
              Play again
            </button>
            <button
              onClick={onBack}
              className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 font-medium text-sm border border-white/5 transition-colors"
            >
              Back to topics
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Question / Feedback ────────────────────────────────────────────────────
  const p = phaseInfo[q.phase]

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header onBack={onBack} progress={{ current: index + 1, total: deck.length }} />
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Phase indicator row */}
        <div className="flex gap-2 flex-wrap mb-8">
          {PHASES.map(phase => (
            <PhasePill key={phase} phase={phase} active={phase === q.phase} />
          ))}
        </div>

        {/* Question card */}
        <div className="mb-6">
          <p className="text-white text-xl font-medium leading-relaxed">{q.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {q.options.map((opt, i) => {
            let style = 'border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 hover:border-white/20 cursor-pointer'
            if (state === 'feedback') {
              if (i === q.correctIndex) {
                style = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300 cursor-default'
              } else if (i === selected && !isCorrect) {
                style = 'border-rose-500/50 bg-rose-500/10 text-rose-300 cursor-default'
              } else {
                style = 'border-white/5 bg-white/3 text-zinc-500 cursor-default'
              }
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={state === 'feedback'}
                className={`w-full text-left px-5 py-4 rounded-xl border text-sm leading-relaxed transition-all flex items-start gap-3 ${style}`}
              >
                <span className="shrink-0 w-6 h-6 rounded-full border border-current/40 flex items-center justify-center text-xs font-bold mt-0.5">
                  {state === 'feedback' && i === q.correctIndex
                    ? '✓'
                    : state === 'feedback' && i === selected && !isCorrect
                    ? '✗'
                    : String.fromCharCode(65 + i)}
                </span>
                <span>{opt}</span>
              </button>
            )
          })}
        </div>

        {/* Feedback panel */}
        {state === 'feedback' && (
          <div className={`p-5 rounded-xl border mb-6 ${isCorrect ? 'border-emerald-500/30 bg-emerald-500/8' : 'border-rose-500/30 bg-rose-500/8'}`}>
            <p className={`font-semibold text-sm mb-2 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
              {isCorrect ? 'Correct' : 'Incorrect'}
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed">{q.explanation}</p>
            <div className={`inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-xs font-medium border ${p.bg} ${p.border} ${p.colour}`}>
              <span className="font-bold">{q.phase}</span>
              <span>{p.name} phase</span>
            </div>
          </div>
        )}

        {state === 'feedback' && (
          <button
            onClick={handleNext}
            className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/10 transition-colors"
          >
            {isLast ? 'See results' : 'Next question'}
          </button>
        )}
      </div>
    </div>
  )
}

function Header({
  onBack,
  progress,
}: {
  onBack: () => void
  progress?: { current: number; total: number }
}) {
  return (
    <div className="sticky top-0 z-10 border-b border-white/5 bg-zinc-950/90 backdrop-blur">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Topics
        </button>
        <div className="flex-1 text-center">
          <span className="text-white font-semibold text-sm">IPSGA Game</span>
        </div>
        {progress && (
          <span className="text-zinc-500 text-sm tabular-nums">
            {progress.current}/{progress.total}
          </span>
        )}
      </div>
    </div>
  )
}
