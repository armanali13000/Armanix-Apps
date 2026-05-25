import React from 'react';

export default function AppCard({ app, showToast }) {
  const handleDownload = () => {
    if (app.downloadUrl === '#') showToast?.('Download link coming soon');
    else showToast?.(`Opening ${app.name} APK`);
  };

  const handleStore = () => {
    if (app.playStoreUrl === '#') showToast?.('Play Store link coming soon');
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
        <a className="primary-btn small" href={app.downloadUrl} target="_blank" rel="noopener noreferrer" onClick={handleDownload}>
          Download APK
        </a>
        <a className="secondary-btn small" href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" onClick={handleStore}>
          Play Store
        </a>
        <a className="ghost-link" href={`#/apps/${app.id}`}>
          Details
        </a>
      </div>
    </article>
  );
}
