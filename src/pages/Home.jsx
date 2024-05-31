import React, { useEffect, useState } from 'react';
import {add,show,remove} from "../Redux/CartSlice"
import {useDispatch} from 'react-redux';
function Home() {
  const [products, setproducts] = useState([])

useEffect(() => {
  fetch('https://fakestoreapi.com/products/').then((response)=>response.json()).then((json)=>{setproducts(json)
  // ;console.log("this is the result in console",json)
})
}, [])

const dispatch = useDispatch();
const handleAdd=(product)=>{
  dispatch(add(product))
}

const dispatch2=useDispatch();

  return (
    <>
    <div className='font-extrabold text-center'>
      This is Homepage ie Products Page
    </div>
{/* {console.log("this",products)} */}


<div className="flex flex-wrap">
    {products.map((i)=>

      <div className="max-w-sm rounded overflow-hidden shadow-lg w-1/4 h-50" key={i.id}>

  <img className="w-full h-40 object-contain " src={i.image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{i.title}</div>
    <p className="text-gray-700 text-base">
      {i.description}
    </p>
    <div className='my-1 mx-20'>{`Buy@`}{i.price}</div>
    <button className='mt-auto mx-14 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 active:bg-blue-800' onClick={()=>handleAdd(i)}>
      Add To Cart</button>

  </div>
  
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#trendy</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#shadyIdeas</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#shopping</span>
  </div>
</div>

    )}</div>
    </>
  )
}

export default Home