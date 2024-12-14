import React from 'react'
import Home from './Pages/Home'
import Todos from './Pages/Todos'
import Add from './Pages/Add'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import TodoNav from './Components/TodoNav'

const App = () => {
  return (
    <div>
      {/* <Navbar/>
      <Home/>
      <Todos/>
      <Add/> */}
      
      <BrowserRouter>
       <Routes>
        <Route element={<TodoNav/>}>
         <Route path='/todos' element={<Todos/>}/>
        </Route>
        
        <Route path='/' element={<Navbar/>}>
        <Route path='/home' element={<Home/>}/>
       
        <Route path='/add' element={<Add/>}/>
        </Route>
       </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
