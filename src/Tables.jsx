import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,
} from '@mui/material';
import './App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Tables({userdata}) {

  const navigate = useNavigate()

  const handleDelete = (id) =>{
    console.log(id)
    axios.delete('http://localhost:3000/users/' + id).then((res)=>{
      Swal.fire({
        title: 'Success!',
        text: 'Data Deletd Sucessfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }).catch((err)=>{
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    })
  }
  return (
    <>
    <Typography variant="h3" my={2} ml={2}>Users List</Typography>
    <TableContainer component={Paper} className="table-container">
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell className="table-header-cell">Name</TableCell>
            <TableCell className="table-header-cell">Email</TableCell>
            <TableCell className="table-header-cell">Username</TableCell>
            <TableCell className="table-header-cell">Phone</TableCell>
            <TableCell className="table-header-cell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userdata.map((e, index) => (
            <TableRow key={index} className="table-row">
              <TableCell className="table-body-cell">{e.name}</TableCell>
              <TableCell className="table-body-cell">{e.email}</TableCell>
              <TableCell className="table-body-cell">{e.username}</TableCell>
              <TableCell className="table-body-cell">{e.phone}</TableCell>
              <TableCell className="table-body-cell">
              <DeleteIcon onClick={()=>{handleDelete(e.id)}} sx={{paddingRight:3,color:'red'}}/>
                <EditIcon onClick={()=>navigate(`/edit/${e.id}`)} sx={{color:'blue'}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
