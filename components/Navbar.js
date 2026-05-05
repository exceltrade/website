'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SERVICES } from '../lib/data';

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [servOpen, setServOpen]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); setServOpen(false); }, [pathname]);

  const active = (href) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scroll' : ''}`}>
        <div className="wrap nav-inner">
          {/* Logo */}
          <Link href="/" className="logo">
            <span className="logo-mark">✦</span>
            <span>Xcel Trade</span>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            <li
              className="nav-dd"
              onMouseEnter={() => setServOpen(true)}
              onMouseLeave={() => setServOpen(false)}
            >
              <button className={`nl${active('/services') ? ' nl--on' : ''}`}>
                Services <span className="chev">▾</span>
              </button>
              {servOpen && (
                <div className="dropdown">
                  <div className="dd-grid">
                    {SERVICES.map(s => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="dd-item">
                        <span className="dd-icon" style={{ color: s.color }}>{s.icon}</span>
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
            <li><Link href="/ai-adoption-framework" className={`nl${active('/ai-adoption-framework') ? ' nl--on' : ''}`}>Framework</Link></li>
            <li><Link href="/case-studies"           className={`nl${active('/case-studies') ? ' nl--on' : ''}`}>Case Studies</Link></li>
            <li><Link href="/insights"               className={`nl${active('/insights') ? ' nl--on' : ''}`}>Insights</Link></li>
            <li><Link href="/about"                  className={`nl${active('/about') ? ' nl--on' : ''}`}>About</Link></li>
          </ul>

          <div className="nav-right">
            <Link href="/contact" className="btn btn-p" style={{ padding: '10px 20px', fontSize: '13px' }}>Get Started</Link>
            <button
              className="burger"
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={menuOpen ? 'open' : ''} />
              <span className={menuOpen ? 'open' : ''} />
              <span className={menuOpen ? 'open' : ''} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mob-menu">
          <div className="wrap">
            <Link href="/" className="mob-link">Home</Link>
            <div className="mob-sec">
              <p className="mob-label">Services</p>
              {SERVICES.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="mob-link mob-svc">
                  <span style={{ color: s.color }}>{s.icon}</span> {s.title}
                </Link>
              ))}
            </div>
            <Link href="/ai-adoption-framework" className="mob-link">Framework</Link>
            <Link href="/case-studies"           className="mob-link">Case Studies</Link>
            <Link href="/insights"               className="mob-link">Insights</Link>
            <Link href="/about"                  className="mob-link">About</Link>
            <Link href="/contact" className="btn btn-p" style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}>
              Get Started →
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: var(--nav-h);
          border-bottom: 1px solid transparent;
          transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
        }
        .nav--scroll {
          background: rgba(8,8,10,0.88);
          backdrop-filter: blur(18px);
          border-bottom-color: var(--border);
        }
        .nav-inner { display: flex; align-items: center; height: 100%; gap: 36px; }
        .logo {
          display: flex; align-items: center; gap: 9px;
          font-family: var(--font-d); font-weight: 800; font-size: 17px;
          letter-spacing: -0.02em; flex-shrink: 0;
        }
        .logo-mark { color: var(--amber); font-size: 19px; }
        .nav-links { display: flex; align-items: center; gap: 2px; flex: 1; }
        .nl {
          padding: 8px 12px; font-size: 13.5px; font-weight: 500;
          color: var(--tx-2); border-radius: var(--r-xs);
          transition: color 0.18s, background 0.18s;
          display: flex; align-items: center; gap: 4px;
        }
        .nl:hover, .nl--on { color: var(--tx-1); background: rgba(255,255,255,0.04); }
        .chev { font-size: 9px; opacity: 0.5; }
        .nav-dd { position: relative; }
        .dropdown {
          position: absolute; top: calc(100% + 10px); left: 50%;
          transform: translateX(-50%);
          background: var(--bg-2); border: 1px solid var(--border-md);
          border-radius: var(--r-md); padding: 10px;
          min-width: 500px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.55);
          animation: fadeIn 0.14s ease;
        }
        .dd-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; }
        .dd-item {
          display: flex; align-items: flex-start; gap: 11px;
          padding: 11px; border-radius: var(--r-xs);
          transition: background 0.14s;
        }
        .dd-item:hover { background: rgba(255,255,255,0.04); }
        .dd-icon { font-size: 17px; flex-shrink: 0; margin-top: 1px; }
        .dd-item strong { display: block; font-size: 12.5px; font-weight: 600; color: var(--tx-1); }
        .dd-item small  { display: block; font-size: 11px;   color: var(--tx-3); margin-top: 2px; }
        .nav-right { display: flex; align-items: center; gap: 10px; margin-left: auto; }
        .burger { display: none; flex-direction: column; gap: 5px; padding: 8px; }
        .burger span {
          display: block; width: 20px; height: 2px;
          background: var(--tx-1); border-radius: 2px;
          transition: all 0.2s;
        }
        .burger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .burger span.open:nth-child(2) { opacity: 0; }
        .burger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile */
        .mob-menu {
          position: fixed; top: var(--nav-h); left: 0; right: 0; bottom: 0;
          z-index: 99; background: var(--bg);
          overflow-y: auto; padding: 20px 0 40px;
          border-top: 1px solid var(--border);
          animation: fadeIn 0.18s ease;
        }
        .mob-link {
          display: flex; align-items: center; gap: 10px;
          padding: 14px 0; font-size: 15px; font-weight: 500;
          color: var(--tx-1); border-bottom: 1px solid var(--border);
        }
        .mob-svc { padding: 9px 14px; font-size: 13.5px; color: var(--tx-2); border: none; }
        .mob-svc:last-of-type { border-bottom: 1px solid var(--border); }
        .mob-label { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--tx-3); padding: 14px 0 4px; }
        .mob-sec { border-bottom: 1px solid var(--border); padding-bottom: 6px; margin-bottom: 2px; }

        @media (max-width: 880px) {
          .nav-links { display: none; }
          .burger { display: flex; }
        }
      `}</style>
    </>
  );
}
