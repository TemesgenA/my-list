/* eslint no-use-before-define: ["error", { "functions": false }] */

import Storage from './storage.js';
import menu from './assets/images/3-dots.png';

const toDoList = document.querySelector('.to-do-list-ul');

export const addToDo = (value) => {
  let arr;
  if (Storage.getLocalStorage() == null) {
    arr = [];
  } else {
    arr = Storage.getLocalStorage();
  }

  const length = arr.length + 1;
  const toDo = {
    description: value,
    completed: false,
    index: length,
  };
  arr.push(toDo);
  Storage.SetLocalStorage(arr);
  return arr;
};

export const removeToDo = (id) => {
  let arr = Storage.getLocalStorage();
  arr = arr.filter((e) => e.index.toString() !== id.toString());
  arr.forEach((item, index) => {
    item.index = index + 1;
  });
  Storage.SetLocalStorage(arr);
  return id;
};

const changeItem = (value, id) => {
  const arr = Storage.getLocalStorage();
  arr[id - 1].description = value;
  Storage.SetLocalStorage(arr);
};

export function display(output) {
  const storageManager = Storage.getLocalStorage();
  output.innerHTML = null;
  storageManager.forEach((item) => {
    let checkbox;
    if (item.completed) {
      checkbox = 'checked';
    }
    output.innerHTML += `<li class="to-do-item">
      <div class="li-div">
      <input class="to-do-check " type="checkbox" id="check-${item.index}" ${checkbox}>
      <input  type='text' value="${item.description}" class="test to-do-item-form ${checkbox}" id="${item.index}"></input>
      </div>
      <div class="img-div">
      <img src="${menu}" alt="3-dots"  id="${item.index}" class="li-img">
      </div>
      </li>`;
  });

  const removeButton = document.querySelectorAll('.li-img');
  if (removeButton.length !== 0) {
    for (let i = 0; i < removeButton.length; i += 1) {
      removeButton[i].addEventListener('click', (e) => {
        const { id } = e.target;
        removeToDo(id);
        display(toDoList);
      });
    }
  }
  const item = document.querySelectorAll('.to-do-item-form');
  if (item.length !== 0) {
    for (let i = 0; i < item.length; i += 1) {
      item[i].addEventListener('change', (e) => {
        const { id } = e.target;
        changeItem(item[i].value, id);
      });
    }
  }
  const checkBox = document.querySelectorAll('.to-do-check');
  if (checkBox.length !== 0) {
    for (let i = 0; i < checkBox.length; i += 1) {
      checkBox[i].addEventListener('change', (e) => {
        const id = e.target.id.replace('check-', '');
        markCompleted(e.target, id, checkBox);
        window.location.reload();
      });
    }
  }
}

export const clear = (toDoList) => {
  let arr = Storage.getLocalStorage();
  arr = arr.filter((e) => e.completed !== true);
  arr.forEach((item, index) => {
    item.index = index + 1;
  });
  Storage.SetLocalStorage(arr);
  display(toDoList);
};

export const clearAll = () => {
  const toDoList = document.querySelector('.to-do-list-ul');
  window.localStorage.clear();
  toDoList.innerHTML = '';
};

function markCompleted(checkbox, id, toDoList) {
  const arr = Storage.getLocalStorage();
  arr[id - 1].completed = checkbox.checked;
  Storage.SetLocalStorage(arr);
  display(toDoList);
}