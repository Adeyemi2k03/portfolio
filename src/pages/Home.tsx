import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-4">
      <section className="flex flex-col gap-6 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0" style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}>A.A</div>
          <span className="text-sm" style={{ color: 'var(--muted)' }}>Available for work</span>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
        </div>
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none mb-3" style={{ letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Hey, I'm<br /><span style={{ color: 'var(--accent)' }}>Olowo Adeyemi</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium" style={{ color: 'var(--muted)', letterSpacing: '-0.01em' }}>Front-End Engineer · AI-Assisted Builder</h2>
        </div>
        <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
          I build clean, functional interfaces and bring ideas to life on the front end — leaning on tools like Claude and Gemini to move faster and think through tricky problems. Still early in my journey, but every project teaches me something new, and I'm just getting started.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <Link to="/projects" className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-80" style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}>
            See My Projects <ArrowUpRight size={14} />
          </Link>
          <Link to="/contact" className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all" style={{ borderColor: 'var(--border)', color: 'var(--text)' }}>
            Get in Touch
          </Link>
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--muted)' }}>Featured Work</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Link to="/projects/novaplex" className="group block rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            <div className="aspect-video overflow-hidden">
              <img src="/screenshots/novaplex-1.png" alt="NovaPlex" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4" style={{ background: 'var(--surface)' }}>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>NovaPlex</h3>
                <ArrowUpRight size={14} style={{ color: 'var(--accent)' }} />
              </div>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>Movie Streaming App · React · Appwrite</p>
            </div>
          </Link>
          <Link to="/projects/codexplain" className="group block rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            <div className="aspect-video overflow-hidden">
              <img src="/screenshots/codexplain-1.png" alt="CodeXplain" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4" style={{ background: 'var(--surface)' }}>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>CodeXplain</h3>
                <ArrowUpRight size={14} style={{ color: 'var(--accent)' }} />
              </div>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>AI Code Explainer · React · Groq API</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
