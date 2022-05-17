import React from 'react'
import { motion } from 'framer-motion'
import { AppWrapper, MotionWrapper } from '../../hoc'
// import { images } from '../../constants'
import './About.scss'

const arr = [
  {
    title: 'Frontend Development',
    description:
      'Creating web apps with custom design, responsive layout, modern look and latest technologies like front-end frameworks.',
    imgUrl: '/react.png',
  },
  {
    title: 'Team work',
    description:
      'Work on large projects sometimes can be hard, so it is need to be divided in smaller modules which response for particular tasks. Team work is crucial to achieve the best result in short amount of time.',
    imgUrl: '/teamwork.png',
  },
  {
    title: 'Good practices',
    description:
      'Finding the right solution for your business. Implementing standard libraries or programming custom code that fits your needs.',
    imgUrl: '/good-practice.png',
  },
  {
    title: 'Modern technologies',
    description:
      'I mostly work on frontend projects in the ReactJS framework, I love ReactJS, and I try to learn as much as possible about the ecosystem and the libraries that are used.',
    imgUrl: '/logo.svg',
  },
]

const About = () => {
  return (
    <div className="about">
      <h2 className="head-text">
        <span>I am John </span> Web Developer
      </h2>

      <div className="app__profiles">
        {arr.map((about, index) => (
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

export default AppWrapper(
  MotionWrapper(About, 'app__about'),
  'about',
  'app__whitebg'
)
