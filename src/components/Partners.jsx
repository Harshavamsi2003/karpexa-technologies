import { partners } from '../data/content';
import '../styles/partners.css';

export default function Partners() {
  return (
    <section className="partners" aria-labelledby="partners-title">
      <div className="container">
        <p className="eyebrow reveal">Partner ecosystem</p>
        <h2 id="partners-title" className="reveal">United by technology</h2>
        <p className="sub reveal">Certified across the platforms the world runs on.</p>
        <div className="logos">
          {partners.map((p) => (
            <div className="logo reveal" key={p}>{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
