import { Link } from 'react-router-dom';
import { solutionCards } from '../data/content';
import '../styles/solutions.css';

export default function SolutionsGrid() {
  return (
    <section className="sol" aria-labelledby="sol-title">
      <div className="container">
        <div className="sol__head reveal">
          <div>
            <p className="eyebrow">What we deliver</p>
            <h2 id="sol-title">Explore our solutions</h2>
          </div>
          <Link to="/capabilities" className="btn btn--ghost-light sol__viewall">
            View all capabilities <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="sol__grid">
          {solutionCards.map((c) => (
            <Link to={`/capabilities/${c.slug}`} className="sol-card reveal" key={c.slug}>
              <span className="sol-card__accent" aria-hidden="true" />
              <h3 className="sol-card__title">{c.title}</h3>
              <p className="sol-card__desc">{c.blurb}</p>
              <span className="sol-card__foot">
                <span className="sol-card__cta">Explore</span>
                <span className="sol-card__arrow" aria-hidden="true">
                  <svg viewBox="0 0 18 18"><path d="M4 9h9M9 4l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
