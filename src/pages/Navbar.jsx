import React from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
function Navbar() {

  const data = useSelector((c)=>c.cart)
  // console.log(data[0].value)
  return (
    <>
    <div className="flex justify-around items-center bg-slate-800 h-16">
    <Link className='font-bold' to={"/"}>ShadyLights</Link>
   {/* these both Home and ShadyLights are taking us to Homepage */}

    <div className='flex justify-between space-x-3 font-extrabold'>
    <Link className='' to={"/"}>Home</Link>
    <div>
    <Link to={"/cart"} className='flex  items-center'>cart<IoCartOutline/>{data.length}</Link></div>
    </div>

    </div>
    </>
  )
}
export default Navbar