import React from 'react'
import { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
// Style
import './Navbar.scss'

const links = ['home', 'about', 'work', 'skills', 'contact']

function Navbar() {
  // active link state
  const [activeLink, setActiveLink] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src="/cats.svg" alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {links.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div
              className={activeLink === `${item}` ? 'active-dot' : 'unactive'}
            />
            <a
              name={item}
              href={`#${item}`}
              onClick={(e) => setActiveLink(e.target.name)}
              className={activeLink === `${item}` ? 'active' : 'unactive'}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="app_navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="">
              {links.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
