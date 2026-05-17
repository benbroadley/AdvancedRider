import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { iamsafeLetters } from '../data/iamsafe'

type GameState = 'intro' | 'question' | 'feedback' | 'results'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function IAMSAFEGame() {
  const navigate = useNavigate()
  const [state, setState] = useState<GameState>('intro')
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [results, setResults] = useState<boolean[]>([])

  const letter = iamsafeLetters[index]
  const shuffledOptions = useMemo(
    () => shuffle(letter.options),
    // re-shuffle when the question changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [index]
  )
  const isCorrect = selected === letter.word
  const isLast = index === iamsafeLetters.length - 1
  const correctCount = results.filter(Boolean).length

  function handleSelect(option: string) {
    if (selected !== null) return
    setSelected(option)
    setState('feedback')
    setResults(r => [...r, option === letter.word])
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
    setResults([])
    setState('intro')
  }

  // ── Acronym display strip ────────────────────────────────────────────────────
  function AcronymStrip({ revealUpTo }: { revealUpTo: number }) {
    return (
      <div className="flex gap-2 justify-center flex-wrap">
        {iamsafeLetters.map((l, i) => {
          const revealed = i < revealUpTo
          const active = i === revealUpTo && state !== 'results'
          return (
            <div
              key={i}
              className={`flex flex-col items-center transition-all duration-300 ${active ? 'scale-110' : ''}`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black border transition-colors ${
                  revealed
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                    : active
                    ? 'bg-white/15 border-white/30 text-white'
                    : 'bg-white/5 border-white/10 text-zinc-500'
                }`}
              >
                {l.letter}
              </div>
              <div
                className={`mt-1.5 text-xs font-medium text-center max-w-[56px] leading-tight transition-all duration-300 ${
                  revealed ? 'text-emerald-400 opacity-100' : 'opacity-0'
                }`}
              >
                {revealed ? l.word : '—'}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  // ── Intro ────────────────────────────────────────────────────────────────────
  if (state === 'intro') {
    return (
      <div className="min-h-screen bg-zinc-950">
        <Header onBack={() => navigate('/')} />
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-bold text-white mb-3">IAMSAFE</h1>
            <p className="text-zinc-400 max-w-md mx-auto">
              A pre-ride fitness checklist. Before every ride, work through each letter to confirm you are fit to ride safely.
            </p>
          </div>

          <div className="mb-10">
            <AcronymStrip revealUpTo={0} />
          </div>

          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 mb-10">
            <p className="text-zinc-400 text-sm leading-relaxed text-center">
              You will be shown each letter of the acronym one at a time. Select the word it stands for from the four options. After each answer, you will see a description of what to check.
            </p>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 text-sm mb-6">{iamsafeLetters.length} letters to complete</p>
            <button
              onClick={() => setState('question')}
              className="px-10 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-colors cursor-pointer"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Results ──────────────────────────────────────────────────────────────────
  if (state === 'results') {
    const perfect = correctCount === iamsafeLetters.length
    return (
      <div className="min-h-screen bg-zinc-950">
        <Header onBack={() => navigate('/')} />
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">{perfect ? '🏆' : correctCount >= 5 ? '✅' : '📖'}</div>
            <h1 className="text-3xl font-bold text-white mb-2">{correctCount}/{iamsafeLetters.length} correct</h1>
            <p className="text-zinc-400 mb-8">
              {perfect
                ? 'Perfect. You know the checklist — now use it before every ride.'
                : correctCount >= 5
                ? 'Almost there. Review the letters you missed below.'
                : 'Keep practising. Use this checklist before every ride.'}
            </p>
          </div>

          <div className="mb-10">
            <AcronymStrip revealUpTo={iamsafeLetters.length} />
          </div>

          {/* Full completed list */}
          <div className="space-y-3 mb-10">
            {iamsafeLetters.map((l, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-4 rounded-xl border ${
                  results[i]
                    ? 'border-emerald-500/25 bg-emerald-500/5'
                    : 'border-rose-500/25 bg-rose-500/5'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black shrink-0 ${
                    results[i]
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-rose-500/20 text-rose-300'
                  }`}
                >
                  {l.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold text-sm ${results[i] ? 'text-emerald-300' : 'text-rose-300'}`}>
                    {l.word}
                  </div>
                  <div className="text-zinc-400 text-xs mt-1 leading-relaxed line-clamp-2">{l.description}</div>
                </div>
                <div className="shrink-0 text-lg">{results[i] ? '✓' : '✗'}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/10 transition-colors cursor-pointer"
            >
              Try again
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 font-medium text-sm border border-white/5 transition-colors cursor-pointer"
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Question / Feedback ──────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header onBack={() => navigate('/')} progress={{ current: index + 1, total: iamsafeLetters.length }} />
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Acronym strip */}
        <div className="mb-10">
          <AcronymStrip revealUpTo={results.length} />
        </div>

        {/* Active letter */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 border border-white/20 text-5xl font-black text-white mb-4">
            {letter.letter}
          </div>
          <p className="text-zinc-400 text-lg">
            What does <span className="text-white font-semibold">{letter.letter}</span> stand for in IAMSAFE?
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {shuffledOptions.map(option => {
            let style = 'border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 hover:border-white/20 cursor-pointer'
            if (state === 'feedback') {
              if (option === letter.word) {
                style = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300 cursor-default'
              } else if (option === selected && !isCorrect) {
                style = 'border-rose-500/50 bg-rose-500/10 text-rose-300 cursor-default'
              } else {
                style = 'border-white/5 bg-white/3 text-zinc-600 cursor-default'
              }
            }
            return (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                disabled={state === 'feedback'}
                className={`px-4 py-4 rounded-xl border text-sm font-medium text-center transition-all leading-snug ${style}`}
              >
                {option}
              </button>
            )
          })}
        </div>

        {/* Feedback panel */}
        {state === 'feedback' && (
          <div className={`p-5 rounded-xl border mb-6 ${isCorrect ? 'border-emerald-500/30 bg-emerald-500/8' : 'border-rose-500/30 bg-rose-500/8'}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`font-bold text-lg ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                {letter.letter} — {letter.word}
              </span>
              {!isCorrect && (
                <span className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-full px-2 py-0.5">
                  You answered: {selected}
                </span>
              )}
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">{letter.description}</p>
          </div>
        )}

        {state === 'feedback' && (
          <button
            onClick={handleNext}
            className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/10 transition-colors cursor-pointer"
          >
            {isLast ? 'See results' : 'Next letter'}
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
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Home
        </button>
        <div className="flex-1 text-center">
          <span className="text-white font-semibold text-sm">IAMSAFE</span>
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
