import React, { useState } from 'react';
import AppCard from '../components/AppCard';


const apps = [
  {
    title: "Tic Tac Toe",
    description: "Classic game with a modern twist.",
    icon: "/Armanix-Apps/Images/TicTacToe.png",
    link: "https://github.com/armanali13000/TicTacToe/releases/download/1.0.1/TicTacToe.1.0.1.apk",
  },
  {
    title: "CloudView",
    description: "Weather information based on your current location",
    icon: "/Armanix-Apps/Images/CloudView.png",
    link: "https://github.com/armanali13000/CloudView/releases/download/v1.0.0/CloudView.1.0.0.apk",
  },
  {
    title: "Calculator",
    description: "A powerful and modern Calculator app",
    icon: "/Armanix-Apps/Images/Calculator.png",
    link: "https://github.com/armanali13000/Calculator/releases/download/1.0.1/Calculator.1.0.1.apk",
  },
  {
    title: "3D Cubic",
    description: "Connect colors in a relaxing puzzle challenge.",
    icon: "/Armanix-Apps/Images/3DCubic.png",
    link: "https://github.com/armanali13000/3D-Cubic-for-Android/releases/download/1.0.0/3D.Cubic.apk",
  },
  {
    title: "Classic Puzzle",
    description: "Image-based puzzles by sliding tiles into the correct order",
    icon: "/Armanix-Apps/Images/classic_puzzle.png",
    link: "https://github.com/armanali13000/classic_puzzle/releases/download/v1.0.0/Classic.Puzzle.1.0.0.apk",
  },
  {
    title: "Air Shooter",
    description: "Image-based puzzles by sliding tiles into the correct order",
    icon: "/Armanix-Apps/Images/Air_Shooter.png",
    link: "https://github.com/armanali13000/AirplaneShooter/releases/download/1.0.0/Air.Shooter.1.0.0.apk",
  },
  
];

export default function Home() {

    const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setFormSubmitted(true); 
        setTimeout(() => setFormSubmitted(false), 5000); 
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      alert("Network error. Try again.");
    }
  };




  return (
    
    <div className="container">
      <header>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src="Armanix.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
    <a href="" style={{ color: 'white', textDecoration: 'none' }}>
      <h1>Armanix Apps</h1>
    </a>
    </div>
        
        <nav>

          <a href="">Home</a>
          <a href="#apps">Apps</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>




      <section className="hero" style={{
        background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
      }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          Welcome to Armanix Apps Collection
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6', marginBottom: '30px', color: '#fff', }}>
          Explore fun, fast, and functional mobile apps designed to entertain, solve problems, and simplify your daily routine.
        </p>
        <a
          href="#apps"
          style={{
            backgroundColor: '#ff6b6b',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#ff4e4e')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#ff6b6b')}
        >
          Browse Apps
        </a>
      </section>





      <section id="apps">
        <h2>Apps</h2>
        <div className="app-grid">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </section>

      <section id="about" data-aos="fade-up">
        <h2>About Me</h2>
        <p>I’m a developer who builds awesome mobile games and tools.</p>
      </section>



    <section id="contact" className="contact-section" data-aos="fade-up">

         
          
          <h2>Contact</h2>

          
      
      {formSubmitted && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          ✅ Message sent successfully!
        </p>
      )}


          <form className="contact-form"  action="https://formspree.io/f/meogwndz" method="POST" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="social-links">
            <a href="https://github.com/armanali13000" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/armanali13000" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
    </section>



     <footer style={{
  backgroundColor: '#111',
  color: '#fff',
  padding: '40px 20px',
  textAlign: 'center',
  borderTop: '1px solid #444',
}}>
  <div style={{ marginBottom: '10px' }}>
    <a href="https://github.com/armanali13000" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff', fontSize: '20px' }}>
      <i className="fab fa-github"></i>
    </a>
    <a href="https://www.linkedin.com/in/armanali13000" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff', fontSize: '20px' }}>
      <i className="fab fa-linkedin"></i>
    </a>
  </div>
  <p style={{ fontSize: '14px', marginTop: '10px' }}>© 2025 <strong>Arman Ali</strong>. All rights reserved.</p>
</footer>
    </div>
  );
}
