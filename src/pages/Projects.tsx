import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  { title: 'NovaPlex', description: 'A Netflix-style movie streaming interface with live API data, auth via Appwrite, and browsing by category, rating, and release.', tags: ['React', 'TypeScript', 'Tailwind', 'Appwrite', 'TMDB API'], status: 'active', visitUrl: 'https://novaplex.vercel.app/', detailUrl: '/projects/novaplex', cover: '/screenshots/novaplex-1.png' },
  { title: 'CodeXplain', description: 'An AI-powered tool that explains any code snippet in plain English — with an overview, step-by-step breakdown, and key concepts. Supports 14+ languages.', tags: ['React', 'TypeScript', 'Tailwind', 'Groq API', 'AI'], status: 'active', visitUrl: 'https://codexplain-coral.vercel.app/', detailUrl: '/projects/codexplain', cover: '/screenshots/codexplain-1.png' },
]
const allTags = Array.from(new Set(projects.flatMap(p => p.tags)))

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const filtered = activeTag ? projects.filter(p => p.tags.includes(activeTag)) : projects
  return (
    <div className="flex flex-col gap-10 py-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>Playground</p>
        <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}>Projects</h1>
        <p className="mt-2 text-base" style={{ color: 'var(--muted)' }}>A few things I've built while learning and leveling up as a front-end engineer</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {['All', ...allTags].map(tag => (
          <button key={tag} onClick={() => setActiveTag(tag === 'All' ? null : tag)} className="px-3 py-1 rounded-full text-xs font-medium transition-all"
            style={{ background: (tag === 'All' ? !activeTag : activeTag === tag) ? 'var(--accent)' : 'var(--surface)', color: (tag === 'All' ? !activeTag : activeTag === tag) ? 'var(--accent-text)' : 'var(--muted)', border: '1px solid', borderColor: (tag === 'All' ? !activeTag : activeTag === tag) ? 'var(--accent)' : 'var(--border)' }}>
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {filtered.map(project => (
          <div key={project.title} className="rounded-xl flex flex-col" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <Link to={project.detailUrl} className="block">
              <div className="aspect-video rounded-t-xl overflow-hidden">
                <img src={project.cover} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
            </Link>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-start justify-between gap-2">
                <Link to={project.detailUrl}><h3 className="font-semibold text-base hover:underline" style={{ color: 'var(--text)' }}>{project.title}</h3></Link>
                <span className="text-xs px-2 py-0.5 rounded-full shrink-0" style={{ background: 'rgba(0,188,212,0.08)', color: 'var(--accent)', border: '1px solid var(--accent)' }}>{project.status}</span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => <span key={tag} className="text-xs px-2 py-0.5 rounded-md" style={{ background: 'var(--bg)', color: 'var(--muted)', border: '1px solid var(--border)' }}>{tag}</span>)}
              </div>
              <div className="flex gap-4 pt-1">
                <a href={project.visitUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium transition-opacity hover:opacity-70" style={{ color: 'var(--accent)' }}>Visit <ArrowUpRight size={12} /></a>
                <Link to={project.detailUrl} className="flex items-center gap-1 text-xs font-medium transition-opacity hover:opacity-70" style={{ color: 'var(--muted)' }}>View Details →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
