import { Disclosure } from '@headlessui/react'

export default function FAQ() {






  return (
    <div className="w-full ">
      <div className="mx-auto w-full  rounded-2xl bg-white ">
        <Disclosure>
          {({ open }) => (
            
            <>
              <Disclosure.Button className={` ${open ? ' border-b-0 rounded-b-none' : ''} flex w-full  justify-between rounded-lg border px-4 py-2  text-sm font-medium  focus:outline-none  `}>
                <span className=' uppercase font-light  w-full tracking-[0.25em] text-sm'>EMI/PAy in 3 offers</span>
                
              </Disclosure.Button>
              <Disclosure.Panel className={` border border-t-0 rounded-b-md px-4 pb-2 pt-4 text-sm text-gray-500`}>
                <div className='flex items-center'>
                  <p>or Pay <span className=' text-lg text-lime-500'>₹666</span> and rest later via</p>
                  <img className='h-5' src='https://websdk-assets.s3.ap-south-1.amazonaws.com/shopify-messaging-app/snitchpay_logo.png' />
                </div>
                <div className='flex items-center py-2'>
                  <p className=' text-xs'>or <span className=' text-black font-medium'>3</span> monthly payments of <span className='text-black font-medium'>₹666</span> with</p>
                  <img className='h-4' src='https://assets.snapmint.com/assets/express_checkout/SnapMint_logo.svg' />
                </div>
                <p className=' text-xs'>UPI & Cards Accepted, Online approval in 2 minutes</p>
                <div className='flex items-center py-2'>
                  <p className=' text-xs'>Or <span className=' text-black font-medium'>3</span> interest free payments of <span className=' text-black font-medium'>₹666.34</span></p>
                  <img className='h-4' src='https://www.snitch.co.in/cdn/shop/t/276/assets/brand.svg?v=74745334496592893301696252473' />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full  justify-between rounded-lg border px-4 py-2  text-sm font-medium  focus:outline-none  ">
                <span className=' uppercase font-light  w-full tracking-[0.25em] text-sm'>Product Description</span>
                
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                <div className='flex items-center'>
                  <p>or Pay <span className=' text-lg text-lime-500'>₹666</span> and rest later via</p>
                  <img className='h-5' src='https://websdk-assets.s3.ap-south-1.amazonaws.com/shopify-messaging-app/snitchpay_logo.png' />
                </div>
                <div className='flex items-center py-2'>
                  <p className=' text-xs'>or <span className=' text-black font-medium'>3</span> monthly payments of <span className='text-black font-medium'>₹666</span> with</p>
                  <img className='h-4' src='https://assets.snapmint.com/assets/express_checkout/SnapMint_logo.svg' />
                </div>
                <p className=' text-xs'>UPI & Cards Accepted, Online approval in 2 minutes</p>
                <div className='flex items-center py-2'>
                  <p className=' text-xs'>Or <span className=' text-black font-medium'>3</span> interest free payments of <span className=' text-black font-medium'>₹666.34</span></p>
                  <img className='h-4' src='https://www.snitch.co.in/cdn/shop/t/276/assets/brand.svg?v=74745334496592893301696252473' />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}