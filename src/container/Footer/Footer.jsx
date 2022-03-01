import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'

import { images } from '../../constants'
import { AppWrapper, MotionWrapper } from '../../hoc'
// Style
import './Footer.scss'

// Validation schema
const Schema = yup
  .object()
  .shape({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    message: yup.string().min(10).required(),
  })
  .required()

const config = {
  service_id: 'service_eylz1va',
  template_id: 'template_5fmj3m8',
  user_id: 'user_DqyHZfmHeguNW90Gr1Jmi',
}

const Footer = () => {
  /**
   * @description - Use Form Hook with validation schema
   */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(Schema),
  })

  const [isLoading, setisLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const sendEmail = (formData) => {
    setisLoading(true)
    // Send email
    emailjs
      .send(config.service_id, config.template_id, formData, config.user_id)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })

    setTimeout(() => {
      setisLoading(false)
      reset()
    }, 2000)
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="form__style">
      <h2 className="head-text">
        Contact <span>me</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:nemanjawebdev@gmail.com" className="p-text">
            nemanjawebdev@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+381 (0)67/70-49-801" className="p-text">
            +381 (0)67/70-49-801
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit(sendEmail)}>
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              {...register('name')}
              onChange={handleChangeInput}
            />
          </div>
          <span style={{ color: 'red', marginRight: 'auto' }}>
            {errors.name?.message}
          </span>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              {...register('email')}
              onChange={handleChangeInput}
            />
          </div>
          <span role="alert" style={{ color: 'red', marginRight: 'auto' }}>
            {errors.email?.message}
          </span>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              {...register('message')}
              onChange={handleChangeInput}
            />
          </div>
          <span style={{ color: 'red', marginRight: 'auto' }}>
            {errors.message?.message}
          </span>

          <button
            type="submit"
            className="p-text"
            style={{ backgroundColor: '#313bac' }}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AppWrapper(
  MotionWrapper(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
