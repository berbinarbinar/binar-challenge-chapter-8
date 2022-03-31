import './App.css';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/RegisterPlayer';
import Search from './pages/SearchPlayer';
import EditPlayer from './pages/EditPlayer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid mt="100" minH="100vh" p={3}>
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/edit-player' element={<EditPlayer />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
