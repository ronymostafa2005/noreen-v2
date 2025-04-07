import { Box, Typography, Card, CardContent, Grid, Chip, useMediaQuery } from "@mui/material";
import { Line } from "react-chartjs-2";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "chart.js/auto";
//--------------------------------------
export default function GamificationPage() {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [3, 5, 2, 8, 6, 4, 7],
        fill: true,
        backgroundColor: "rgba(0, 100, 255, 0.2)",
        borderColor: "#004aad",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1500,
      easing: "easeInOutQuart",
    },
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Box sx={{ p: 2, maxWidth: isLargeScreen ? 900 : 500, mx: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <ArrowBack sx={{ cursor: "pointer" }} onClick={() => navigate(-1)} />
          <Typography variant="h6" sx={{ ml: 1, fontWeight: "bold" }}>Gamification</Typography>
        </Box>
        
        {/* Your Rewards */}
        <Card sx={{ mb: 2, p: isLargeScreen ? 3 : 1 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold" color="primary">Your Rewards</Typography>
            <Typography variant="body2">Points: <strong>1200</strong></Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Badges:</Typography>
            <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Chip label="Top Achiever" color="warning" />
              <Chip label="Consistency" color="warning" />
              <Chip label="Daily Streak" color="warning" />
            </Box>
          </CardContent>
        </Card>
        
        {/* Leaderboard */}
        <Card sx={{ mb: 2, p: isLargeScreen ? 3 : 1 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold" color="primary">Leaderboard</Typography>
            <Grid container spacing={1} sx={{ mt: 1 }}>
              {[
                { name: "Ahmed", score: 1500 },
                { name: "Mohamed", score: 1400 },
                { name: "Ahmed", score: 1300 },
              ].map((user, index) => (
                <Grid item xs={12} key={index}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", p: 1, bgcolor: "#f5f5f5", borderRadius: 1 }}>
                    <Typography variant="body2">{index + 1} {user.name}</Typography>
                    <Typography variant="body2" fontWeight="bold">{user.score}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
        
        {/* Your Productivity */}
        <Card sx={{ p: isLargeScreen ? 3 : 1 }}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold" color="primary">Your Productivity</Typography>
            <Typography variant="body2">Current Streak: <strong>9 days</strong></Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Tasks Completed This Week: 12</Typography>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
              <Line data={data} options={options} />
            </motion.div>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
}