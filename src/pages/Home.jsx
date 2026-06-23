import React, { useEffect } from 'react';
import AppCard from '../components/AppCard';

export default function Home({ apps, categories, showToast }) {
  const featuredApps = apps.slice(0, 6);

  useEffect(() => {
    document.title = 'Premium Android Apps by Armanix Apps';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        'Discover useful apps, games, productivity tools, business solutions, and smart Android experiences by Armanix Apps.',
      );
  }, []);

  return (
    <main className="page-transition">
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Android app studio</p>
          <p className="hero-brand-title">Armanix Apps</p>
          <h1>Premium Android Apps by Armanix Apps</h1>
          <p className="hero-subtitle">
            Discover refined Android apps, games, productivity tools, business solutions, and smart mobile experiences from one focused studio.
          </p>
          <div className="button-row">
            <a className="primary-btn" href="#/apps">
              Explore Apps
            </a>
            <a className="secondary-btn" href="#/support">
              Contact Support
            </a>
          </div>
        </div>
        <div className="hero-showcase glass-panel" aria-label="Featured Armanix Apps">
          {featuredApps.slice(0, 4).map((app) => (
            <a key={app.id} href={`#/apps/${app.id}`} className="floating-app">
              <img src={app.icon} alt="" />
              <span>{app.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section stats-strip">
        <div>
          <strong>{apps.length}</strong>
          <span>Android apps</span>
        </div>
        <div>
          <strong>{categories.length - 1}</strong>
          <span>Categories</span>
        </div>
        <div>
          <strong>Store</strong>
          <span>Play links</span>
        </div>
        <div>
          <strong>Email</strong>
          <span>Direct support</span>
        </div>
      </section>

      <section className="section download-section">
        <div className="section-heading">
          <p className="eyebrow">Download apps</p>
          <h2>Get apps from the available store and website links.</h2>
          <a href="#/apps">Open full catalog</a>
        </div>
        <div className="app-grid compact-grid">
          {apps.slice(0, 4).map((app) => (
            <AppCard key={app.id} app={app} showToast={showToast} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured apps</p>
          <h2>Polished Android experiences across work and play.</h2>
          <a href="#/apps">View all apps</a>
        </div>
        <div className="app-grid">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} showToast={showToast} />
          ))}
        </div>
      </section>

      <section className="section projects-section">
        <div className="section-heading">
          <p className="eyebrow">All apps and projects</p>
          <h2>Browse the complete Armanix Apps collection.</h2>
          <a href="#/apps">Search and filter apps</a>
        </div>
        <div className="app-grid compact-grid">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} showToast={showToast} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Categories</p>
          <h2>Apps grouped around real Android needs.</h2>
        </div>
        <div className="category-grid">
          {categories
            .filter((category) => category !== 'All')
            .map((category) => (
              <a href={`#/apps`} className="glass-panel category-card" key={category}>
                <span>{category}</span>
                <strong>{apps.filter((app) => app.category === category).length}</strong>
              </a>
            ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Why choose Armanix Apps</p>
          <h2>Premium presentation with practical mobile utility.</h2>
          <p>
            Every app page is built around clear details: what the app does, what permissions it uses, what changed, how to
            get help, and where to find the official app links.
          </p>
        </div>
        <div className="value-grid">
          {['Clean Android UI', 'Privacy-first notes', 'Fast app catalog', 'Support workflows'].map((item) => (
            <article className="glass-panel" key={item}>
              <h3>{item}</h3>
              <p>Designed to feel modern, trustworthy, and easy to use across mobile, tablet, and desktop screens.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tech-stack">
        <div className="section-heading">
          <p className="eyebrow">Tech stack</p>
          <h2>Fast, lightweight, and production-minded.</h2>
        </div>
        <div className="chip-row">
          {['React', 'Vite', 'CSS animations', 'Formspree', 'Responsive design', 'SEO metadata'].map((item) => (
            <span className="chip static" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
