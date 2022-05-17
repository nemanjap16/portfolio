import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrapper, MotionWrapper } from '../../hoc'
import { images } from '../../constants'
import './Skills.scss'

const data = [
  {
    id: 1,
    title: 'Frontend Development',
    name: 'HTML5',
    imgUrl: images.html,
    tags: ['Web App', 'React JS'],
    bgColor: '#fff',
  },
  {
    id: 2,
    title: 'Team work',
    name: 'CSS3',
    imgUrl: images.css,
    tags: ['React JS'],
    bgColor: '#fff',
  },
  {
    id: 3,
    title: 'Frontend Development',
    name: 'Git',
    imgUrl: images.git,
    tags: ['Web App', 'React JS'],
    bgColor: '#fff',
  },
  {
    id: 4,
    title: 'Team work',
    name: 'JavaScript',
    imgUrl: images.javascript,
    tags: ['React JS'],
    bgColor: '#fff',
  },
  {
    id: 5,
    title: 'Good practices',
    name: 'React JS',
    imgUrl: images.react,
    bgColor: '#fff',
  },
  {
    id: 6,
    title: 'Modern technologies',
    name: 'Vue JS',
    imgUrl: images.vue,
    bgColor: '#fff',
  },
  {
    id: 7,
    title: 'Modern technologies',
    name: 'SASS',
    imgUrl: images.sass,
    bgColor: '#fff',
  },
  {
    id: 8,
    title: 'Modern technologies',
    name: 'Node JS',
    imgUrl: images.node,
    bgColor: '#fff',
  },
  {
    id: 9,
    title: 'Modern technologies',
    name: 'Express JS',
    imgUrl: images.express,
    bgColor: '#fff',
  },
  {
    id: 10,
    title: 'Modern technologies',
    name: 'Mongo DB',
    imgUrl: images.mongo,
    bgColor: '#fff',
  },
]

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    setSkills(data)
  }, [])

  return (
    <div className="skills">
      <h2 className="head-text">
        Technology <span>stack</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.id}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// export default AppWrapper(Skills, 'skills', 'bg-color')
export default AppWrapper(
  MotionWrapper(Skills, 'app__skills'),
  'skills',
  'bg-color'
)
