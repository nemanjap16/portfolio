import React from 'react'
// Components
import Navbar from './components/Navbar/Navbar'
// Sections
import {
  About,
  Footer,
  Header,
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
      <Header />
      <About />
      <Work />
      <Skils />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
