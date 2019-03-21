import React from 'react';

//VEINS
const TodoForm = props => {

    return (
        //DISPLAY TEXTBOX HERE
        <form>
         
            <input

                onChange={props.handleTodoChange}
                type='text'
                name='todo'
                value={props.value}
                placeholder='Tasks'
                
            />

            <button onClick={props.handleAddTodo}>Add Task</button>

            <button onClick={props.handleClearTodos}>Clear Completed Task</button>
            
        </form>
    );
};

export default TodoForm;