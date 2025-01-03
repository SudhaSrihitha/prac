import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompA from './components/CompA'
import CompB from './components/CompB'
import CompC from './components/CompC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
          <Route path="/" element={<CompC />} />
          <Route path="/games" element={<CompB />} />
          <Route path="/gamesss" element={<CompC />} />
          <Route path="/Sudha" element={<div>Sudha</div>} />
          <Route path="/sudha2" element={<div>HRLLO</div>} />
        </Routes>
    </Router>
  )
}

export default App
