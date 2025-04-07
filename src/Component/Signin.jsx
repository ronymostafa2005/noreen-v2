import React from "react";
import { TextField, Button, Typography, Link, Box, Container } from "@mui/material";

const Signin = () => {
  return (
    <Container maxWidth="xs">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" fontWeight="bold">Sign In</Typography>
        <Typography variant="h6" mt={2}>Welcome Back</Typography>
        <Typography variant="body2" color="textSecondary" mt={1}>
          Please enter your email and password for login
        </Typography>
      </Box>
      
      <Box mt={3}>
        <TextField fullWidth label="Email" variant="outlined" margin="normal" />
        <TextField fullWidth label="Password" variant="outlined" margin="normal" type="password" />
        <Box textAlign="right" mt={1}>
          <Link href="#" variant="body2">Forgot Password?</Link>
        </Box>
        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
          Sign In
        </Button>
        <Box textAlign="center" mt={2}>
          <Typography variant="body2">
            Not registered yet? <Link href="#">Sign Up</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Signin;
