import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes, Route} from 'react-router-dom'
import Register from "./pages/Register"
import Login from './pages/Login'
import MyNavbar from './components/Navbar'
import ListingPage from './pages/List'
import Home from './pages/Home'
import BookDetails from './pages/BookDetails'

function App() {

  return (
    <div>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/book/list" element={<ListingPage/>} />
        <Route path="/book/view/:bookId" element={<BookDetails/>} />
      </Routes>
    </div>
  )
}

export default App
