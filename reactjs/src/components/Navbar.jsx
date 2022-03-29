import { Link, useLocation } from "react-router-dom";
import { Grid, Typography } from '@mui/material';

export default function Navbar() {
    const location = useLocation();
    console.log(location);

    return (
        <nav>
        <Grid display={'flex'} alignItems={'baseline'}>
            <Typography variant='h5' marginRight={'auto'}>Logo</Typography>
            <Grid display={'flex'} gap={'40px'}>
                <Link to={'/'}>Home</Link>
                {
                    (location.pathname !== '/register') && <Link to={'/register'}>Register</Link>
                }
                {
                    (location.pathname !== '/edit') && <Link to={'/edit'}>Edit</Link>
                }
                
            </Grid>
        </Grid>
        </nav>
    )
}