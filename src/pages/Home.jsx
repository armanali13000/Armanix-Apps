import React from 'react';
import AppCard from '../components/AppCard';

const apps = [
  {
    title: "Tic Tac Toe",
    description: "Classic game with a modern twist.",
    icon: "/public/Images/TicTacToe.png",
    link: "https://github.com/armanali13000/TicTacToe/releases/download/1.0.1/TicTacToe.1.0.1.apk",
  },
  {
    title: "CloudView",
    description: "Weather information based on your current location",
    icon: "/public/Images/CloudView.png",
    link: "https://github.com/armanali13000/CloudView/releases/download/v1.0.0/CloudView.1.0.0.apk",
  },
  {
    title: "Calculator",
    description: "A powerful and modern Calculator app",
    icon: "/public/Images/Calculator.png",
    link: "https://github.com/armanali13000/Calculator/releases/download/1.0.1/Calculator.1.0.1.apk",
  },
  {
    title: "3D Cubic",
    description: "Connect colors in a relaxing puzzle challenge.",
    icon: "/public/Images/3DCubic.png",
    link: "https://github.com/armanali13000/3D-Cubic-for-Android/releases/download/1.0.0/3D.Cubic.apk",
  },
  
];

export default function Home() {
  return (
    <div className="container">
      <header>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src="/public/Armanix.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
    <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
      <h1>Armanix Apps</h1>
    </a>
    </div>
        
        <nav>

          <a href="/">Home</a>
          <a href="#apps">Apps</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to My App Collection</h2>
        <p>Fun and addictive apps made with love.</p>
      </section>

      <section id="apps">
        <h2>Apps</h2>
        <div className="app-grid">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>I’m a developer who builds awesome mobile games and tools.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>
          GitHub | Instagram
        </p>
      </section>

      <footer>
        <p>© 2025 Arman Ali. All rights reserved.</p>
      </footer>
    </div>
  );
}
