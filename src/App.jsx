import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App