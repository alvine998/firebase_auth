import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import { Login } from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
export default function App(){
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  )
}