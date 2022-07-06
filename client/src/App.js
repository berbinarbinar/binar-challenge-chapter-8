import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AddUser path="/add"/>
      <EditUser path="/edituser"/>
    </div>
  );
}

export default App;
