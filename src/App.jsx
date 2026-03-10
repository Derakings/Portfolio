import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroVideo from './components/IntroVideo'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-surface-base text-gray-100 min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <IntroVideo />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
