import { Button, Grid, Input } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useState } from 'react';

export default function Navbar() {
  const [userInput, setUserInput] = useState('');
  const handleSubmit = (event) => {
    console.log(userInput);
    event.preventDefault();
  };
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  }; 

  const location = useLocation();
  return (
    <>
      <Grid display={'flex'}>
        <ColorModeSwitcher justifyContent="flex-end" mr={'auto'} />
        <Grid display={'flex'} flexDirection={'row'}>
          <>
          <Input value={userInput} onChange={handleChange} placeholder='Search Here' size='lg'/>
          <Button onSubmit={handleSubmit} style={{ marginLeft: '10px' }}>Submit</Button>
          </>
          <Link style={{ marginLeft: '200px' }} to="/">
            Home
          </Link>
          {location.pathname !== '/edit' && (
            <Link style={{ marginLeft: '30px' }} to="/edit">
              Edit
            </Link>
          )}
          {location.pathname !== '/register' && (
            <Link style={{ marginLeft: '30px' }} to="/register">
              Register
            </Link>
          )}
        </Grid>
      </Grid>
    </>
  );
}