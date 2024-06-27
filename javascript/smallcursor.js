document.addEventListener('DOMContentLoaded', () => {
  let body = document.querySelector('body');
  let As = document.querySelectorAll('.hoverable');

  function generateCursor() {
    let l = document.createElement('div');
    l.classList.add('smallCursor');
    body.appendChild(l);
  }

  generateCursor();
  let smallCursor = document.querySelector('.smallCursor');

  function onHover() {
    As.forEach((a) => {
      a.addEventListener('mouseover', () => {
        smallCursor.style.backgroundColor = 'white';
        smallCursor.style.border = '0.1vw solid black';
      });
      a.addEventListener('mouseout', () => {
        smallCursor.style.backgroundColor = 'black';
        smallCursor.style.border = '0.1vw solid black';
      });
    });
  }

  function moveCursor() {
    body.addEventListener('mousemove', (e) => {
      smallCursor.style.top = e.pageY + 'px';
      smallCursor.style.left = e.pageX + 'px';
    });
  }

  moveCursor();
  onHover();
});
