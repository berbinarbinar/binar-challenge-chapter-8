import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  {
    field: 'exp',
    headerName: 'Experience',
    type: 'number',
    width: 90,
  },
  {
    field: 'lvl',
    headerName: 'Level',
    type: 'number',
    width: 90,
  },
  
];

const rows = [
  { id: 1, username: 'Snow777', email: 'Jon@jepra.site', exp: 35, lvl:27 },
  { id: 2, username: 'Lannister777', email: 'Cersei@jepra.site', exp: 42, lvl:30 },
  { id: 3, username: 'jejemiah777', email: 'Jaime@jepra.site', exp: 45, lvl:29 },
  { id: 4, username: 'Stark777', email: 'Arya@jepra.site', exp: 16, lvl:27 },
  { id: 5, username: 'Targaryen777', email: 'Daenerys@jepra.site', exp: 12, lvl:10 },
  { id: 6, username: 'Melisandre777', email: 'meli@jepra.site', exp: 150, lvl:50 },
  { id: 7, username: 'Clifford777', email: 'Ferrara@jepra.site', exp: 44, lvl:35 },
  { id: 8, username: 'Frances777', email: 'Rossini@jepra.site', exp: 36, lvl:27 },
  { id: 9, username: 'Roxie777', email: 'Harvey@jepra.site', exp: 65, lvl:39 },
  { id: 10, username: 'vina777', email: 'vina@jepra.site', exp: 77, lvl:42 },
];

export function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}