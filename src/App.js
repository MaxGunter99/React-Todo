import React from 'react';

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

        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },

        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }

      ],
    
      todo: ''
      
    };

  }

  //THIS IS FOR WHEN YOU ADD AN ITEM TO THE LIST

  addTodo = callBack => {

    callBack.preventDefault();

    const newTodo = {task: this.state.todo, completed: false, id: Date.now() };

    this.setState({

      todos: [...this.state.todos, newTodo],

      todo: ''

    });

  };

  changeTodo = callBack => this.setState({ [callBack.target.name]: callBack.target.value });

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

  clearCompletedTodos = callBack => {

    callBack.preventDefault();

    let todos = this.state.todos.filter(todo => !todo.completed);

    this.setState({ todos });
    
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
