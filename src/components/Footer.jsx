import { Link } from 'react-router-dom';
import { brand, footerLinks } from '../data/content';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot__top">
          <div className="foot__brand">
            <Link to="/" className="brand" aria-label={`${brand.full} home`}>
              <svg className="brand__mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M5 25 L16 7 L27 25" stroke="var(--citron)" strokeWidth="2.2" strokeLinejoin="round" />
                <circle cx="16" cy="7" r="3" fill="var(--citron)" />
              </svg>
              <span className="brand__name">{brand.name}</span>
            </Link>
            <p className="foot__pitch">
              Enterprise-grade IT for growing companies — infrastructure, cloud,
              security and support, end to end.
            </p>
          </div>

          <div className="foot__cols">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h5>{group}</h5>
                {links.map((l) => (
                  <Link key={l.label} to={l.to}>{l.label}</Link>
                ))}
              </div>
            ))}
            <div className="foot__contact">
              <h5>Get in touch</h5>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
            </div>
          </div>
        </div>

        <div className="foot__bar">
          <span>© {new Date().getFullYear()} {brand.full}. All rights reserved.</span>
          <span>Built for growing teams.</span>
        </div>
      </div>
    </footer>
  );
}
