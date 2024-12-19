const tl = gsap.timeline();

tl.from('.move', {
  y: (index, target, targets) =>
    ((target.getBoundingClientRect().top -
      target.getBoundingClientRect().bottom) /
      2 +
      target.getBoundingClientRect().bottom -
      window.innerHeight / 2) *
    3,
  x: (index, target, targets) =>
    ((target.getBoundingClientRect().right -
      target.getBoundingClientRect().left) /
      2 +
      target.getBoundingClientRect().left -
      window.innerWidth / 2) *
    3,
  opacity: 0.5,
  ease: 'back.out(1.2)',
  duration: 2,
});
