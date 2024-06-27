document.addEventListener('DOMContentLoaded', () => {
  let bookRows = document.querySelectorAll('.bookSection');
  let overlaySection = document.querySelector('.bookOverlay');
  let closeButton = document.querySelector('.pageClose');
  let leftButton = document.querySelector('.left');
  let rightButton = document.querySelector('.right');
  let video = document.querySelector('video');
  let title = document.querySelector('.title');
  let smallCursor = document.querySelector('.smallCursor');
  let pageInfo = document.querySelector('.pageInfo');

  function spawnPages() {
    bookRows.forEach((row, index) => {
      for (let i = 0; i < 4; i++) {
        let page = document.createElement('div');
        page.classList.add('page');
        page.style.backgroundImage = `url('./img/book${index + 1}_${i}.jpg')`;
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
    if (window.innerWidth >= 900) {
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
    if (window.innerWidth < 900) {
      bookRows.forEach((row, index) => {
        let pages = row.querySelectorAll('.page');
        pages.forEach((page, i) => {
          page.style.right = `calc(26% * ${pages.length - i - 1})`;
        });
      });
    }
  }

  function giveIDtoPages() {
    allPages.forEach((page, index) => {
      page.setAttribute('id', `i${index}`);
    });
  }

  function pageClick() {
    allPages.forEach((page) => {
      page.addEventListener('mouseover', () => {
        console.log('whi');
        smallCursor.style.backgroundColor = 'white';
        smallCursor.style.border = '0.1vw solid black';
      });
      page.addEventListener('mouseout', () => {
        smallCursor.style.backgroundColor = 'black';
        smallCursor.style.border = '0.1vw solid black';
      });

      page.addEventListener('click', () => {
        overlaySection.style.zIndex = '10';
        overlaySection.style.opacity = '1';
        index = page.id.substring(1);
        let pageClone = page.cloneNode(true);
        pageClone.style.right = 'auto';
        console.log(pageClone);
        overlaySection.appendChild(pageClone);
        addPageDescription();
      });
    });
  }
  let rightIndex;
  let leftIndex;
  function moveLeft() {
    leftButton.addEventListener('click', () => {
      leftIndex = parseInt(overlaySection.children[1].id.substring(1));
      overlaySection.children[1].style.backgroundImage =
        allPages[leftIndex - 1].style.backgroundImage;
      overlaySection.children[1].id = `i${leftIndex - 1}`;
      console.log(allPages[leftIndex - 1]);
      addPageDescription();
    });
  }

  function moveRight() {
    rightButton.addEventListener('click', () => {
      rightIndex = parseInt(overlaySection.children[1].id.substring(1));
      console.log(rightIndex + 1);
      overlaySection.children[1].style.backgroundImage =
        allPages[rightIndex + 1].style.backgroundImage;
      overlaySection.children[1].id = `i${rightIndex + 1}`;
      addPageDescription();
    });
  }

  function addPageDescription() {
    if (
      overlaySection.children[1].id == 'i0' ||
      overlaySection.children[1].id == 'i1' ||
      overlaySection.children[1].id == 'i2' ||
      overlaySection.children[1].id == 'i3'
    ) {
      title.innerHTML = 'пункт отрешения';
      pageInfo.innerHTML =
        'cимволизирует отделение души от тела, шок от смерти и непонимание;<br><br>атрибуты: в центре находится статуя человека, сквозь которого проходят молнии и диссоциируют его';
    }
    if (
      overlaySection.children[1].id == 'i4' ||
      overlaySection.children[1].id == 'i5' ||
      overlaySection.children[1].id == 'i6' ||
      overlaySection.children[1].id == 'i7'
    ) {
      title.innerHTML = 'грань несправедливости';
      pageInfo.innerHTML =
        'символизирует чувство упущенных возможностей, отрицание смерти;<br><br>клетка визуализирует несправедливость и огражденность от окружающего мира; <br>Кластеры букв — нереализовавшиеся мечты, врезающиеся в пространство';
    }
    if (
      overlaySection.children[1].id == 'i8' ||
      overlaySection.children[1].id == 'i9' ||
      overlaySection.children[1].id == 'i10' ||
      overlaySection.children[1].id == 'i11'
    ) {
      title.innerHTML = 'поле безысходности';
      pageInfo.innerHTML =
        'cимволизирует депрессию и опустошение от смерти;<br><br>стеклянный лабиринт одновременно пустой и сложный для прохождения, чем символизирует депрессию';
    }
    if (
      overlaySection.children[1].id == 'i16' ||
      overlaySection.children[1].id == 'i17' ||
      overlaySection.children[1].id == 'i18' ||
      overlaySection.children[1].id == 'i19'
    ) {
      title.innerHTML = 'точка возврата';
      pageInfo.innerHTML =
        'символизирует тревогу и напряженность, тягу назад;<br><br>часы смерти, на которых написаны дата, время и место, когда произошло необратимое';
    }
    if (
      overlaySection.children[1].id == 'i12' ||
      overlaySection.children[1].id == 'i13' ||
      overlaySection.children[1].id == 'i14' ||
      overlaySection.children[1].id == 'i15'
    ) {
      title.innerHTML = 'комната мести';
      pageInfo.innerHTML =
        'символизирует злость и боль, которую причинила смерть;<br><br>шипы, устремляющиеся в зажатую в угол абстракцию, которую распирает в разные стороны';
    }
    if (
      overlaySection.children[1].id == 'i20' ||
      overlaySection.children[1].id == 'i21' ||
      overlaySection.children[1].id == 'i23' ||
      overlaySection.children[1].id == 'i24'
    ) {
      title.innerHTML = 'зал принятия';
      pageInfo.innerHTML =
        'символизирует умиротворение и успокоение души;<br><br>дерево, крона которого состоит из мыслей человека — единение с природой;<br>звезды, которые находятся наверху пространства: недостижимые, из них исходит свет, олицетворяют надежду';
    }
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

  function videoPlay() {
    video.addEventListener('click', function () {
      // Check if the video is paused
      if (video.paused) {
        // Play the video if it is paused
        video.play();
        video.style.width = '100%';
        video.style.filter = 'grayscale(0%)';
      } else {
        // Pause the video if it is playing
        video.pause();
        video.style.width = '50%';
        video.style.filter = 'grayscale(100%)';
      }
    });
  }

  videoPlay();
  spawnPages();
  window.onresize = resize;
  movePages();
  allPages = document.querySelectorAll('.page');
  giveIDtoPages();
  moveLeft();
  moveRight();
  pageClick();
  closePopup();
});
