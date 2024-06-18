document.addEventListener('DOMContentLoaded', () => {
  let bookRows = document.querySelectorAll('.bookSection');
  let overlaySection = document.querySelector('.bookOverlay');
  let closeButton = document.querySelector('.pageClose');

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

  function giveIDtoPages() {
    allPages.forEach((page, index) => {
      page.setAttribute('id', `i${index}`);
    });
  }

  function pageClick() {
    allPages.forEach((page) => {
      page.addEventListener('click', () => {
        overlaySection.style.zIndex = '5';
        overlaySection.style.opacity = '1';
        index = page.id.substring(1);
        let pageClone = page.cloneNode(true);
        pageClone.style.right = 'auto';
        console.log(pageClone);
        overlaySection.appendChild(pageClone);
      });
    });
  }

  function closePopup() {
    closeButton.addEventListener('click', () => {
      overlaySection.style.zIndex = '-1';
      overlaySection.style.opacity = '0';
      setTimeout(() => {
        overlaySection.children[1].remove();
      }, 500);
    });
  }

  spawnPages();
  window.onresize = resize;
  movePages();
  allPages = document.querySelectorAll('.page');
  giveIDtoPages();
  pageClick();
  closePopup();
});
