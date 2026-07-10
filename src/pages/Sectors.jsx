import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import useReveal from '../hooks/useReveal';
import { sectors } from '../data/content';
import '../styles/sectors.css';

// Unique one-liner per sector (used only here — no repeated content).
const INFO = {
  'Global Capability Centres': 'Stand up and scale a GCC in India — infrastructure, talent and security, ready for global teams from day one.',
  'Healthcare & Life Sciences': 'Compliant, resilient IT for clinical and research settings where uptime and data protection can’t slip.',
  'Banking & Financial Services': 'Secure, auditable systems for BFSI and NBFCs — built for regulation, scale and trust.',
  'Manufacturing & OT': 'Connect plant and office, bridge IT and OT, and keep operations running without interruption.',
  'Automotive': 'Scalable IT for OEMs and suppliers — from design floors to dealer networks.',
  'Retail & E-commerce': 'Reliable store and online systems that stay fast through every peak and promotion.',
  'Technology & ITeS': 'Scale-ready infrastructure and support for teams that ship fast and grow faster.',
  'Media & Entertainment': 'High-performance workflows for creative teams — storage, collaboration and delivery at scale.',
  'High-growth Startups': 'Enterprise-grade IT sized for startups: set up fast, scale clean, no wasted spend.',
};

const HOW = [
  { title: 'We learn your constraints', text: 'Compliance regimes, uptime targets, peak cycles — we map what your sector demands before designing anything.' },
  { title: 'We adapt proven playbooks', text: 'Patterns that worked in similar environments, tuned to your setup — not reinvented from scratch each time.' },
  { title: 'We flex as you change', text: 'As regulation and priorities shift, your IT flexes with them — without a costly rebuild.' },
];

export default function Sectors() {
  useReveal();
  return (
    <>
      {/* GREEN 1: hero */}
      <PageHeader
        kicker="Sectors"
        title={<>Built for the way <span className="em">your sector</span> works</>}
        sub="Every industry carries its own constraints — compliance, uptime, scale, security. We bring proven playbooks tuned to each."
      />

      {/* Intro + facts */}
      <section className="secx-intro">
        <div className="container secx-intro__wrap">
          <div className="reveal">
            <p className="eyebrow">One approach, many industries</p>
            <p className="secx-lead">
              The technology is often similar; the constraints never are. What changes
              between industries is what matters most — and that’s what we design around.
            </p>
          </div>
          <div className="secx-facts reveal">
            <div className="secx-fact">
              <span className="secx-fact__v">{sectors.length}</span>
              <span className="secx-fact__l">Sectors served</span>
            </div>
            <div className="secx-fact">
              <span className="secx-fact__v">1</span>
              <span className="secx-fact__l">Team that adapts to each</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sector cards */}
      <section className="secx">
        <div className="container">
          <div className="secx__grid">
            {sectors.map((s) => (
              <article className="secx-card reveal" key={s.name}>
                <span className="secx-card__accent" aria-hidden="true" />
                <h3 className="secx-card__name">{s.name}</h3>
                <p className="secx-card__desc">{INFO[s.name]}</p>
                <span className="secx-card__note">{s.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we adapt */}
      <section className="secx-how">
        <div className="container">
          <div className="secx-how__head reveal">
            <p className="eyebrow">How we adapt</p>
            <h2>Sector-fit, not one-size-fits-all</h2>
          </div>
          <div className="secx-how__grid">
            {HOW.map((h) => (
              <article className="secx-step reveal" key={h.title}>
                <span className="secx-step__bar" aria-hidden="true" />
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GREEN 2: CTA */}
      <section className="secx-cta">
        <div className="container secx-cta__inner reveal">
          <p className="eyebrow eyebrow--on-dark">Let’s talk</p>
          <h2>Don’t see your exact sector?</h2>
          <p className="secx-cta__sub">
            If your industry isn’t listed, it usually means we can adapt fast. Tell us
            your constraints and we’ll show you how we’d approach it.
          </p>
          <div className="secx-cta__actions">
            <Link to="/contact" className="btn btn--primary">Talk to us →</Link>
            <Link to="/capabilities" className="btn btn--ghost-dark">Explore capabilities</Link>
          </div>
        </div>
      </section>
    </>
  );
}