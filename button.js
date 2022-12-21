let button = document.querySelector('.page__button_text');
let hiddenTabs = document.querySelector('.hidden-tabs');
let buttonContainer = document.querySelector('.page__button');
let wrapperSize = document.querySelector('.wrapper');

button.addEventListener('click', function() {

  if (hiddenTabs.classList.contains('hidden')) {
    button.textContent = 'Скрыть';
    buttonContainer.style.top = '384px';
    wrapperSize.style.minHeight = '412px';
  } else {
    button.textContent = 'Показать все';
    buttonContainer.style.top = '274px';
    wrapperSize.style.minHeight = '322px';
  }

  hiddenTabs.classList.toggle('hidden');

  if (hiddenTabs.style.display != 'flex') {
    hiddenTabs.style.display = 'flex';
  } else {
    hiddenTabs.style.display = 'none';
  }

  hiddenTabs.classList.toggle('hidden-tabs');
});