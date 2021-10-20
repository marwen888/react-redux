import Addtodo from './component/Addtodo'
import Todolist from './component/Todolist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Addtodo/>
       <Todolist/>
      </header>
    </div>
  );
}

export default App;
