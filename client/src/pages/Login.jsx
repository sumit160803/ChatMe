import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhotoCamera from '@mui/icons-material/PhotoCamera'; //  Import for PhotoCamera icon
import { VisuallyHiddenInput } from '../components/styles/styledComponents';  //component for the image icon present on signup page.
import {useFileHandler, useInputValidation, useStrongPassword} from '6pp';  //it is used when we need to keep the value from login page to signup page. suppose entered username and clicked on "dont have account,signup", then on signup page, the username will be already filled. And vice-versa.
import { usernameValidator } from '../utils/validators';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  // Toggle function to switch between login and signup
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const name = useInputValidation("");   //these can be used for custom validators. From utils/validators.js
  const bio = useInputValidation("");
  const username = useInputValidation("",usernameValidator);
  const password = useStrongPassword();
  const avatar = useFileHandler("single");

  const handleSignup = (e)=>{
    e.preventDefault();
  }
  const handleLogin = (e)=>{
    e.preventDefault();
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        
        {isLogin ? ( // Conditionally render based on isLogin state
          <>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1, width: '100%' }} onSubmit={handleLogin}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button variant="text" color="primary" onClick={toggleLogin}>
                    Don't have an account? Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </>
        ) :  // else part
        (
          <>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <Stack position="relative" width={"10rem"} margin={"auto"}>
              <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain" }} 
              src={avatar.preview}
              />
              
              <IconButton sx={{
                position:"absolute",
                bottom:"0",
                right:"0",
                color:"gray",
                bgcolor:"rgba(0 0 0 0.5)",
                ":hover":{
                  bgcolor:"rgba(0 0 0 0.7)",
                },
              }} component="label"> {/* Add label component to the IconButton */}
                <PhotoCamera /> {/* Correctly use the PhotoCamera icon */}
                {/* Hidden file input */}
                <VisuallyHiddenInput 
                  type="file" 
                  onChange={avatar.changeHandler}
                />
              </IconButton>
            </Stack>

            {avatar.error &&(
                    <Typography 
                      m={"1rem auto"}
                      color='error'
                      width={"fit-content"}
                      display={"block"}
                      variant='caption'>
                      {avatar.error}
                    </Typography>
                  )}

            <Box component="form" noValidate sx={{ mt: 1, width: '100%' }} onSubmit={handleSignup}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    //margin="normal"
                    autoComplete="name"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    value={name.value}
                    onChange={name.changeHandler}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="bio"
                    label="Bio"
                    name="bio"
                    autoComplete="bio"
                    value={bio.value}
                    onChange={bio.changeHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    value={username.value}
                    onChange={username.changeHandler}
                  />
                
                  {username.error &&(                           //its a validator.it will throw error if not valid
                    <Typography color='error' variant='caption'>
                      {username.error}
                    </Typography>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password.value}
                    onChange={password.changeHandler}
                  />
                  {password.error &&(
                    <Typography color='error' variant='caption'>
                      {password.error}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button variant="text" color="primary" onClick={toggleLogin}>
                    Already have an account? Sign In
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Box>
      <Box mt={8}></Box>
    </Container>
  );
};

export default Login;
