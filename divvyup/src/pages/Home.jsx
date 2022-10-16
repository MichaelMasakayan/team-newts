import React, {useState}  from 'react';
import DataTable from "./component/DataTable";
import './Home.css'
import data from '../data/mock-data.json'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Home() {
  return(
  <div className="App">
    <DataTable/>
  </div>
  // );
    // const [checked, setChecked] = React.useState([0]);
    // const handleToggle = (value) => () => {
    //   const currentIndex = checked.indexOf(value);
    //   const newChecked = [...checked];
  
    //   if (currentIndex === -1) {
    //     newChecked.push(value);
    //   } else {
    //     newChecked.splice(currentIndex, 1);
    //   }
  
    //   setChecked(newChecked);
    // };

    // const [contacts, setContacts] = useState(data);

    // return (
    //   <List sx={
    //     { width: '100%', bgcolor: 'background.paper' }
    //     }>
    //     {contacts.map((contact) => {
    //       const labelId = `checkbox-list-label-${contact}`;
    //       return (
    //         <ListItem
    //           key={contact}
    //           secondaryAction={
    //             <IconButton edge="end" aria-label="comments">
    //             </IconButton>
    //           }
    //           disablePadding
    //         >
    //           <ListItemButton role={undefined} onClick={handleToggle(contact)} dense>
    //             <ListItemIcon>
    //               <Checkbox
    //                 edge="start"
    //                 checked={checked.indexOf(contact) !== -1}
    //                 tabIndex={-1}
    //                 disableRipple
    //                 inputProps={{ 'aria-labelledby': labelId }}
    //               />
    //               <Checkbox {...label} defaultChecked color="secondary" />

    //             </ListItemIcon>
    //             {/* {contacts.map((contact)=> (
    //             <ListItemText id={labelId} primary={<tr>
    //               <td>{contact.name}</td>
    //               <td>{contact.price}</td>
    //               <td>{contact.quantity}</td>
    //             </tr>} />
    //             ))} */}
    //           </ListItemButton>
    //         </ListItem>
    //       );
    //     })}
    //   </List>
    );
}


export default Home;