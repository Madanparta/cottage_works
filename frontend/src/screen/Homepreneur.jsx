import React from 'react'

const Homepreneur = () => {
  return (
    <section className='w-full h-[94.5vh] bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white'>

        <section className='w-full h-[94.5vh] flex'>
            {/* side bar */}
            <aside className='w-2/12 h-full bg-gradient-to-r from-gray-100 to-gray-300 shadow flex flex-col items-center px-3 pt-10 pb-6'>

                {/* category types... */}
                <div className='w-full h-[90%] py-2'>
                    <h2 className='text-xl drop-shadow w-full text-center py-2 rounded-t-md bg-blue-700 '>Homepreneur</h2>

                    <ul className='capitalize text-center text-black text-lg w-full h-[90%] overflow-y-auto '>
                      <li className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer active:underline active:bg-gray-300">Business Categories</li>
                      <li className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer active:underline active:bg-gray-300">Present My Idea</li>
                      <li className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer active:underline active:bg-gray-300">View Invester Offers</li>
                      <li className="w-full border py-1.5 shadow bg-gray-100 hover:bg-gray-200 cursor-pointerl cursor-pointer active:underline active:bg-gray-300">Sell Products</li>
                    </ul>
                </div>

            </aside>

            {/* main section */}
            <section className='w-10/12 h-full'>
                
            </section>
        </section>

    </section>
  )
}

export default Homepreneur
