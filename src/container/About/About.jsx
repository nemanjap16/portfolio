import React from 'react'
import { motion } from 'framer-motion'
import { AppWrapper } from '../../hoc'
import { images } from '../../constants'
import './About.scss'

const abouts = [
  {
    title: 'Frontend Development',
    description:
      'Creating web apps with custom design, responsive layout, modern look and latest technologies like front-end frameworks.',
    imgUrl: images.about01,
  },
  {
    title: 'Team work',
    description:
      'Teamwork is crucial to achieve the best result in short amount of time. I like to work in team, so if you think that I can help and be part of your team, feel free to contact me. I will be happy to answer.',
    imgUrl: images.about02,
  },
  {
    title: 'Good practices',
    description:
      'Finding the right solution for your business. Implementing standard libraries or programming custom code that fits your needs.',
    imgUrl: images.about03,
  },
  {
    title: 'Modern technologies',
    description:
      'Finding the right solution for your business. Implementing standard libraries or programming custom code that fits your needs.',
    imgUrl: images.about04,
  },
]

const About = () => {
  return (
    <div className="about">
      <h2 className="head-text">
        Development & <span>Latest technologies</span> <br />
        <span>Means </span> Successfull Bussines
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt="about" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
export default AppWrapper(About, 'about', 'about-bg')
