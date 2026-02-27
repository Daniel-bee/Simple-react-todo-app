import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="shadow-2xl w-1/2 mx-auto mt-6 p-10 space-y-4 divide-y-1 mb-20 divide-gray-200">
      {todos.map((item) => (
        <div key={item.name} className="py-2">
          <TodoItem item={item} todos={todos} setTodos={setTodos} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
