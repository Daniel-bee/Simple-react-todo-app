import Header from './components/Header';
import Todo from './components/Todo';

const App = () => {
  return (
    <div className="grid grid-rows-[1fr_auto]">
      <Header />
      <Todo />
    </div>
  );
};

export default App;
