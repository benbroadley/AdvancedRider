import { useState } from 'react'
import type { Flashcard } from '../data/topics'

interface FlashcardViewProps {
  cards: Flashcard[]
  onComplete: (known: string[], learning: string[]) => void
}

export function FlashcardView({ cards, onComplete }: FlashcardViewProps) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState<string[]>([])
  const [learning, setLearning] = useState<string[]>([])

  const card = cards[index]
  const isLast = index === cards.length - 1

  function handleRate(wasKnown: boolean) {
    const nextKnown = wasKnown ? [...known, card.id] : known
    const nextLearning = wasKnown ? learning : [...learning, card.id]

    if (isLast) {
      onComplete(nextKnown, nextLearning)
      return
    }

    setKnown(nextKnown)
    setLearning(nextLearning)
    setFlipped(false)
    setTimeout(() => setIndex(i => i + 1), 200)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-sm text-zinc-500">
        {index + 1} / {cards.length}
      </div>

      <div className="w-full max-w-2xl">
        <div
          className="relative cursor-pointer select-none"
          onClick={() => setFlipped(f => !f)}
          style={{ perspective: '1000px' }}
        >
          <div
            className="relative w-full transition-transform duration-500"
            style={{
              transformStyle: 'preserve-3d',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              minHeight: '220px',
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl border border-white/10 bg-zinc-900 text-center"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">Question</p>
              <p className="text-white text-xl font-medium leading-relaxed">{card.question}</p>
              <p className="text-zinc-600 text-sm mt-6">Tap to reveal answer</p>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl border border-white/10 bg-zinc-800 text-center"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">Answer</p>
              <p className="text-zinc-100 text-base leading-relaxed">{card.answer}</p>
            </div>
          </div>
        </div>
      </div>

      {flipped && (
        <div className="flex gap-3 w-full max-w-sm">
          <button
            onClick={() => handleRate(false)}
            className="flex-1 py-3 rounded-xl border border-rose-500/40 bg-rose-500/10 text-rose-400 font-medium text-sm hover:bg-rose-500/20 transition-colors"
          >
            Still learning
          </button>
          <button
            onClick={() => handleRate(true)}
            className="flex-1 py-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-medium text-sm hover:bg-emerald-500/20 transition-colors"
          >
            Got it
          </button>
        </div>
      )}

      {!flipped && (
        <div className="flex gap-3 w-full max-w-sm">
          <button
            onClick={() => setFlipped(true)}
            className="flex-1 py-3 rounded-xl border border-white/10 bg-white/5 text-zinc-300 font-medium text-sm hover:bg-white/10 transition-colors"
          >
            Reveal answer
          </button>
        </div>
      )}
    </div>
  )
}
