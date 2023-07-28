import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App bg-green-400 h-screen">
      <p className="w-2/4 mx-auto text-black">This is a simple React Todo application, but I also used this as an opportunity to play with Redux and TailwindCSS and so far, I'm liking them both.</p>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
