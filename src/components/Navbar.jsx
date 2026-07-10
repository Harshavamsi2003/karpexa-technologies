import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brand, nav, capabilities, sectors } from '../data/content';
import useScrolled from '../hooks/useScrolled';
import '../styles/navbar.css';
import '../styles/megamenu.css';

function Mark() {
  return (
    <svg className="brand__mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M5 25 L16 7 L27 25" stroke="var(--citron)" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="16" cy="7" r="3" fill="var(--citron)" />
    </svg>
  );
}

const Chevron = () => (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
  </svg>
);

const ArrowRight = () => (
  <svg className="drawer__chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowLeft = () => (
  <svg className="drawer__back-icon" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Sub-menu definitions for the mobile slide-over panels.
const SUBMENUS = {
  capabilities: {
    title: 'Capabilities',
    allLabel: 'View all capabilities',
    allTo: '/capabilities',
    items: capabilities.map((c) => ({ label: c.title, to: `/capabilities/${c.slug}` })),
  },
  sectors: {
    title: 'Sectors',
    allLabel: null,               // sectors is a single page — no "view all"
    allTo: '/sectors',
    items: sectors.map((s) => ({ label: s.name, to: '/sectors' })),
  },
};

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [openMega, setOpenMega] = useState(null);   // desktop mega-menu
  const [drawer, setDrawer] = useState(false);      // mobile drawer
  const [subPanel, setSubPanel] = useState(null);   // 'capabilities' | 'sectors' | null
  const [activeCap, setActiveCap] = useState(0);
  const location = useLocation();
  const navRef = useRef(null);

  // Reset everything on navigation
  useEffect(() => {
    setDrawer(false);
    setOpenMega(null);
    setSubPanel(null);
  }, [location.pathname]);

  // Lock page scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawer]);

  // When the drawer closes, return to the root panel after the fade-out
  useEffect(() => {
    if (drawer) return;
    const t = setTimeout(() => setSubPanel(null), 400);
    return () => clearTimeout(t);
  }, [drawer]);

  // Desktop: click-outside + Esc closes the mega-menu.
  // Mobile: Esc steps back one level, then closes.
  useEffect(() => {
    const onDown = (e) => {
      if (openMega && navRef.current && !navRef.current.contains(e.target)) setOpenMega(null);
    };
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (openMega) setOpenMega(null);
      else if (subPanel) setSubPanel(null);
      else if (drawer) setDrawer(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [openMega, subPanel, drawer]);

  const toggleMega = (key) => setOpenMega((cur) => (cur === key ? null : key));
  const sub = subPanel ? SUBMENUS[subPanel] : null;

  return (
    <header ref={navRef} className={`nav ${scrolled || openMega || drawer ? 'scrolled' : ''}`}>
      <div className="container nav__row">
        <Link to="/" className="brand" aria-label={`${brand.full} home`}>
          <Mark />
          <span className="brand__name">{brand.name}</span>
        </Link>

        {/* ================= DESKTOP ================= */}
        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) =>
            item.mega ? (
              <div key={item.to} className={`nav__item ${openMega === item.mega ? 'open' : ''}`}>
                <button
                  type="button"
                  className={`nav__link nav__toggle ${openMega === item.mega ? 'is-active' : ''}`}
                  aria-expanded={openMega === item.mega}
                  onClick={() => toggleMega(item.mega)}
                >
                  {item.label}
                  <Chevron />
                </button>

                {item.mega === 'capabilities' && (
                  <div className="mega mega--cap" role="menu">
                    <div className="mega__grid">
                      <ul className="mega__list">
                        {capabilities.map((c, i) => (
                          <li key={c.slug}>
                            <Link
                              to={`/capabilities/${c.slug}`}
                              className={`mega__cat ${activeCap === i ? 'active' : ''}`}
                              onMouseEnter={() => setActiveCap(i)}
                              onFocus={() => setActiveCap(i)}
                            >
                              <span>{c.title}</span>
                              <span className="a">→</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mega__panel">
                        <Link to={`/capabilities/${capabilities[activeCap].slug}`} className="mega__panel-title">
                          {capabilities[activeCap].title} <span className="a">→</span>
                        </Link>
                        <p className="mega__blurb">{capabilities[activeCap].blurb}</p>
                        <div className="mega__sub">
                          {capabilities[activeCap].offerings.map((o) => (
                            <Link key={o.name} to={`/capabilities/${capabilities[activeCap].slug}`}>{o.name}</Link>
                          ))}
                        </div>
                        <Link to="/capabilities" className="mega__all">View all capabilities →</Link>
                      </div>
                    </div>
                  </div>
                )}

                {item.mega === 'sectors' && (
                  <div className="mega mega--sectors" role="menu">
                    <div className="mega__grid">
                      <div className="mega__sectors">
                        {sectors.map((s) => (
                          <Link key={s.name} to="/sectors">{s.name}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div key={item.to} className="nav__item">
                <NavLink to={item.to} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
                  {item.label}
                </NavLink>
              </div>
            )
          )}
        </nav>

        <button
          className={`burger ${drawer ? 'is-open' : ''}`}
          aria-label={drawer ? 'Close menu' : 'Open menu'}
          aria-expanded={drawer}
          onClick={() => setDrawer((v) => !v)}
        >
          <span></span><span></span>
        </button>
      </div>

      {/* ================= MOBILE: multi-level slide-over ================= */}
      <div className={`drawer ${drawer ? 'is-open' : ''}`} aria-hidden={!drawer}>
        <div className={`drawer__stage ${subPanel ? 'is-sub' : ''}`}>

          {/* ---- Level 1: root ---- */}
          <div className="drawer__panel drawer__panel--root" aria-hidden={!!subPanel}>
            <nav className="drawer__nav" aria-label="Mobile">
              <button
                type="button"
                className="drawer__row drawer__item"
                style={{ '--i': 0 }}
                onClick={() => setSubPanel('capabilities')}
              >
                <span>Capabilities</span>
                <ArrowRight />
              </button>

              <button
                type="button"
                className="drawer__row drawer__item"
                style={{ '--i': 1 }}
                onClick={() => setSubPanel('sectors')}
              >
                <span>Sectors</span>
                <ArrowRight />
              </button>

              <NavLink
                to="/company"
                style={{ '--i': 2 }}
                className={({ isActive }) => `drawer__row drawer__item ${isActive ? 'is-active' : ''}`}
              >
                <span>Company</span>
              </NavLink>

              <NavLink
                to="/contact"
                style={{ '--i': 3 }}
                className={({ isActive }) => `drawer__row drawer__item ${isActive ? 'is-active' : ''}`}
              >
                <span>Contact</span>
              </NavLink>
            </nav>

            <div className="drawer__foot drawer__item" style={{ '--i': 4 }}>
              <Link to="/contact" className="btn btn--primary drawer__cta">Talk to us →</Link>
              <a href={`mailto:${brand.email}`} className="drawer__contact">{brand.email}</a>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="drawer__contact">{brand.phone}</a>
              <div className="drawer__social">
                <a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">YouTube</a>
              </div>
            </div>
          </div>

          {/* ---- Level 2: sub-panel (key forces the stagger to replay) ---- */}
          <div
            className="drawer__panel drawer__panel--sub"
            aria-hidden={!subPanel}
            key={subPanel || 'empty'}
          >
            {sub && (
              <>
                <button type="button" className="drawer__back" onClick={() => setSubPanel(null)}>
                  <ArrowLeft />
                  <span>Menu</span>
                </button>

                <h2 className="drawer__sub-title drawer__item" style={{ '--i': 0 }}>{sub.title}</h2>

                {sub.allLabel && (
                  <Link
                    to={sub.allTo}
                    className="drawer__all drawer__item"
                    style={{ '--i': 1 }}
                  >
                    {sub.allLabel} <span aria-hidden="true">→</span>
                  </Link>
                )}

                <div className="drawer__list">
                  {sub.items.map((it, i) => (
                    <Link
                      key={it.label}
                      to={it.to}
                      className="drawer__sub-link drawer__item"
                      style={{ '--i': i + 2 }}
                    >
                      <span className="drawer__sub-label">{it.label}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}