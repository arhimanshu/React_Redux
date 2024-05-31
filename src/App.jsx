import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
    
    </>
    
  )
}

export default App