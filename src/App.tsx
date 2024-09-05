
// import './App.css'

import Buttons from './components/Button'
import TopNavigation from './components/TopNavigation'
import { Product, useGetAllProductsQuery } from './RtkQuery/ApiSlice'
import { useSelector } from 'react-redux';
import { RootState } from './RtkQuery/Store';
import ProductsList from './RtkQuery/Data';
import AddUserForm from './QueryMethods/AddUserForm';
import UsersList from './QueryMethods/UsersList';
import AddProductForm from './RtkQuery/AddProductForm';
import Read from './CRUD/components/Read';
import AddStudents from './CRUD/components/AddStudents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './CRUD/components/Navbar';


function App() {


  return (
    <>
    
      {/* <AddProductForm/>
      <ProductsList/> */}

      {/* <AddUserForm/>
      <UsersList/> */}
    
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Read/>}/>
          <Route path='/addStudents' element={<AddStudents/>}/>
          <Route path='/editStudents/:id' element={<AddStudents/>}/>
        </Routes>
    </BrowserRouter>
    
   
    
    </>
  )
}

export default App
