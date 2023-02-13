import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Box, Tabs , Tab, Divider} from '@mui/material';
const Header = () => {
  const logo = require('../images/tranlo.png');
  const [value, setChange] = useState();
  return (
    <AppBar sx={{background:"#1E1E21"}}>
      <Toolbar>
        <img style={{height:"45px", width:"90px"}} src={logo}/>
        <Box display="flex" marginLeft="auto" marginRight="auto">
          <Tabs 
            variant="scrollable" 
            textColor='inherit' 
            value={value} 
            onChange={(e, val)=>setChange(val)}
            scrollButtons="auto"
          >
            <Tab href='/' label="Home"/>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Tab href='#about' label="About Us"/>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Tab href='#services' label="Our Services"/>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Tab href='#contact' label="Contact Us"/>
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
