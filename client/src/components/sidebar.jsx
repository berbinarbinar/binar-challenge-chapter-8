import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
export function Sidebar() {
  return (
    <Grid container direction="column" mt={25} ml={10}> 
      <Grid item>
        <h1>Menu</h1>
      </Grid>
      <Grid item mt={-5}>
        <Link to='/' style={{ textDecoration: 'none' }}><h2>Player Lists</h2></Link>
      </Grid>
    </Grid>
  );
}