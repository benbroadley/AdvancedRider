import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { powdderssLetters } from '../data/powdderss'

type GameState = 'intro' | 'question' | 'feedback' | 'results'

// Indices of the two D questions
const FIRST_D = 3
const SECOND_D = 4

// Look up description by word for the two D entries
const dDescriptions: Record<string, string> = {
  [powdderssLetters[FIRST_D].word]: powdderssLetters[FIRST_D].description,
  [powdderssLetters[SECOND_D].word]: powdderssLetters[SECOND_D].description,
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function POWDDERSSGame() {
  const navigate = useNavigate()
  const [state, setState] = useState<GameState>('intro')
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [results, setResults] = useState<boolean[]>([])
  const [dChosen, setDChosen] = useState<string | null>(null)
  // Per-position word labels for the acronym strip and results screen
  const [stripWords, setStripWords] = useState<string[]>([])

  // The effective word and description for the current question,
  // accounting for the adaptive second D
  const effectiveLetter = useMemo(() => {
    if (index === SECOND_D) {
      const remaining = dChosen === powdderssLetters[FIRST_D].word
        ? powdderssLetters[SECOND_D].word
        : powdderssLetters[FIRST_D].word
      return {
        ...powdderssLetters[SECOND_D],
        word: remaining,
        description: dDescriptions[remaining],
      }
    }
    return powdderssLetters[index]
  }, [index, dChosen])

  const shuffledOptions = useMemo(
    () => shuffle(effectiveLetter.options),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [index]
  )

  // Both D words are correct for the first D question
  function isAnswerCorrect(option: string) {
    if (index === FIRST_D) return option === 'Damage' || option === 'Drive'
    return option === effectiveLetter.word
  }

  const isCorrect = selected !== null && isAnswerCorrect(selected)
  const isLast = index === powdderssLetters.length - 1
  const correctCount = results.filter(Boolean).length

  // Word and description to show in feedback panel
  const feedbackWord = (() => {
    if (index === FIRST_D && selected && (selected === 'Damage' || selected === 'Drive')) return selected
    return effectiveLetter.word
  })()

  const feedbackDescription = (() => {
    if (index === FIRST_D && selected && dDescriptions[selected]) return dDescriptions[selected]
    return effectiveLetter.description
  })()

  function handleSelect(option: string) {
    if (selected !== null) return
    const correct = isAnswerCorrect(option)

    // Determine the canonical word for this position (used in strip + results)
    let wordForPosition: string
    if (index === FIRST_D) {
      wordForPosition = correct ? option : effectiveLetter.word
      if (correct) setDChosen(option)
    } else {
      wordForPosition = effectiveLetter.word
    }

    setSelected(option)
    setState('feedback')
    setResults(r => [...r, correct])
    setStripWords(w => [...w, wordForPosition])
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
    setDChosen(null)
    setStripWords([])
    setState('intro')
  }

  // ── Acronym strip ────────────────────────────────────────────────────────────
  function AcronymStrip({ revealUpTo }: { revealUpTo: number }) {
    return (
      <div className="flex gap-1.5 justify-center flex-wrap">
        {powdderssLetters.map((l, i) => {
          const revealed = i < revealUpTo
          const active = i === revealUpTo && state !== 'results'
          const displayWord = stripWords[i] ?? l.word
          return (
            <div
              key={i}
              className={`flex flex-col items-center transition-all duration-300 ${active ? 'scale-110' : ''}`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black border transition-colors ${
                  revealed
                    ? 'bg-orange-500/20 border-orange-500/40 text-orange-300'
                    : active
                    ? 'bg-white/15 border-white/30 text-white'
                    : 'bg-white/5 border-white/10 text-zinc-500'
                }`}
              >
                {l.letter}
              </div>
              <div
                className={`mt-1.5 text-xs font-medium text-center leading-tight transition-all duration-300 ${
                  revealed ? 'text-orange-400 opacity-100' : 'opacity-0'
                }`}
                style={{ minWidth: '56px', maxWidth: '64px' }}
              >
                {revealed ? displayWord : '—'}
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
            <div className="text-6xl mb-4">🔧</div>
            <h1 className="text-3xl font-bold text-white mb-3">POWDDERSS</h1>
            <p className="text-zinc-400 max-w-md mx-auto">
              A pre-ride machine check. Work through each letter before setting off to make sure your motorcycle is roadworthy.
            </p>
          </div>

          <div className="mb-10">
            <AcronymStrip revealUpTo={0} />
          </div>

          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 mb-10">
            <p className="text-zinc-400 text-sm leading-relaxed text-center">
              You will be shown each letter of the acronym one at a time. Select the word it stands for from the four options. After each answer, you will see what to check for that item.
            </p>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 text-sm mb-6">{powdderssLetters.length} letters to complete</p>
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
    const perfect = correctCount === powdderssLetters.length
    return (
      <div className="min-h-screen bg-zinc-950">
        <Header onBack={() => navigate('/')} />
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">{perfect ? '🏆' : correctCount >= 7 ? '✅' : '📖'}</div>
            <h1 className="text-3xl font-bold text-white mb-2">{correctCount}/{powdderssLetters.length} correct</h1>
            <p className="text-zinc-400 mb-8">
              {perfect
                ? 'Perfect. You know the checklist — use it before every ride.'
                : correctCount >= 7
                ? 'Almost there. Review the items you missed below.'
                : 'Keep practising. A thorough pre-ride check keeps you safe.'}
            </p>
          </div>

          <div className="mb-10">
            <AcronymStrip revealUpTo={powdderssLetters.length} />
          </div>

          <div className="space-y-3 mb-10">
            {powdderssLetters.map((l, i) => {
              const resolvedWord = stripWords[i] ?? l.word
              const resolvedDesc = (i === FIRST_D || i === SECOND_D)
                ? (dDescriptions[resolvedWord] ?? l.description)
                : l.description
              return (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-4 rounded-xl border ${
                    results[i]
                      ? 'border-orange-500/25 bg-orange-500/5'
                      : 'border-rose-500/25 bg-rose-500/5'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black shrink-0 ${
                      results[i]
                        ? 'bg-orange-500/20 text-orange-300'
                        : 'bg-rose-500/20 text-rose-300'
                    }`}
                  >
                    {l.letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm ${results[i] ? 'text-orange-300' : 'text-rose-300'}`}>
                      {resolvedWord}
                    </div>
                    <div className="text-zinc-400 text-xs mt-1 leading-relaxed line-clamp-2">{resolvedDesc}</div>
                  </div>
                  <div className="shrink-0 text-lg">{results[i] ? '✓' : '✗'}</div>
                </div>
              )
            })}
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
      <Header onBack={() => navigate('/')} progress={{ current: index + 1, total: powdderssLetters.length }} />
      <div className="max-w-2xl mx-auto px-4 py-8">

        <div className="mb-10">
          <AcronymStrip revealUpTo={results.length} />
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 border border-white/20 text-5xl font-black text-white mb-4">
            {effectiveLetter.letter}
          </div>
          <p className="text-zinc-400 text-lg">
            What does <span className="text-white font-semibold">{effectiveLetter.letter}</span> stand for in POWDDERSS?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {shuffledOptions.map(option => {
            let style = 'border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 hover:border-white/20 cursor-pointer'
            if (state === 'feedback') {
              if (option === selected && isCorrect) {
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

        {state === 'feedback' && (
          <div className={`p-5 rounded-xl border mb-6 ${isCorrect ? 'border-emerald-500/30 bg-emerald-500/8' : 'border-rose-500/30 bg-rose-500/8'}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`font-bold text-lg ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                {effectiveLetter.letter} — {feedbackWord}
              </span>
              {!isCorrect && (
                <span className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-full px-2 py-0.5">
                  You answered: {selected}
                </span>
              )}
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">{feedbackDescription}</p>
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
          <span className="text-white font-semibold text-sm">POWDDERSS</span>
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
