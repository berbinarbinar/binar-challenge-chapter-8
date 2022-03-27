import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
export function CreatePlayer(){
    return(
        <>
            <h1>This is Create Player Page</h1>
            <Link to='/playerLists'> <Button variant="contained">
                Back
            </Button></Link>
        </>
    )
}