document.addEventListener('DOMContentLoaded', () => {
  let index = document.querySelector('.index');
  let section = document.querySelector('section');
  let img = document.querySelector('.wave');
  let gif = document.querySelector('.waveIMG');
  let nav = document.querySelector('nav');
  let status = 0;

  function waveMove() {
    gif = document.querySelector('.waveIMG');
    img.addEventListener('mousemove', (e) => {
      gif = document.querySelector('.waveIMG');
      if (status == 1) {
        return;
      } else {
        let topCoord = gif.offsetTop;
        let leftCoord = gif.offsetLeft;
        if (e.movementX < 0) {
          gif.style.left = leftCoord + 1 + 'px';
        }

        if (e.movementY < 0) {
          gif.style.top = topCoord + 1 + 'px';
        }
        if (e.movementX > 0) {
          gif.style.left = leftCoord - 1 + 'px';
        }
        if (e.movementY > 0) {
          gif.style.top = topCoord - 1 + 'px';
        }
      }
    });
  }

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

  function moveCursor() {
    index.addEventListener('mousemove', (e) => {
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
      smallCursor.style.top = e.clientY + 'px';
      smallCursor.style.left = e.clientX + 'px';
    });
  }

  function closeMain() {
    section.addEventListener('click', () => {
      status = 1;
      gif.style.transform = 'rotate(0deg) scale(0.4)';
      gif.style.top = '-100%';
      document.querySelectorAll('h1').forEach((h1) => {
        h1.style.display = 'none';
      });
      cursor.style.transform = 'scale(0)';
      setTimeout(() => {
        cursor.remove();
      }, 500);
      nav.style.display = 'flex';
    });
  }

  moveCursor();
  waveMove();
  closeMain();
});
