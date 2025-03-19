// Напишите функцию, которая будет вызываться при клике на кнопку "Добавить". 
// Функция должна получать значение из поля ввода и добавлять новую задачу в список.

// Напишите функцию, которая будет вызываться при клике на задачу в списке. 
// Функция должна отмечать задачу как выполненную путём изменения её класса.
document.getElementById('addTaskBtn').addEventListener('click', addTask);
function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value

    if(taskText === ''){
        alert('Введите задачу');
        return;
        }
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        // Добавляем обработчик клика для отметки выполнения
    taskItem.addEventListener('click', toggleTask);

    // Добавляем задачу в список
    document.getElementById('taskList').appendChild(taskItem);

    // Очищаем поле ввода
    taskInput.value = '';
}
function toggleTask(event) {
    event.target.classList.toggle('completed');
}

// function addTask(){
//     const input = document.querySelector('.task-input');
//     const task = input.value;
    // const list = document.querySelector('.task-list');
    // const newTask = document.createElement('li');
    // newTask.textContent = task;
    // list.appendChild(newTask);
    // input.value = '';
    
    


