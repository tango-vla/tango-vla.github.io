document.addEventListener('DOMContentLoaded', () => {
  const cover = document.getElementById('cover-video');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let coverVisible = true;

  function syncPlayback() {
    cover.autoplay = !motion.matches && coverVisible && !document.hidden;
    if (cover.autoplay) {
      // The poster remains visible when the browser blocks autoplay.
      cover.play().catch(() => {});
    } else {
      cover.pause();
    }
  }
  motion.addEventListener('change', syncPlayback);
  document.addEventListener('visibilitychange', syncPlayback);
  syncPlayback();

  const demos = [...document.querySelectorAll('.demo-card video')];
  const demoVisibility = new Map(demos.map(video => [video, !('IntersectionObserver' in window)]));
  function syncDemoPlayback(video) {
    video.autoplay = demoVisibility.get(video) && !document.hidden && !motion.matches;
    if (video.autoplay) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }
  const syncDemos = () => demos.forEach(syncDemoPlayback);
  document.addEventListener('visibilitychange', syncDemos);
  motion.addEventListener('change', syncDemos);
  syncDemos();

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      coverVisible = entries[0].isIntersecting;
      syncPlayback();
    }, { threshold: 0 }).observe(cover);
    const demoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        demoVisibility.set(entry.target, entry.isIntersecting);
        syncDemoPlayback(entry.target);
      });
    }, { threshold: 0 });
    demos.forEach(video => demoObserver.observe(video));
  }

  const links = [...document.querySelectorAll('.section-nav a')];
  const targets = links.map(link => document.querySelector(link.hash));
  let scheduled = false;
  function updateNavigation() {
    let active = null;
    targets.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= 150) active = index;
    });
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
  }, { passive: true });
  updateNavigation();
});
