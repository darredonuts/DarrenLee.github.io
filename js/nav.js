/* ============================================================
   SHARED TOP NAV
   ------------------------------------------------------------
   Edit the items array once — every page picks it up.
   Each page sets <body data-page="about|coursework|projects|resume">
   to highlight the active link.

   The brand logo is two identically-sized SVGs (same viewBox,
   same circle radius/stroke) stacked on top of each other and
   cross-faded on hover, so the "ball" silhouette never changes
   size — only the lightning-bolt appears on the top half on hover.
   ============================================================ */

(function () {
  const items = [
    { key: 'about',      label: 'about me',   href: 'index.html',      peek: 'joltik.webp'  },
    { key: 'coursework', label: 'coursework', href: 'coursework.html', peek: 'minun.webp'   },
    { key: 'projects',   label: 'projects',   href: 'projects.html',   peek: 'plusle.png'   },
    { key: 'resume',     label: 'resume',     href: 'resume.html',     peek: 'dedenne.png'  },
  ];

  // If we're served from a subfolder (e.g. /projects/foo.html) prepend ../ so
  // links resolve back to the site root.
  const inSub = /\/projects\/[^/]+$/.test(location.pathname);
  const prefix = inSub ? '../' : '';

  const active = document.body.getAttribute('data-page') || '';

  const links = items.map(it => {
    const cls = `nav-link nav-${it.key}${it.key === active ? ' is-active' : ''}`;
    return `
      <span class="nav-item">
        <img class="nav-peek" src="${prefix}images/nav/${it.peek}" alt="" aria-hidden="true" onerror="this.remove()" />
        <a class="${cls}" href="${prefix}${it.href}">${it.label}</a>
      </span>
    `;
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

  const thunderballSvg = `
    <svg class="icon-thunderball" viewBox="0 0 64 64" aria-hidden="true">
      <defs><clipPath id="tb-clip"><circle cx="32" cy="32" r="27"/></clipPath></defs>
      <g clip-path="url(#tb-clip)">
        <rect x="0" y="0" width="64" height="32" fill="#FF4D4D"/>
        <rect x="0" y="32" width="64" height="32" fill="#E7ECF5"/>
        <path d="M36 6 L24 18.2 L32.4 18.2 L30 27 L42 13 L33.6 13 Z" fill="#FFD400" stroke="#0B0D12" stroke-width="1.5" stroke-linejoin="round"/>
      </g>
      <circle cx="32" cy="32" r="27" fill="none" stroke="#0B0D12" stroke-width="3"/>
      <rect x="2" y="29" width="60" height="6" fill="#0B0D12"/>
      <circle cx="32" cy="32" r="9" fill="#0B0D12"/>
      <circle cx="32" cy="32" r="5.5" fill="#C7CCD6"/>
      <circle cx="32" cy="32" r="5.5" fill="none" stroke="#0B0D12" stroke-width="2"/>
    </svg>
  `;

  const brand = `
    <a class="nav-brand" href="${prefix}index.html" aria-label="Home">
      <span class="brand-icon">
        ${pokeballSvg}
        ${thunderballSvg}
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
