import { Link } from 'react-router-dom';
import '../styles/notfound.css';

export default function NotFound() {
  return (
    <section className="nf">
      <div className="container nf__inner">
        <p className="eyebrow eyebrow--on-dark">Error 404</p>
        <div className="nf__code">4<span className="em">0</span>4</div>
        <p className="nf__msg">This page has moved or never existed. Let’s get you back on track.</p>
        <Link to="/" className="btn btn--primary">Back to home →</Link>
      </div>
    </section>
  );
}
