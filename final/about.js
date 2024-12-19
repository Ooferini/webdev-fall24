window.addEventListener('DOMContentLoaded', ()=>{    
    const tl = gsap.timeline();

    tl.from('#aboutText', {duration: 2, x:'-100%', ease: 'steps(4)'})

    const split = new SplitText('#aboutText', { type: 'words,chars' });
    tl.from(split.chars, {
        duration: 1, 
        opacity: 0,
        autoAlpha: 0, 
        stagger: 0.05,
        ease: "steps(1)"
      })

});