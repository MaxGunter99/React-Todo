import React from 'react';

import '/Users/voidchaser/Lambda/React-Todo/src/components/TodoComponents/Todo.css'

import TodoList from './components/TodoComponents/TodoList';

import TodoForm from './components/TodoComponents/TodoForm';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {

  constructor() {

    super();

    this.state = {
      todos: [

        //ARRAYS FOR DEFAULT INFORMATION TO BE ADDED
        // name: item.name,
        // id: item.id,
        // purchased: item.purchased true or false

      ],
    
      todo: ''
      
    };

    // loop over items
    // find grocery by given id
    // change flag to true
    // return updated list to state.

  }

  //THIS IS FOR WHEN YOU ADD AN ITEM TO THE LIST

  addTodo = event => {

    //prevent page refresh
    event.preventDefault();

    const newTodo = {task: this.state.todo, completed: false, id: Date.now() };

    this.setState({
      ///...is a spread operator
      todos: [...this.state.todos, newTodo],

      todo: ''

    });

  };

  changeTodo = event => this.setState({ todo: event.target.value });

  toggleTodoComplete = id => {

    let todos = this.state.todos.slice();

    todos = todos.map(todo => {

      if (todo.id === id) {

        todo.completed = !todo.completed;
        return todo;

      } else {

        return todo;

      }

    });

    this.setState({ todos });

  };

  //CLEARING LINE-THROUGH ITEMS

  clearCompletedTodos = event => {

    // event.preventDefault();
    console.log('cold todos:', this.state.todos);

    let todos = this.state.todos.filter(todo => !todo.completed);

    console.log('new todos:', this.state.todos);

    this.setState({ todos: todos });
    
  };

  render() {

    return (



      <div>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
        
          value={this.state.todo}
          
          handleTodoChange={this.changeTodo}

          handleAddTodo={this.addTodo}

          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
