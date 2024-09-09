
import SignUp from './Mantis/Signup/SignUp'
import Login from './Mantis/Login/Login'
import './Mantis/css/Signup.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Mantis/Dashboard/Dashboard'



function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    
      
       
    </>
  )
}

export default App
