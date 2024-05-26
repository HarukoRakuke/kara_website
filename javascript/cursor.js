document.addEventListener('DOMContentLoaded', () => {
  let index = document.querySelector('.index');

  function generateCursor() {
    let m = document.createElement('div');
    m.classList.add('cursor');
    index.appendChild(m);

    let l = document.createElement('div');
    l.classList.add('smallCursor');
    index.appendChild(l);
  }

  generateCursor();

  let cursor = document.querySelector('.cursor');
  let smallCursor = document.querySelector('.smallCursor');
  console.log(smallCursor);
  let img = document.querySelector('.wave');

  function moveCursor() {
    img.addEventListener('mousemove', (e) => {
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
      smallCursor.style.top = e.clientY + 'px';
      smallCursor.style.left = e.clientX + 'px';
    });
  }

  moveCursor();
});
