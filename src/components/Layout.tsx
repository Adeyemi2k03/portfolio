import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Marquee from './Marquee'
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navbar />
      <main className="md:ml-56 pt-14 md:pt-0 min-h-screen flex flex-col">
        <div className="flex-1 px-5 sm:px-8 md:px-12 py-10 w-full max-w-5xl">{children}</div>
        <footer className="mt-auto">
          <Marquee />
          <div className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-12 py-5 gap-3 text-xs" style={{ color: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
            <span>Made by Olowo Adeyemi · © 2026</span>
            <Link to="/contact" className="transition-colors hover:opacity-70" style={{ color: 'var(--accent)' }}>Reach out →</Link>
          </div>
        </footer>
      </main>
    </div>
  )
}
