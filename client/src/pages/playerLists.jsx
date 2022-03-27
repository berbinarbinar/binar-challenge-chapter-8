import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { DataTable } from '../components/table';
export function PlayerLists(){
    return(
        <>
            <h1>This is Player Lists Page</h1>
            <Grid container direction="column"> 
            <Grid item>
                <Link to='/createPlayer'>Create Player</Link>
            </Grid>
            <Grid item>
                <Link to='/editPlayer'>Edit Player</Link>
            </Grid>
            <Grid item>
                <DataTable />
            </Grid>
            </Grid>
        </>
    )
}