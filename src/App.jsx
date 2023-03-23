import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<LoginPage/>} >  </Route>
        <Route path="/login" element= {<LoginPage/>} >  </Route>
      </Routes>
    </Router>
  )

}
export default App
