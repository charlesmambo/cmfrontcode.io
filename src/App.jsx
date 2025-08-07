import { useState } from 'react'
import './App.css'
import Login from './pages/Login/Login'
import Navbar from './assets/components/navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     {/* <Login/> */}
    </>
  )
}

export default App
