import {
  Box,
  Typography,
  IconButton,
  Card,
  AvatarGroup,
  Avatar,
} from "@mui/material";
import {
  ArrowBack,
  Delete,
  Edit,
  EmojiEvents,
  Add,
  Visibility,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Data Compression",
    category: "OS",
    progress: 50,
    priority: 5,
    users: [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/women/1.jpg",
    ],
  },
  {
    title: "Portfolio",
    category: "Web",
    progress: 80,
    priority: 3,
    users: [
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/2.jpg",
    ],
  },
  {
    title: "Candy Crush",
    category: "Data",
    progress: 60,
    priority: 9,
    users: [
      "https://randomuser.me/api/portraits/men/3.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
    ],
  },
  {
    title: "Library",
    category: "PY",
    progress: 40,
    priority: 5,
    users: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/women/4.jpg",
    ],
  },
];

const ProjectCard = ({ project, navigate }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: "center",
      justifyContent: "space-between",
      mb: 2,
      p: 2,
      borderRadius: 2,
      boxShadow: 3,
      border: "1px solid #90caf9",
      bgcolor: "white",
      width: "100%",
      maxWidth: "500px",
    }}
  >
    <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
      <Typography variant="body1" fontWeight="bold">{project.title} 😃</Typography>
      <Typography variant="caption" color="gray">{project.category}</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <AvatarGroup max={2} sx={{ mr: 1 }}>
          {project.users.map((user, idx) => (
            <Avatar key={idx} src={user} sx={{ width: 24, height: 24 }} />
          ))}
        </AvatarGroup>
        <Box
          sx={{
            width: "100px",
            height: 8,
            bgcolor: "#ddd",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{ width: `${project.progress}%`, height: "100%", bgcolor: "#004aad" }}
          />
        </Box>
      </Box>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography
        variant="body2"
        sx={{
          bgcolor: "#e0ffe0",
          px: 1.5,
          py: 0.5,
          borderRadius: 10,
          fontSize: 12,
        }}
      >
        {project.priority}
      </Typography>
      <IconButton color="primary" onClick={() => navigate("/EditingPage")}>
        <Edit />
      </IconButton>
      <IconButton color="primary" onClick={() => navigate("/GamificationPage")}>
        <EmojiEvents sx={{ color: "#004aad" }} />
      </IconButton>
      <IconButton color="primary" onClick={() => navigate("/ProjectDetails")}>
        <Visibility sx={{ color: "#004aad" }} />
      </IconButton>
      <IconButton color="error">
        <Delete />
      </IconButton>
    </Box>
  </Card>
);

export default function Projects() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9f9f9", p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton color="primary" sx={{ mr: 1 }} onClick={() => navigate("/Inprogress")}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" fontWeight="bold" sx={{ flex: 1, textAlign: "center" }}>
          Projects
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} navigate={navigate} />
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
        <IconButton
          color="primary"
          sx={{
            bgcolor: "#004aad",
            color: "white",
            borderRadius: 2,
            p: 1.2,
            "&:hover": { bgcolor: "#003a8c" },
          }}
          onClick={() => navigate("/Addtask")}
        >
          <Add />
        </IconButton>
        <Typography variant="body2" fontWeight="bold" sx={{ ml: 1, color: "#004aad" }}>
          Add Task
        </Typography>
      </Box>
    </Box>
  );
}