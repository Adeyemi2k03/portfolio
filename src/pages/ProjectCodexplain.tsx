import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const screenshots = [
  { src: '/screenshots/codexplain-1.png', caption: 'Dark mode — hero and code input area' },
  { src: '/screenshots/codexplain-2.png', caption: 'Light mode — clean minimal interface' },
  { src: '/screenshots/codexplain-3.png', caption: 'Language selector — 14+ languages supported' },
  { src: '/screenshots/codexplain-4.png', caption: 'Code input with Python snippet ready to explain' },
  { src: '/screenshots/codexplain-5.png', caption: 'AI output — overview and step-by-step breakdown' },
  { src: '/screenshots/codexplain-6.png', caption: 'AI output — key concepts section' },
]
const stack = ['React', 'TypeScript', 'Tailwind CSS', 'Groq API', 'llama-3.3-70b']
const highlights = [
  'Paste any code snippet and get a structured AI explanation in seconds',
  '14+ programming languages supported — JS, TS, Python, Go, Rust, and more',
  'Structured output with Overview, Step-by-Step Breakdown, and Key Concepts',
  'Light and dark mode toggle built in',
  'Powered by Groq API (llama-3.3-70b) for fast, accurate explanations',
  'No data stored — open source and privacy-friendly',
]

export default function ProjectCodexplain() {
  const [active, setActive] = useState(0)
  return (
    <div className="flex flex-col gap-10 py-4 max-w-4xl">
      <Link to="/projects" className="flex items-center gap-2 text-sm w-fit transition-opacity hover:opacity-70" style={{ color: 'var(--muted)' }}>
        <ArrowLeft size={14} /> Back to Projects
      </Link>

      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(0,188,212,0.08)', color: 'var(--accent)', border: '1px solid var(--accent)' }}>active</span>
          <span className="text-xs" style={{ color: 'var(--muted)' }}>AI Code Explainer</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}>CodeXplain</h1>
        <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--muted)' }}>
          A developer tool that takes any code snippet, lets you select the language, and returns a structured AI-generated explanation — an overview, a step-by-step breakdown, and the key concepts at play. Built to explore how LLMs can make code more approachable, and to practice integrating AI APIs into a real front-end product.
        </p>
      </div>

      <a href="https://codexplain-coral.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-80 w-fit" style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}>
        Visit Live Site <ArrowUpRight size={14} />
      </a>

      {/* ── YouTube Demo ── */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>Demo Video</p>
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/2s4p8c3adoI"
              title="CodeXplain Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* ── Screenshots ── */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>Screenshots</p>
        <div className="rounded-xl overflow-hidden mb-3" style={{ border: '1px solid var(--border)' }}>
          <img src={screenshots[active].src} alt={screenshots[active].caption} className="w-full object-cover" />
        </div>
        <p className="text-xs text-center mb-4" style={{ color: 'var(--muted)' }}>{screenshots[active].caption}</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {screenshots.map((s, i) => (
            <button key={i} onClick={() => setActive(i)} className="rounded-lg overflow-hidden transition-all" style={{ border: '2px solid', borderColor: active === i ? 'var(--accent)' : 'var(--border)', opacity: active === i ? 1 : 0.6 }}>
              <img src={s.src} alt={s.caption} className="w-full object-cover aspect-video" />
            </button>
          ))}
        </div>
      </div>

      {/* ── What I built ── */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>What I Built</p>
        <ul className="flex flex-col gap-3">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--muted)' }}>
              <span className="shrink-0 mt-0.5" style={{ color: 'var(--accent)' }}>—</span>{h}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Stack ── */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {stack.map(s => <span key={s} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}>{s}</span>)}
        </div>
      </div>
    </div>
  )
}
