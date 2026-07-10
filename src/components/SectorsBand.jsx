import { Link } from 'react-router-dom';
import { sectors } from '../data/content';
import '../styles/sectors-band.css';

export default function SectorsBand() {
  return (
    <section className="secband" aria-labelledby="secband-title">
      <div className="container secband__grid">
        {/* Intro + know more */}
        <div className="secband__intro reveal">
          <p className="eyebrow eyebrow--on-dark">Solutions across sectors</p>
          <h2 id="secband-title" className="secband__title">Industry reach</h2>
          <p className="secband__body">
            From regulated enterprises to fast-moving startups, we shape the same
            end-to-end IT to the realities of your sector — its rules, its pace,
            its risks.
          </p>
          <Link to="/sectors" className="btn btn--primary secband__cta">
            Know more <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Sector cards */}
        <div className="secband__cards">
          {sectors.map((s) => (
            <Link to="/sectors" className="secard reveal" key={s.name}>
              <span className="secard__name">{s.name}</span>
              <span className="secard__note">{s.note}</span>
              <span className="secard__arrow" aria-hidden="true">
                <svg viewBox="0 0 16 16"><path d="M4 8h8M9 4l3 4-3 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
