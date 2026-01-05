const hideBtn = document.querySelector('#closeIcon');
const slideBar = document.querySelector('.slideBar');
const menu = document.querySelector('#menu');
const buttonCollection = document.querySelector('.buttonCollection');
const modal = document.querySelector('.modal');

const data = [
  { title: 'Element 1', subtitle: ['1.1 Shop', '1.2 About us', '1.3 Contact us'] },
  { title: 'Element 2', subtitle: ['2.1 Shop', '2.2 About us'] },
  { title: 'Element 3', subtitle: ['3.1 Shop'] },
  { title: 'Element 4', subtitle: ['4.1 Shop', '4.2 About us', '4.3 Contact us'] },
];

const hideSlideBar = () => {
  slideBar.classList.remove('showElement');
  slideBar.classList.add('hideElement');
  modal.classList.add('modalHidden');
};

const showSlideBar = () => {
  slideBar.classList.remove('hideElement');
  slideBar.classList.add('showElement');
  modal.classList.toggle('modalHidden');
};

function renderCategories(element) {
  const button = document.createElement('button');
  button.textContent = element.title;
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('buttonDiv');
  const ul = document.createElement('ul');
  element.subtitle.forEach((subTitle) => {
    const li = document.createElement('li');
    li.textContent = subTitle;
    ul.append(li);
  });
  ul.classList.add('displaySubCategory');
  buttonDiv.append(ul);
  buttonCollection.append(button, buttonDiv);
  button.addEventListener('click', () => {
    ul.classList.toggle('displaySubCategory');
  });
}

const toggleModalWindow = () => {
  modal.classList.toggle('modalHidden');
};

window.addEventListener('load', () => {
  data.forEach((element) => {
    renderCategories(element);
  });
});

hideBtn.addEventListener('click', hideSlideBar);
menu.addEventListener('click', showSlideBar);
modal.addEventListener('click', hideSlideBar);
