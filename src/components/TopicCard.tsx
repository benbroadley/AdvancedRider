import type { Topic } from '../data/topics'
import { difficultyLabel, difficultyColor } from '../data/topics'

interface TopicCardProps {
  topic: Topic
  progress: number
  onClick: () => void
}

const colorMap: Record<string, string> = {
  blue: 'from-blue-600/20 to-blue-600/5 border-blue-500/30 hover:border-blue-400/60',
  green: 'from-emerald-600/20 to-emerald-600/5 border-emerald-500/30 hover:border-emerald-400/60',
  orange: 'from-orange-600/20 to-orange-600/5 border-orange-500/30 hover:border-orange-400/60',
  red: 'from-rose-600/20 to-rose-600/5 border-rose-500/30 hover:border-rose-400/60',
  purple: 'from-purple-600/20 to-purple-600/5 border-purple-500/30 hover:border-purple-400/60',
  yellow: 'from-yellow-600/20 to-yellow-600/5 border-yellow-500/30 hover:border-yellow-400/60',
}

const iconBgMap: Record<string, string> = {
  blue: 'bg-blue-500/15 border-blue-500/30',
  green: 'bg-emerald-500/15 border-emerald-500/30',
  orange: 'bg-orange-500/15 border-orange-500/30',
  red: 'bg-rose-500/15 border-rose-500/30',
  purple: 'bg-purple-500/15 border-purple-500/30',
  yellow: 'bg-yellow-500/15 border-yellow-500/30',
}

const progressBarMap: Record<string, string> = {
  blue: 'bg-blue-500',
  green: 'bg-emerald-500',
  orange: 'bg-orange-500',
  red: 'bg-rose-500',
  purple: 'bg-purple-500',
  yellow: 'bg-yellow-500',
}

export function TopicCard({ topic, progress, onClick }: TopicCardProps) {
  const cardGradient = colorMap[topic.color] ?? colorMap.blue
  const iconBg = iconBgMap[topic.color] ?? iconBgMap.blue
  const progressBar = progressBarMap[topic.color] ?? progressBarMap.blue

  return (
    <button
      onClick={onClick}
      className={`group w-full text-left rounded-2xl border bg-gradient-to-b ${cardGradient} p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 cursor-pointer`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className={`flex items-center justify-center w-12 h-12 rounded-xl border text-2xl ${iconBg} shrink-0`}>
          {topic.icon}
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyColor[topic.difficulty]}`}>
          {difficultyLabel[topic.difficulty]}
        </span>
      </div>

      <h3 className="text-white font-semibold text-lg leading-tight mb-1 group-hover:text-white/90">
        {topic.title}
      </h3>
      <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-2">
        {topic.subtitle}
      </p>

      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-zinc-500">
          <span>{topic.flashcards.length} flashcards</span>
          <span>{progress > 0 ? `${progress}% complete` : 'Not started'}</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${progressBar}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </button>
  )
}
