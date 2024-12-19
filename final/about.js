const split = new SplitText('aboutText', { type: 'words,chars' });
const chars = mySplitText.chars;
gsap.from(chars, opacity:0)