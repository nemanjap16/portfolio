import React from 'react'
// Components
import Navbar from './components/Navbar/Navbar'
// Sections
import {
  About,
  Contact,
  Hero,
  Skills,
  Testimonials,
  Work,
} from './container/index'
// Style
import './App.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
