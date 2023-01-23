import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaGithubSquare} from 'react-icons/fa'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kkmozho', 'template_fyoh31f', form.current, 'Vws_guC209GFJcPzl')
        e.target.reset()
    };
    return ( 
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
            <div className="contact_options">
               <article className="contact_option">
                  <MdEmail className='contact_option-icon'/>
                  <h4>Email</h4>
                  <h5>rajharsh5119@gmail.com</h5>
                  <a href="mailto:rajharsh5119@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
               </article>
               <article className="contact_option">
                  <FaGithubSquare className='contact_option-icon'/>
                  <h4>Github</h4>
                  <h5>harshjha1234</h5>
                  <a href="https://harshjha1234.github.io" target='_blank' rel="noreferrer">Send a message</a>
               </article>
               <article className="contact_option">
                  <FaFacebookMessenger className='contact_option-icon'/>
                  <h4>Messenger</h4>
                  <h5>Harsh Jha</h5>
                  <a href="https://m.me/100053972415625" target='_blank' rel="noreferrer">Send a message</a>
               </article>
               <article className="contact_option">
                  <FaWhatsappSquare className='contact_option-icon'/>
                  <h4>WhatsApp</h4>
                  <h5>+918677024138</h5>
                  <a href="https://api.whatsapp.com/send?phone+918677024138" target='_blank' rel="noreferrer">Send a message</a>
               </article>
            </div>
            {/* END OF CONTACT OPTION */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your full Name' required/>
                <input type="email" name='email' placeholder='Your Email' required/>
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
    )
}

export default Contact