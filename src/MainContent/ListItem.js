import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './listitem.css';
import Adeline_Watson from '../static/Adeline Watson.jpeg';
import Angel_Thoms from '../static/Angel Thoms.jpeg';
import  Linnie_Nelson from '../static/Linnie Nelson.jpeg';
import  Brent_Reeves from '../static/Brent Reeves.jpeg';


export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Adeline_Watson} />
        </ListItemAvatar>
        <ListItemText
          primary="Elva McDonald"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                elva@gmail.com     <span class='two'><b>$3.668</b></span> 
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={Linnie_Nelson} />
        </ListItemAvatar>
        <ListItemText
          primary="Iron Man"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                linnie@gmail.com     <span class='two1'><b>$3.256</b></span> 
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>





      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={Brent_Reeves} />
        </ListItemAvatar>
        <ListItemText
          primary="Bill Gates"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                augusta@gmail.com     <span class='two5'><b>$1.932</b></span> 
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem> 




      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={Angel_Thoms} />
        </ListItemAvatar>
        <ListItemText
          primary="Angel Thomas"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                angel@gmail.com    <span class='two6'><b>$1.560</b></span> 
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>









    </List>
  );
}
