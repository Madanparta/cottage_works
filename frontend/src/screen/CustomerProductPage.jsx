import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { RxPaperPlane } from "react-icons/rx";
import { BASE_BACKEND_URL, token } from '../utils/credential';

const CustomerProductPage = ({info}) => {
    const {empID,category,Product_name,images,description,price,_id} =info;

    const [feedback,setFeedback]=useState('');
 
    const customerFeedback = async(e) =>{
      e.preventDefault();
      try {
        const req = await fetch(`${BASE_BACKEND_URL}/entre/product/${_id}`,{method:'PUT',headers:{'Content-Type':'application/json','x-access-token':token},body:JSON.stringify({feedback:feedback})})
        const data = await req.json();

        if(data){
          toast.success(data.message);
          setFeedback('')
        }
      } catch (error) {
        console.log(error)
      }
    }
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

        {/* feedback. */}
        <form onSubmit={customerFeedback} className="w-full h-full flex flex-row mt-2">
            <input className='w-full text-black text-sm font-normal bg-transparent ps-3 rounded-s-md cursor-pointer border-b-2 border-black outline-none' type="text" placeholder='Enter feedback..' name='feedback' value={feedback} onChange={(e)=>setFeedback(e.target.value)}/>
            <button className='px-1' type='submit' ><RxPaperPlane className="text-3xl" /></button>
        </form> 
      </div>
    </section>
  )
}

export default CustomerProductPage
