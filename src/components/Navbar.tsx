import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Skills' },
  { to: '/tools', label: 'Tools' },
  { to: '/contact', label: 'Contact' },
]
const socialLinks = [
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&to=olowo.adejiboa@gmail.com' },
  { label: 'X (Twitter)', href: 'https://x.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adeyemi-ajibola-257604289/' },
  { label: 'GitHub', href: 'https://github.com/Adeyemi2k03' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const ThemeBtn = ({ size = 16 }: { size?: number }) => (
    <button onClick={toggle} aria-label="Toggle theme" className="flex items-center justify-center w-8 h-8 rounded-full transition-all" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--muted)', cursor: 'pointer' }}>
      {theme === 'dark' ? <Sun size={size} /> : <Moon size={size} />}
    </button>
  )
  return (
    <>
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-56 flex-col justify-between z-50 px-6 py-8" style={{ background: 'var(--bg)', borderRight: '1px solid var(--border)' }}>
        <div>
          <div className="flex items-center justify-between mb-10">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}>A.A</div>
              <span className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Olowo Adeyemi</span>
            </Link>
            <ThemeBtn />
          </div>
          <nav className="flex flex-col gap-0.5">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className="text-sm px-3 py-2 rounded-md transition-all duration-150"
                style={({ isActive }) => ({ color: isActive ? 'var(--accent)' : 'var(--muted)', background: isActive ? 'rgba(0,188,212,0.07)' : 'transparent', fontWeight: isActive ? 600 : 400 })}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs mb-3 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Connect</p>
          <div className="flex flex-col gap-2">
            {socialLinks.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-xs transition-colors hover:text-white" style={{ color: 'var(--muted)' }}>{s.label}</a>)}
          </div>
          <p className="text-xs mt-6" style={{ color: 'var(--muted)' }}>© 2026 Olowo Adeyemi</p>
        </div>
      </aside>
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-14" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}>A.A</div>
          <span className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Olowo Adeyemi</span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeBtn size={15} />
          <button onClick={() => setOpen(o => !o)} style={{ color: 'var(--text)' }}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>
      {open && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col pt-14" style={{ background: 'var(--bg)' }}>
          <nav className="flex flex-col gap-1 p-5">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)} className="text-base px-4 py-3 rounded-lg transition-all"
                style={({ isActive }) => ({ color: isActive ? 'var(--accent)' : 'var(--text)', background: isActive ? 'rgba(0,188,212,0.07)' : 'transparent', fontWeight: isActive ? 600 : 400 })}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-9 mt-4">
            <p className="text-xs mb-3 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Connect</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm" style={{ color: 'var(--muted)' }}>{s.label}</a>)}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
