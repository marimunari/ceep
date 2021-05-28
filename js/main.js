import { handleNewItem } from '../components/createTask.js';
import { showTask } from '../components/showTask.js';

const newTask = document.querySelector('[data-form-button]')

newTask.addEventListener('click', handleNewItem);

showTask();