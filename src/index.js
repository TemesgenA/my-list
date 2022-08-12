// My LIst app entry JS file
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import menu from './assets/images/3-dots.png';
import arrow from './assets/images/add-item-img.png';
import refresh from './assets/images/refresh.png';

const listContainer = document.querySelector('.to-do-list-ul');
document.querySelector('.refresh').src = `${refresh}`;
document.querySelector('.arrow').src = `${arrow}`;

// eslint-disable-next-line no-unused-expressions
window.onload;
// eslint-disable-next-line no-unused-expressions
listContainer.innerHTML;

const toDos = [
  {
    description: 'webpack config',
    completed: false,
    index: 0,
  },

  {

    description: 'walk with wife',
    completed: false,
    index: 1,
  },

  {
    description: 'Finish react milestone',
    completed: false,
    index: 2,
  },

];

document.querySelector('.to-do-list-ul').innerHTML = toDos.map((data) => `<li class="to-do-item">
  <div class="li-div">
  <input class="to-do-check" type="checkbox">
  <p>${data.description}</p>
  </div>
  <div class="img-div">
  <img src="${menu}" alt="3-dots" class="li-img">
  </div>
  </li>`).join('');
