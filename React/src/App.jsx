import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Users from './Users'
import CreatUser from './CreateUser'
import UpdateUser from './UpdateUser'
import ExpenseList from './ExpenseList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ExpenseList/>} ></Route>
          {/* <Route path='/' element={<Users/>} ></Route> */}
          <Route path='/create' element={<CreatUser/>} ></Route>
          <Route path='/update/:id' element={<UpdateUser/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
