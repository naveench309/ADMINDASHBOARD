import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidebar from '../MainSidebar/Sidebar'
import { Link } from '@mui/material';
import '../MainSidebar/sidebar.css';
import ListItem from '../MainContent/ListItem'
import Example from './Example';
import Options from './Options';
import TotalVisit from './TotalVisit';
import TotalUsers from './TotalUsers';
import TotalRevenue from './TotalRevenue';
import ProfitEarned from './ProfitEarned';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,

  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 0.5 }}>
        <Grid container spacing={2}>
                <Grid item xs={2.5} md={2.5}>
                <Item>
                    <Sidebar/>
                </Item>
                </Grid>
                <Grid item xs={2.5}>
                    <Item>
                        <ListItem />
                    </Item>
                    <div style={{display:'flex',flexWrap:'wrap', }}>
                            <div style={{width:'100%'}}>
   <span>TotalVisit</span>
<TotalVisit/>
                      </div>
                           
                        </div>
                </Grid>

                <Grid item xs={2.5}>
    <Item>
                        
    </Item>
                    <Item>
                        <h4 className='users'>Leads by Source</h4>
                        <div>
                        <Example/>
                        </div>


                    </Item>
                    <Item>
                        <h4 className='users'>Profile Earned</h4>
                        <ProfitEarned/>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    

                    
                    <Item>
                        <p className='users'>Total Users  <b>45%</b></p>
                        <div>
                        <h2 className='u1'>2469</h2>

                            <TotalRevenue/>
                        <Link>View All</Link> 
                   </div>
                    </Item>
                    <Item>
                        <p className='users'>Total Products  <b>58%</b></p>
                        <h2 className='u1'>10482</h2>
                        <TotalRevenue/>
                        <Link>View All</Link>


                    </Item>

                    <Item>
                
<div  className='del'>
    <h1>
        <u>DETAILS OF ADMIN</u>
        </h1>
NAVEEN CHAGANTI
naveenchaganti024@gmail.com
mob.No:7569736643
Gender:Male

</div>
                    </Item>


                </Grid>
                <Grid item xs={2}>
                    <Item>

                    </Item>
                    <Item>
                        <p className='users'>Total Revenue  <b>78%</b></p>
                        <div>
                        <h2 className='u1'>4422</h2>
                        <TotalRevenue/>
                        <Link>View All</Link>

                        </div>


                    </Item>
                    <Item>
                        <p className='users'>Total Ratio  <b>33%</b></p> 
                        <h2 className='u1'>3622</h2>

                        <TotalRevenue/>
                        <Link>View All</Link>
                        
                    </Item>
                <Options/>

                   
                </Grid>
               
        </Grid> 
    </Box>
  );
}