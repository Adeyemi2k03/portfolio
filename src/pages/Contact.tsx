import { useState, type ChangeEvent } from 'react'
import { Send, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'

const inputBase: React.CSSProperties = { background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '10px', padding: '12px 14px', fontSize: '14px', outline: 'none', width: '100%', fontFamily: 'Space Grotesk, sans-serif', transition: 'border-color 0.15s' }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onFocus = (e: React.FocusEvent<any>) => (e.target.style.borderColor = 'var(--accent)')
  const onBlur = (e: React.FocusEvent<any>) => (e.target.style.borderColor = 'var(--border)')

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.')
      return
    }
    setLoading(true)
    setError('')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSent(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-10 py-4 max-w-xl">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>Let's talk</p>
        <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}>Get in Touch</h1>
        <p className="mt-2 text-base" style={{ color: 'var(--muted)' }}>Have a project in mind or just want to say hi? I'd love to hear from you.</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <a href="https://mail.google.com/mail/?view=cm&amp;to=olowo.adejibola@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
          <Mail size={14} style={{ color: 'var(--accent)' }} /> olowo.adejibola@gmail.com
        </a>
        <a href="https://x.com/AdeyemiAji8658" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 14 }}>𝕏</span> @AdeyemiAji8658
        </a>
        <a href="https://www.linkedin.com/in/adeyemi-ajibola-257604289/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/Adeyemi2k03" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </div>

      {!sent ? (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs" style={{ color: 'var(--muted)' }}>Name</label>
              <input name="name" value={form.name} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder="Your Name" style={inputBase} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs" style={{ color: 'var(--muted)' }}>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder="you@example.com" style={inputBase} />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs" style={{ color: 'var(--muted)' }}>Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} placeholder="What's this about?" style={inputBase} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs" style={{ color: 'var(--muted)' }}>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} rows={5} placeholder="Tell me about your project..." style={{ ...inputBase, resize: 'none' }} />
          </div>
          {error && <p className="text-xs" style={{ color: '#ff5c35' }}>{error}</p>}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80 mt-1"
            style={{ background: 'var(--accent)', color: 'var(--accent-text)', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            <Send size={14} /> {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div className="rounded-2xl p-10 text-center" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(0,188,212,0.08)', border: '1px solid var(--accent)' }}>
            <Send size={18} style={{ color: 'var(--accent)' }} />
          </div>
          <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>Message sent!</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>I'll get back to you as soon as possible.</p>
        </div>
      )}
    </div>
  )
}