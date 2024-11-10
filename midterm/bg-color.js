window.addEventListener('scroll', (e) => {
  let position = window.scrollY;
  let body = document.body;
  if (position >= 1) {
    body.style.backgroundColor = 'lightgray';
  } else {
    body.style.backgroundColor = '';
  }
});
