import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectNovaplex from './pages/ProjectNovaplex'
import ProjectCodexplain from './pages/ProjectCodexplain'
import Experience from './pages/Experience'
import Tools from './pages/Tools'
import About from './pages/About'
import Contact from './pages/Contact'
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/novaplex" element={<ProjectNovaplex />} />
            <Route path="/projects/codexplain" element={<ProjectCodexplain />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
