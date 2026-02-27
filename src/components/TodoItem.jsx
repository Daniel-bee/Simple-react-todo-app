const TodoItem = ({ item, todos, setTodos }) => {
  const handleDelete = (i) => {
    setTodos(todos.filter((el) => el.name !== i));
  };
  const handleClick = (item) => {
    setTodos(
      todos.map((todo) =>
        item === todo.name ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };
  return (
    <div className="flex">
      <h2
        className={`${item.done ? 'line-through decoration-green-500' : ''} font-bold text-2xl flex-1`}
        onClick={() => handleClick(item.name)}
      >
        {item.name}
      </h2>
      <button
        onClick={() => handleDelete(item.name)}
        className="cursor-pointer"
      >
        🗑️
      </button>
    </div>
  );
};

export default TodoItem;
