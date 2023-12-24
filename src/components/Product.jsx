import React, { useState } from 'react'

function Product({sale ,img , price ,productName}) {
    const [mouse ,setMouse] = useState(true)

    const finalprice = sale ?  Math.round(price * (1 - (sale/100))) : price
    const sizes = ['S','M','L','XL','XXL']

  return (
    <div className=' relative'>
        {sale && <div className=' absolute top-0 right-0 z-10 bg-black text-white px-3 py-1 rounded-md text-sm'> sale</div>}

        <img className=' cursor-pointer transform transition-all duration-300 ease-in-out' onMouseEnter={()=>setMouse(false)} onMouseLeave={()=>setMouse(true)} src={mouse ? 'https://www.snitch.co.in/cdn/shop/products/Snitch_April22_0348-1.jpg?v=1650626433' : 'https://www.snitch.co.in/cdn/shop/products/Snitch_April22_0338-1.jpg?v=1650626433&width=1800' } />
        <p className=' text-sm text-center py-2'>{productName}</p>
        <div className='flex justify-center space-x-2 text-sm'>
            {sale && <p className=' line-through'>Rs. {price}</p>}
            
            <p>Rs. {finalprice }</p>

            {sale && <p className=' text-red-500'>Save {sale}%</p>}


        </div>
        <div className='flex justify-evenly text-sm mt-4'>
            {sizes.map((item,index) => <button className=' rounded-md border border-gray-500 px-3 py-1' key={index}>{item}</button>)}
        </div>
    </div>
  )
}

export default Product