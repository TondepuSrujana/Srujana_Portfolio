import React from 'react'
import './Skills.css';
import UIDesign from '../../assests/ui-design.png';
import WebDesign from '../../assests/website-design.png'
import AppDesign from '../../assests/app-design.png';


const Skills = () => {
  return (
    <section id='Skills'>
      <span className='skillTitle'>Skills</span>
      <span className='skillDesc'>
        Specializing in backend development with MongoDB and frontend development with React, Angular, HTML, CSS, and JavaScript. Proficient in Java, SQL, Python, and skilled in data analysis and visualization using Excel, Tableau, and Power BI.
      </span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Data Analysis</h2>
            <p>Involves inspecting, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. It includes statistical analysis, pattern recognition, and data visualization.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Web Development</h2>
            <p>Involves building and maintaining websites, involving frontend development with HTML, CSS, JavaScript, and Angular and backend development with MongoDB. It focuses on creating responsive, user-friendly, and functional web applications.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Logo Design</h2>
            <p>Involves creating visually compelling symbols that effectively represent a brand's identity and values.</p>
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default Skills;
