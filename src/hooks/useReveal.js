import { useEffect } from 'react';

// Adds `.is-visible` to `.reveal` elements when they scroll into view.
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!els.length) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 55, 300)}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  });
}
