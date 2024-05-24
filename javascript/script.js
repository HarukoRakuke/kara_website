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
  assets.forEach((asset) => {
    asset.style.display = 'none';
  });
  assets[i].style.display = 'block';
  let posters = assets[i].querySelectorAll('.poster');
  posters.forEach((poster, index) => {
    poster.style.display = 'none';
    poster.style.animation = '';
  });
  posters.forEach((poster, index) => {
    setTimeout(() => {
      poster.style.display = 'block';
      poster.style.animation = 'scale 5s linear';
    }, index * 1000);
  });
}

assets.forEach((asset) => {
  asset.addEventListener('click', () => scrollPosters(asset));
});

function scrollPosters(asset) {
  asset.querySelectorAll('.poster').forEach((poster) => {
    poster.style.animation = '';
    poster.style.display = 'block';
    asset.style.width = '100vw';
    asset.style.display = 'flex';
    poster.style.position = 'relative';
  });
}

let buttons = document.querySelectorAll('h1');
buttons.forEach((button, i) => {
  button.addEventListener('click', () => posterGenerate(i));
});
