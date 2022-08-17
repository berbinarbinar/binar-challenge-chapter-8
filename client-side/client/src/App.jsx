// important imports
import React from 'react'
import { BrowserRouter as Router, Route, Routes }
  from 'react-router-dom';
import './App.css';
import Create from './components/Create-data';
// import file dari create edit dan gome untuk di tampilkan di page saat di render
import Edit from './components/Update-data';
import Home from './components/Home-page';

function App() {
  return (
    <div className='App'>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
