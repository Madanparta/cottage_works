import React from 'react'

const EntpreneurDetails = ({home,matchingDetails,fundReq}) => {
  return (
    <section>
      <ul className='w-full text-center py-2 bg-gray-50 text-black capitalize text-lg shadow shadow-white'>
        <li className='border py-1 my-1 bg-gray-300 hover:bg-gray-400 cursor-pointer'><span className='font-bold'>Homeprenuer Name : </span>{matchingDetails.name}</li>
        <li className='border py-1 my-1 bg-gray-300 hover:bg-gray-400 cursor-pointer'><span className='font-bold'>Homeprenuer ID : </span>{home.empID}</li>
        <li className='border py-1 my-1 bg-gray-300 hover:bg-gray-400 cursor-pointer'><span className='font-bold'>Email : </span>{matchingDetails.email}</li>
        <li className='border py-1 my-1 bg-gray-300 hover:bg-gray-400 cursor-pointer'><span className='font-bold'>Mobile : </span>{matchingDetails.phone_number}</li>
        <li className='border py-1 my-1 bg-gray-300 hover:bg-gray-400 cursor-pointer'><span className='font-bold'>Business Category : </span>{home.businessCategory}</li>
        <li className='border py-1 my-1 bg-gray-300 hover:bg-gray-400 cursor-pointer'><span className='font-bold'>Business Name : </span>{home.businessName}</li>
        {!fundReq && <li className='border py-1 my-1 bg-gray-300 hover:bg-gray-400 cursor-pointer object-contain'><span className='font-bold'>Images : </span><img src={home.images} alt="" /></li>}
        {fundReq && <li className='border py-1 my-1 bg-gray-300 hover:bg-gray-400 cursor-pointer'><span className='font-bold'>Funding Request : </span>{home.fundRequest}</li>}
      </ul>
      <br />
    </section>
  )
}

export default EntpreneurDetails
