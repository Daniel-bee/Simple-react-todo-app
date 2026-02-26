import { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState('');
  return (
    <>
      <form>
        <input
          className="border"
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Todo;
