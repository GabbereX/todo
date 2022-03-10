export function getTodoList(owner) {
  return JSON.parse(localStorage.getItem(owner)) || []
};

export function createTodoItem({ owner, name }) {
  const parse = getTodoList(owner);
  const id = Date.now().toString();
  localStorage.setItem(owner, JSON.stringify([...parse, { name, done: false, id }]));

  return { name, done: false, id };
};

export function switchTodoItemDone({ todoItem, owner }) {
  const parse = getTodoList(owner);
  todoItem.done = !todoItem.done;

  parse.forEach(item => item.id.includes(todoItem.id) ? item.done = todoItem.done : false);
  localStorage.setItem(owner, JSON.stringify(parse));
};

export function deleteTodoItem({ todoItem, element, owner }) {
  const parse = getTodoList(owner);

  if (!confirm('Вы уверены?')) {
    return;
  };

  element.remove();

  parse.forEach((item, index) => item.id.includes(todoItem.id) ? parse.splice(index, 1) : false);
  localStorage.setItem(owner, JSON.stringify(parse));
};
