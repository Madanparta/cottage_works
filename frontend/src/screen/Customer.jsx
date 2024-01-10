import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BASE_BACKEND_URL, token } from '../utils/credential'
import CustomerProductPage from './CustomerProductPage';

const Customer = () => {
  const [productData,setProductData]=useState([]);

  const getProducts = async () => {
    try {
      const request = await fetch(`${BASE_BACKEND_URL}/entre/product`,{method:'GET',headers:{'Content-Type':'application/json','x-access-token':token}})
      const getData = await request.json();

      if(getData){
        setProductData(getData?.product)
      }
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(()=>{
    if(token){
      getProducts()
    }else{
      window.location.assign('/login')
      localStorage.removeItem('user')
    }
  },[token])
  return (
    <section className='w-full h-full bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white'>
      <h2 style={{fontFamily: 'Preahvihear, sans-serif'}} className="text-xl text-center p-4">All Product</h2>

      <section className='w-7/12 h-full m-auto flex justify-center items-center flex-col pt-5'>
        {
          productData.map((info)=>(
            <CustomerProductPage key={info._id} info={info}/>
          ))
        }
      </section>
    </section>
  )
}

export default Customer
