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

function contact(){
  const popouts = document.querySelectorAll('.contact-popout');
  let offset = -128;
  for(i of popouts){
    i.style.opacity = 100;
    gsap.to(i, {x: offset, duration: 1, ease: "elastic.out(1.2,0.75)",})
    offset -= 86;
  }
}
