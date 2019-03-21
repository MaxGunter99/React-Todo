import React from 'react';


//TOGGLE STRIKE THROUGH TO DO ITEMS
const Todo = props => {

    return (

        <div
            //VISUAL
            style={props.todo.completed ? { textDecoration: 'line-through', marginLeft: '30px', backgroundColor: 'white', color: 'black', transition: '1s'} : { textDecoration: 'none', marginLeft: '0px', transition: '1s'} }
            //TOGGLE
            onClick={() => props.handleToggleComplete(props.todo.id) }
        >

            {props.todo.task}

        </div>
    );
};

export default Todo;