import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { AppWrapper, MotionWrapper } from '../../hoc'
import { images } from '../../constants'
import './Testimonials.scss'

const Testimonials = () => {
  const testimonialsArr = [
    {
      id: 1,
      name: 'Sarah',
      url: images.about01,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, pariatur placeat ut iusto sint ea nulla quo, maiores amet, fugit error! Aliquid sit nam temporibus modi ullam placeat voluptas porro.',
      company: 'Awesome dev',
    },
    {
      id: 2,
      name: 'Sofia',
      url: images.about02,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, pariatur placeat ut iusto sint ea nulla quo, maiores amet, fugit error! Aliquid sit nam temporibus modi ullam placeat voluptas porro.',
      company: 'Computer Rock',
    },
    {
      id: 3,
      name: 'Ned',
      url: images.about03,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, pariatur placeat ut iusto sint ea nulla quo, maiores amet, fugit error! Aliquid sit nam temporibus modi ullam placeat voluptas porro.',
      company: 'TRillo BC',
    },
    {
      id: 4,
      name: 'Marry',
      url: images.about04,
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, pariatur placeat ut iusto sint ea nulla quo, maiores amet, fugit error! Aliquid sit nam temporibus modi ullam placeat voluptas porro.',
      company: 'MI Internacional',
    },
  ]

  const brandsArr = [
    { id: 1, url: images.nb, name: 'new balance' },
    { id: 2, url: images.skype, name: 'skype' },
    { id: 3, url: images.bolt, name: 'bolt' },
    { id: 4, url: images.spotify, name: 'spotify' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState([])
  const [brands, setBrands] = useState([])

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    setBrands(brandsArr)
    setTestimonials(testimonialsArr)
  }, [])

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].url} alt={testimonials.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              role={'button'}
              tabIndex={0}
              onKeyDown={handleClick}
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              role={'button'}
              tabIndex={0}
              onKeyDown={handleClick}
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand.id}
          >
            <img src={brand.url} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Testimonials, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
)
