const tools = [
  { name: 'VS Code', category: 'IDE', url: 'https://code.visualstudio.com', emoji: '💻' },
  { name: 'React', category: 'Frameworks & Libraries', url: 'https://react.dev', emoji: '⚛️' },
  { name: 'TypeScript', category: 'Frameworks & Libraries', url: 'https://www.typescriptlang.org', emoji: '🔷' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', url: 'https://tailwindcss.com', emoji: '🎨' },
  { name: 'Appwrite', category: 'Frameworks & Libraries', url: 'https://appwrite.io', emoji: '🗄️' },
  { name: 'Claude', category: 'AI Tools', url: 'https://claude.ai', emoji: '🧠' },
  { name: 'Gemini', category: 'AI Tools', url: 'https://gemini.google.com', emoji: '✨' },
  { name: 'Figma', category: 'Design', url: 'https://figma.com', emoji: '🎯' },
  { name: 'GitHub', category: 'Productivity', url: 'https://github.com', emoji: '🐙' },
]
const categories = Array.from(new Set(tools.map(t => t.category)))
export default function Tools() {
  return (
    <div className="flex flex-col gap-10 py-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>My Stack</p>
        <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}>Shovels</h1>
        <p className="mt-2 text-base" style={{ color: 'var(--muted)' }}>Tools I use to design, build, and ship</p>
      </div>
      {categories.map(cat => (
        <div key={cat}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>{cat}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {tools.filter(t => t.category === cat).map(tool => (
              <a key={tool.name} href={tool.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all" style={{ background: 'var(--surface)', border: '1px solid var(--border)', textDecoration: 'none' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}>
                <span className="text-xl">{tool.emoji}</span>
                <div><p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{tool.name}</p><p className="text-xs" style={{ color: 'var(--muted)' }}>{tool.category}</p></div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
