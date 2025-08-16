import { useState } from 'react'
import './App.css'
import Login from './pages/Login/Login'
import Navbar from './assets/components/navbar/Navbar'
import LearningPath from './pages/learningPath/LearningPath'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeaderBoard from './pages/leaderboard/LeaderBoard'

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
    </>
  )
}

export default App
