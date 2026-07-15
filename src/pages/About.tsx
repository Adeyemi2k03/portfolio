import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail } from 'lucide-react'
const skills = ['React', 'TypeScript', 'Tailwind', 'Appwrite', 'Claude', 'Gemini']
const sections = [
  { title: 'Who I Am', body: "I'm Olowo Adeyemi Ajibola, a front-end engineer focused on building clean, functional, and well-designed interfaces. I'm still early in my journey, and I treat every project as a step forward." },
  { title: 'What I Do', body: 'I build front-end applications with React, TypeScript, and Tailwind CSS, using Appwrite to handle backend needs like auth and data. I care as much about how a product feels to use as how it works under the hood.' },
  { title: 'How I Build', body: 'AI tools like Claude and Gemini are part of my everyday workflow — for thinking through architecture, debugging, and exploring ideas faster. I see them as a way to build smarter, not a shortcut around learning.' },
  { title: 'Where I Am Now', body: "I don't have formal work experience yet, but I've built real projects from scratch — including a movie streaming app and an AI-powered code explainer — to sharpen my skills and figure out how I like to build." },
  { title: 'What I Want', body: "I'm looking for opportunities to grow as a front-end engineer, work alongside people who'll push me to improve, and keep building things that are genuinely useful." },
]
export default function About() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shrink-0" style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}>A.A</div>
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>Olowo Adeyemi Ajibola</h1>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>Front-End Engineer · AI-Assisted Builder</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">{skills.map(s => <span key={s} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: 'var(--surface)', color: 'var(--accent)', border: '1px solid var(--accent)' }}>{s}</span>)}</div>
        <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>FRONT-END ENGINEER · UI/UX · AI TOOLS · ALWAYS LEARNING</p>
      </div>
      <div className="flex flex-col gap-7">
        {sections.map(s => (
          <div key={s.title}>
            <div className="flex items-center gap-3 mb-2"><div className="w-1 h-4 rounded-full" style={{ background: 'var(--accent)' }} /><h2 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>{s.title}</h2></div>
            <p className="text-sm leading-relaxed pl-4" style={{ color: 'var(--muted)' }}>{s.body}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-3 flex-wrap">
        <Link to="/contact" className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-80" style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}>Get in Touch <ArrowUpRight size={14} /></Link>
        <a href="https://mail.google.com/mail/?view=cm&amp;to=olowo.adejibola@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border" style={{ borderColor: 'var(--border)', color: 'var(--text)' }}>
          <Mail size={14} style={{ color: 'var(--accent)' }} /> olowo.adejibola@gmail.com
        </a>
      </div>
    </div>
  )
}
