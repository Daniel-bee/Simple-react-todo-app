const Form = ({ setTodos, setTodo, todos, todo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  };
  return (
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
    </form>
  );
};

export default Form;
