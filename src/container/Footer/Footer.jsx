import React from 'react'
import { images } from '../../constants'
import { AppWrapper, MotionWrapper } from '../../hoc'
// Style
import './Footer.scss'

const Footer = () => {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  // const [loading, setLoading] = useState(false)

  // const { username, email, message } = formData

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]: value })
  // }

  // const handleSubmit = () => {
  //   setLoading(true)

  //   setTimeout(() => {
  //     setLoading(false)
  //     setIsFormSubmitted(true)
  //   }, 2000)
  // }

  return (
    <>
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
      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )} */}
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
