import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebook } from 'react-icons/fa'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        // href="https://www.linkedin.com/in/nemanja-panteli%C4%87-101271134/"
        href="https://github.com/nemanjap16"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://github.com/nemanjap16" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <FaFacebook />
    </div>
  </div>
)

export default SocialMedia
