export default function Marquee({ text = 'OLOWO ADEYEMI' }: { text?: string }) {
  const items = Array(10).fill(text)
  return (
    <div className="overflow-hidden py-5" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="text-5xl md:text-7xl font-bold mr-14 select-none" style={{ color: 'var(--border)', letterSpacing: '-0.02em' }}>{t}</span>
        ))}
      </div>
    </div>
  )
}
