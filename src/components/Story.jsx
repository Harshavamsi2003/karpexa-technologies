import { Link } from 'react-router-dom';
import { story, stats } from '../data/content';
import '../styles/story.css';

export default function Story() {
  return (
    <section className="story" id="story" aria-labelledby="story-title">
      <div className="container story__grid">
        {/* Narrative */}
        <div className="story__copy reveal">
          <p className="eyebrow eyebrow--on-dark">{story.eyebrow}</p>
          <h2 id="story-title" className="story__title">{story.title}</h2>
          <p className="story__body">{story.body}</p>
          <Link to="/company" className="btn btn--primary story__cta">
            Learn more <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="story__stats">
          {stats.map((s) => (
            <div className="stat reveal" key={s.l}>
              <div className="stat__v">{s.v}</div>
              <div className="stat__l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
