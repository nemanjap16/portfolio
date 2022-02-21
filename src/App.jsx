import React from 'react'
// Components
import Navbar from './components/Navbar/Navbar'
// Sections
import {
  About,
  Footer,
  Hero,
  Skils,
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
      <Skils />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
