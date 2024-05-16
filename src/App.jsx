import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes, Route} from 'react-router-dom'
import Register from "./pages/Register"
import Login from './pages/Login'

function App() {

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  )
}

export default App