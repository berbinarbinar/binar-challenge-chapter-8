import * as React from 'react';
import { Typography, TextField, Autocomplete } from "@mui/material";


export default function ComboBox() {

    return (
        <>
            <Typography variant="h5">Search</Typography>
            <Autocomplete 
                disablePortal
                id='username-comboBox'
                options={username}
                sx={{ width: 300, paddingLeft: '38.5%', marginTop: 5}}
                renderInput={(params) => <TextField {...params} label='username' />}
            />

            <Autocomplete 
                disablePortal
                id='email-comboBox'
                options={email}
                sx={{ width: 300, paddingLeft: '38.5%', marginTop: 5}}
                renderInput={(params) => <TextField {...params} label='email' />}
            />

            <Autocomplete 
                disablePortal
                id='exp-comboBox'
                options={exp}
                sx={{ width: 300, paddingLeft: '38.5%', marginTop: 5}}
                renderInput={(params) => <TextField {...params} label='experience' />}
            />

            <Autocomplete 
                disablePortal
                id='lvl-comboBox'
                options={lvl}
                sx={{ width: 300, paddingLeft: '38.5%', marginTop: 5}}
                renderInput={(params) => <TextField {...params} label='lvl' />}
            />
        </>
    )
}


const username = [
    { label: 'jokes_on_U' }, 
    { label: 'WILL_slap_Chris' }, 
    { label: 'pink-smith' } 
]
const email = [
    { label: 'chrisRock@mail.com' }, 
    { label: 'youngPrince@mail.com' }, 
    { label: 'emo@woman.com' } 
]
const exp = [
    { label: 50 }, 
    { label: 70 }, 
    { label: 12 } 
]
const lvl = [
    { label: 25 }, 
    { label: 28 }, 
    { label: 12 } 
]