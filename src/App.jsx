import { useState } from 'react'
import './App.css'
import Login from './pages/Login/Login'
import Navbar from './assets/components/navbar/Navbar'
import LearningPath from './pages/learningPath/LearningPath'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeaderBoard from './pages/leaderboard/LeaderBoard';
import HomePage from './pages/home/HomePage'
import Footer from './assets/components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/leaderboard" element={<LeaderBoard/>} />
      </Routes>
    </Router>
     {/* <Login/> */}
     <HomePage/>
     <Footer/>
    </>
  )
}

export default App
