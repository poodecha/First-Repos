const todoTitle = document.querySelector('.todo-title');
const addTodoButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');

function removeTodo(event) {
  event.target.parentNode.remove();
}

function addTodo() {
  const todo = document.createElement('div');
  todo.classList.add('todo');

  const text = document.createElement('h3');
  text.innerHTML = todoTitle.value;

  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('remove-todo');
  button.innerHTML = 'Delete';
  button.addEventListener('click', removeTodo);

  todo.append(text, button);

  todoList.prepend(todo);
}

addTodoButton.addEventListener('click', addTodo);