import {  Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { connect, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';


function NavBar(props) {
  
  const dispatch = useDispatch();

  const success = props.data?.success
  ? props.data?.success
  : false;

  let navigate = useNavigate()


const goToHome = (event) => {
  navigate('/')
}


  return (
    <Box sx={{ position: "fixed", top: 0, width:"100%", zIndex:"10000"}}>
      <Toolbar position="fixed" style={{ backgroundColor: "black"  }}>
      <Typography variant="h6" color='#701ea5' fontFamily="Gill Sans" paddingTop="10px" gutterBottom onClick={goToHome} sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}>
        NEWS <Typography variant="h9" color= "#0074d7" fontSize="10px">Powered By Metaphor+ChatGPT</Typography>
      </Typography>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </Box>
  );
}
function mapStateToProps(state){
  return {
      "success": state.counter.success,
  }
}


export default connect(mapStateToProps)(NavBar)
