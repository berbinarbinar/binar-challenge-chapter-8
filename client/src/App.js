import './App.css';
import Navbar from './Component/Navbar';
import { Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
import EditPlayer from './Pages/EditPlayer'
import AppMenu from './Component/AppMenu'
import Login from './Pages/Login';

export default function App() {
  return (
    <>
      <div className='App'>
      <Navbar />
      <Grid container alignItems="top" direction="row" spacing={25}>
        <Grid item >
          <AppMenu />
        </Grid>
        <Grid item xs={32}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editPlayer' element={<EditPlayer />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </Grid>
      </Grid>
      </div>
    </>
  );
}