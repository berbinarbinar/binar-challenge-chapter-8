import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});


export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h5" component="div" 
                sx={{ flexGrow: 1 }}>

                LOGO
            </Typography>
            <Button color="inherit"><Link to="/" className='Link'>REGISTER</Link></Button>
            <Button color="inherit"><Link to="/search/user" className='Link'>SEARCH</Link></Button>
            <Button color="inherit"><Link to="/edit" className='Link'>EDIT</Link></Button>
            </Toolbar>
        </AppBar>
        </Box>
    </ThemeProvider>
  );
}