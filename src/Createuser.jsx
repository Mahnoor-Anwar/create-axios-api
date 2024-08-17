import React, { useState , useEffect } from 'react';
import { TextField, Button, Paper, Typography, Grid } from '@mui/material';
import axios from 'axios';
import PopUp from './Alert'



export default function Createuser() {

  const [userData , setUserData] = useState({
    name:'',
    email:'',
    username:'',
    phone:''
  })

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupTitle, setPopupTitle] = useState('');

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/users' , userData).then((response)=>{
    
        setPopupTitle('Success!');
        setPopupMessage('Your data has been successfully submitted.');
        setIsPopupOpen(true);
        navigate('/')
      
      }).catch((err)=>{
        setPopupTitle('Error');
        setPopupMessage('There was an issue with your submission.');
        setIsPopupOpen(true);
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
            Create User
          </Typography>
          <form className="form-content" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              className="form-input"
              name="name"
              onChange={(e)=>{setUserData({...userData, name:e.target.value})}}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              className="form-input"
              name="email"
              onChange={(e)=>{setUserData({...userData, email:e.target.value})}}
            />
            <TextField
              fullWidth
              label="username"
              type="username"
              variant="outlined"
              margin="normal"
              className="form-input"
              name="username"
              onChange={(e)=>{setUserData({...userData, username:e.target.value})}}
            />
            <TextField
              fullWidth
              label="phone"
              type="number"
              variant="outlined"
              margin="normal"
              className="form-input"
              name="phone"
              onChange={(e)=>{setUserData({...userData, phone:e.target.value})}}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="form-button createbtn"
            >
              Create
            </Button>
          </form>
          
        </Paper>
      </Grid>
    </Grid>
  );
}
