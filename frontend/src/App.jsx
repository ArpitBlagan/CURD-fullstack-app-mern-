import Login from "./Component/Login";
import Register from "./Component/Register";
import User from "./Component/User";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css'
const  App=()=> {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/app" element={<User/>}/>
          </Routes>
        </Router>
  )
}

export default App
