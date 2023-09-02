import React from 'react'

import {FormGroup,FormControl,InputLabel, Input,styled,Button,Typography} from '@mui/material/';
import { useState,useEffect } from 'react';
import {editUser, getUser} from '../Services/api.js';
import {useNavigate,useParams} from 'react-router-dom';

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

function EditUser() {

     const[user,setuser]=useState(defaultvalue);

     const navigate =useNavigate();
     const {id}= useParams();

     useEffect(()=>{
        loadUserDetail();
     },[])

     const loadUserDetail=async()=>{
     const response= await getUser(id);
      setuser(response.data)
    
     }
     const onchangevalue=(e)=>{
        setuser({...user,[e.target.name]:e.target.value});
        }

         const EditUserdetails=async()=>{
         await editUser(user,id);
         navigate('/all');
        }
  return (
    <>
       <Container>
       <Typography variant="h3" gutterBottom>EDITUSER</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onchangevalue(e)} name="name"  value={user.name} />
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e)=>onchangevalue(e)} name="username" value={user.username} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onchangevalue(e)} name="email"  value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onchangevalue(e)} name="phone"value={user.phone } />
        </FormControl>
        <FormControl>
        <Button variant="contained" onClick={()=>EditUserdetails()}>EditUser</Button> 
        </FormControl>
       </Container>
    </>
  )
}

export default EditUser;