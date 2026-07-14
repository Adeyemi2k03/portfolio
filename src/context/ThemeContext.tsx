import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
type Theme = 'dark' | 'light'
interface ThemeContextValue { theme: Theme; toggle: () => void }
const ThemeContext = createContext<ThemeContextValue>({ theme: 'light', toggle: () => {} })
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) ?? 'light')
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme) }, [theme])
  return <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }}>{children}</ThemeContext.Provider>
}
export const useTheme = () => useContext(ThemeContext)
