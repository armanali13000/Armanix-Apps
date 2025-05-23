import React from 'react';


export default function AppCard({ title, description, icon, link }) {
  return (
    <div className="app-card" data-aos="zoom-in">
      <img src={icon} alt={`${title} icon`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="download-btn">
        Download App 
      </a>
    </div>
  );
}
