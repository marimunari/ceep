import { showTask } from './showTask.js';
import BtnCompleted from './completeTask.js';
import BtnDelete from './deleteTask.js';

export const handleNewItem = (event) => {
    event.preventDefault();

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const input = document.querySelector('[data-form-input]');
    const description = input.value;

    const calendar = document.querySelector('[data-form-date]');
    const date = moment(calendar.value);
    const hour = date.format('HH:mm');

    const formattedDate = date.format('DD/MM/YYYY');

    const completed = false;

    const dados = {
        description,
        formattedDate,
        hour,
        completed
    }

    const updatedTasks = [...tasks, dados];

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    input.value = " ";

    showTask();
}
 
export const Task = ({ description, hour, completed }, id) => {

    const task = document.createElement('li');
    const content = `<p class="content">${hour} | ${description}</p>`;

    if(completed) {
        task.classList.add('done');
    }
    task.classList.add('task');

    task.innerHTML = content;

    task.appendChild(BtnCompleted(showTask, id));
    task.appendChild(BtnDelete(showTask, id));

    return task;        
}