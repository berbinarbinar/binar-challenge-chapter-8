import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import EditForm from './pages/EditForm';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit" element={<EditForm />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/404' element={<NotFound/>} />
            <Route path='/*' element={<Navigate to='/404'/>}/>
          </Routes>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
