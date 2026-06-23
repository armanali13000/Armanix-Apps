import React, { useEffect, useMemo, useState } from 'react';
import AppCard from './components/AppCard';
import Home from './pages/Home';
import './styles/style.css';

const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const apps = [
  {
    id: 'thrill-music-player',
    name: 'Thrill Music Player',
    category: 'Music',
    version: '1.0.10',
    icon: assetPath('Images/Thrill-logo.png'),
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thrill.musicplayer',
    websiteUrl: 'https://thrillmusic.vercel.app/',
    shortDescription: 'A polished offline music player for playlists, albums, and everyday listening.',
    fullDescription:
      'Thrill Music Player is designed for a clean Android music experience with fast browsing, elegant controls, playlist organization, and a focused listening interface.',
    features: ['Local audio playback', 'Playlist management', 'Album and artist views', 'Modern dark player UI'],
    changelog: ['Latest version 1.0.10', 'Play Store listing added', 'Official website link added'],
    permissions: ['Storage or media library access for local songs', 'Notifications for playback controls'],
    privacy: 'Audio files stay on your device. Contact form submissions are sent only when you choose to submit them.',
    screenshots: [assetPath('Images/Thrill-logo.png'), assetPath('Images/Armanix logo.png')],
    faq: [
      ['Does it work offline?', 'Yes, the app is positioned for local music playback and offline listening.'],
      ['Does it upload music?', 'No. Your local audio library remains on your Android device.'],
    ],
  },
  {
    id: 'cloudview-weather',
    name: 'CloudView Weather',
    category: 'Weather',
    version: '1.0.0',
    icon: assetPath('Images/CloudView.png'),
    playStoreUrl: '#',
    websiteUrl: '#',
    shortDescription: 'Smart weather information based on your current location.',
    fullDescription:
      'CloudView Weather helps Android users check practical weather conditions with a simple interface built around location-aware forecasts.',
    features: ['Current weather', 'Location-based updates', 'Clean forecast UI', 'Fast Android experience'],
    changelog: ['Version 1.0.0 release notes', 'Catalog details refreshed'],
    permissions: ['Location for local weather', 'Internet for forecast data'],
    privacy: 'Location access is used to provide weather information. No contact information is collected unless you submit a form.',
    screenshots: [assetPath('Images/CloudView.png'), assetPath('Armanix.png')],
    faq: [
      ['Why is location permission needed?', 'It helps show weather for your current area.'],
      ['Can I contact support?', 'Yes, use the support or contact form from this website.'],
    ],
  },
  {
    id: 'tic-tac-toe',
    name: 'Tic Tac Toe',
    category: 'Game',
    version: '1.0.1',
    icon: assetPath('Images/TicTacToe.png'),
    playStoreUrl: '#',
    websiteUrl: '#',
    shortDescription: 'The classic strategy game with a clean modern Android feel.',
    fullDescription:
      'Tic Tac Toe brings the timeless three-in-a-row game to Android with fast rounds, simple controls, and a refined mobile interface.',
    features: ['Quick matches', 'Simple strategy gameplay', 'Lightweight Android game', 'Mobile-friendly controls'],
    changelog: ['Version 1.0.1 release notes', 'Improved catalog metadata'],
    permissions: ['No sensitive permissions expected'],
    privacy: 'Gameplay does not require personal data. Support forms are optional and handled through Formspree.',
    screenshots: [assetPath('Images/TicTacToe.png'), assetPath('Armanix.png')],
    faq: [
      ['Is it free to play?', 'Yes, it is designed as a lightweight casual game experience.'],
      ['Is it heavy?', 'No, it is designed as a lightweight casual game.'],
    ],
  },
  {
    id: 'stockpro-erp',
    name: 'StockPro ERP',
    category: 'Business',
    version: '1.0.0',
    icon: assetPath('Images/stockpro-erp.png'),
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.stockproerp.inventory',
    websiteUrl: 'https://stockproerp.vercel.app/',
    shortDescription: 'A business-focused ERP concept for stock, operations, and productivity workflows.',
    fullDescription:
      'StockPro ERP is presented as a professional Android business solution for inventory thinking, business organization, and operational clarity.',
    features: ['Inventory workflow focus', 'Business dashboard concept', 'Productivity-first design', 'Professional Android UI'],
    changelog: ['Play Store listing added', 'Official website link added', 'Business app details refreshed'],
    permissions: ['Storage for exported records when enabled', 'Internet for connected business features when enabled'],
    privacy: 'Business data should be handled carefully inside the app. Contact forms on this website are optional.',
    screenshots: [assetPath('Images/stockpro-erp.png'), assetPath('Armanix.png')],
    faq: [
      ['Is this for businesses?', 'Yes, it is positioned as a business and productivity app.'],
      ['Where can I get support?', 'Use the Support page and select StockPro ERP as the app.'],
    ],
  },
  {
    id: '3d-cubic',
    name: '3D Cubic',
    category: 'Puzzle',
    version: '1.0.0',
    icon: assetPath('Images/3DCubic.png'),
    playStoreUrl: '#',
    websiteUrl: '#',
    shortDescription: 'A relaxing puzzle experience with color connection gameplay.',
    fullDescription:
      '3D Cubic gives Android players a calm puzzle challenge centered around connecting colors and solving compact visual levels.',
    features: ['Relaxing puzzle loops', 'Color connection mechanics', 'Compact mobile levels', 'Simple Android gameplay'],
    changelog: ['Version 1.0.0 release notes', 'Premium detail page added'],
    permissions: ['No sensitive permissions expected'],
    privacy: 'Puzzle gameplay does not require personal information. Optional support messages are sent through Formspree.',
    screenshots: [assetPath('Images/3DCubic.png'), assetPath('Armanix.png')],
    faq: [
      ['Is it a puzzle game?', 'Yes, it is listed under puzzle games.'],
      ['Is it a casual game?', 'Yes, it is designed for quick puzzle sessions on Android.'],
    ],
  },
  {
    id: 'calculator',
    name: 'Calculator',
    category: 'Utility',
    version: '1.0.1',
    icon: assetPath('Images/Calculator.png'),
    playStoreUrl: '#',
    websiteUrl: '#',
    shortDescription: 'A modern calculator for fast daily Android calculations.',
    fullDescription:
      'Calculator is a simple and powerful Android utility built for quick arithmetic, everyday tasks, and clean mobile usability.',
    features: ['Fast calculations', 'Modern interface', 'Lightweight install', 'Daily utility focus'],
    changelog: ['Version 1.0.1 release notes', 'Improved app store presentation'],
    permissions: ['No sensitive permissions expected'],
    privacy: 'Calculator functions do not require personal information or account data.',
    screenshots: [assetPath('Images/Calculator.png'), assetPath('Armanix.png')],
    faq: [
      ['Does it require internet?', 'Core calculator usage should not require internet access.'],
      ['Is it suitable for daily use?', 'Yes, it is designed as a practical Android utility.'],
    ],
  },
  {
    id: 'chess-2d',
    name: 'Chess 2D',
    category: 'Game',
    version: '1.0.0',
    icon: assetPath('Images/2D_Chess.png'),
    playStoreUrl: '#',
    websiteUrl: '#',
    shortDescription: 'A sleek 2D chess game for solo practice or friendly play.',
    fullDescription:
      'Chess 2D gives Android users a clean chess board experience for focused games, casual practice, and classic strategy sessions.',
    features: ['2D chess board', 'Clean game interface', 'Classic strategy gameplay', 'Lightweight Android release'],
    changelog: ['Version 1.0.0 release notes', 'Details page added'],
    permissions: ['No sensitive permissions expected'],
    privacy: 'Chess gameplay does not require personal information. Support messages are optional.',
    screenshots: [assetPath('Images/2D_Chess.png'), assetPath('Armanix.png')],
    faq: [
      ['Can I play chess on Android?', 'Yes, this app is listed as a 2D Android chess game.'],
      ['How do I report an issue?', 'Use the Support page and choose Chess 2D.'],
    ],
  },
  {
    id: 'airplane-shooter-game',
    name: 'Airplane Shooter Game',
    category: 'Game',
    version: '1.0.0',
    icon: assetPath('Images/Air_Shooter.png'),
    playStoreUrl: '#',
    websiteUrl: '#',
    shortDescription: 'An action arcade shooter built for quick Android game sessions.',
    fullDescription:
      'Airplane Shooter Game is a mobile arcade experience focused on fast aircraft action, simple controls, and replayable shooting gameplay.',
    features: ['Arcade airplane action', 'Fast game sessions', 'Mobile controls', 'Replayable Android action'],
    changelog: ['Version 1.0.0 release notes', 'Renamed for clearer app catalog SEO'],
    permissions: ['No sensitive permissions expected'],
    privacy: 'The game is presented as a casual Android title and does not require personal information for basic gameplay.',
    screenshots: [assetPath('Images/Air_Shooter.png'), assetPath('Armanix.png')],
    faq: [
      ['Is this the Air Shooter app?', 'Yes, it is listed here as Airplane Shooter Game.'],
      ['Is it made for quick sessions?', 'Yes, it is designed for fast Android arcade play.'],
    ],
  },
  {
    id: 'puzzle-app',
    name: 'Puzzle App',
    category: 'Puzzle',
    version: '1.0.0',
    icon: assetPath('Images/puzzle.png'),
    playStoreUrl: '#',
    websiteUrl: '#',
    shortDescription: 'A classic sliding puzzle game with colorful, focused Android gameplay.',
    fullDescription:
      'Puzzle App is a lightweight Android puzzle experience where players solve image-based sliding puzzles by arranging tiles into the correct order.',
    features: ['Sliding tile puzzle gameplay', 'Colorful puzzle icon', 'Quick casual sessions', 'Lightweight Android puzzle'],
    changelog: ['Version 1.0.0 release notes', 'Replaced Gallery App listing with Puzzle App'],
    permissions: ['No sensitive permissions expected'],
    privacy: 'Puzzle gameplay does not require personal information. Optional support messages are sent through Formspree.',
    screenshots: [assetPath('Images/puzzle.png'), assetPath('Images/classic_puzzle.png')],
    faq: [
      ['Is this the puzzle app?', 'Yes, Gallery App has been replaced with Puzzle App in the catalog.'],
      ['Is it mobile friendly?', 'Yes, it is built for quick touch-based puzzle sessions.'],
    ],
  },
];

const navItems = [
  ['Home', '#/'],
  ['Apps', '#/apps'],
  ['About', '#/about'],
  ['Support', '#/support'],
  ['Contact', '#/contact'],
];

const categories = ['All', ...Array.from(new Set(apps.map((app) => app.category)))];
const formEndpoint = 'https://formspree.io/f/meogwndz';
const supportEmail = 'darkdevil7325@gmail.com';

function routeFromHash() {
  return window.location.hash.replace(/^#\/?/, '') || '';
}

function setSeo(title, description) {
  document.title = `${title} | Armanix Apps`;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${title} | Armanix Apps`);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
}

function Toast({ toast }) {
  return <div className={`toast ${toast ? 'show' : ''}`}>{toast}</div>;
}

function LoadingScreen() {
  return (
    <div className="loading-screen" aria-label="Loading Armanix Apps">
      <div className="loader-mark">
        <span />
        <span />
        <span />
      </div>
      <p>Loading Armanix Apps</p>
    </div>
  );
}

function Header({ route, theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const isActive = (href) => {
    const normalized = href.replace('#/', '');
    return route === normalized || (!route && normalized === '');
  };

  useEffect(() => setOpen(false), [route]);

  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label="Armanix Apps home">
        <img src={assetPath('Armanix.png')} alt="Armanix Apps logo" />
        <span>Armanix Apps</span>
      </a>
      <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? 'open' : ''} aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} className={isActive(href) ? 'active' : ''} href={href}>
            {label}
          </a>
        ))}
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color mode">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#/">
          <img src={assetPath('Armanix.png')} alt="" />
          <span>Armanix Apps</span>
        </a>
        <p>Premium Android apps, games, utilities, productivity tools, and smart mobile experiences built with a support-first mindset.</p>
        <a className="footer-email" href={`mailto:${supportEmail}`}>
          {supportEmail}
        </a>
      </div>
      <div className="footer-links">
        <strong>Company</strong>
        <a href="#/apps">Apps</a>
        <a href="#/about">About</a>
        <a href="#/contact">Contact</a>
      </div>
      <div className="footer-links">
        <strong>Support</strong>
        <a href="#/privacy">Privacy Policy</a>
        <a href="#/terms">Terms & Conditions</a>
        <a href="#/support">Support</a>
        <a href="https://github.com/armanali13000" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <p className="copyright">Copyright 2026 Armanix Apps. All rights reserved.</p>
    </footer>
  );
}

function PageShell({ children }) {
  return <main className="page-transition">{children}</main>;
}

function AppsPage({ showToast }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const matchesQuery = `${app.name} ${app.category} ${app.shortDescription}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || app.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  useEffect(() => {
    setSeo('Android Apps', 'Browse every Android app by Armanix Apps with Play Store links, official websites, details, features, and support.');
  }, []);

  return (
    <PageShell>
      <section className="section page-hero">
        <p className="eyebrow">Complete catalog</p>
        <h1>Android apps built for utility, games, business, and daily life.</h1>
        <p>Search, filter, open details, visit official websites, or check Play Store availability for every Armanix Apps release.</p>
      </section>
      <section className="section">
        <div className="filter-bar glass-panel">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search apps" aria-label="Search apps" />
          <div className="chip-row" aria-label="Filter by category">
            {categories.map((item) => (
              <button key={item} className={category === item ? 'chip active' : 'chip'} type="button" onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="app-grid">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} showToast={showToast} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function AppDetailsPage({ appId, showToast }) {
  const [modalImage, setModalImage] = useState(null);
  const app = apps.find((item) => item.id === appId);

  useEffect(() => {
    if (app) setSeo(app.name, `${app.name} by Armanix Apps: features, screenshots, changelog, permissions, privacy info, FAQ, Play Store, and official website links.`);
  }, [app]);

  if (!app) return <NotFoundPage />;

  return (
    <PageShell>
      <section className="section detail-hero">
        <div className="detail-copy">
          <p className="eyebrow">{app.category} app</p>
          <h1>{app.name}</h1>
          <p>{app.fullDescription}</p>
          <div className="meta-row">
            <span>Version {app.version}</span>
            <span>{app.category}</span>
          </div>
          <div className="button-row">
            <a
              className="primary-btn"
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                if (app.playStoreUrl === '#') {
                  event.preventDefault();
                  showToast('Play Store link coming soon');
                  return;
                }
                showToast(`Opening ${app.name} on Play Store`);
              }}
            >
              Play Store
            </a>
            <a
              className="secondary-btn"
              href={app.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                if (app.websiteUrl === '#') {
                  event.preventDefault();
                  showToast('Website link coming soon');
                }
              }}
            >
              Website
            </a>
            <a className="secondary-btn" href="#/support">
              Support
            </a>
          </div>
        </div>
        <div className="phone-preview glass-panel">
          <img src={app.icon} alt={`${app.name} icon`} />
          <h2>{app.name}</h2>
          <p>{app.shortDescription}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Screenshots</p>
          <h2>Gallery preview</h2>
        </div>
        <div className="screenshot-grid">
          {app.screenshots.map((image) => (
            <button key={image} type="button" className="screenshot-card" onClick={() => setModalImage(image)}>
              <img src={image} alt={`${app.name} screenshot`} />
            </button>
          ))}
        </div>
      </section>

      <section className="section detail-grid">
        <InfoPanel title="Key Features" items={app.features} />
        <InfoPanel title="Changelog" items={app.changelog} />
        <InfoPanel title="Permissions Used" items={app.permissions} />
        <article className="glass-panel info-panel">
          <h3>Privacy Info</h3>
          <p>{app.privacy}</p>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions</h2>
        </div>
        <FaqList items={app.faq} />
      </section>

      {modalImage && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={() => setModalImage(null)}>
          <button className="modal-close" type="button" aria-label="Close screenshot" onClick={() => setModalImage(null)}>
            Close
          </button>
          <img src={modalImage} alt={`${app.name} enlarged screenshot`} />
        </div>
      )}
    </PageShell>
  );
}

function InfoPanel({ title, items }) {
  return (
    <article className="glass-panel info-panel">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function FaqList({ items }) {
  return (
    <div className="faq-list">
      {items.map(([question, answer]) => (
        <details key={question} className="glass-panel">
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

function AboutPage() {
  useEffect(() => setSeo('About', 'Learn about Armanix Apps and its Android app catalog.'), []);

  return (
    <PageShell>
      <section className="section page-hero">
        <p className="eyebrow">About Armanix Apps</p>
        <h1>A focused Android app studio building practical mobile experiences.</h1>
        <p>
          Armanix Apps creates Android apps across music, weather, games, productivity, utilities, business, media, and smart
          daily workflows. The goal is simple: useful software with polished presentation and dependable support.
        </p>
      </section>
      <section className="section value-grid">
        {['Android-first thinking', 'Practical app categories', 'Clear privacy communication', 'Support-ready releases'].map((item) => (
          <article className="glass-panel" key={item}>
            <h3>{item}</h3>
            <p>Every product page includes features, permissions, privacy notes, version details, and a direct path to support.</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

function SupportPage({ showToast }) {
  useEffect(() => setSeo('Support', 'Get help with Armanix Apps installation, updates, bugs, and Android app issues.'), []);

  return (
    <PageShell>
      <section className="section page-hero">
        <p className="eyebrow">Support center</p>
        <h1>Help for installs, updates, bugs, feedback, and app issues.</h1>
        <p>Choose an app, describe the issue, and send a support request through the secure Formspree form or email support directly.</p>
      </section>
      <section className="section support-grid">
        <div>
          <FaqList
            items={[
              ['How do I install an app?', 'Use the available Play Store or official website link on each app page.'],
              ['How do updates work?', 'Check the app page for version details and use the latest Play Store release when available.'],
              ['How do I report a bug?', 'Use the bug report form and include the app name, issue category, device, and Android version.'],
              ['Can I ask about privacy?', 'Yes. Use the support form or read each app detail page for app-specific privacy notes.'],
            ]}
          />
        </div>
        <SupportForm showToast={showToast} />
      </section>
    </PageShell>
  );
}

function SupportForm({ showToast }) {
  return (
    <form className="glass-panel premium-form" action={formEndpoint} method="POST" onSubmit={() => showToast('Sending support request')}>
      <h2>Bug report</h2>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <select name="appName" required defaultValue="">
        <option value="" disabled>
          App name
        </option>
        {apps.map((app) => (
          <option key={app.id}>{app.name}</option>
        ))}
      </select>
      <select name="issueCategory" required defaultValue="">
        <option value="" disabled>
          App issue category
        </option>
        <option>Installation help</option>
        <option>Update help</option>
        <option>Crash or bug</option>
        <option>Download issue</option>
        <option>Privacy question</option>
      </select>
      <textarea name="message" rows="6" placeholder="Describe the issue" required />
      <button className="primary-btn" type="submit">
        Send Report
      </button>
    </form>
  );
}

function ContactPage({ showToast }) {
  const copyEmail = async () => {
    await navigator.clipboard.writeText(supportEmail);
    showToast('Support email copied');
  };

  useEffect(() => setSeo('Contact', 'Contact Armanix Apps for Android app support, feedback, and business questions.'), []);

  return (
    <PageShell>
      <section className="section page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Talk to Armanix Apps.</h1>
        <p>Send feedback, support questions, partnership notes, or app-specific requests through the contact form.</p>
      </section>
      <section className="section contact-layout">
        <form className="glass-panel premium-form" action={formEndpoint} method="POST" onSubmit={() => showToast('Sending message')}>
          <input name="name" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <select name="appName" defaultValue="">
            <option value="">App Name</option>
            {apps.map((app) => (
              <option key={app.id}>{app.name}</option>
            ))}
          </select>
          <input name="subject" placeholder="Subject" required />
          <textarea name="message" rows="7" placeholder="Message" required />
          <button className="primary-btn" type="submit">
            Send Message
          </button>
        </form>
        <aside className="glass-panel contact-card">
          <h2>Direct support</h2>
          <p>{supportEmail}</p>
          <button className="secondary-btn" type="button" onClick={copyEmail}>
            Copy Email
          </button>
          <a href="https://github.com/armanali13000" target="_blank" rel="noopener noreferrer">
            GitHub profile
          </a>
          <a href="https://www.linkedin.com/in/armanali13000" target="_blank" rel="noopener noreferrer">
            LinkedIn profile
          </a>
        </aside>
      </section>
    </PageShell>
  );
}

function PrivacyPage() {
  useEffect(() => setSeo('Privacy Policy', 'Professional privacy policy for Armanix Apps Android apps, permissions, analytics, ads, crash reports, and forms.'), []);

  return (
    <PolicyPage
      title="Privacy Policy"
      intro="This Privacy Policy explains how Armanix Apps handles information across its Android apps and this website."
      sections={[
        ['Data Collection', 'Armanix Apps aims to collect only the information needed for app functionality, support, and improvement. Contact forms collect the name, email, app name, subject, and message you submit.'],
        ['Permissions', 'Android permissions are requested only when needed for app features, such as location for weather, storage or media access for files and gallery apps, and notifications for playback controls.'],
        ['Analytics', 'Apps may use privacy-conscious analytics to understand crashes, device compatibility, and feature usage. Analytics should not be used to sell personal information.'],
        ['Ads', 'Some apps may include advertising. Ad partners may process limited device or interaction data according to their own policies.'],
        ['Crash Reports', 'Crash reports may include device model, Android version, app version, and technical logs needed to diagnose problems.'],
        ['Contact Forms', 'Forms are processed through Formspree. Do not include passwords, payment details, or sensitive personal information in messages.'],
        ['User Privacy', 'Users can avoid optional forms, deny nonessential permissions where Android allows it, and contact support for privacy questions.'],
      ]}
    />
  );
}

function TermsPage() {
  useEffect(() => setSeo('Terms & Conditions', 'Terms and conditions for using Armanix Apps Android apps and website.'), []);

  return (
    <PolicyPage
      title="Terms & Conditions"
      intro="These terms apply to the Armanix Apps website and Android apps."
      sections={[
        ['Use of Apps', 'Use Armanix Apps responsibly and only where permitted by local law and Android platform rules.'],
        ['App Access', 'Use the official Play Store and website links provided for each app. You are responsible for installing apps on compatible and trusted devices.'],
        ['No Warranty', 'Apps are provided as available. Armanix Apps works to improve quality but cannot guarantee uninterrupted or error-free operation.'],
        ['User Responsibilities', 'Do not misuse apps, attempt to reverse engineer protected code, distribute modified copies without permission, or submit harmful content through forms.'],
        ['Third-Party Services', 'Some features may depend on services such as weather providers, Formspree, analytics, crash reporting, ads, GitHub, or app marketplaces.'],
        ['Updates', 'Features, versions, download links, and policies may change as apps evolve.'],
        ['Contact', 'Questions about these terms can be sent from the Contact or Support page.'],
      ]}
    />
  );
}

function PolicyPage({ title, intro, sections }) {
  return (
    <PageShell>
      <section className="section page-hero policy-hero">
        <p className="eyebrow">Legal</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <section className="section policy-list">
        {sections.map(([heading, copy]) => (
          <article className="glass-panel" key={heading}>
            <h2>{heading}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

function NotFoundPage() {
  useEffect(() => setSeo('404', 'The requested Armanix Apps page could not be found.'), []);

  return (
    <PageShell>
      <section className="section page-hero not-found">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for is not available. Return to the app catalog to keep exploring.</p>
        <a className="primary-btn" href="#/apps">
          Explore Apps
        </a>
      </section>
    </PageShell>
  );
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button className={`scroll-top ${visible ? 'visible' : ''}`} type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
      Up
    </button>
  );
}

function renderRoute(route, showToast) {
  if (!route) return <Home apps={apps} categories={categories} showToast={showToast} />;
  if (route === 'apps') return <AppsPage showToast={showToast} />;
  if (route.startsWith('apps/')) return <AppDetailsPage appId={route.replace('apps/', '')} showToast={showToast} />;
  if (route === 'about') return <AboutPage />;
  if (route === 'support') return <SupportPage showToast={showToast} />;
  if (route === 'contact') return <ContactPage showToast={showToast} />;
  if (route === 'privacy') return <PrivacyPage />;
  if (route === 'terms') return <TermsPage />;
  return <NotFoundPage />;
}

export default function App() {
  const [route, setRoute] = useState(routeFromHash());
  const [theme, setTheme] = useState(() => localStorage.getItem('armanix-theme') || 'dark');
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState('');

  useEffect(() => {
    const onHashChange = () => {
      setRoute(routeFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('armanix-theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 2600);
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <Header route={route} theme={theme} toggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))} />
      {renderRoute(route, showToast)}
      <Footer />
      <ScrollTopButton />
      <Toast toast={toast} />
    </>
  );
}
