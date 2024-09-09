import React from 'react';
import TodoList from './TodoList';

function TodoItem({ todo, onDelete }) {
    return (
        <div className="todo-item">
            <span>{todo.text}</span>
            <buttonn onClick={() => onDelete(todo.id)}>Sil</buttonn>
        </div>
    );
}

    export default TodoItem;