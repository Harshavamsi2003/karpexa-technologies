import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../data/content';
import '../styles/hero.css';

const DURATION = 5500; // ms each slide stays on screen

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const go = useCallback((i) => setIdx((i + heroSlides.length) % heroSlides.length), []);
  const next = useCallback(() => setIdx((v) => (v + 1) % heroSlides.length), []);

  // Autoplay — always advances (content rotation), pauses only when hidden
  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(next, DURATION);
    return () => clearTimeout(timer.current);
  }, [idx, paused, next]);

  // Pause when the tab is hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Preload the other slides so transitions never flash
  useEffect(() => {
    heroSlides.forEach((s) => {
      const a = new Image(); a.src = s.img;
      const b = new Image(); b.src = s.imgMobile;
    });
  }, []);

  const slide = heroSlides[idx];

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Introduction">
      {/* --- Images --- */}
      <div className="hero__media">
        {heroSlides.map((s, i) => (
          <figure className={`hero__slide ${i === idx ? 'is-active' : ''}`} key={s.img} aria-hidden={i !== idx}>
            <picture>
              <source media="(max-width: 768px)" srcSet={s.imgMobile} />
              <img src={s.img} alt="" fetchPriority={i === 0 ? "high" : "low"} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
            </picture>
          </figure>
        ))}
      </div>

      {/* --- Legibility scrims --- */}
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__topscrim" aria-hidden="true" />

      {/* --- Copy --- */}
      <div className="hero__inner">
        <div className="container">
          <div className="hero__copy" key={idx}>
            <p className="hero__kicker">
              <span className="hero__kicker-line" aria-hidden="true" />
              {slide.kicker}
            </p>

            <h1 className="hero__title">
              <span className="hero__line"><span>{slide.lead}</span></span>
              <span className="hero__line"><span className="em">{slide.em}</span></span>
            </h1>

            <p className="hero__sub">{slide.sub}</p>

            <div className="hero__cta">
              <Link to="/capabilities" className="btn btn--primary">
                Explore capabilities <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
              <Link to="/contact" className="btn btn--ghost-dark">Talk to us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- Controls --- */}
      <div className="hero__controls">
        <div className="container hero__controls-row">
          <div className="hero__arrows">
            <button className="hero__arrow" onClick={() => go(idx - 1)} aria-label="Previous slide">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button className="hero__arrow" onClick={() => go(idx + 1)} aria-label="Next slide">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>

          <div className="hero__bars">
            {heroSlides.map((s, i) => (
              <button
                key={s.img}
                className={`hero__bar ${i === idx ? 'is-active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === idx}
              >
                <span
                  className="hero__bar-fill"
                  style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <a href="#story" className="hero__scroll" aria-label="Scroll to content">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}