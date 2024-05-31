import React from 'react'
import { add,remove} from '../Redux/CartSlice'
import { useDispatch,useSelector} from 'react-redux'


function Cart() {
  
  const data= useSelector((c)=>c.cart)
  console.log("cart console",data)

  const dispatch=useDispatch()

  const handleRemove =(x)=>{
    console.log("id in cart handleRemove",{x})
    dispatch(remove(x))

  }
  return (
    <>
    <h1 className='text-7xl mx-auto w-2 border-2 text-center'>CART</h1>
    <div className='flex-col'>

{data.map((i)=>(
  <div key={i.id}>
  {i.title}
  <img src={i.image} alt="" className='h-40 w-auto overflow-auto '  />
  {i.id}
  <button onClick={()=>handleRemove(i.id)}>remove</button>
  </div>
))}
    </div>
    </>
  )
}

export default Cart