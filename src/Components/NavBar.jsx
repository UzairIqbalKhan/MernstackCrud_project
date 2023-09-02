import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';
import {NavLink} from 'react-router-dom';

const Tabs= styled(NavLink)`
font-size:15px;
margin-right:20px;
color:inherit;
text-decoration:none;
`


function NavBar() {
  return (
    <>
        <AppBar position='static'>
        <Toolbar >
           
          <Tabs to={'/'}>Code of InterView</Tabs>
          <Tabs to={'add'}>AddUser</Tabs>
          <Tabs to={'/all'}>AllUser</Tabs>
          <Tabs to={'/edit'}>EditUser</Tabs>
          

           
        </Toolbar>
        </AppBar>
    </>
  )
}

export default NavBar;