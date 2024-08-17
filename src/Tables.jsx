import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,
} from '@mui/material';
import './App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Tables({userdata}) {
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
              <DeleteIcon sx={{paddingRight:3,color:'red'}}/>
                <EditIcon sx={{color:'blue'}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
