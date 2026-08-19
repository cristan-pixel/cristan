/* ==========================================================
   ALEX RIVERA — PORTFOLIO
   Behavior: IC pin generation + scroll reveal
   ========================================================== */

// Generate IC legs (pins) programmatically around the hero chip
(function () {
  const legsWrap = document.getElementById('ic-legs');
  if (!legsWrap) return;

  const perSide = 5;
  const positions = [];
  for (let i = 0; i < perSide; i++) {
    const pct = 12 + i * (76 / (perSide - 1));
    positions.push(pct);
  }

  positions.forEach((pct) => {
    const top = document.createElement('span');
    top.className = 'leg-h';
    top.style.top = '-3px';
    top.style.left = pct + '%';
    legsWrap.appendChild(top);

    const bottom = document.createElement('span');
    bottom.className = 'leg-h';
    bottom.style.bottom = '-3px';
    bottom.style.left = pct + '%';
    legsWrap.appendChild(bottom);

    const left = document.createElement('span');
    left.className = 'leg-v';
    left.style.left = '-3px';
    left.style.top = pct + '%';
    legsWrap.appendChild(left);

    const right = document.createElement('span');
    right.className = 'leg-v';
    right.style.right = '-3px';
    right.style.top = pct + '%';
    legsWrap.appendChild(right);
  });
})();

// Scroll reveal for elements marked with .reveal
(function () {
  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
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
    { threshold: 0.15 }
  );

  items.forEach((el) => io.observe(el));
})();
