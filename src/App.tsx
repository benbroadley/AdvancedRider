import { useState } from 'react'
import { Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import { topics } from './data/topics'
import type { Difficulty } from './data/topics'
import { difficultyLabel, difficultyColor } from './data/topics'
import { TopicCard } from './components/TopicCard'
import { TopicDetail } from './components/TopicDetail'
import { IPSGAGame } from './components/IPSGAGame'
import { HighwayCodePage } from './components/HighwayCodePage'
import { RandomRule } from './components/RandomRule'
import { highwayCodeSections } from './data/highwayCode'

type Progress = Record<string, { known: string[]; learning: string[] }>

const difficulties: Difficulty[] = ['foundation', 'intermediate', 'advanced']
const totalHCRules = highwayCodeSections.reduce((s, sec) => s + sec.rules.filter(r => r.number > 0).length, 0)

function calcProgress(topicId: string, progress: Progress, totalCards: number): number {
  const p = progress[topicId]
  if (!p || totalCards === 0) return 0
  return Math.round((p.known.length / totalCards) * 100)
}

function overallStats(progress: Progress) {
  const totalCards = topics.reduce((sum, t) => sum + t.flashcards.length, 0)
  const totalKnown = Object.values(progress).reduce((sum, p) => sum + p.known.length, 0)
  return { totalCards, totalKnown }
}

// ── Home ───────────────────────────────────────────────────────────────────────

function Home({ progress }: {
  progress: Progress
}) {
  const navigate = useNavigate()
  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | 'all'>('all')

  const filtered = filterDifficulty === 'all' ? topics : topics.filter(t => t.difficulty === filterDifficulty)
  const { totalCards, totalKnown } = overallStats(progress)
  const overallPct = totalCards > 0 ? Math.round((totalKnown / totalCards) * 100) : 0
  const startedCount = Object.keys(progress).length

  function goRandomRule() {
    const allRules = highwayCodeSections.flatMap(s => s.rules.filter(r => r.number > 0))
    const rule = allRules[Math.floor(Math.random() * allRules.length)]
    navigate(`/rule/${rule.number}`)
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <nav className="border-b border-white/5 bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏍</span>
            <div>
              <div className="text-white font-semibold text-sm leading-none">AdvancedRider</div>
              <div className="text-zinc-500 text-xs mt-0.5">Advanced Riding Revision</div>
            </div>
          </div>
          {totalKnown > 0 && (
            <div className="text-right">
              <div className="text-xs text-zinc-500">{totalKnown}/{totalCards} mastered</div>
              <div className="h-1 w-20 bg-white/10 rounded-full mt-1 ml-auto overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${overallPct}%` }} />
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-3">Advanced Rider Revision</h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            Study materials for advanced motorcyclists. Master the system, ride better.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { label: 'Topics', value: topics.length },
            { label: 'Flashcards', value: totalCards },
            { label: 'Started', value: startedCount },
          ].map(({ label, value }) => (
            <div key={label} className="p-4 rounded-xl border border-white/8 bg-white/3 text-center">
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* IPSGA Game banner */}
        <Link
          to="/ipsga"
          className="group w-full mb-4 p-5 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-600/20 via-violet-600/15 to-indigo-600/10 hover:border-indigo-400/50 hover:from-indigo-600/25 hover:via-violet-600/20 transition-all duration-200 flex cursor-pointer"
        >
          <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🎯</div>
              <div>
                <div className="text-white font-semibold text-lg leading-tight">IPSGA Game</div>
                <div className="text-zinc-400 text-sm mt-0.5">
                  Multiple-choice questions across all five phases of the riding system
                </div>
                <div className="flex gap-1.5 mt-2">
                  {['I', 'P', 'S', 'G', 'A'].map(letter => (
                    <span key={letter} className="w-6 h-6 rounded-md bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold flex items-center justify-center">
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <svg className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        {/* Highway Code + Random Rule row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Link
            to="/highway-code"
            className="group sm:col-span-2 p-5 rounded-2xl border border-zinc-700/50 bg-gradient-to-r from-zinc-800/60 via-zinc-800/40 to-zinc-800/20 hover:border-zinc-600/70 hover:from-zinc-800/80 transition-all duration-200 flex cursor-pointer"
          >
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-4">
                <div className="text-4xl">📖</div>
                <div>
                  <div className="text-white font-semibold text-lg leading-tight">UK Highway Code</div>
                  <div className="text-zinc-400 text-sm mt-0.5">All {totalHCRules} rules with search</div>
                  <div className="flex gap-2 mt-2 text-xs">
                    <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400">Legal requirements highlighted</span>
                  </div>
                </div>
              </div>
              <svg className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <button
            onClick={goRandomRule}
            className="group p-5 rounded-2xl border border-amber-600/25 bg-gradient-to-b from-amber-600/15 to-amber-600/5 hover:border-amber-500/40 hover:from-amber-600/20 transition-all duration-200 text-left cursor-pointer"
          >
            <div className="text-3xl mb-3">🎲</div>
            <div className="text-white font-semibold leading-tight mb-1">Random Rule</div>
            <div className="text-zinc-400 text-sm">Discover a random Highway Code rule</div>
          </button>
        </div>

        {/* Difficulty filter */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setFilterDifficulty('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              filterDifficulty === 'all'
                ? 'bg-white/10 border-white/20 text-white'
                : 'border-white/8 text-zinc-500 hover:text-zinc-300 hover:border-white/15'
            }`}
          >
            All
          </button>
          {difficulties.map(d => (
            <button
              key={d}
              onClick={() => setFilterDifficulty(d)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                filterDifficulty === d
                  ? `${difficultyColor[d]}`
                  : 'border-white/8 text-zinc-500 hover:text-zinc-300 hover:border-white/15'
              }`}
            >
              {difficultyLabel[d]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(topic => (
            <TopicCard
              key={topic.id}
              topic={topic}
              progress={calcProgress(topic.id, progress, topic.flashcards.length)}
              onClick={() => navigate(`/topics/${topic.id}`)}
            />
          ))}
        </div>

        <p className="text-center text-zinc-600 text-xs mt-12">
          For revision purposes only. Always ride within the law and your ability.
        </p>
      </div>
    </div>
  )
}

// ── Topic detail route wrapper ─────────────────────────────────────────────────

function TopicDetailRoute({ progress, onFlashcardsComplete }: {
  progress: Progress
  onFlashcardsComplete: (id: string, known: string[], learning: string[]) => void
}) {
  const navigate = useNavigate()
  const { topicId } = useParams<{ topicId: string }>()
  const topic = topics.find(t => t.id === topicId)

  if (!topic) {
    navigate('/', { replace: true })
    return null
  }

  return (
    <TopicDetail
      topic={topic}
      onBack={() => navigate('/')}
      onFlashcardsComplete={onFlashcardsComplete}
      progress={calcProgress(topic.id, progress, topic.flashcards.length)}
    />
  )
}

// ── Simple back-wrappers ───────────────────────────────────────────────────────

function IPSGARoute() {
  const navigate = useNavigate()
  return <IPSGAGame onBack={() => navigate('/')} />
}

function HighwayCodeRoute() {
  const navigate = useNavigate()
  return <HighwayCodePage onBack={() => navigate('/')} />
}

// ── Root ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [progress, setProgress] = useState<Progress>({})

  function handleFlashcardsComplete(id: string, known: string[], learning: string[]) {
    setProgress(prev => ({ ...prev, [id]: { known, learning } }))
  }

  return (
    <Routes>
      <Route path="/" element={<Home progress={progress} />} />
      <Route path="/ipsga" element={<IPSGARoute />} />
      <Route path="/highway-code" element={<HighwayCodeRoute />} />
      <Route path="/topics/:topicId" element={<TopicDetailRoute progress={progress} onFlashcardsComplete={handleFlashcardsComplete} />} />
      <Route path="/rule/:number" element={<RandomRule />} />
      <Route path="/rule" element={<RandomRule />} />
      <Route path="*" element={<Home progress={progress} />} />
    </Routes>
  )
}
