import { useState } from 'react';
import TodoItem from './TodoItem';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';

const Todo = () => {
  const [todo, setTodo] = useState({ name: '', done: false });
  const [todos, setTodos] = useState([]);
  const totalTodo = todos.length;
  const completedTodo = todos.filter((todo) => todo.done).length;
  return (
    <div className="">
      <Form todo={todo} setTodos={setTodos} todos={todos} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer totalTodo={totalTodo} completedTodo={completedTodo} />
    </div>
  );
};

export default Todo;
