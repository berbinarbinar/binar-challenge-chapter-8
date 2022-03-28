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
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import EditForm from './pages/EditForm';

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
          </Routes>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
