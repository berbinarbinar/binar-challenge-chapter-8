import { Button, Grid, Input } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import React from 'react';

export default function Navbar() {
  const [value, setValue, searchBar] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)
  const location = useLocation();
  return (
    <>
      <Grid display={'flex'}>
        <ColorModeSwitcher justifyContent="flex-end" mr={'auto'} />
        <Grid display={'flex'} flexDirection={'row'}>
          <>
          <Input value={value} onChange={handleChange} placeholder='Search Here' size='lg'/>
          <Button style={{ marginLeft: '10px' }}>Submit</Button>
          </>
          <Link style={{ marginLeft: '200px' }} to="/">
            Home
          </Link>
          {location.pathname !== '/login' && (
            <Link style={{ marginLeft: '30px' }} to="/edit">
              Edit
            </Link>
          )}
          {location.pathname !== '/register' && (
            <Link style={{ marginLeft: '30px' }} to="/register">
              register
            </Link>
          )}
        </Grid>
      </Grid>
    </>
  );
}