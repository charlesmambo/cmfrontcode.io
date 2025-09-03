import { useState } from 'react'
import './App.css'
import Login from './pages/Login/Login'
import Navbar from './assets/components/navbar/Navbar'
import LearningPath from './pages/learningPath/LearningPath'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeaderBoard from './pages/leaderboard/LeaderBoard';
import HomePage from './pages/home/HomePage'
import Footer from './assets/components/footer/Footer'
import Challenges from './pages/Challenges/Challenges'

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/challenges" element={<Challenges/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
