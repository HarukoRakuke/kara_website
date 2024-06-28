document.addEventListener('DOMContentLoaded', () => {
  let formDates = document.querySelectorAll('.date');
  let reasons = document.querySelectorAll('.reason');
  let details = document.querySelector('.details');
  let name = document.querySelector('.name');
  let overlapSection = document.querySelector('form');
  let closeButton = document.querySelector('.closeForm');
  let openButton = document.querySelector('.openButton');
  let openButton2 = document.querySelector('.openForm');
  let smallCursor = document.querySelector('.smallCursor');

  function changeOpacity() {
    formDates.forEach((formDate) => {
      formDate.addEventListener('change', () => {
        formDate.style.opacity = '1';
      });
      details.addEventListener('mouseover', () => {
        details.removeAttribute('placeholder');
      });
      details.addEventListener('mouseout', () => {
        details.setAttribute(
          'placeholder',
          'ваши воспоминания и последующие наблюдения, которые могут помочь в расследовании'
        );
      });
      name.addEventListener('mouseover', () => {
        name.removeAttribute('placeholder');
      });
      name.addEventListener('mouseout', () => {
        name.setAttribute('placeholder', 'прижизненное имя и фамилия');
      });
    });
    reasons.forEach((reason) => {
      reason.addEventListener('click', () => {
        if (reason.className == 'reason selected') {
          reason.classList.remove('selected');
        } else {
          reason.classList.add('selected');
        }
      });
    });
  }

  function popup() {
    overlapSection.style.zIndex = '11';
    overlapSection.style.opacity = '1';
    closeSee();
  }

  function openPopup() {
    if (openButton) {
      openButton.addEventListener('click', () => {
        popup();
      });
    }
    openButton2.addEventListener('click', () => {
      popup();
    });
  }

  function closeSee() {
    if (overlapSection.style.zIndex == '-1') {
      closeButton.style.display = 'none';
    } else if (overlapSection.style.zIndex == '11') {
      closeButton.style.display = 'block';
    }
  }

  function closePopup() {
    closeButton.addEventListener('click', () => {
      overlapSection.style.zIndex = '-1';
      overlapSection.style.opacity = '0';
      closeButton.style.display = 'none';
    });
  }

  changeOpacity();
  openPopup();
  closePopup();
});
