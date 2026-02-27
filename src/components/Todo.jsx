import { useState } from 'react';
import TodoItem from './TodoItem';
import Form from './Form';
import TodoList from './TodoList';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Form todo={todo} setTodos={setTodos} todos={todos} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todo;
