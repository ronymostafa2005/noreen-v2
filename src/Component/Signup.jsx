import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container, Box, Menu, MenuItem } from "@mui/material";
import signupImage from "./CSS&Assets/Sign up.gif";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (role) => {
    if (role) {
      setFormData((prev) => ({ ...prev, role }));
    }
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Box sx={styles.background}>
      <Container maxWidth="lg" sx={styles.wrapper}>
        <Box sx={styles.signupSection}>
          <Typography variant="h6" sx={styles.subHeading}>Sign Up</Typography>
          <Typography variant="h4" sx={styles.heading}>Create Account</Typography>
          <Typography variant="body2" textAlign="center">Please enter your information and create an account</Typography>

          <Box component="form" sx={styles.form} onSubmit={handleSubmit}>
            {formFields.map(({ label, name, type, duration }) =>
              name !== "role" ? (
                <motion.div key={name} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration }}>
                  <TextField fullWidth label={label} name={name} value={formData[name]} onChange={handleChange} variant="outlined" type={type} required />
                </motion.div>
              ) : (
                <motion.div key={name} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration }}>
                  {/* زر اختيار الدور */}
                  <Button fullWidth variant="outlined" onClick={handleClick} sx={styles.button}>
                    {formData.role ? `Selected Role: ${formData.role}` : "Choose Role"}
                  </Button>

                  {/* القائمة المنسدلة */}
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(null)}>
                    <MenuItem onClick={() => handleClose("Instructor")}>Instructor</MenuItem>
                    <MenuItem onClick={() => handleClose("Student")}>Student</MenuItem>
                  </Menu>
                </motion.div>
              )
            )}

            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Button fullWidth variant="contained" component={Link} to="/inprogress" sx={styles.button}>Sign Up</Button>
            </motion.div>
          </Box>

          <Typography variant="body2" sx={styles.loginText}>
            Have an account? <Link to="/Signin" style={styles.loginLink}>Sign in</Link>
          </Typography>
        </Box>

        <Box sx={styles.animationSection}>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
            <img src={signupImage} alt="Signup Animation" style={{ width: "100%" }} />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

const formFields = [
  { label: "First Name", name: "firstName", type: "text", duration: 0.6 },
  { label: "Last Name", name: "lastName", type: "text", duration: 0.7 },
  { label: "Email", name: "email", type: "email", duration: 0.8 },
  { label: "Password", name: "password", type: "password", duration: 0.9 },
  { label: "Choose Role", name: "role", type: "select", duration: 1 },
];

const styles = {
  background: { width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f4f4f4" },
  wrapper: { display: "flex", flexDirection: "row", width: "100%", maxWidth: "1200px", height: "80vh", backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", padding: "20px" },
  signupSection: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" },
  animationSection: { flex: 1, display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "center" },
  heading: { fontSize: "32px", color: "#0055b3", marginBottom: "10px", fontWeight: "600" },
  subHeading: { fontSize: "20px", color: "#777", marginBottom: "5px", fontWeight: "400" },
  form: { display: "flex", flexDirection: "column", width: "100%", gap: "15px", marginTop: "10px" },
  button: { padding: "12px", fontSize: "18px", borderRadius: "8px", fontWeight: "600", fontFamily: "'Poppins', sans-serif", transition: "transform 0.3s ease-in-out" },
  loginText: { marginTop: "15px", fontSize: "16px", color: "#333" },
  loginLink: { color: "#0055b3", textDecoration: "none", fontWeight: "600", transition: "0.3s" },
};

export default Signup;
