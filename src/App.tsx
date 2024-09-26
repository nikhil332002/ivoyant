
import './Route/Style.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Route/Home'
import About from './Route/About'
import Navbar from './Route/Navbar'
import Contact from './Route/Contact'
import Career from './Route/Career'
import DigitalExperience from './Route/DigitalExperience'
import NoPage from './Route/NoPage'
import HomePage from './dynamic/HomePage'
import PostPage from './dynamic/PostPage'
import Dashboard from './nested/Dashboard'
import { Overview, Settings, Profile } from './nested/Pages'
import { DashboardProtected, HomePageProtected, LoginPage, ProtectedRoute } from './protected/Pages'

function App() {


  return (
    <>
    {/* static */}
    {/* <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/digital-experience' element={<DigitalExperience/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
      </div> */}

      {/* dynamic */}
      {/* <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
      </div> */}

      {/* nested */}
      {/* <div>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
      </div> */}

      {/* protected */}
      <div>
      <Routes>
        <Route path="/" element={<HomePageProtected />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute> 
              <DashboardProtected />
            </ProtectedRoute>
          }
        />
      </Routes>
      </div>
    </>
  )
}

export default App
