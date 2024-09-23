
import './App.css'
import Fetch from './Fetch'
import Form from './generics/Form'
import { DashboardWithAuth } from './HOC/Dashboard'
import SortableFilterableList from './Sort'

function App() {


  return (
    <>
      {/* <Fetch/> */}
      <SortableFilterableList/>
      {/* <Form/> */}
      {/* <DashboardWithAuth/> */}
    </>
  )
}

export default App
