const deleteTask = (update, id) => {
    const index = id;
    const registeredTasks = JSON.parse(localStorage.getItem('tasks'));

    registeredTasks.splice(index, 1);

    localStorage.setItem('tasks', JSON.stringify(registeredTasks));

    update();
}

const BtnDelete = (update, id) => { 
    const btnDelete = document.createElement('button')

    btnDelete.innerText = 'deletar';
    btnDelete.addEventListener('click', () => deleteTask(update, id));

    return btnDelete;
}

export default BtnDelete;