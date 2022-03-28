import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
  justifyContent: 'center'
};

export default function AppMenu() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="List Player" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Edit Player" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Delete Player" />
      </ListItem>
      <Divider light />
    </List>
  );
}