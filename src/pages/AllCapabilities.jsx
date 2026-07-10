import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import useReveal from '../hooks/useReveal';
import { capabilities } from '../data/content';
import '../styles/capabilities.css';

const VALUE = [
  { title: 'Integrated by design', text: 'Because we run the whole stack, the pieces are built to work together — no gaps between vendors, and no finger-pointing when something breaks.' },
  { title: 'Right-sized to your stage', text: 'Take what you need now and add the rest as you grow. We never sell scale you cannot yet use.' },
  { title: 'Looked after long-term', text: 'Every engagement ends with a documented handover and a support plan — we stay long after go-live.' },
];

export default function AllCapabilities() {
  useReveal();
  return (
    <>
      {/* GREEN 1: hero */}
      <PageHeader
        kicker="Capabilities"
        title={<>One partner across your <span className="em">whole stack</span></>}
        sub="Infrastructure, cloud, security, data and support — designed, integrated and run as a single system that fits how your business actually works."
      />

      {/* Intro + facts */}
      <section className="capx-intro">
        <div className="container capx-intro__wrap">
          <div className="reveal">
            <p className="eyebrow">The whole picture</p>
            <p className="capx-lead">
              Most providers hand you one piece and leave the joins to you. We cover
              the full range — and make the pieces fit — so you get one plan, one
              team, and one number to call.
            </p>
          </div>
          <div className="capx-facts reveal">
            <div className="capx-fact">
              <span className="capx-fact__v">{capabilities.length}</span>
              <span className="capx-fact__l">Capabilities under one roof</span>
            </div>
            <div className="capx-fact">
              <span className="capx-fact__v">1</span>
              <span className="capx-fact__l">Partner, start to finish</span>
            </div>
            <div className="capx-fact">
              <span className="capx-fact__v">24/7</span>
              <span className="capx-fact__l">Support coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capability cards */}
      <section className="capx">
        <div className="container">
          <div className="capx__grid">
            {capabilities.map((c) => (
              <Link className="acap reveal" key={c.slug} to={`/capabilities/${c.slug}`}>
                <span className="acap__accent" aria-hidden="true" />
                <div className="acap__head">
                  <h3 className="acap__title">{c.title}</h3>
                  <span className="acap__go" aria-hidden="true">
                    <svg viewBox="0 0 18 18"><path d="M4 9h9M9 4l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
                <p className="acap__blurb">{c.blurb}</p>
                <div className="acap__tags">
                  {c.offerings.slice(0, 4).map((o) => <span key={o.name}>{o.name}</span>)}
                  {c.offerings.length > 4 && <span className="acap__tags-more">+{c.offerings.length - 4} more</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why one partner */}
      <section className="capx-value">
        <div className="container">
          <div className="capx-value__head reveal">
            <p className="eyebrow">Why one partner</p>
            <h2>Ten capabilities, one accountable team</h2>
          </div>
          <div className="capx-value__grid">
            {VALUE.map((v) => (
              <article className="capx-val reveal" key={v.title}>
                <span className="capx-val__mark" aria-hidden="true" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GREEN 2: CTA */}
      <section className="capx-cta">
        <div className="container capx-cta__inner reveal">
          <p className="eyebrow eyebrow--on-dark">Let’s talk</p>
          <h2>Not sure where to start?</h2>
          <p className="capx-cta__sub">
            Tell us what’s slowing you down. We’ll point you to the right capability
            — or the right combination — and a clear next step.
          </p>
          <div className="capx-cta__actions">
            <Link to="/contact" className="btn btn--primary">Talk to us →</Link>
            <Link to="/sectors" className="btn btn--ghost-dark">Explore sectors</Link>
          </div>
        </div>
      </section>
    </>
  );
}