import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Component/Landingpage";
import Signup from "./Component/Signup";
import Signin from "./Component/Signin";
import InProgress from "./Component/InProgress";
import EditingPage from "./Component/EditingPage";
import GamificationPage from "./Component/GamificationPage";
import ProjectDetails from "./Component/ProjectDetails";
import Projects from "./Component/Projects";
import Addtask from "./Component/Addtask";
import Loader from "./Component/Loader";
import ProgressPage from "./Component/ProgressPage";
import Calander from "./Component/Calander";
import Profile from "./Component/Profile";
//-----------------------------------------------
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/InProgress" element={<InProgress />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/EditingPage" element={<EditingPage />} />
        <Route path="/GamificationPage" element={<GamificationPage />} />
        <Route path="/ProjectDetails" element={<ProjectDetails />} />
        <Route path="/Addtask" element={<Addtask />} />
        <Route path="/Calander" element={<Calander />} />
        <Route path="/Profile" element={<Profile />} />
        
        <Route path="/ProgressPage" element={<ProgressPage />} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
