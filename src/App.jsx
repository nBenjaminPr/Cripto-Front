import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import UserProvider from './context/UserContext'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './routes/PrivateRout'

function App() {
  return (
    <Router>
      <UserProvider>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/Login' element= {<LoginPage/>} />

      <Route path="home" element= {
      <PrivateRoute>
      <Home/>
      </PrivateRoute>} />

      </Routes>
      </UserProvider>
      <ToastContainer/>
    </Router>
  )

}
export default App
