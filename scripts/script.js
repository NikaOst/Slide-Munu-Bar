const hideBtn = document.querySelector('#closeIcon');
const slideBar = document.querySelector('.slideBar');
const menu = document.querySelector('#menu');

const hideSlideBar = () => {
  slideBar.classList.remove('showElement');
  slideBar.classList.add('hideElement');
};

const showSlideBar = () => {
  slideBar.classList.remove('hideElement');
  slideBar.classList.add('showElement');
};
hideBtn.addEventListener('click', hideSlideBar);
menu.addEventListener('click', showSlideBar);
