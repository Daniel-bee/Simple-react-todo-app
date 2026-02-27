const Footer = ({ totalTodo, completedTodo }) => {
  return (
    <div className="bg-yellow-300 ">
      <div className="p-20 flex items-center justify-center space-x-2.5 text-3xl font-bold ">
        <span>Total Todos: {totalTodo}</span>
        <span>Completed Todos: {completedTodo}</span>
      </div>
    </div>
  );
};

export default Footer;
