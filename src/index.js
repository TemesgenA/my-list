// eslint-disable-next-line no-unused-vars
import _, { update } from 'lodash';
import './style.css';
import arrow from './assets/images/add-item-img.png';
import refresh from './assets/images/refresh.png';
import {
  display, addToDo, clear, clearAll,
} from './crudOps.js';

document.querySelector('.refresh').src = `${refresh}`;
document.querySelector('.arrow').src = `${arrow}`;

const refreshImg = document.querySelector('.refresh');

const form = document.querySelector('.form');
const input = document.querySelector('.add-item');
const arrowImg = document.querySelector('.arrow');
const clearCompleted = document.querySelector('.remove-button');
const toDoList = document.querySelector('.to-do-list-ul');

window.addEventListener('load', () => {
  const toDoList = document.querySelector('.to-do-list-ul');
  display(toDoList);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const toDoList = document.querySelector('.to-do-list-ul');
  const inputVal = input.value;
  addToDo(inputVal);
  input.value = '';
  display(toDoList);
});

arrowImg.addEventListener('click', (e) => {
  e.preventDefault();
  const toDoList = document.querySelector('.to-do-list-ul');
  const inputVal = input.value;
  addToDo(inputVal);
  input.value = '';
  display(toDoList);
});

clearCompleted.addEventListener('click', () => {
  clear(toDoList);
});

refreshImg.addEventListener('click', () => {
  clearAll(toDoList);
});
