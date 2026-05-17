import { useState } from 'react'
import type { Topic } from '../data/topics'
import { difficultyLabel, difficultyColor } from '../data/topics'
import { FlashcardView } from './FlashcardView'

type Tab = 'overview' | 'flashcards'

interface TopicDetailProps {
  topic: Topic
  onBack: () => void
  onFlashcardsComplete: (topicId: string, known: string[], learning: string[]) => void
  progress: number
}

export function TopicDetail({ topic, onBack, onFlashcardsComplete, progress }: TopicDetailProps) {
  const [tab, setTab] = useState<Tab>('overview')
  const [flashcardsStarted, setFlashcardsStarted] = useState(false)
  const [sessionResult, setSessionResult] = useState<{ known: string[]; learning: string[] } | null>(null)

  function handleFlashcardsComplete(known: string[], learning: string[]) {
    setSessionResult({ known, learning })
    onFlashcardsComplete(topic.id, known, learning)
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-white/5 bg-zinc-950/90 backdrop-blur">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Topics
          </button>
          <div className="flex-1" />
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyColor[topic.difficulty]}`}>
            {difficultyLabel[topic.difficulty]}
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="mb-8">
          <div className="text-5xl mb-4">{topic.icon}</div>
          <h1 className="text-3xl font-bold text-white mb-2">{topic.title}</h1>
          <p className="text-zinc-400 text-lg">{topic.subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-white/5 rounded-xl mb-8 w-fit">
          {(['overview', 'flashcards'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => {
                setTab(t)
                setFlashcardsStarted(false)
                setSessionResult(null)
              }}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                tab === t
                  ? 'bg-white/10 text-white shadow'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {t}
              {t === 'flashcards' && (
                <span className="ml-2 text-xs opacity-60">{topic.flashcards.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* Overview tab */}
        {tab === 'overview' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-white font-semibold mb-3">About this topic</h2>
              <p className="text-zinc-400 leading-relaxed">{topic.description}</p>
            </section>

            <section>
              <h2 className="text-white font-semibold mb-4">Key points</h2>
              <ul className="space-y-3">
                {topic.keyPoints.map((point) => (
                  <li key={point.id} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-zinc-300 text-sm leading-relaxed">{point.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {progress > 0 && (
              <section>
                <h2 className="text-white font-semibold mb-3">Your progress</h2>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white">{progress}%</div>
                  <div>
                    <div className="text-sm text-zinc-300">flashcard completion</div>
                    <div className="h-2 w-40 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                </div>
              </section>
            )}

            <button
              onClick={() => setTab('flashcards')}
              className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors border border-white/10"
            >
              Practice flashcards →
            </button>
          </div>
        )}

        {/* Flashcards tab */}
        {tab === 'flashcards' && (
          <div>
            {!flashcardsStarted && !sessionResult && (
              <div className="text-center py-8">
                <div className="text-6xl mb-6">🗂</div>
                <h2 className="text-white font-semibold text-xl mb-2">
                  {topic.flashcards.length} flashcards
                </h2>
                <p className="text-zinc-400 mb-8">
                  Tap each card to reveal the answer, then rate how well you knew it.
                </p>
                <button
                  onClick={() => setFlashcardsStarted(true)}
                  className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium transition-colors border border-white/10"
                >
                  Start session
                </button>
              </div>
            )}

            {flashcardsStarted && !sessionResult && (
              <FlashcardView cards={topic.flashcards} onComplete={handleFlashcardsComplete} />
            )}

            {sessionResult && (
              <div className="text-center py-8">
                <div className="text-6xl mb-6">
                  {sessionResult.known.length === topic.flashcards.length ? '🏆' : '📈'}
                </div>
                <h2 className="text-white font-semibold text-xl mb-2">Session complete</h2>
                <div className="flex gap-4 justify-center my-6">
                  <div className="px-5 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center">
                    <div className="text-2xl font-bold text-emerald-400">{sessionResult.known.length}</div>
                    <div className="text-xs text-emerald-400/70 mt-0.5">Got it</div>
                  </div>
                  <div className="px-5 py-3 rounded-xl border border-rose-500/30 bg-rose-500/10 text-center">
                    <div className="text-2xl font-bold text-rose-400">{sessionResult.learning.length}</div>
                    <div className="text-xs text-rose-400/70 mt-0.5">Still learning</div>
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => {
                      setSessionResult(null)
                      setFlashcardsStarted(true)
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors border border-white/10"
                  >
                    Practice again
                  </button>
                  <button
                    onClick={onBack}
                    className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 font-medium text-sm transition-colors border border-white/5"
                  >
                    Back to topics
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
