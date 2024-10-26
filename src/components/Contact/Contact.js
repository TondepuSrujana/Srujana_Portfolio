import React, { useRef } from 'react';
import './Contact.css';
import snapchaticon from '../../assests/snapchat.png';
import InstagramIcon from '../../assests/instagram.png';
import gmailicon from '../../assests/gmail.png';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_61a4j9u', 'template_f7n2jjp', form.current, 'E2ejl2wtV1wPajJ5C')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          e.target.reset();
          alert('Email sent successfully!');
        }, (error) => {
          console.error('Email send failed:', error.text);
        }
      );
  };

  return (
    <section>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
      </div>
      <span className="contactDesc">
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
          required
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="submitBtn">
          Submit
        </button>
        <div className="links">
         
        <a href="https://www.instagram.com/_sruji_.17/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </a>

          <a href="mailto:2100032015cseh@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmailicon} alt="gmail" className="link" />
          </a>
         
          
          <a href="https://accounts.snapchat.com/v2/welcome" target="_blank" rel="noopener noreferrer">
            <img src={snapchaticon} alt="snapchat" className="link" />
          </a>

        </div>
      </form>
    </section>
  );
};

export default Contact;
