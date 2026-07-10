import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Partners from '../components/Partners';
import useReveal from '../hooks/useReveal';
import {
  company, values, companyFacts, journey,
  differentiators, commitments, capabilityProcess, stats,
} from '../data/content';
import '../styles/company.css';

export default function Company() {
  useReveal();

  return (
    <>
      {/* ── GREEN 1 of 2: hero ─────────────────────────────── */}
      <PageHeader kicker="Company" title={company.heroTitle} sub={company.heroSub} />

      {/* 1 · Intro + quick facts */}
      <section className="ab-intro">
        <div className="container ab-intro__wrap">
          <div className="reveal">
            <p className="eyebrow">Who we are</p>
            <p className="ab-lead">{company.intro}</p>
          </div>
          <dl className="ab-facts reveal">
            {companyFacts.map((f) => (
              <div className="ab-fact" key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2 · Vision, mission, motto */}
      <section className="ab-vm">
        <div className="container">
          <div className="ab-head reveal">
            <p className="eyebrow">What drives us</p>
            <h2>Where we’re going, and how</h2>
          </div>

          <div className="ab-vm__grid">
            <article className="ab-vm__card reveal">
              <span className="ab-vm__label">{company.vision.label}</span>
              <h3>Our <span className="accent">vision</span></h3>
              <p>{company.vision.text}</p>
            </article>

            <article className="ab-vm__card reveal">
              <span className="ab-vm__label">{company.mission.label}</span>
              <h3>Our <span className="accent">mission</span></h3>
              <p>{company.mission.text}</p>
            </article>

            <aside className="ab-motto reveal">
              <span className="ab-motto__mark" aria-hidden="true">“</span>
              <p className="ab-motto__text">{company.motto}</p>
              <span className="ab-motto__by">The idea everything else hangs from.</span>
            </aside>
          </div>
        </div>
      </section>

      {/* 3 · Journey */}
      <section className="ab-journey">
        <div className="container">
          <div className="ab-head reveal">
            <p className="eyebrow">Our journey</p>
            <h2>Young company, long view</h2>
            <p className="ab-sub">
              We won’t pretend to decades of history. Here’s honestly where we
              started, where we are, and what we’re building towards.
            </p>
          </div>

          <ol className="ab-timeline">
            {journey.map((j) => (
              <li className="ab-step reveal" key={j.phase}>
                <span className="ab-step__node" aria-hidden="true" />
                <span className="ab-step__year">{j.year}</span>
                <h3>{j.title}</h3>
                <p>{j.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4 · Core values */}
      <section className="ab-values">
        <div className="container">
          <div className="ab-head reveal">
            <p className="eyebrow">The DNA of our work</p>
            <h2>Our core values</h2>
          </div>
          <div className="ab-values__grid">
            {values.map((v) => (
              <article className="ab-value reveal" key={v.title}>
                <span className="ab-value__mark" aria-hidden="true" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
                <span className="ab-value__bar" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · How we work */}
      <section className="ab-approach">
        <div className="container">
          <div className="ab-head reveal">
            <p className="eyebrow">How we work</p>
            <h2>A simple, proven path</h2>
          </div>
          <div className="ab-approach__grid">
            {capabilityProcess.map((p) => (
              <article className="ab-step-card reveal" key={p.step}>
                <span className="ab-step-card__n">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · Why us */}
      <section className="ab-why">
        <div className="container ab-why__wrap">
          <div className="ab-why__intro reveal">
            <p className="eyebrow">Why Karpexa</p>
            <h2>Being new is an advantage</h2>
            <p className="ab-sub">
              No legacy processes, no layers between you and the people doing the
              work — just senior attention and technology sized to your stage.
            </p>
            <Link to="/capabilities" className="btn btn--ghost-light ab-why__cta">
              See what we do <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="ab-why__list">
            {differentiators.map((d) => (
              <article className="ab-why__item reveal" key={d.title}>
                <span className="ab-why__mark" aria-hidden="true" />
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Commitments */}
      <section className="ab-commit">
        <div className="container">
          <div className="ab-head reveal">
            <p className="eyebrow">Beyond the work</p>
            <h2>Our commitments</h2>
          </div>
          <div className="ab-commit__grid">
            {commitments.map((c) => (
              <article className="ab-commit__card reveal" key={c.title}>
                <span className="ab-commit__dot" aria-hidden="true" />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8 · Partners */}
      <Partners />

      {/* 9 · Stats */}
      <section className="ab-stats">
        <div className="container">
          <div className="ab-head reveal">
            <p className="eyebrow">At a glance</p>
            <h2>Where we are today</h2>
          </div>
          <div className="ab-stats__grid">
            {stats.map((s) => (
              <div className="ab-stat reveal" key={s.l}>
                <div className="ab-stat__v">{s.v}</div>
                <div className="ab-stat__l">{s.l}</div>
              </div>
            ))}
          </div>
          <p className="ab-stats__note reveal">* Figures to be confirmed as we grow.</p>
        </div>
      </section>

      {/* ── GREEN 2 of 2: closing CTA ──────────────────────── */}
      <section className="ab-cta">
        <div className="container ab-cta__inner reveal">
          <p className="eyebrow eyebrow--on-dark">Let’s talk</p>
          <h2>Let’s build something that lasts</h2>
          <p className="ab-cta__sub">
            Tell us where you are today. We’ll map the need and come back with a
            clear, practical next step — usually within one business day.
          </p>
          <div className="ab-cta__actions">
            <Link to="/contact" className="btn btn--primary">
              Start a conversation <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/capabilities" className="btn btn--ghost-dark">Explore capabilities</Link>
          </div>
        </div>
      </section>
    </>
  );
}