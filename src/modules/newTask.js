import toDoListData from './todo.js';
import { setData } from './setItems.js';

export default function addTask(taskinput) {
  const taskList = toDoListData();
  taskList.push(taskinput);
  setData(taskList);
}
