document.addEventListener('DOMContentLoaded', () => {
  let bookRows = document.querySelectorAll('.bookSection');

  function spawnPages() {
    bookRows.forEach((row, index) => {
      for (let i = 0; i < 4; i++) {
        let page = document.createElement('div');
        page.classList.add('page');
        page.style.backgroundImage = `url('./img/book${index + 1}_${i}.png')`;
        page.style.zIndex = 4 - i;
        row.appendChild(page);
        row.setAttribute('style', `height:${page.offsetHeight}px`);
      }
    });
  }

  function resize() {
    let page = document.querySelector('.page');
    for (let index = 0; index < bookRows.length; index++) {
      bookRows[index].setAttribute('style', `height:${page.offsetHeight}px`);
    }
  }

  function movePages() {
    bookRows.forEach((row, index) => {
      row.addEventListener('mouseover', () => {
        let pages = row.querySelectorAll('.page');
        pages.forEach((page, i) => {
          page.style.right = `calc(26% * ${pages.length - i - 1})`;
        });
      });
      row.addEventListener('mouseout', () => {
        let pages = row.querySelectorAll('.page');
        pages.forEach((page, i) => {
          page.style.right = `0`;
        });
      });
    });
  }

  spawnPages();
  window.onresize = resize;
  movePages();
});
