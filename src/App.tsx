
import './Route/Style.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Route/Home'
import About from './Route/About'
import Navbar from './Route/Navbar'
import Contact from './Route/Contact'
import Career from './Route/Career'
import DigitalExperience from './Route/DigitalExperience'
import NoPage from './Route/NoPage'

function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/digital-experience' element={<DigitalExperience/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </>
  )
}

export default App
