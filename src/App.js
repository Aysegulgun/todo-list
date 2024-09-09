import React,{ useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== ''){
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));

  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do Listesi</h1>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Görev ekle..."
        />
        <button onClick={addTodo}>Ekle</button>
        <TodoList todos={todos} onDelete={deleteTodo} />
        </header>
    </div>
  );
}

   export default App;
