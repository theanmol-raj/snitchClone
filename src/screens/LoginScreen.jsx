import React from 'react'

function LoginScreen() {
  return (
    <div className=''>
        <div className=' flex justify-center h-screen w-screen items-center'>
            <div className=' space-y-52  w-full max-w-96' >
                <p className=' text-4xl'>LOGIN</p>
                <div className=' space-y-2 '>
                <p className=' text-sm font-medium text-black/70 uppercase tracking-wider'>EMail</p>
                <input className=' border-gray-300 border w-full py-1 rounded-md ' />
                <p className=' text-sm font-medium text-black/70 uppercase tracking-wider pt-2'>Password</p>
                <input className=' border-gray-300 border w-full py-1 mb-4 rounded-md ' />
                <button className=' w-full bg-black text-white py-2 rounded-md'>
                    Sign In
                </button>
                </div>

            </div> 
        </div>
    </div>
  )
}

export default LoginScreen