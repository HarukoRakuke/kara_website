let assets = document.querySelectorAll('.asset');
let buttons = document.querySelectorAll('.button');
let section = document.querySelector('section');

// smallcursor не получается подключить к poster.html напрямую, чтобы потом срабатывал скрипт и находил snmallCursor в этом файле джс,
// скорее всего, проблема в том, что этот ДЖС подключается как модуль, но если не дописывать это состояние, код вообще перестает работать,
// поэтому ниже такой вот костыль, где я по сути копирую часть кода из smallcursor.js

let body = document.querySelector('body');
let As = document.querySelectorAll('.hoverable');
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

function generateCursor() {
  let l = document.createElement('div');
  l.classList.add('smallCursor');
  body.appendChild(l);
}

function moveCursor() {
  body.addEventListener('mousemove', (e) => {
    smallCursor.style.top = e.pageY + 'px';
    smallCursor.style.left = e.pageX + 'px';
  });
}

generateCursor();
let smallCursor = document.querySelector('.smallCursor');

moveCursor();

// конец костыля

function assetClick() {
  assets.forEach((asset, i) => {
    asset.addEventListener('click', () => {
      posterView(i);
    });
    asset.addEventListener('mouseover', () => {
      console.log('whi');
      smallCursor.style.backgroundColor = 'white';
      smallCursor.style.border = '0.1vw solid black';
    });
    asset.addEventListener('mouseout', () => {
      smallCursor.style.backgroundColor = 'black';
      smallCursor.style.border = '0.1vw solid black';
    });
  });

  function posterView(i) {
    let posters = assets[i].querySelectorAll('.poster');
    posters.forEach((poster) => {
      poster.style.position = 'relative';
      poster.style.animation = '';
      poster.style.scale = '1';
      assets[i].style.display = 'flex';
      section.style.paddingRight = '0';
      assets[i].style.width = '80vw';
      assets[i].style.overflowX = 'scroll';
      if (window.innerWidth < 1024) {
        assets[i].style.height = 'auto';
        assets[i].style.width = '55vw';
        assets[i].style.aspectRatio = 'auto';
        assets[i].style.overflow = 'visible';
      }
    });
  }
}

function buttonHover() {
  buttons.forEach((button, i) => {
    button.addEventListener('mouseover', () => {
      section.style.paddingRight = '20vw';
      let asset = assets[i];
      assets.forEach((serie) => {
        serie.style.display = 'none';
        serie.style.width = '';
      });
      asset.style.display = 'block';
      asset.style.overflowX = '';

      function removePostersFromOtherAssets() {
        assets.forEach((serie, index) => {
          if (index !== i) {
            let excessPosters = serie.querySelectorAll('.poster');
            excessPosters.forEach((poster) => {
              poster.parentNode.removeChild(poster);
            });
          }
        });
      }

      removePostersFromOtherAssets();

      let index;
      let posters;
      let assetlength;

      function appendPoster(i, index) {
        let p = document.createElement('div');
        p.classList.add('poster');
        p.style.backgroundImage = `url('./img/asset${i + 1}_${index + 1}.png')`;
        p.style.display = 'block';
        p.style.animation = `2s scale linear forwards`;
        p.style.animationDelay = `${index - 1}s`;
        asset.appendChild(p);
      }

      function generatePoster(i, index, assetlength) {
        for (index = 0; index < assetlength; index++) {
          appendPoster(i, index);
          posters = asset.querySelectorAll('.poster');
          let posterstoRemove = Math.max(0, posters.length - assetlength + 1);
          if (posters.length > assetlength) {
            for (let j = 0; j < posterstoRemove; j++) {
              posters[j].parentNode.removeChild(posters[j]);
            }
          }
        }
      }

      if (i === 0) {
        assetlength = 5;
        generatePoster(i, index, assetlength);
      }
      if (i === 1) {
        assetlength = 8;
        generatePoster(i, index, assetlength);
      }
      if (i === 2) {
        assetlength = 5;
        generatePoster(i, index, assetlength);
      }
      if (i === 3) {
        assetlength = 3;
        generatePoster(i, index, assetlength);
      }
      if (i === 4) {
        assetlength = 5;
        generatePoster(i, index, assetlength);
      }
      if (i === 5) {
        assetlength = 4;
        generatePoster(i, index, assetlength);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buttonHover();
  assetClick();
  onHover();
});
