import { Box, Typography, IconButton, Card, Avatar, Button, TextField } from "@mui/material";
import { ArrowLeft, Trash2, Pencil, MessageCircle, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
//##################################################
const tasks = [
  { title: "Task 1", progress: 30 },
  { title: "Task 2", progress: 50 },
  { title: "Task 3", progress: 70 },
];

export default function ProjectDetails() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9f9f9", p: 2, display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </IconButton>
        <Typography variant="h6" fontWeight="bold" sx={{ flex: 1, textAlign: "center" }}>Project Details</Typography>
      </Box>

      {/* Project Description */}
      <TextField fullWidth placeholder="Project description" variant="outlined" sx={{ mb: 2 }} />

      {/* Task List */}
      {tasks.map((task, index) => (
        <Card key={index} sx={{ p: 2, mb: 2, display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body1" fontWeight="bold">{task.title}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" sx={{ width: 30, height: 30 }} />
            <Box sx={{ flex: 1, bgcolor: "#ddd", height: 8, borderRadius: 4, overflow: "hidden" }}>
              <Box sx={{ width: `${task.progress}%`, height: "100%", bgcolor: "#4caf50" }}></Box>
            </Box>
            <IconButton color="error"><Trash2 size={20} /></IconButton>
            <IconButton color="primary"><MessageCircle size={20} /></IconButton>
            <IconButton color="primary"><Pencil size={20} /></IconButton>
          </Box>
        </Card>
      ))}

      {/* Meeting Now */}
      <Card sx={{ p: 2, mb: 2, textAlign: "center" }}>
        <Typography variant="body1" fontWeight="bold" mb={1}>Meeting Now</Typography>
        <Button variant="contained" color="primary">Join</Button>
      </Card>

      {/* Add Task Button */}
      <Box sx={{ position: "fixed", bottom: 20, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <Button variant="contained" color="primary" startIcon={<PlusCircle size={24} />} sx={{ borderRadius: "50px", textTransform: "none" }}>Add Task</Button>
      </Box>
    </Box>
  );
}
