import './App.css';
import { Sidebar } from './components/sidebar';
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard';
import { PlayerLists } from './pages/playerLists';
import { CreatePlayer } from './pages/createPlayer';
import { EditPlayer } from './pages/editPlayer';
function App() {
  return (
    <div className="App">
      <Grid container alignItems="left" direction="row" spacing={35}>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/playerLists" element={<PlayerLists />} />
            <Route path="/createPlayer" element={<CreatePlayer />} />
            <Route path="/editPlayer" element={<EditPlayer />} />
          </Routes>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
