import React, { useState , useEffect } from 'react';
import { TextField, Button, Paper, Typography, Grid } from '@mui/material';
import axios from 'axios';
import PopUp from './Alert'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function Edit() {

  const {id} = useParams()
  const [userData , setUserData] = useState([])

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupTitle, setPopupTitle] = useState('');

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(()=> {
    axios.get(`http://localhost:3000/users/${id}`).then((res)=>{
      setUserData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/users/${id}` , userData).then((response)=>{
    console.log(response)
      Swal.fire({
        title: 'Success!',
        text: 'Data Edited Sucessfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
        navigate('/')
      
      }).catch((err)=>{
        console.log("err" , err)
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      })
  }
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }} className="form-grid">
      <Grid item xs={12} sm={8} md={6}>

        
        <PopUp   isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title={popupTitle}
        message={popupMessage}/>
  
        <Paper elevation={20} className="form-container">
          <Typography variant="h4" component="h1" className="form-header">
            Edit User
          </Typography>
          <form className="form-content" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              className="form-input"
              name="name"
              value={userData.name}
              onChange={(e)=>{setUserData({...userData, name:e.target.value})}}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              className="form-input"
              name="email"
              value={userData.email}
              onChange={(e)=>{setUserData({...userData, email:e.target.value})}}
            />
            <TextField
              fullWidth
              type="username"
              variant="outlined"
              margin="normal"
              className="form-input"
              name="username"
              value={userData.username}
              onChange={(e)=>{setUserData({...userData, username:e.target.value})}}
            />
            <TextField
              fullWidth
              type="number"
              variant="outlined"
              margin="normal"
              className="form-input"
              name="phone"
              value={userData.phone}
              onChange={(e)=>{setUserData({...userData, phone:e.target.value})}}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="form-button createbtn"
            >
              Edit
            </Button>
          </form>
          
        </Paper>
      </Grid>
    </Grid>
  );
}
