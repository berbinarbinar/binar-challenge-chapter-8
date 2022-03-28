import { Link } from 'react-router-dom';
import { Grid, Card, TextField, Autocomplete, Button} from '@mui/material';
import { DataTable } from '../components/table';
export function PlayerLists(){
    const searchOptions = [
        { label: 'Username'},
        { label: 'Email'},
        { label: 'Experience'},
        { label: 'Level'}
    ]
    return(
        <>
            <h2>Player Lists</h2>
            <Grid container direction="column"> 
            <Grid container direction="row" mb={1}>
                <Grid item>
                    <h3>Search:</h3>
                </Grid>
                <Grid item ml={1}>
                    <Card> 
                        <Grid item m={1}>
                            <Autocomplete
                                disablePortal
                                id="search-options"
                                options={searchOptions}
                                sx={{ width: 175 }}
                                renderInput={(params) => <TextField {...params}  label="Search Options" />}
                                size="small"
                            />
                        </Grid>
                    </Card>
                </Grid>
                <Grid item ml={1}>
                    <Card> 
                        <Grid item m={1}>
                            <TextField 
                            id="search" 
                            label="Search" 
                            sx={{ width: 470 }}
                            variant="outlined" 
                            size="small"
                            />
                        </Grid>
                    </Card>
                </Grid>
                <Grid item ml={1} mt={1}>
                <Button variant="contained">
                    Find
                </Button>
                </Grid>
               
            </Grid>
            <Grid item>
                <Card>
                    <DataTable />
                </Card>
            </Grid>
            <Grid container direction="row" mt={2} justifyContent="flex-end">
                <Grid item>
                    <Link to='/createPlayer' style={{ textDecoration: 'none' }}> <Button variant="contained" color="success">
                        Create
                    </Button></Link>
                </Grid>
                <Grid item ml={1}>
                    <Link to='/editPlayer' style={{ textDecoration: 'none' }}> <Button variant="contained" color="warning">
                        Edit
                    </Button></Link>
                </Grid>
                <Grid item ml={1}>
                    <Button variant="contained" color="error">
                        Delete
                    </Button>
                </Grid>
            </Grid>
            </Grid>
        </>
    )
}