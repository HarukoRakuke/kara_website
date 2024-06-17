let assets = document.querySelectorAll('.asset');
let buttons = document.querySelectorAll('.button');
let section = document.querySelector('section');

function assetClick() {
  assets.forEach((asset, i) => {
    asset.addEventListener('click', () => {
      posterView(i);
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
        p.style.backgroundImage = `url('/img/asset${i + 1}_${index + 1}.png')`;
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
});
