
import './App.css';
import { ToDoList } from './components/ToDoList';

const App = ({exportData}) => {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
