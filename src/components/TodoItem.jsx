const TodoItem = ({ item, todos, setTodos }) => {
  const handleDelete = (i) => {
    setTodos(todos.filter((el) => el !== i));
  };
  return (
    <div className="flex">
      <h2 className="font-bold text-2xl flex-1">{item}</h2>
      <button onClick={() => handleDelete(item)} className="cursor-pointer">
        🗑️
      </button>
    </div>
  );
};

export default TodoItem;
