import React from 'react';

export default function AppCard({ app, showToast }) {
  const handleStore = (event) => {
    if (app.playStoreUrl === '#') {
      event.preventDefault();
      showToast?.('Play Store link coming soon');
      return;
    }
    showToast?.(`Opening ${app.name} on Play Store`);
  };

  const handleWebsite = (event) => {
    if (app.websiteUrl === '#') {
      event.preventDefault();
      showToast?.('Website link coming soon');
    }
  };

  return (
    <article className="app-card glass-panel">
      <div className="app-card-top">
        <img src={app.icon} alt={`${app.name} icon`} loading="lazy" />
        <span>{app.category}</span>
      </div>
      <h3>{app.name}</h3>
      <p>{app.shortDescription}</p>
      <ul>
        {app.features.slice(0, 3).map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="app-card-meta">
        <span>Version {app.version}</span>
      </div>
      <div className="card-actions">
        <a className="secondary-btn small" href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" onClick={handleStore}>
          Play Store
        </a>
        <a className="secondary-btn small" href={app.websiteUrl} target="_blank" rel="noopener noreferrer" onClick={handleWebsite}>
          Website
        </a>
        <a className="ghost-link" href={`#/apps/${app.id}`}>
          Details
        </a>
      </div>
    </article>
  );
}
