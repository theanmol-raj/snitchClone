import React, { useState } from 'react'

function CategoriesContainer() {
    const [mouse ,setMouse] = useState(true)
  return (
    <div className=' relative'>
        

        <img className=' cursor-pointer aspect-square object-cover object-top transform transition-all duration-300 ease-in-out' onMouseEnter={()=>setMouse(false)} onMouseLeave={()=>setMouse(true)} src={mouse ? 'https://www.snitch.co.in/cdn/shop/products/Snitch_April22_0348-1.jpg?v=1650626433' : 'https://www.snitch.co.in/cdn/shop/products/Snitch_April22_0338-1.jpg?v=1650626433&width=1800' } />
        <p className=' text-sm text-center py-2'>collection</p>
        
        
    </div>
  )
}

export default CategoriesContainer