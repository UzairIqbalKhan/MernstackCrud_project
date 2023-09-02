
import { useEffect,useState} from 'react';
import { Table, TableHead, TableRow, TableCell, styled, TableBody,Button} from '@mui/material/';
import { getUsers,deleteUser} from '../Services/api';
import {Link} from 'react-router-dom';

const Container = styled(Table)`
width:90%;
margin:19px auto 0 auto;
`


function AllUser() {

const[user,setuser]=useState([])



  useEffect(() => {
    getAllUsers();
  },[])

  const getAllUsers = async () => {
  let response = await getUsers();
  setuser(response.data);
  }
  
  const deleteUserdetail=async(id)=>{
    await deleteUser(id);
    getAllUsers();

  }

  return (
    <>
      <Container >
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
        {

          user.map(user=>(

            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/Edit/${user._id}`}>Edit</Button>
                <Button variant="contained" color='secondary' onClick={()=> deleteUserdetail(user._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Container>
    </>
  )
}

export default AllUser;