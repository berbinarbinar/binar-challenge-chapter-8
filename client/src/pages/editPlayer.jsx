import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
export function EditPlayer(){
    return(
        <>
            <h1>This is Edit Player Page</h1>
            <Link to='/playerLists'> <Button variant="contained">
                Back
            </Button></Link>
        </>
    )
}