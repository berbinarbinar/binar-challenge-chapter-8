import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Edit from './pages/Edit';



function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>

    </div>
  );
}

export default App;
