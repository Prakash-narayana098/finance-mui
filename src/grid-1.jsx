import { Typography } from "@mui/material";
import "./App.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';









function App(){
    return(
            
            
            <Box sx={{flexGrow:1,position: 'absolute',left: 0,  top: 24, height:'100%',width:'100%', padding:5, bgcolor:'' }}>
                <Typography align="left" sx={{fontWeight:'bold',fontSize:'24px', padding:2}}>Overview</Typography>
                <Grid container spacing={3}>
                    <Grid size={{
                        xs:12,
                        md:4,
                    }}>
                        <Paper sx={{padding: 4,'&:hover': {backgroundColor: 'black',color:"white",cursor: 'pointer',},borderRadius:2}}>
                            <Typography align="left">Current Balance</Typography>
                            <Typography align="left" sx={{fontWeight:'bold',fontSize:20}}>$4,836.00</Typography>
                        </Paper>

                    </Grid>
                    <Grid size={{
                        xs:12,
                        md:4,
                    }}>
                        <Paper sx={{padding: 4,'&:hover': {backgroundColor: 'black',color:"white",cursor: 'pointer',},borderRadius:2}}>
                            <Typography align="left">Income</Typography>
                            <Typography align="left" sx={{fontWeight:'bold',fontSize:20}}>$3,814.25</Typography>
                        </Paper>

                    </Grid>
                    <Grid size={{
                        xs:12,
                        md:4,
                    }}>
                        <Paper sx={{padding: 4,'&:hover': {backgroundColor: 'black',color:"white",cursor: 'pointer',},borderRadius:2}}>
                            <Typography align="left">Expenses</Typography>
                            <Typography align="left" sx={{fontWeight:'bold',fontSize:20}}>$1,700.50</Typography>
                        </Paper>

                    </Grid>
                </Grid>
                <Box sx={{paddingTop:4}}>
                    <Grid container spacing={3}>
                        <Grid size={{
                            xs:12,
                            md:7}}
                            sx={{
                               gridArea:'Pots',
                               bgcolor:'white',
                               borderRadius:'10px',
                               boxShadow:2,
                               paddingTop:1, 
                               paddingBottom:1,      
                             }}>
                            
                               <Box sx={{display:'flex', justifyContent:'space-around', gap:2,}}>
                                  <Typography align="left" sx={{fontWeight:'bold',fontSize:'16px'}}>Pots</Typography> 
                                  <Typography align='right'sx={{fontWeight:'light',fontSize:'12px'}} >See Details
                                  <ChevronRightIcon></ChevronRightIcon></Typography>
                               </Box>


                               <Box sx={{display:'flex',gap:4, padding:6, margin:4}}>
                               <Box>
                                    <Paper sx={{bgcolor:'grey', padding:4, margin:4, backgroundColor:'#FFF7ED',display:'flex', justifyContent:'space-around',gap:2,}}>
                                        <Box sx={{height:'60px',width:'60px'}}>
                                            <img src="images/date_business_money_payment_salary_calendar_day_icon_254031-removebg-preview (1).png"/>
                                        </Box>
                                        <Box>
                                          <Typography>Total Saved</Typography>
                                          <Typography sx={{fontSize:'24px', fontWeight:'bold'}} >$850</Typography>
                                        </Box>
                                    </Paper>
                                </Box>

                                
                                    

                               <Box>
                               <Box sx={{display:'flex', justifyContent:'space-around', gap:4, padding:4}}>
                                        <Box>
                                           <Typography>Savings</Typography>
                                           <Typography>$159</Typography>
                                        </Box>
                                        <Box>
                                           <Typography>Gift</Typography>
                                           <Typography>$40</Typography>
                                        </Box>   
                                </Box>
                                <Box sx={{display:'flex', justifyContent:'space-around', gap:4, padding:4}}>
                                        <Box>
                                           <Typography>Concert Tickets</Typography>
                                           <Typography>$110</Typography>
                                        </Box>
                                        <Box>
                                           <Typography>New Laptop</Typography>
                                           <Typography>$10</Typography>
                                        </Box>   
                                    </Box>
                                </Box>
                            </Box>    
                          
                       </Grid>
                       <Grid size={{
                            xs:12,
                            md:5}}
                            sx={{
                               gridArea:'Budget',
                               bgcolor:'white',
                               padding:2,
                               borderRadius:'10px',
                               boxShadow:2,
                             }}>
                                <Box sx={{display:'flex', justifyContent:'space-around',}}>
                                  <Typography align="left">Budget</Typography> 
                                  <Typography align='right' >See Details
                                  <ChevronRightIcon></ChevronRightIcon></Typography>
                               </Box>
                                <img src="./images/Screenshot_From_2024-10-19_16-08-35-removebg-preview.png" alt="" />
                                
                           
                       </Grid>
                       <Grid size={{
                            xs:12,
                            md:7}}
                            sx={{
                               gridArea:'transaction',
                               bgcolor:'white',
                               
                               borderRadius:'10px',
                               boxShadow:2,
                             }}>
                                <Box sx={{display:'flex', justifyContent:'space-around',}}>
                                  <Typography align="left">Transactions</Typography> 
                                  <Typography align='right' >View All
                                  <ChevronRightIcon></ChevronRightIcon></Typography>
                               </Box>
                       </Grid>
                       <Grid size={{
                            xs:12,
                            md:5}}
                            sx={{
                               gridArea:'Recurring Bills',
                               bgcolor:'white',
                               
                               borderRadius:'10px',
                               boxShadow:2,
                            }}>
                          <Box sx={{display:'flex', justifyContent:'space-around',}}>
                                  <Typography align="left">Recurring Bills</Typography> 
                                  <Typography align='right' >See Details
                                  <ChevronRightIcon></ChevronRightIcon></Typography>
                               </Box>

                       </Grid>
                    </Grid>
                </Box>
            </Box>
            
            

    );
}

export default App;