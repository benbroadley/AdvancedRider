import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { highwayCodeSections } from '../data/highwayCode'

interface EnrichedRule {
  number: number
  title?: string
  text: string
  must?: boolean
  sectionId: string
  sectionTitle: string
  sectionIcon: string
  sectionRuleRange: string
}

const allRules: EnrichedRule[] = highwayCodeSections.flatMap(section =>
  section.rules
    .filter(r => r.number > 0)
    .map(r => ({
      ...r,
      sectionId: section.id,
      sectionTitle: section.title,
      sectionIcon: section.icon,
      sectionRuleRange: section.ruleRange,
    }))
)

function pickRandom(exclude?: number): EnrichedRule {
  const pool = exclude != null ? allRules.filter(r => r.number !== exclude) : allRules
  return pool[Math.floor(Math.random() * pool.length)]
}

export function RandomRule() {
  const { number } = useParams<{ number: string }>()
  const navigate = useNavigate()
  const ruleNumber = number ? parseInt(number, 10) : NaN

  const rule = isNaN(ruleNumber) ? null : allRules.find(r => r.number === ruleNumber)

  // If no valid rule number, redirect to a random one immediately
  useEffect(() => {
    if (!number || isNaN(ruleNumber) || !rule) {
      const r = pickRandom()
      navigate(`/rule/${r.number}`, { replace: true })
    }
  }, [number, ruleNumber, rule, navigate])

  if (!rule) return null

  function handleNext() {
    const next = pickRandom(rule!.number)
    navigate(`/rule/${next.number}`)
  }

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href)
  }

  const ruleIndex = allRules.findIndex(r => r.number === rule.number)
  const prevRule = ruleIndex > 0 ? allRules[ruleIndex - 1] : null
  const nextRule = ruleIndex < allRules.length - 1 ? allRules[ruleIndex + 1] : null

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-white/5 bg-zinc-950/90 backdrop-blur">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </Link>
          <div className="flex-1 text-center">
            <span className="text-zinc-500 text-sm">Random Rule</span>
          </div>
          <button
            onClick={handleCopyLink}
            title="Copy link to this rule"
            className="text-zinc-500 hover:text-white transition-colors p-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4 py-10">
        {/* Section badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xl">{rule.sectionIcon}</span>
          <Link
            to="/highway-code"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            {rule.sectionTitle}
          </Link>
          <span className="text-zinc-700">·</span>
          <span className="text-xs text-zinc-600">Rules {rule.sectionRuleRange}</span>
        </div>

        {/* Rule card */}
        <div
          className={`rounded-2xl border p-8 mb-8 ${
            rule.must
              ? 'border-rose-500/30 bg-rose-500/5'
              : 'border-white/10 bg-white/3'
          }`}
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <div
              className={`text-6xl font-black leading-none tabular-nums ${
                rule.must ? 'text-rose-500/40' : 'text-white/10'
              }`}
            >
              {rule.number}
            </div>
            {rule.must && (
              <span className="shrink-0 text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/25 rounded-full px-3 py-1">
                Legal requirement
              </span>
            )}
          </div>

          {rule.title && (
            <h1 className={`text-2xl font-bold mb-4 leading-snug ${rule.must ? 'text-rose-200' : 'text-white'}`}>
              {rule.title}
            </h1>
          )}

          <p className="text-zinc-300 text-lg leading-relaxed">{rule.text}</p>
        </div>

        {/* Prev / Next rule navigation */}
        <div className="flex gap-3 mb-6">
          {prevRule ? (
            <Link
              to={`/rule/${prevRule.number}`}
              className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl border border-white/8 bg-white/3 hover:bg-white/6 transition-colors text-sm text-zinc-400 hover:text-white"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="truncate">Rule {prevRule.number}{prevRule.title ? ` — ${prevRule.title}` : ''}</span>
            </Link>
          ) : <div className="flex-1" />}

          {nextRule ? (
            <Link
              to={`/rule/${nextRule.number}`}
              className="flex-1 flex items-center justify-end gap-2 px-4 py-3 rounded-xl border border-white/8 bg-white/3 hover:bg-white/6 transition-colors text-sm text-zinc-400 hover:text-white"
            >
              <span className="truncate text-right">Rule {nextRule.number}{nextRule.title ? ` — ${nextRule.title}` : ''}</span>
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : <div className="flex-1" />}
        </div>

        {/* Random button */}
        <button
          onClick={handleNext}
          className="w-full py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Another random rule
        </button>

        <p className="text-center text-zinc-700 text-xs mt-6">
          Rule {rule.number} of {allRules.length} numbered rules
        </p>
      </div>
    </div>
  )
}
