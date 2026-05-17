import { useState, useMemo, useRef, useEffect } from 'react'
import { highwayCodeSections } from '../data/highwayCode'
import type { HCSection, HCRule } from '../data/highwayCode'

interface HighwayCodePageProps {
  onBack: () => void
}

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-amber-400/30 text-amber-200 rounded px-0.5">{part}</mark> : part
  )
}

function RuleCard({ rule, query }: { rule: HCRule; query: string }) {
  return (
    <div
      id={rule.number > 0 ? `rule-${rule.number}` : undefined}
      className={`p-4 rounded-xl border transition-colors ${
        rule.must
          ? 'border-rose-500/25 bg-rose-500/5'
          : 'border-white/8 bg-white/3'
      }`}
    >
      <div className="flex items-start gap-3">
        {rule.number > 0 && (
          <span
            className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-md border mt-0.5 ${
              rule.must
                ? 'bg-rose-500/15 border-rose-500/30 text-rose-400'
                : 'bg-white/5 border-white/10 text-zinc-500'
            }`}
          >
            {rule.number}
          </span>
        )}
        <div className="flex-1 min-w-0">
          {rule.title && (
            <p className={`font-medium text-sm mb-1 ${rule.must ? 'text-rose-300' : 'text-white'}`}>
              {highlight(rule.title, query)}
            </p>
          )}
          <p className="text-zinc-400 text-sm leading-relaxed">
            {highlight(rule.text, query)}
          </p>
          {rule.must && (
            <span className="inline-block mt-2 text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded px-2 py-0.5">
              LEGAL REQUIREMENT
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function SectionContent({ section, query }: { section: HCSection; query: string }) {
  const rules = query
    ? section.rules.filter(r =>
        r.text.toLowerCase().includes(query.toLowerCase()) ||
        (r.title && r.title.toLowerCase().includes(query.toLowerCase()))
      )
    : section.rules

  if (rules.length === 0) return null

  return (
    <div id={`section-${section.id}`} className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{section.icon}</span>
        <div>
          <h2 className="text-white font-bold text-xl">{section.title}</h2>
          <span className="text-zinc-500 text-xs">Rules {section.ruleRange}</span>
        </div>
        <span className="ml-auto text-xs text-zinc-600">{rules.length} rule{rules.length !== 1 ? 's' : ''}</span>
      </div>
      <div className="space-y-3">
        {rules.map((rule, i) => (
          <RuleCard key={rule.number > 0 ? rule.number : `${section.id}-${i}`} rule={rule} query={query} />
        ))}
      </div>
    </div>
  )
}

export function HighwayCodePage({ onBack }: HighwayCodePageProps) {
  const [query, setQuery] = useState('')
  const [activeSection, setActiveSection] = useState(highwayCodeSections[0].id)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const totalRules = useMemo(
    () => highwayCodeSections.reduce((s, sec) => s + sec.rules.length, 0),
    []
  )

  const searchResults = useMemo(() => {
    if (!query.trim()) return null
    const q = query.toLowerCase()
    return highwayCodeSections
      .map(sec => ({
        ...sec,
        rules: sec.rules.filter(
          r =>
            r.text.toLowerCase().includes(q) ||
            (r.title && r.title.toLowerCase().includes(q)) ||
            String(r.number).includes(q)
        ),
      }))
      .filter(sec => sec.rules.length > 0)
  }, [query])

  const mustCount = useMemo(
    () => highwayCodeSections.flatMap(s => s.rules).filter(r => r.must).length,
    []
  )

  function scrollToSection(id: string) {
    setSidebarOpen(false)
    setQuery('')
    setActiveSection(id)
    setTimeout(() => {
      const el = document.getElementById(`section-${id}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  // Update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('section-', '')
            setActiveSection(id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    highwayCodeSections.forEach(sec => {
      const el = document.getElementById(`section-${sec.id}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const sectionsToShow = searchResults ?? highwayCodeSections

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      {/* Top nav */}
      <div className="sticky top-0 z-20 border-b border-white/5 bg-zinc-950/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-sm shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                placeholder="Search rules, keywords, or rule number…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-white/8 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white/25 focus:bg-white/10 transition-colors"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Mobile section toggle */}
          <button
            onClick={() => setSidebarOpen(v => !v)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Search summary */}
        {query && (
          <div className="max-w-7xl mx-auto px-4 pb-2">
            <p className="text-xs text-zinc-500">
              {searchResults
                ? `${searchResults.reduce((s, sec) => s + sec.rules.length, 0)} result${searchResults.reduce((s, sec) => s + sec.rules.length, 0) !== 1 ? 's' : ''} across ${searchResults.length} section${searchResults.length !== 1 ? 's' : ''}`
                : 'No results'}
            </p>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex relative">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'fixed inset-0 z-30 flex flex-col' : 'hidden'
          } lg:flex lg:flex-col lg:sticky lg:top-[57px] lg:h-[calc(100vh-57px)] w-64 shrink-0 bg-zinc-950 border-r border-white/5 overflow-y-auto`}
        >
          {sidebarOpen && (
            <div className="flex items-center justify-between p-4 border-b border-white/5 lg:hidden">
              <span className="text-white font-semibold text-sm">Sections</span>
              <button onClick={() => setSidebarOpen(false)} className="text-zinc-400 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          <div className="p-4">
            <div className="text-xs text-zinc-600 mb-3">{totalRules} rules · {mustCount} legal requirements</div>
            <nav className="space-y-0.5">
              {highwayCodeSections.map(sec => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === sec.id && !query
                      ? 'bg-white/10 text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-base shrink-0">{sec.icon}</span>
                  <span className="truncate">{sec.title}</span>
                  <span className="ml-auto text-xs text-zinc-600 shrink-0">{sec.ruleRange}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Backdrop for mobile sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-20 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <main ref={contentRef} className="flex-1 min-w-0 px-4 lg:px-8 py-8">
          {!query && (
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">UK Highway Code</h1>
              <p className="text-zinc-400">
                All {totalRules} rules across {highwayCodeSections.length} sections.{' '}
                <span className="text-rose-400">Red rules</span> are legal requirements.
              </p>
            </div>
          )}

          {query && searchResults && searchResults.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-zinc-400">No rules match <span className="text-white">"{query}"</span></p>
              <button onClick={() => setQuery('')} className="mt-4 text-sm text-zinc-500 hover:text-white underline underline-offset-2">
                Clear search
              </button>
            </div>
          )}

          {sectionsToShow.map(section => (
            <SectionContent key={section.id} section={section as HCSection} query={query} />
          ))}
        </main>
      </div>
    </div>
  )
}
