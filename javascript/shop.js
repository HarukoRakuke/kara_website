document.addEventListener('DOMContentLoaded', () => {
  let firstRowContainer = document.querySelector('.firstRow');
  let secondRowContainer = document.querySelector('.secondRow');
  let buttonToCart = document.querySelector('.toCart');
  let buttomRemoveFromCart = document.querySelector('.fromCart');
  let descriptionPlace = document.querySelector('.description');
  let shopList = document.querySelector('.shopList');
  let previewBox = document.querySelector('.previewContent');
  let productTitle = document.querySelector('.title');
  let buyMenu = document.querySelector('.buyMenu');
  let price = document.querySelector('.price');
  let cart = document.querySelector('.cartArea');
  let buyButton = document.querySelector('.buyButton');
  let overlapSection = document.querySelector('.overlap');
  let boughtItemsPanel = document.querySelector('.boughtItems');
  let closeButton = document.querySelector('.close');

  let status = 0;
  let albumCount = 7;
  let itemsCount = 15;

  let titleArray = [
    'симфония принятия',
    'отторжение',
    'растерянность',
    'зенит',
    'сознание принятия',
    'оковы безысходности',
    'выплески',
    'саморазрушение',
    'воспоминания',
    'погружение',
    'назад',
    'несостыковка',
    'ярость',
    'гармония',
  ];

  function removeDuplicateNodesById(arr) {
    const uniqueNodes = [];
    const seenIds = new Set();
    const duplicates = {};

    arr.forEach((node) => {
      const id = node.id;
      if (!seenIds.has(id)) {
        seenIds.add(id);
        uniqueNodes.push(node);
        duplicates[id] = 1;
      } else {
        if (duplicates[id]) {
          duplicates[id]++;
        } else {
          duplicates[id] = 2; // Initialize with 2 for the first duplicate found
        }
      }
    });

    return { uniqueNodes, duplicates };
  }

  function generateAlbumStacks() {
    let itemsStack = [];
    for (let index = 0; index < itemsCount - 1; index++) {
      let item = document.createElement('div');
      if (index < albumCount) {
        item.classList.add('albumCover');
        item.classList.add('item');
        item.setAttribute('id', `i${index + 1}`);
        item.style.backgroundImage = `url('./img/item${index + 1}.png')`;
      }

      if (index >= albumCount) {
        item.classList.add('posterCover');
        item.classList.add('item');
        item.setAttribute('id', `i${index + 1}`);
        item.style.backgroundImage = `url('./img/item${index + 1}.png')`;
      }

      itemsStack.push(item);
    }
    let array = itemsStack;

    let top = array.length;
    while (--top) {
      let current = Math.floor(Math.random() * (top + 1));
      var tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }

    for (let i = 0; i < 7; i++) {
      firstRowContainer.appendChild(array[i]);
    }
    for (let i = 7; i < 14; i++) {
      secondRowContainer.appendChild(array[i]);
    }
  }

  function moveBack(parent) {
    let itemBack = previewBox.firstChild;
    itemBack.remove();
    itemBack.style.animation = 'dissapear inverse 0.5s';
    parent.append(itemBack);
  }

  function moveForwards() {
    shopList.addEventListener('click', (e) => {
      if (
        e.target.className == 'posterCover item' ||
        e.target.className == 'albumCover item'
      ) {
        let previewContent = e.target;
        let parent = e.target.parentNode;
        let productIndex = e.target.id.substring(1);
        productTitle.innerHTML = titleArray[productIndex - 1];
        productTitle.classList.remove('opacityAnim');
        price.innerHTML = '$20';
        price.classList.remove('opacityAnim');
        setTimeout(() => {
          productTitle.classList.add('opacityAnim');
        });
        setTimeout(() => {
          price.classList.add('opacityAnim');
        });

        console.log(productIndex);
        if (status) {
          moveBack(parent);
        }

        let previewClon = previewContent.cloneNode(true);
        previewBox.appendChild(previewClon);
        descriptionPlace.classList.remove('opacityAnim');
        setTimeout(() => {
          descriptionPlace.classList.add('opacityAnim');
        });
        if (previewContent.className == 'posterCover item') {
          descriptionPlace.innerHTML =
            'постер с визуализацией состояния призрака на этапе принятия смерти';
        }
        if (previewContent.className == 'albumCover item') {
          descriptionPlace.innerHTML =
            'музыкальная пластинка с дешифрованным посланием упокоенной души';
        }
        previewContent.style.animation = 'dissapear 0.5s';

        setTimeout(() => {
          previewContent.remove();
          status = 1;
        }, 400);
      }
    });
  }

  function addToCart() {
    buttonToCart.addEventListener('click', () => {
      if (previewBox.children.length == 1) {
        let itemClon = previewBox.children[0].cloneNode(true);
        cart.appendChild(itemClon);
      }
    });
  }

  function buyPopup() {
    buyButton.addEventListener('click', () => {
      overlapSection.style.zIndex = '10';
      overlapSection.style.opacity = '1';
      buyMenu.style.display = 'block';
      closeSee();
      let boughtItems = Array.from(cart.children);
      const { uniqueNodes, duplicates } = removeDuplicateNodesById(boughtItems);
      let boughtItemsNoRepeat = uniqueNodes;
      boughtItemsNoRepeat.forEach((item, index) => {
        let itemClon = item.cloneNode(true);
        let card = document.createElement('div');
        let textDescription = document.createElement('div');
        let tagName = document.createElement('div');
        tagName.innerHTML = titleArray[itemClon.id.substring(1) - 1];
        let countTag = document.createElement('div');
        countTag.innerHTML = `x${duplicates[item.id]}`;
        card.classList.add('itemCard');
        textDescription.classList.add('cardText');
        boughtItemsPanel.append(card);
        card.append(textDescription);
        card.append(itemClon);
        textDescription.append(tagName);
        textDescription.append(countTag);
      });
    });
  }

  function closeSee() {
    if (overlapSection.style.zIndex == '-1') {
      closeButton.style.display = 'none';
    } else if (overlapSection.style.zIndex == '10') {
      closeButton.style.display = 'block';
    }
  }

  function closePopup() {
    closeButton.addEventListener('click', () => {
      overlapSection.style.zIndex = '-1';
      overlapSection.style.opacity = '0';
      closeButton.style.display = 'none';
      boughtItemsPanel.innerHTML = '';
      buyMenu.style.display = 'none';
    });
  }

  function removeFromCart() {
    buttomRemoveFromCart.addEventListener('click', () => {
      let toDelete = previewBox.children[0];

      for (let i = 0; i < cart.children.length; i++) {
        if (cart.children[i].id == toDelete.id) {
          console.log('hi');
          cart.children[i].remove();
        }
      }
    });
  }

  generateAlbumStacks();
  moveForwards();
  addToCart();
  removeFromCart();
  buyPopup();
  closePopup();
});
