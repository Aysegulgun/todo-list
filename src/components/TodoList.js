import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todo, onDelete}) {
    return (
        <div className="todo-list">
            {todos.map(todo => ( 
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            ))}
        </div>
    );
}

    export default TodoList;