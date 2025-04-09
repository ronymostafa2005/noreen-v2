import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  IconButton,
  Card,
  AvatarGroup,
  Avatar,
  Button
} from "@mui/material";
import {
  ArrowBack,
  Delete,
  Edit,
  EmojiEvents,
  Add,
  Visibility,
} from "@mui/icons-material";

const ProjectCard = ({ project, navigate, handleDelete }) => (
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
      <Typography variant="body1" fontWeight="bold">{project.title}</Typography>
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
      <IconButton color="primary" onClick={() => navigate(`/editproject/${project.id}`)}>
        <Edit />
      </IconButton>
      <IconButton color="primary" onClick={() => navigate(`/gamification/${project.id}`)}>
        <EmojiEvents sx={{ color: "#004aad" }} />
      </IconButton>
      <IconButton color="primary" onClick={() => navigate(`/projectdetails/${project.id}`)}>
        <Visibility sx={{ color: "#004aad" }} />
      </IconButton>
      <IconButton color="error" onClick={() => handleDelete(project.id)}>
        <Delete />
      </IconButton>
    </Box>
  </Card>
);

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    try {
      const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
      setProjects(savedProjects);
    } catch (error) {
      console.error('Failed to load projects:', error);
      setProjects([]);
    }
  };

  const handleDelete = (projectId) => {
    const updatedProjects = projects.filter(project => project.id !== projectId);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    loadProjects();
  };

  const handleAddProject = () => {
    navigate('/addproject');
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f9f9f9", p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton color="primary" sx={{ mr: 1 }} onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" fontWeight="bold" sx={{ flex: 1, textAlign: "center" }}>
          My Projects
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard 
              key={project.id || index} 
              project={project} 
              navigate={navigate}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <Typography variant="body1" sx={{ mt: 4, color: 'text.secondary' }}>
            No projects found. Create your first project!
          </Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddProject}
          sx={{
            bgcolor: "#004aad",
            color: "white",
            borderRadius: 2,
            px: 3,
            py: 1,
            "&:hover": { bgcolor: "#003a8c" },
          }}
        >
          Add Project
        </Button>
      </Box>
    </Box>
  );
}