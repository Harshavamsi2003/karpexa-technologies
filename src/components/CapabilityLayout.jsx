import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import FAQ from './FAQ';
import useReveal from '../hooks/useReveal';
import { capabilities } from '../pages/capabilities';
import { capabilityProcess, sectors, differentiators } from '../data/content';
import '../styles/capability-detail.css';

// Generic, true assurances shown on every capability page.
const ASSURANCES = [
  'Vendor-neutral advice',
  'Senior team on every engagement',
  'Documented handover',
  'Flexible, transparent pricing',
];

/**
 * Shared template for every capability page.
 * GREEN RULE: spruce appears exactly twice — the hero (top) and the CTA
 * (bottom). Every section between alternates paper / white.
 */
export default function CapabilityLayout({ data }) {
  useReveal();
  const idx = capabilities.findIndex((c) => c.slug === data.slug);
  const number = String((idx === -1 ? 0 : idx) + 1).padStart(2, '0');
  const related = capabilities.filter((c) => c.slug !== data.slug).slice(0, 3);
  const lower = data.title.toLowerCase();

  return (
    <>
      {/* ── GREEN 1 of 2: hero ─────────────────────────────── */}
      <PageHeader kicker={`Capability ${number}`} title={data.title} sub={data.tagline} />

      {/* Assurance bar */}
      <div className="cd-assure">
        <div className="container cd-assure__row">
          {ASSURANCES.map((a) => (
            <span className="cd-assure__item" key={a}>
              <span className="cd-assure__tick" aria-hidden="true" />
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* The context + signals */}
      <section className="cd-context">
        <div className="container cd-context__wrap">
          <div className="cd-context__main reveal">
            <p className="eyebrow">The context</p>
            <p className="cd-lead">{data.context}</p>
            <div className="cd-context__cta">
              <Link to="/contact" className="btn btn--primary">Talk to us →</Link>
              <Link to="/capabilities" className="btn btn--ghost-light">All capabilities</Link>
            </div>
          </div>

          {data.signals?.length > 0 && (
            <aside className="cd-signals reveal">
              <h2 className="cd-signals__title">Signals you need this</h2>
              <ul>
                {data.signals.map((s) => (
                  <li key={s}><span className="cd-signals__tick" aria-hidden="true" />{s}</li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>

      {/* What's included */}
      <section className="cd-included">
        <div className="container">
          <div className="cd-head reveal">
            <p className="eyebrow">What’s included</p>
            <h2>Everything under {data.title}</h2>
            <p className="cd-sub">
              A complete set of services under one roof — take what you need now,
              and add the rest as you grow.
            </p>
          </div>
          <div className="cd-grid">
            {data.offerings.map((o) => (
              <article className="cd-item reveal" key={o.name}>
                <span className="cd-item__mark" aria-hidden="true" />
                <h3>{o.name}</h3>
                <p>{o.desc}</p>
                <span className="cd-item__bar" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="cd-outcomes">
        <div className="container">
          <div className="cd-head reveal">
            <p className="eyebrow">Outcomes</p>
            <h2>What you get out of it</h2>
          </div>
          <div className="cd-outcomes__grid">
            {data.benefits.map((b) => (
              <article className="cd-outcome reveal" key={b.title}>
                <span className="cd-outcome__bar" aria-hidden="true" />
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we deliver */}
      <section className="cd-process">
        <div className="container">
          <div className="cd-head reveal">
            <p className="eyebrow">How we deliver</p>
            <h2>A simple, proven path</h2>
            <p className="cd-sub">
              We don’t force a template. Every engagement follows the same four
              steps — shaped around your systems, your constraints and your goals.
            </p>
          </div>
          <div className="cd-process__grid">
            {capabilityProcess.map((p) => (
              <article className="cd-step reveal" key={p.step}>
                <span className="cd-step__n">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Where it helps + Deliverables */}
      <section className="cd-value">
        <div className="container cd-value__wrap">
          <div className="cd-uc">
            <div className="cd-head reveal">
              <p className="eyebrow">Where it helps</p>
              <h2>Great for moments like these</h2>
            </div>
            <div className="cd-uc__list">
              {data.useCases.map((u) => (
                <article className="cd-uc__item reveal" key={u.title}>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </article>
              ))}
            </div>
          </div>

          {data.deliverables?.length > 0 && (
            <aside className="cd-deliv reveal">
              <p className="eyebrow">Deliverables</p>
              <h2 className="cd-deliv__title">What you receive</h2>
              <ul>
                {data.deliverables.map((d) => (
                  <li key={d}><span className="cd-deliv__dot" aria-hidden="true" />{d}</li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>

      {/* Industries we support */}
      <section className="cd-sectors">
        <div className="container">
          <div className="cd-head reveal">
            <p className="eyebrow">Industries we support</p>
            <h2>{data.title}, tuned to your sector</h2>
            <p className="cd-sub">
              Every industry carries its own constraints — compliance, uptime,
              scale. We adapt {lower} to the way yours actually works.
            </p>
          </div>
          <div className="cd-sectors__row">
            {sectors.map((s) => (
              <Link to="/sectors" className="cd-sectors__chip reveal" key={s.name}>{s.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Karpexa */}
      <section className="cd-why">
        <div className="container cd-why__wrap">
          <div className="cd-why__intro reveal">
            <p className="eyebrow">Why Karpexa</p>
            <h2>Why teams choose us for {lower}</h2>
            <p className="cd-sub">
              No legacy baggage, no layers between you and the people doing the
              work — just senior attention and technology sized to your stage.
            </p>
            <Link to="/company" className="btn btn--ghost-light cd-why__cta">
              About Karpexa <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="cd-why__list">
            {differentiators.map((d) => (
              <article className="cd-why__item reveal" key={d.title}>
                <span className="cd-why__mark" aria-hidden="true" />
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & partners */}
      {data.tech?.length > 0 && (
        <section className="cd-tech">
          <div className="container">
            <div className="cd-head reveal">
              <p className="eyebrow">Tech &amp; partners</p>
              <h2>Tools we work with</h2>
            </div>
            <div className="cd-tech__row">
              {data.tech.map((t) => (
                <span className="cd-tech__chip reveal" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faqs?.length > 0 && (
        <section className="cd-faq">
          <div className="container cd-faq__wrap">
            <div className="cd-head reveal">
              <p className="eyebrow">Questions</p>
              <h2>Honest answers</h2>
            </div>
            <FAQ items={data.faqs} />
          </div>
        </section>
      )}

      {/* Related */}
      <section className="cd-related">
        <div className="container">
          <div className="cd-head reveal">
            <p className="eyebrow">Keep exploring</p>
            <h2>Related capabilities</h2>
          </div>
          <div className="cd-related__grid">
            {related.map((r) => (
              <Link to={`/capabilities/${r.slug}`} className="cd-related__card reveal" key={r.slug}>
                <span className="cd-related__mark" aria-hidden="true" />
                <h3 className="cd-related__t">{r.title}</h3>
                <p className="cd-related__desc">{r.blurb}</p>
                <span className="cd-related__go" aria-hidden="true">
                  <svg viewBox="0 0 16 16"><path d="M4 8h8M9 4l3 4-3 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="cd-related__bar" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GREEN 2 of 2: closing CTA ──────────────────────── */}
      <section className="cd-cta">
        <div className="container cd-cta__inner reveal">
          <p className="eyebrow eyebrow--on-dark">Let’s talk</p>
          <h2>Ready to talk about {data.title}?</h2>
          <p className="cd-cta__sub">
            Tell us where you are today. We’ll map the need and come back with a
            clear, practical next step — usually within one business day.
          </p>
          <div className="cd-cta__actions">
            <Link to="/contact" className="btn btn--primary">Start a conversation →</Link>
            <Link to="/capabilities" className="btn btn--ghost-dark">All capabilities</Link>
          </div>
        </div>
      </section>
    </>
  );
}