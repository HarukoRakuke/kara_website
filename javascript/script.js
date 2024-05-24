let assets = document.querySelectorAll('.asset');

function postersSpawn() {
  function posterSerie(assets, i) {
    let posters = assets[i].querySelectorAll('.poster');
    posters.forEach((poster, index) => {
      poster.style.backgroundImage = `url('/img/asset${i + 1}_${
        index + 1
      }.png')`;
    });
  }
  assets.forEach((asset, i) => {
    posterSerie(assets, i);
  });
}
postersSpawn();

function posterGenerate(i) {
  let section = document.querySelector('section');
  section.style.paddingRight = '20vw';
  assets.forEach((asset) => {
    asset.style.display = 'none';
    asset.style.width = '';
    asset.style.overflowX = '';
  });
  assets[i].style.display = 'block';
  let posters = assets[i].querySelectorAll('.poster');
  posters.forEach((poster, index) => {
    poster.style.display = 'none';
    poster.style.position = 'absolute';
    poster.style.animation = '';
  });

  posters.forEach((poster, index) => {
    setTimeout(() => {
      poster.style.display = 'block';
      poster.style.animation = `scale 5s linear forwards`;
    }, index * 1000);
  });
}

assets.forEach((asset) => {
  asset.addEventListener('click', () => scrollPosters(asset));
});

function scrollPosters(asset) {
  let section = document.querySelector('section');
  section.style.paddingRight = '0';
  asset.querySelectorAll('.poster').forEach((poster) => {
    asset.style.width = '80vw';
    asset.style.overflowX = 'scroll';
    asset.style.display = 'flex';
    poster.style.position = 'relative';
  });
}

let buttons = document.querySelectorAll('h1');
buttons.forEach((button, i) => {
  button.addEventListener('click', () => posterGenerate(i));
});
