import React from 'react';
import './Works.css';
import Portfolio1 from '../../assests/portfolio-1.jpg';
import Portfolio2 from '../../assests/portfolio-2.jpg';

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>Projects</h2>
      <span className='worksDesc'>I have completed projects in web development using the MERN stack, focusing on creating dynamic and responsive web applications. Additionally, I have executed data analysis projects utilizing Power BI and Tableau to visualize data insights and support decision-making processes.</span>
      <div className='worksImgs'>
        <figure className='worksFigure'>
          <img src={Portfolio1} alt='Project 1' className='worksImg'/>
          <figcaption className='worksCaption'>
            <a href='https://www.linkedin.com/posts/srujana-tondepu-201173226_mernstack-fullstackdevelopment-webdevelopment-activity-7214950721484414976-R8bP/?utm_source=share&utm_medium=member_desktop'>Food Magic</a>
          </figcaption>
        </figure>
        <figure className='worksFigure'>
          <img src={Portfolio2} alt='Project 2' className='worksImg'/>
          <figcaption className='worksCaption'>
            <a href='https://public.tableau.com/app/profile/srujana.tondepu/viz/AndhraPradesh2024ElectionDashboard/Dashboard1'>Andhra Pradesh 2024 Election Dashboard</a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Works;


