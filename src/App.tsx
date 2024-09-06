
import SignUp from './SignUP/SignUp'
import Login from './SignUP/Login'
import './SignUP/Signup.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './SignUP/Dashboard'


function App() {


  return (
    <>
    {/* <SignUp/> */}
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
