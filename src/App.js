import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Card from "./components/Card"
// import Header from "./components/Header"
// import TodoContainer from "./components/TodoContainer"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import { useState } from "react"

// #FD6663"
// #FCA201
function App(){
  const[users,setUsers] = useState([
    {
        username: 'john',
        password: '123'
    },
    {
      username: 'abc',
        password: '123'

    }
])


  return(
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setUsers={setUsers} />}></Route>
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>

      </div>
    
    
  )
}
export default App