import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { BASE_BACKEND_URL, HomeEntrpID, name, token } from '../utils/credential';

const HomeEnterSellProduct = () => {
  const [productData,setProductData]=useState({
    empID:HomeEntrpID,
    category:'',
    Product_name:'',
    images:'',
    description:'',
    price:''
  })

  const inputFormHandling = (e) => {
    const {name,value}=e.target;
    setProductData({
      ...productData,
      [name]:value,
    })
  }

  const handlingSellProductForm = async(e)=>{
    e.preventDefault();
    try {
      const request = await fetch(`${BASE_BACKEND_URL}/entre/product`,{method:'POST',headers:{'Content-Type':'application/json','x-access-token':token},body:JSON.stringify(productData)});
      const homeProduct = await request.json();

      if(homeProduct){
        toast.success('Product created succesfully.!')
        setProductData({
          empID:HomeEntrpID,
          category:'',
          Product_name:'',
          images:'',
          description:'',
          price:''
        })
      }
    } catch (error) {
      toast.error('somthing wrong ',error);
    }
  }
  
  return (
    <>
    <h2 style={{fontFamily: 'Preahvihear, sans-serif'}} className="text-center font-mono text-2xl">hello {name}!!</h2>
    <form className="w-full" onSubmit={handlingSellProductForm}>
        <div className="text-center mt-8">
                        
            <label htmlFor="empID">
            HomID : <input required className="py-1 px-1 mb-5 drop-shadow outline-none" type="text" name="empID" id="empID" disabled value={productData.empID} onChange={inputFormHandling}/>
            </label>

            <br />
            <label htmlFor="Product_name">
            Product Name : <input required type="text" name='Product_name' id='Product_name'  placeholder="Please enter your Product Name ..!" className="outline-none py-1 px-1 mb-14 w-[25%] drop-shadow text-black" value={productData.Product_name} onChange={inputFormHandling}/>
            </label>

            <br />
            <label htmlFor="category">
            Category : <input required className="py-1 px-2 mb-10 rounded-sm text-black outline-none" type="text" id="category" placeholder='Business Category' name='category' value={productData.category} onChange={inputFormHandling}/>
            </label>
            <br />

            <label htmlFor="images">
            Product Images (url only): <input required className="py-1 px-2 mb-10 rounded-sm outline-none text-black" type="text" id="images" name='images' placeholder='Please enter image URL' value={productData.images} onChange={inputFormHandling}/>
            </label>

            <br />
            <label htmlFor="price">
            Price : <input required className="py-1 px-2 mb-10 rounded-sm text-black outline-none" type="number" id="price" placeholder='price' name='price' value={productData.price} onChange={inputFormHandling}/>
            </label>


            <br />
            <textarea required className="py-1 px-2 rounded-sm mb-10 text-black outline-none" name="description" id="description" cols="55" rows="3" placeholder={`hello ${name} 👋, please enter your product description..!!`}  value={productData.description} onChange={inputFormHandling}></textarea>

            <br />

            <button type="submit" className="bg-green-700 px-3 py-1 mb-7 hover:bg-green-800 active:bg-green-900 rounded-md shadow">Submit.</button>

            <br />
        </div>
    </form>
      
    </>
  )
}

export default HomeEnterSellProduct
