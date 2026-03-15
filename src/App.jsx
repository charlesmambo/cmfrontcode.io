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
import Profile from './pages/profile/Profile'
import { AuthProvider, useAuth } from './assets/components/auth/AuthContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Settings from './pages/settings/Settings';

// Route guard
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

          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/solutions" element={<SolutionsList />} />

          {/* Protected routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute>
                <Settings/>
              </ProtectedRoute>
            } 
          />

        </Routes>

        <Footer />
      </Router>

      <ToastContainer position="top-right" autoClose={5000} />

    </AuthProvider>
  );
}

export default App;