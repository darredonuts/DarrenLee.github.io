/* ============================================================
   SHARED TOP NAV
   ------------------------------------------------------------
   Edit the items array once — every page picks it up.
   Each page sets <body data-page="about|coursework|projects|resume">
   to highlight the active link.

   The brand logo is two identically-sized SVGs (same viewBox,
   same circle radius/stroke) stacked on top of each other and
   cross-faded on hover, so the "ball" silhouette never changes
   size — only the Pikachu face/ears appear on top of it.
   ============================================================ */

(function () {
  const items = [
    { key: 'about',      label: 'about me',   href: 'index.html'      },
    { key: 'coursework', label: 'coursework', href: 'coursework.html' },
    { key: 'projects',   label: 'projects',   href: 'projects.html'   },
    { key: 'resume',     label: 'resume',     href: 'resume.html'     },
  ];

  // If we're served from a subfolder (e.g. /projects/foo.html) prepend ../ so
  // links resolve back to the site root.
  const inSub = /\/projects\/[^/]+$/.test(location.pathname);
  const prefix = inSub ? '../' : '';

  const active = document.body.getAttribute('data-page') || '';

  const links = items.map(it => {
    const cls = `nav-link nav-${it.key}${it.key === active ? ' is-active' : ''}`;
    return `<a class="${cls}" href="${prefix}${it.href}">${it.label}</a>`;
  }).join('');

  const pokeballSvg = `
    <svg class="icon-pokeball" viewBox="0 0 64 64" aria-hidden="true">
      <defs><clipPath id="pb-clip"><circle cx="32" cy="32" r="27"/></clipPath></defs>
      <g clip-path="url(#pb-clip)">
        <rect x="0" y="0" width="64" height="32" fill="#FF4D4D"/>
        <rect x="0" y="32" width="64" height="32" fill="#E7ECF5"/>
      </g>
      <circle cx="32" cy="32" r="27" fill="none" stroke="#0B0D12" stroke-width="3"/>
      <rect x="2" y="29" width="60" height="6" fill="#0B0D12"/>
      <circle cx="32" cy="32" r="9" fill="#0B0D12"/>
      <circle cx="32" cy="32" r="5.5" fill="#E7ECF5"/>
      <circle cx="32" cy="32" r="5.5" fill="none" stroke="#0B0D12" stroke-width="2"/>
    </svg>
  `;

  const pikachuSvg = `
    <svg class="icon-pikachu" viewBox="0 0 64 64" aria-hidden="true">
      <defs><clipPath id="pk-clip"><circle cx="32" cy="32" r="27"/></clipPath></defs>
      <g clip-path="url(#pk-clip)">
        <rect x="0" y="0" width="64" height="32" fill="#FF4D4D"/>
        <rect x="0" y="32" width="64" height="32" fill="#E7ECF5"/>
        <ellipse cx="32" cy="22" rx="19" ry="17" fill="#FFD400"/>
      </g>
      <path d="M17 12 L10 1 L24 11 Z" fill="#FFD400"/>
      <path d="M12.5 5 L10 1 L17.5 7 Z" fill="#0B0D12"/>
      <path d="M47 12 L54 1 L40 11 Z" fill="#FFD400"/>
      <path d="M51.5 5 L54 1 L46.5 7 Z" fill="#0B0D12"/>
      <circle cx="32" cy="32" r="27" fill="none" stroke="#0B0D12" stroke-width="3"/>
      <rect x="2" y="29" width="60" height="6" fill="#0B0D12"/>
      <ellipse cx="23.5" cy="22" rx="2.6" ry="3.2" fill="#0B0D12"/>
      <ellipse cx="40.5" cy="22" rx="2.6" ry="3.2" fill="#0B0D12"/>
      <circle cx="16.5" cy="27.5" r="3.6" fill="#FF4D4D"/>
      <circle cx="47.5" cy="27.5" r="3.6" fill="#FF4D4D"/>
      <path d="M28.5 27.5 q3.5 2.6 7 0" stroke="#0B0D12" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>
  `;

  const brand = `
    <a class="nav-brand" href="${prefix}index.html" aria-label="Home">
      <span class="brand-icon">
        ${pokeballSvg}
        ${pikachuSvg}
      </span>
    </a>
  `;

  const html = `
    <header class="site-nav">
      <div class="nav-inner">
        ${brand}
        <nav class="nav-links" aria-label="Primary">
          ${links}
        </nav>
      </div>
    </header>
  `;

  const mount = document.getElementById('site-nav-mount');
  if (mount) {
    mount.outerHTML = html;
  } else {
    document.body.insertAdjacentHTML('afterbegin', html);
  }
})();
