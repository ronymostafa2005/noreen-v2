import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, CircularProgress, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function TaskDetail() {
  const { state: task } = useLocation();
  const navigate = useNavigate();
  const [editedTask, setEditedTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // هنا يمكنك إضافة كود لحفظ التعديلات في قاعدة البيانات
    console.log("Task updated:", editedTask);
    setIsEditing(false);
    // يمكنك إضافة رسالة نجاح أو إعادة توجيه
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>{task.title}</Typography>
      
      {!isEditing ? (
        <>
          <Typography variant="body1" gutterBottom><strong>Category:</strong> {task.category}</Typography>
          <Typography variant="body1" gutterBottom><strong>Status:</strong> {task.status}</Typography>
          <Typography variant="body1" gutterBottom><strong>Progress:</strong> {task.progress}%</Typography>
          <Typography variant="body1" gutterBottom><strong>Description:</strong> {task.description}</Typography>
          <Typography variant="body1" gutterBottom><strong>Deadline:</strong> {task.deadline}</Typography>
          <Typography variant="body1" gutterBottom><strong>Assigned To:</strong> {task.assignedTo}</Typography>
          
          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button 
              variant="contained" 
              onClick={() => setIsEditing(true)}
              sx={{ bgcolor: "#004aad", '&:hover': { bgcolor: "#003882" } }}
            >
              Edit Task
            </Button>
            <Button 
              variant="outlined" 
              onClick={() => navigate(-1)}
              sx={{ color: "#004aad", borderColor: "#004aad" }}
            >
              Back
            </Button>
          </Box>
        </>
      ) : (
        <>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            margin="normal"
          />
          
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={editedTask.status}
              onChange={handleChange}
              label="Status"
            >
              <MenuItem value="Not Started">Not Started</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
          
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 2 }}>
            <Typography>Progress:</Typography>
            <CircularProgress 
              variant="determinate" 
              value={editedTask.progress} 
              size={40} 
              thickness={5} 
              sx={{ color: "#004aad" }}
            />
            <TextField
              type="number"
              name="progress"
              value={editedTask.progress}
              onChange={handleChange}
              inputProps={{ min: 0, max: 100 }}
              sx={{ width: 80 }}
            />
          </Box>
          
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
          />
          
          <TextField
            fullWidth
            label="Deadline"
            name="deadline"
            type="date"
            value={editedTask.deadline}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          
          <TextField
            fullWidth
            label="Assigned To"
            name="assignedTo"
            value={editedTask.assignedTo}
            onChange={handleChange}
            margin="normal"
          />
          
          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button 
              variant="contained" 
              onClick={handleSave}
              sx={{ bgcolor: "#004aad", '&:hover': { bgcolor: "#003882" } }}
            >
              Save Changes
            </Button>
            <Button 
              variant="outlined" 
              onClick={() => setIsEditing(false)}
              sx={{ color: "#004aad", borderColor: "#004aad" }}
            >
              Cancel
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}