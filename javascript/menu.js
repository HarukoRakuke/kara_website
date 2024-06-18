document.addEventListener('DOMContentLoaded', () => {
  let scrollIMG = document.querySelector('.navIMG');
  let scrollButtons = document.querySelector('.menuButtons');
  let scrollArea = document.querySelector('.menu');
  let dropDown = document.querySelector('.dropDown');

  dropDown.addEventListener('mouseover', () => {
    dropDown.classList.add('active');
  });
  dropDown.addEventListener('mouseout', () => {
    dropDown.classList.remove('active');
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
