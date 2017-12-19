var todos = ['Buy new turtle'];

var input = prompt('What would you like to do?');

while(input !== 'quit'){

  if(input === 'list') {
    console.log(todos);
  } else if(input === 'new') {
    //ask for new todos
    var newTodo = prompt('Enter new todo');
    //add to todos array
    todos.push(newTodo);
  }
  input = prompt('What would you like to do?');
}
console.log('YOU QUIT THE APP');
