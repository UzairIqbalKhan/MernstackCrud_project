import React from 'react'

import {FormGroup,FormControl,InputLabel, Input,styled,Button,Typography} from '@mui/material/';
import { useState } from 'react';
import { addUser } from '../Services/api.js';
import {useNavigate} from 'react-router-dom';

const Container= styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
 & > div{
     margin-top:15px;
    color:#a86b4c;
}
`

 const defaultvalue={
    name:'',
    username:'',
    email:'',
    phone:''
} 

function AddUsers() {

     const[user,setuser]=useState(defaultvalue);

     const navigate =useNavigate();
    


     const onchangevalue=(e)=>{

        console.log(e.target.name,e.target.value);
        setuser({...user,[e.target.name]:e.target.value})
        console.log(user);

        }

        const AddUserdetails=async()=>{
         await addUser(user);
         navigate('/all');
       
         
        }

  return (
    <>
       <Container>
       <Typography variant="h3" gutterBottom>ADDUSER</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onchangevalue(e)} name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e)=>onchangevalue(e)} name="username"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onchangevalue(e)} name="email"/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onchangevalue(e)} name="phone"/>
        </FormControl>
        <FormControl>
        <Button variant="contained" onClick={()=>AddUserdetails()}>AddUser</Button> 
        </FormControl>
       </Container>
    </>
  )
}

export default AddUsers;