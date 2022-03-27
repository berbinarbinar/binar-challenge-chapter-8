import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <AppBar position='static' color='info'>
        <Toolbar>
          <Button 
            color='inherit' 
            sx={{mr:'auto'}}
            LinkComponent={Link}
            to='/' 
          >
            Dashboard
          </Button>
          <Button 
            color='inherit'
            sx={{mr:'20px'}}  
            LinkComponent={Link}
            to='/register' 
          >
            Register
          </Button>
          <Button 
            color='inherit' 
            LinkComponent={Link}
            to='/login' 
          >
            Login
          </Button>
        </Toolbar>
    </AppBar>
  )
}