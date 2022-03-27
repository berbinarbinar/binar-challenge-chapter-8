import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Produk from './Pages/Produk';
import Tentang from './Pages/Tentang';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produk' element={<Produk />} />
        <Route path='/tentang' element={<Tentang />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}