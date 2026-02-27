const Form = ({ setTodos, setTodo, todos, todo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: '', done: false });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 text-center shadow-2xl w-1/2 mx-auto my-6 "
    >
      <div className="flex">
        <input
          className="border flex-1 p-3 border-amber-600 border-r-0 rounded-md rounded-r-none outline-none"
          onChange={(e) => setTodo({ name: e.target.value })}
          type="text"
          value={todo.name}
        />
        <button
          type="submit"
          className="border px-4 bg-amber-400 text-yellow-900 rounded-r-md"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
