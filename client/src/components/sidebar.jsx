import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
export function Sidebar() {
  return (
    <Grid container direction="column" mt={30} ml={10}> 
      <Grid item>
        <h1>Menu</h1>
      </Grid>
      <Grid item>
        <Link to='/'>Dashboard</Link>
      </Grid>
      <Grid item>
        <Link to='/playerLists'>Player Lists</Link>
      </Grid>
    </Grid>
  );
}