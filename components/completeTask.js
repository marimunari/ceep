const completeTask = (update, id) => {
    const registeredTasks = JSON.parse(localStorage.getItem('tasks'));

    registeredTasks[id].completed = !registeredTasks[id].completed;

    localStorage.setItem('tasks', JSON.stringify(registeredTasks));

    update();
}

const BtnCompleted = (update, id) => { 
    const btnCompleted = document.createElement('button');
    
    btnCompleted.classList.add('check-button');
    btnCompleted.innerText = 'concluir';

    btnCompleted.addEventListener('click', () => completeTask(update, id));

    return btnCompleted;
}

export default BtnCompleted;

