import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SERVICES } from '../lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [router.pathname]);

  const isActive = (href) => router.pathname === href || router.pathname.startsWith(href + '/');

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <span className="logo-mark">✦</span>
            <span className="logo-text">Xcel Trade</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links">
            <li className="nav-item has-dropdown"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}>
              <button className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
                Services <span className="chevron">▾</span>
              </button>
              {servicesOpen && (
                <div className="services-dropdown">
                  <div className="dropdown-grid">
                    {SERVICES.map(s => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="dropdown-item">
                        <span className="dropdown-icon" style={{ color: s.color }}>{s.icon}</span>
                        <span>
                          <strong>{s.title}</strong>
                          <small>{s.tagline}</small>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li><Link href="/ai-adoption-framework" className={`nav-link ${isActive('/ai-adoption-framework') ? 'active' : ''}`}>Framework</Link></li>
            <li><Link href="/case-studies" className={`nav-link ${isActive('/case-studies') ? 'active' : ''}`}>Case Studies</Link></li>
            <li><Link href="/insights" className={`nav-link ${isActive('/insights') ? 'active' : ''}`}>Insights</Link></li>
            <li><Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link></li>
          </ul>

          <div className="nav-actions">
            <Link href="/contact" className="btn btn-primary nav-cta">Get Started</Link>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span className={menuOpen ? 'open' : ''}></span>
              <span className={menuOpen ? 'open' : ''}></span>
              <span className={menuOpen ? 'open' : ''}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="container">
            <Link href="/" className="mob-link">Home</Link>
            <div className="mob-section">
              <span className="mob-label">Services</span>
              {SERVICES.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="mob-link mob-service">
                  <span style={{ color: s.color }}>{s.icon}</span> {s.title}
                </Link>
              ))}
            </div>
            <Link href="/ai-adoption-framework" className="mob-link">Framework</Link>
            <Link href="/case-studies" className="mob-link">Case Studies</Link>
            <Link href="/insights" className="mob-link">Insights</Link>
            <Link href="/about" className="mob-link">About</Link>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>Get Started →</Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          height: var(--nav-h);
          transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
          border-bottom: 1px solid transparent;
        }
        .navbar.scrolled {
          background: rgba(10,10,11,0.92);
          backdrop-filter: blur(20px);
          border-bottom-color: var(--border);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          height: 100%;
          gap: 40px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -0.02em;
          flex-shrink: 0;
        }
        .logo-mark {
          color: var(--accent);
          font-size: 20px;
        }
        .logo-text { color: var(--text-primary); }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
        }
        .nav-link {
          padding: 8px 14px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          transition: color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link:hover, .nav-link.active { color: var(--text-primary); background: rgba(255,255,255,0.05); }
        .chevron { font-size: 10px; opacity: 0.6; }
        .nav-item { position: relative; }
        .services-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 12px;
          min-width: 520px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          animation: fadeIn 0.15s ease;
        }
        .dropdown-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
        }
        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          border-radius: var(--radius-sm);
          transition: background 0.15s;
        }
        .dropdown-item:hover { background: rgba(255,255,255,0.05); }
        .dropdown-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
        .dropdown-item strong { display: block; font-size: 13px; font-weight: 600; color: var(--text-primary); }
        .dropdown-item small { display: block; font-size: 11px; color: var(--text-muted); margin-top: 2px; }
        .nav-actions { display: flex; align-items: center; gap: 12px; margin-left: auto; }
        .nav-cta { padding: 10px 20px; font-size: 14px; }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.2s;
        }
        .hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger span.open:nth-child(2) { opacity: 0; }
        .hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: var(--nav-h);
          left: 0; right: 0; bottom: 0;
          z-index: 99;
          background: var(--bg);
          overflow-y: auto;
          padding: 24px 0 40px;
          border-top: 1px solid var(--border);
          animation: fadeIn 0.2s ease;
        }
        .mob-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 0;
          font-size: 16px;
          font-weight: 500;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border);
        }
        .mob-service { padding: 10px 16px; font-size: 14px; color: var(--text-secondary); border: none; }
        .mob-service:last-child { border-bottom: 1px solid var(--border); }
        .mob-label { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); padding: 16px 0 4px; }
        .mob-section { border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-bottom: 4px; }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
    </>
  );
}
