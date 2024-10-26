import React from 'react'
import './Intro.css'
import {Link} from 'react-scroll';
import bg from '../../assests/image.jpg';
import btnImg from '../../assests/hireme.png'
const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='Hello'>Hello,</span>
        <span className='introtext'>
          I am <span className='introName'>Srujana Tondepu</span> <br />
        </span>
        <p className='introPara'>Skilled in web development, Tableau, and Power BI visualization, with strong <br/>technical and analytical skills. Dedicated
        to driving data-driven decision-making <br/>and innovating solutions for real-world projects</p>
        <Link to='contact' smooth={true} duration={500}>
          <button className='btn'>
            <img src={btnImg} alt='Hire' className='btnImg' />Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt='Portfolio' className='bg' />
    </section>
  );
};

export default Intro;