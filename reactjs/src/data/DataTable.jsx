import { DataGrid } from '@mui/x-data-grid';

const rowsProp = [
    { id: 1, name: 'jokes_on_U', email:'chrisRock@mail.com', exp:50, lvl: 25 }, 
    { id: 2, name: 'WILL_slap_Chris', email:'youngPrince@mail.com', exp:70, lvl: 28 }, 
    { id: 3, name: 'pink-smith', email:'emo@woman.co', exp:30, lvl: 12 } 
]

const columnsProp = [
    {field: 'name', headerName: 'Username', width: 150},
    {field: 'email', headerName: 'Email', width: 150},
    {field: 'exp', headerName: 'Experience', width: 150},
    {field: 'lvl', headerName: 'Level', width: 150}
]

export default function DataTable() {
    return (
        <div id='dataTable' style={{ height: 300, width: 603.5, paddingLeft: '27.5%', marginTop: 50, textAlign: 'center'}}>
            <DataGrid rows={rowsProp} columns={columnsProp} 
                sx={{
                    border: 2,
                }}
            />
        </div>
    )
}