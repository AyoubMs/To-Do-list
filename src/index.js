import './style.css';
import addNewTask from './modules/addlist.js';
import populateList from './modules/populateList.js';
import trashCompleted from './modules/completed.js';

const addNewTaskInput = document.querySelector('#text');
const addNewTaskBtn = document.querySelector('.add');
const clearCompletedTask = document.querySelector('.clear');

addNewTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addNewTask(addNewTaskInput);
});

clearCompletedTask.addEventListener('click', (e) => {
  e.preventDefault();
  trashCompleted();
  populateList();
});

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  populateList();
});
