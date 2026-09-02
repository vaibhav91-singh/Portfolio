import { useEffect, useRef, useState, useCallback } from 'react';
import anime from 'animejs';

/**
 * Hook: Animate when element enters viewport
 */
export function useScrollAnime(animeConfig = {}, options = {}) {
  const ref = useRef(null);
  const animated = useRef(false);
  const { threshold = 0.15, once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !animated.current)) {
          animated.current = true;
          anime({
            targets: el,
            ...animeConfig,
          });
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Hook: Stagger animate children when parent enters viewport
 */
export function useStaggerAnime(animeConfig = {}, options = {}) {
  const ref = useRef(null);
  const animated = useRef(false);
  const { threshold = 0.1, childSelector = ':scope > *', once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initially hide children
    const children = el.querySelectorAll(childSelector);
    children.forEach((child) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(30px)';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !animated.current)) {
          animated.current = true;
          anime({
            targets: children,
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutExpo',
            duration: 800,
            delay: anime.stagger(100),
            ...animeConfig,
          });
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Hook: Counter animation (counts up a number)
 */
export function useCountUp(target, duration = 1500) {
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const numTarget = parseInt(target, 10);
          if (isNaN(numTarget)) {
            el.textContent = target;
            return;
          }

          const obj = { value: 0 };
          anime({
            targets: obj,
            value: numTarget,
            round: 1,
            easing: 'easeOutExpo',
            duration,
            update: () => {
              el.textContent = obj.value + (String(target).includes('+') ? '+' : '');
            },
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}

/**
 * Hook: Text letter-by-letter reveal
 */
export function useTextReveal(text, options = {}) {
  const ref = useRef(null);
  const animated = useRef(false);
  const { duration = 1200, delay = 0, staggerDelay = 30 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Wrap each char in a span
    el.innerHTML = text
      .split('')
      .map((char) =>
        char === ' '
          ? ' '
          : `<span style="display:inline-block;opacity:0">${char}</span>`
      )
      .join('');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          anime({
            targets: el.querySelectorAll('span'),
            opacity: [0, 1],
            translateY: [20, 0],
            rotateX: [90, 0],
            easing: 'easeOutExpo',
            duration,
            delay: anime.stagger(staggerDelay, { start: delay }),
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, duration, delay, staggerDelay]);

  return ref;
}

/**
 * Utility: Run an anime animation imperatively
 */
export function animateElement(targets, config) {
  return anime({
    targets,
    ...config,
  });
}

export default anime;
