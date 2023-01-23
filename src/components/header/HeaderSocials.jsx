import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {FaWhatsappSquare} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><FaGithubSquare/></a>
        <a href='https://intagram.com' target="_blank"><FaInstagramSquare/></a>
        <a href='https://gmail.com' target="_blank"><SiGmail/></a>
        <a href='https://whatsapp.com' target="_blank"><FaWhatsappSquare/></a>
        
    </div>
  )
}

export default HeaderSocials