document.addEventListener('DOMContentLoaded', () => {
  let scrollIMG = document.querySelector('.navIMG');
  let scrollButtons = document.querySelector('.menuButtons');
  let scrollArea = document.querySelector('.menu');
  let dropDown = document.querySelector('.dropDown');
  let dragSquare = document.querySelector('.dragArea');

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function positionMenu() {
    if (window.innerWidth < 450) {
      scrollArea.style.top = '0px';
      scrollArea.style.left = '0px';
    } else {
      const { width, height } = scrollArea.getBoundingClientRect();

      const widthRange = window.innerWidth - width - window.innerWidth * 0.02;
      const heightRange =
        window.innerHeight - height - window.innerHeight * 0.02;

      scrollArea.style.top =
        getRandomArbitrary(window.innerHeight * 0.02, heightRange) + 'px';
      scrollArea.style.left =
        getRandomArbitrary(window.innerWidth * 0.02, widthRange) + 'px';
    }
  }

  positionMenu();

  dragSquare.addEventListener('mousedown', onMouseDown);
  var shiftX, shiftY;

  function onMouseDown(event) {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    shiftX = event.clientX - dragSquare.getBoundingClientRect().left;
    shiftY = event.clientY - dragSquare.getBoundingClientRect().top;
  }

  function onMouseMove(event) {
    scrollArea.style.left = event.clientX - shiftX + 'px';
    scrollArea.style.top = event.clientY - shiftY + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  dropDown.addEventListener('mouseover', () => {
    dropDown.classList.add('active');
    scrollArea.classList.add('dropDownHeight');
  });
  dropDown.addEventListener('mouseout', () => {
    dropDown.classList.remove('active');
    scrollArea.classList.remove('dropDownHeight');
  });

  scrollArea.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollIMG = document.querySelector('.navIMG');
    scrollButtons = document.querySelector('.menuButtons');
    scrollIMG.style.animation = 'none';
    scrollButtons.style.animation = 'none';
    if (e.deltaY > 0) {
      if (scrollIMG.offsetLeft > (-scrollIMG.offsetWidth * 3) / 5) {
        scrollIMG.style.left = scrollIMG.offsetLeft - 100 + 'px';
        scrollButtons.style.left = scrollButtons.offsetLeft - 100 + 'px';
        console.log(scrollIMG.offsetLeft, scrollIMG.offsetWidth);
      }
    }
    if (e.deltaY < 0) {
      if (scrollIMG.offsetLeft < 0) {
        scrollIMG = document.querySelector('.navIMG');
        scrollButtons = document.querySelector('.menuButtons');
        scrollIMG.style.left = scrollIMG.offsetLeft + 100 + 'px';
        scrollButtons.style.left = scrollButtons.offsetLeft + 100 + 'px';
      }
    }
  });
});
