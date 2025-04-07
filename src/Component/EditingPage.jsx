import { Box, Typography, TextField, Button, MenuItem, IconButton, AvatarGroup, Avatar, Tooltip } from "@mui/material";
import { ArrowBack, CloudUpload, Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
//------------------------------------
export default function EditingPage() {
  const navigate = useNavigate();
  const priorities = ["High", "Medium", "Low"];
  const teamMembers = [
    { name: "Jerry", src: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Melin", src: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Avishak", src: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Jafar", src: "https://randomuser.me/api/portraits/men/4.jpg" }
  ];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        overflow: "hidden",
        background: "linear-gradient(135deg, #a2d2ff, #f0f8ff)",
      }}
    >
      {/* Background Waves */}
      <svg
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#88c0ff"
          fillOpacity="0.7"
          d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,138.7C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224V320H0Z"
        ></path>
        <path
          fill="#ffffff"
          fillOpacity="0.7"
          d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,181.3C672,171,768,149,864,133.3C960,117,1056,107,1152,133.3C1248,160,1344,224,1392,256L1440,288V320H0Z"
        ></path>
      </svg>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Box sx={{ bgcolor: "white", p: 3, borderRadius: 3, boxShadow: 5 }}> 
          {/* Header */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Tooltip title="Back">
              <IconButton color="primary" onClick={() => navigate(-1)}>
                <ArrowBack />
              </IconButton>
            </Tooltip>
            <Typography variant="h6" fontWeight="bold" sx={{ flex: 1, textAlign: "center" }}>
              Add Task
            </Typography>
          </Box>
          
          {/* Form Fields */}
          <TextField fullWidth label="Task Name" variant="outlined" margin="dense" defaultValue="PRD" />
          <TextField fullWidth label="Task Description" variant="outlined" margin="dense" defaultValue="PRD" />
          
          <TextField select fullWidth label="Task Probability" variant="outlined" margin="dense">
            {priorities.map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </TextField>
          
          {/* Upload Files */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2, mb: 1 }}>
            <Typography variant="body2" sx={{ flex: 1 }}>gantchart.pdf</Typography>
            <Tooltip title="Upload File">
              <IconButton color="primary">
                <CloudUpload />
              </IconButton>
            </Tooltip>
          </Box>
          
          {/* Team Members */}
          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>Team Member</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AvatarGroup max={4}>
              {teamMembers.map((member, index) => (
                <Tooltip key={index} title={member.name}>
                  <Avatar src={member.src} />
                </Tooltip>
              ))}
            </AvatarGroup>
            <Tooltip title="Add Member">
              <IconButton color="primary" sx={{ ml: 1, border: "1px solid #1976d2", borderRadius: "50%" }}>
                <Add />
              </IconButton>
            </Tooltip>
          </Box>
          
          {/* Due Date */}
          <TextField fullWidth label="Due Date" variant="outlined" margin="dense" defaultValue="November 01, 2025" />
          <TextField fullWidth label="Due Time" variant="outlined" margin="dense" defaultValue="11:30 PM" />
          <TextField fullWidth label="Reminder" variant="outlined" margin="dense" defaultValue="30m" />
          
          {/* Save Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: "#004aad" }}>
              Save
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
}