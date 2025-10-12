import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './assets/components/navbar/Navbar'
import Footer from './assets/components/footer/Footer'
import Login from './pages/Login/Login'
import LearningPath from './pages/learningPath/LearningPath'
import LeaderBoard from './pages/leaderboard/LeaderBoard'
import HomePage from './pages/home/HomePage'
import Challenges from './pages/Challenges/Challenges'
import SolutionsList from './pages/solutions/SolutionsList'
import Dashboard from './pages/dashboard/Dashboard'
import { AuthProvider, useAuth } from './assets/components/auth/AuthContext'

// Route guard for authenticated pages
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/solutions" element={<SolutionsList />} />

          {/* Only logged-in users can access this route */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
