import { useState } from 'react';
import TodoItem from './components/TodoItem';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="border"
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button type="submit" className="border">
          Add
        </button>
        {todos.map((item) => (
          <TodoItem key={item} item={item} />
        ))}
      </form>
    </>
  );
};

export default Todo;
