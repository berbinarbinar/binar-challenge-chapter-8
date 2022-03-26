import './App.css';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import FormBiodata from './Pages/FormBiodata';
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
        <Route path='/biodata' element={<FormBiodata />} />
      </Routes>
    </>
  );
}

// export default App;