import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './routes/PrivateRout'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/Login' element= {<LoginPage/>} />

      <Route path="home" element= {
      <PrivateRoute>
      <Home/>
      </PrivateRoute>} />

      </Routes>
      <ToastContainer/>
    </Router>
  )

}
export default App
