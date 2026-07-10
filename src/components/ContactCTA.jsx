import { Link } from 'react-router-dom';
import { brand } from '../data/content';
import '../styles/contact-cta.css';

export default function ContactCTA() {
  return (
    <section className="ccta" aria-labelledby="ccta-title">
      <div className="container">
        <div className="ccta__panel reveal">
          <div className="ccta__glow" aria-hidden="true" />
          <div className="ccta__content">
            <p className="eyebrow eyebrow--on-dark">Let’s talk</p>
            <h2 id="ccta-title" className="ccta__title">
              Have a project in mind? <span className="em">Let’s make it work.</span>
            </h2>
            <p className="ccta__sub">
              Tell us where you are today — a goal, a gap, or a system that needs
              looking after. We’ll come back with a clear, practical next step,
              usually within one business day.
            </p>
            <div className="ccta__actions">
              <Link to="/contact" className="btn btn--primary">
                Start a conversation <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
              <a href={`mailto:${brand.email}`} className="btn btn--ghost-dark">{brand.email}</a>
            </div>
          </div>

          <ul className="ccta__points">
            <li><span className="ccta__tick" aria-hidden="true" />No obligation, no hard sell</li>
            <li><span className="ccta__tick" aria-hidden="true" />Talk to the people who do the work</li>
            <li><span className="ccta__tick" aria-hidden="true" />A clear next step within a day</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
