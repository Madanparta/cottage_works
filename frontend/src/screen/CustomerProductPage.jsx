import React from 'react'
import toast from 'react-hot-toast';

const CustomerProductPage = ({info}) => {
    const {empID,category,Product_name,images,description,price} =info;
  return (
    <section className='w-[60%] h-full mb-5 bg-gray-50 p-5 shadow-lg shadow-gray-600 rounded hover:-translate-y-1 duration-200 ease-in-out'>
      
      <div className='bg-gray-200 text-center text-black p-5 flex justify-center items-center flex-col gap-3 font-bold'>
        <p>HOMID : {empID}</p>
        <p>Product Name : {Product_name}</p>
        <p>Category : {category}</p>
        <p><img src={images} /></p>
        <p>Description : {description}</p>
        <p className='hover:underline cursor-pointer'>Price : Rs.{price}.00</p>
        <button onClick={()=>toast.success('thank you for buy..!!')} className='py-1 px-4 text-xl text-white rounded shadow bg-green-800 hover:bg-green-900 active:bg-green-950'>Buy</button>
      </div>
    </section>
  )
}

export default CustomerProductPage
