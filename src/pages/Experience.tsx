const coreSkills = [
  { name: 'React', level: 'Comfortable building components, hooks, and state-driven UIs' },
  { name: 'TypeScript', level: 'Writing typed, predictable front-end code' },
  { name: 'Tailwind CSS', level: 'Fast, consistent, responsive styling' },
  { name: 'Appwrite', level: 'Backend-as-a-service for auth, databases, and storage' },
]
const aiSkills = [
  { name: 'Claude', level: 'Architecture decisions, debugging, code review' },
  { name: 'Gemini', level: 'Research, prototyping, and idea validation' },
]
const otherSkills = ['UI/UX Design Thinking', 'Front-End Architecture', 'Responsive Design', 'Component-Driven Development', 'Git & Version Control', 'Prompt Engineering']
const principles = [
  { title: 'Learning in public', body: "I'm early in my journey, and I treat every project as a chance to get better — shipping, breaking things, and fixing them is how I learn fastest." },
  { title: 'AI as a craft partner', body: 'I use tools like Claude and Gemini the way a developer uses a senior teammate — to think through architecture, catch blind spots, and move faster without skipping understanding.' },
  { title: 'Design-minded development', body: 'I care about how things look and feel, not just whether they work. Clean structure and clean UI go hand in hand for me.' },
]
export default function Experience() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>What I work with</p>
        <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}>Skills & Tools</h1>
        <p className="mt-3 text-base max-w-xl" style={{ color: 'var(--muted)' }}>I'm a front-end engineer focused on building clean, functional interfaces — and I lean on AI tools as part of how I design, build, and debug.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text)' }}>Core Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {coreSkills.map(s => <div key={s.name} className="rounded-xl p-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}><p className="text-sm font-semibold mb-1" style={{ color: 'var(--accent)' }}>{s.name}</p><p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{s.level}</p></div>)}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text)' }}>AI-Assisted Workflow</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {aiSkills.map(s => <div key={s.name} className="rounded-xl p-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}><p className="text-sm font-semibold mb-1" style={{ color: 'var(--accent)' }}>{s.name}</p><p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{s.level}</p></div>)}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text)' }}>Also Comfortable With</h2>
        <div className="flex flex-wrap gap-2">{otherSkills.map(s => <span key={s} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'var(--surface)', color: 'var(--muted)', border: '1px solid var(--border)' }}>{s}</span>)}</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-5" style={{ color: 'var(--text)' }}>How I Work</h2>
        <div className="flex flex-col gap-6">
          {principles.map(p => (
            <div key={p.title} className="flex gap-4">
              <div className="w-1 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
              <div><h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--text)' }}>{p.title}</h3><p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{p.body}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
