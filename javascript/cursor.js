document.addEventListener('DOMContentLoaded', () => {
  let index = document.querySelector('.index');
  let section = document.querySelector('section');
  let img = document.querySelector('.wave');
  let gif = document.querySelector('.waveIMG');
  let nav = document.querySelector('nav');
  let smallCursor = document.querySelector('.smallCursor');

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
  }

  generateCursor();

  let cursor = document.querySelector('.cursor');

  function moveCursor() {
    index.addEventListener('mousemove', (e) => {
      cursor.style.top = e.pageY + 'px';
      cursor.style.left = e.pageX + 'px';
    });
  }

  function closeMain() {
    section.addEventListener('click', () => {
      status = 1;
      if (window.innerWidth >= 1920) {
        gif.style.transform = 'rotate(0deg) scale(0.4)';
        gif.style.top = '-70%';
      } else if ((window.innerWidth < 1920) & (window.innerWidth > 1620)) {
        gif.style.transform = 'rotate(0deg) scale(0.4)';
        gif.style.top = '-40%';
        gif.style.left = '-100%';
      } else if ((window.innerWidth <= 1620) & (window.innerWidth > 1280)) {
        gif.style.transform = 'rotate(0deg) scale(0.4)';
        gif.style.top = '-30%';
        gif.style.left = '-100%';
      } else if ((window.innerWidth <= 1280) & (window.innerWidth > 1024)) {
        gif.style.transform = 'rotate(0deg) scale(0.4)';
        gif.style.top = '-5%';
        gif.style.left = '-100%';
      } else if ((window.innerWidth >= 720) & (window.innerWidth <= 1024)) {
        gif.style.transform = 'rotate(90deg) scale(0.2)';
        gif.style.left = '-70%';
        gif.style.top = '30%';
      } else if ((window.innerWidth >= 420) & (window.innerWidth < 720)) {
        gif.style.transform = 'rotate(90deg) scale(0.3)';
        gif.style.left = '-60%';
        gif.style.top = '40%';
      } else if (window.innerWidth < 420) {
        gif.style.transform = 'rotate(90deg) scale(0.3)';
        gif.style.left = '-70%';
        gif.style.top = '50%';
      }

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
