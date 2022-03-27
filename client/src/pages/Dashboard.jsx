import { 
  Alert, 
  Collapse, 
  Container, 
  FormControl, 
  InputBase, 
  InputLabel, 
  MenuItem, 
  Paper, 
  Select, 
  Typography 
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export default function Dashboard() {
  const location = useLocation();
  const [searchBy, setSearchBy] = useState('username');
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  function handleSearchBy(e) {
    setSearchBy(e.target.value)
  }
  function handleSearch(e) {
    setSearch(e.target.value)
  }
  useEffect(() => {
    if (location.state?.action) setOpen(true)
  },[location.state?.action])

  return (
    <Container>
      <Typography variant="h4">ini dari dashboard player</Typography>
      <Collapse in={open}>
        <Alert severity="success" onClose={() => setOpen(false) }>Succes {location.state?.action} player</Alert>
      </Collapse>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, my: 2 }}
      >
        <InputBase
          sx={{ mx: 1, flex: 1 }}
          fullWidth
          placeholder="Search Player"
          value={search}
          onChange={handleSearch}
        />
        <FormControl variant='standard'>
          <InputLabel id="select-by-label">By</InputLabel>
          <Select 
            labelId="select-by-label"
            label='By'
            value={searchBy}
            onChange={handleSearchBy}
          >
            <MenuItem value='username'>Username</MenuItem>
            <MenuItem value='email'>Email</MenuItem>
            <MenuItem value='lvl'>Level</MenuItem>
            <MenuItem value='exp'>Exp</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      {
        search !== ''
          ? <Typography variant="p">anda mencari player dengan {searchBy} {search}</Typography>
          : null
      }
    </Container>
  )
}