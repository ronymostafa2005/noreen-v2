import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Typography, 
  IconButton, 
  CircularProgress, 
  Card, 
  CardContent, 
  Menu, 
  MenuItem,
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
  Badge,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider
} from "@mui/material";
import { Apps, Notifications, Close, Edit, Save, Add } from "@mui/icons-material";

const tasks = [
  { 
    id: 1,
    title: "Business Requirements Document", 
    category: "PRD", 
    progress: 60, 
    time: "2 min ago",
    description: "Create detailed business requirements document for the new project",
    status: "In Progress",
    deadline: "2023-12-15",
    assignedTo: "John Doe"
  },
  { 
    id: 2,
    title: "Preparing for project power point", 
    category: "Presentation", 
    progress: 70, 
    time: "5 min ago",
    description: "Prepare slides for the upcoming client presentation",
    status: "In Progress",
    deadline: "2023-12-10",
    assignedTo: "Jane Smith"
  },
  { 
    id: 3,
    title: "Create a proposal PDF file", 
    category: "Proposal", 
    progress: 80, 
    time: "7 min ago",
    description: "Finalize and export the project proposal as PDF",
    status: "In Progress",
    deadline: "2023-12-05",
    assignedTo: "Mike Johnson"
  },
];

const notifications = [
  {
    id: 1,
    title: "New task assigned",
    message: "You have been assigned a new task: UI Design",
    time: "10 minutes ago",
    read: false,
    icon: "📋"
  },
  {
    id: 2,
    title: "Meeting reminder",
    message: "Team meeting in 30 minutes",
    time: "1 hour ago",
    read: false,
    icon: "📅"
  },
  {
    id: 3,
    title: "Task completed",
    message: "Jane completed the requirements document",
    time: "3 hours ago",
    read: true,
    icon: "✅"
  },
  {
    id: 4,
    title: "System update",
    message: "New system update available",
    time: "1 day ago",
    read: true,
    icon: "🔄"
  }
];

export default function TaskProgress() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifAnchorEl, setNotifAnchorEl] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const [taskList, setTaskList] = useState(tasks);
  const [unreadCount] = useState(notifications.filter(n => !n.read).length);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotifMenuOpen = (event) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleNotifMenuClose = () => {
    setNotifAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    handleMenuClose();
    navigate(path);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setEditedTask({ ...task });
    setIsEditing(false);
  };

  const handleCloseDetail = () => {
    setSelectedTask(null);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedTasks = taskList.map(task => 
      task.id === editedTask.id ? editedTask : task
    );
    setTaskList(updatedTasks);
    setSelectedTask(editedTask);
    setIsEditing(false);
  };

  const handleAddTask = () => {
    navigate("/AddTask");
  };

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      bgcolor: "#f9f9f9", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      p: 2,
      position: "relative"
    }}>
      {/* Main Task List */}
      <Box sx={{ 
        width: "100%", 
        maxWidth: 500, 
        bgcolor: "white", 
        borderRadius: 3, 
        boxShadow: 3, 
        p: 3, 
        mx: "auto",
        transform: selectedTask ? "translateX(-50%)" : "none",
        transition: "transform 0.3s ease",
        position: selectedTask ? "absolute" : "relative",
        left: selectedTask ? "25%" : "auto",
        zIndex: 1
      }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <IconButton onClick={handleMenuOpen}>
            <Apps sx={{ color: "#004aad" }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={() => handleMenuItemClick("/Projects")}>Projects</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/tasklist")}>Tasks list</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/ProgressPage")}>Progress</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/Calander")}>Calendar</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/Profile")}>Profile</MenuItem>
          </Menu>
          <Typography variant="h6" fontWeight="bold">Friday, 26</Typography>
          <IconButton onClick={handleNotifMenuOpen}>
            <Badge badgeContent={unreadCount} color="error">
              <Notifications sx={{ color: "#004aad" }} />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={notifAnchorEl}
            open={Boolean(notifAnchorEl)}
            onClose={handleNotifMenuClose}
            PaperProps={{
              style: {
                width: '350px',
                maxHeight: '400px',
                padding: '10px 0'
              }
            }}
          >
            <Typography variant="h6" sx={{ px: 2, py: 1, fontWeight: 'bold' }}>
              Notifications
            </Typography>
            <Divider />
            <List sx={{ width: '100%' }}>
              {notifications.map((notification) => (
                <ListItem 
                  key={notification.id} 
                  sx={{ 
                    bgcolor: notification.read ? 'inherit' : '#f0f7ff',
                    '&:hover': { bgcolor: '#f5f5f5' }
                  }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'transparent', fontSize: '1.2rem' }}>
                      {notification.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={notification.title}
                    secondary={
                      <>
                        <Typography variant="body2" color="text.primary">
                          {notification.message}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {notification.time}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
              <Button size="small" color="primary">
                View All Notifications
              </Button>
            </Box>
          </Menu>
        </Box>
        
        {/* Title */}
        <Typography variant="h6" fontWeight="bold" mb={2}>In Progress</Typography>
        
        {/* Task List */}
        {taskList.map((task) => (
          <Card 
            key={task.id} 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              mb: 2, 
              p: 1, 
              borderRadius: 2, 
              boxShadow: 1, 
              width: "100%",
              cursor: "pointer",
              '&:hover': {
                boxShadow: 3,
                bgcolor: '#f5f5f5'
              }
            }}
            onClick={() => handleTaskClick(task)}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="caption" color="gray" textTransform="uppercase">{task.category}</Typography>
              <Typography variant="body1" fontWeight="bold">{task.title}</Typography>
              <Typography variant="caption" color="gray">{task.time}</Typography>
            </CardContent>
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress 
                variant="determinate" 
                value={100} 
                size={40} 
                thickness={5} 
                sx={{ color: "#d0d0d0", position: "absolute" }}
              />
              <CircularProgress 
                variant="determinate" 
                value={task.progress} 
                size={40} 
                thickness={5} 
                sx={{ color: "#004aad" }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="caption" fontWeight="bold" color="#004aad">
                  {`${task.progress}%`}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}

        {/* Add Task Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button 
            variant="contained" 
            startIcon={<Add />}
            onClick={handleAddTask}
            sx={{
              bgcolor: "#004aad",
              '&:hover': { bgcolor: "#003882" },
              borderRadius: '20px',
              px: 4,
              py: 1,
              textTransform: 'none',
              fontSize: '1rem'
            }}
          >
            Add Task
          </Button>
        </Box>
      </Box>

      {/* Task Detail Panel */}
      {selectedTask && (
        <Box sx={{ 
          width: "100%", 
          maxWidth: 500, 
          bgcolor: "white", 
          borderRadius: 3, 
          boxShadow: 3, 
          p: 3,
          position: "absolute",
          left: "75%",
          transform: "translateX(-50%)",
          zIndex: 2
        }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h6" fontWeight="bold">Task Details</Typography>
            <IconButton onClick={handleCloseDetail}>
              <Close />
            </IconButton>
          </Box>
          
          {!isEditing ? (
            <>
              <Typography variant="body1" gutterBottom><strong>Title:</strong> {selectedTask.title}</Typography>
              <Typography variant="body1" gutterBottom><strong>Category:</strong> {selectedTask.category}</Typography>
              <Typography variant="body1" gutterBottom><strong>Status:</strong> {selectedTask.status}</Typography>
              <Typography variant="body1" gutterBottom><strong>Progress:</strong> {selectedTask.progress}%</Typography>
              <Typography variant="body1" gutterBottom><strong>Description:</strong> {selectedTask.description}</Typography>
              <Typography variant="body1" gutterBottom><strong>Deadline:</strong> {selectedTask.deadline}</Typography>
              <Typography variant="body1" gutterBottom><strong>Assigned To:</strong> {selectedTask.assignedTo}</Typography>
              
              <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                <Button 
                  variant="contained" 
                  startIcon={<Edit />}
                  onClick={handleEditClick}
                  sx={{ bgcolor: "#004aad", '&:hover': { bgcolor: "#003882" } }}
                >
                  Edit
                </Button>
                <Button 
                  variant="outlined" 
                  onClick={handleCloseDetail}
                  sx={{ color: "#004aad", borderColor: "#004aad" }}
                >
                  Close
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
                  startIcon={<Save />}
                  onClick={handleSave}
                  sx={{ bgcolor: "#004aad", '&:hover': { bgcolor: "#003882" } }}
                >
                  Save
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
      )}
    </Box>
  );
}