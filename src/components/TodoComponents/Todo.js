import React from 'react';


//TOGGLE STRIKE THROUGH TO DO ITEMS
const Todo = props => {

    return (

        <div
            //VISUAL
            style={props.todo.completed ? { textDecoration: 'line-through' } : null}
            //TOGGLE
            onClick={() => props.handleToggleComplete(props.todo.id)}
        >
            
            {props.todo.task}

        </div>
    );
};

export default Todo;