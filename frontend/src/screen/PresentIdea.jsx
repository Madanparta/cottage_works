import React, { useState } from 'react'
import { BASE_BACKEND_URL, HomeEntrpID, token, userData } from '../utils/credential';
import toast from 'react-hot-toast';

const PresentIdea = ({selectBusinessCateg}) => {
    // pices list..
    // const [selectPriceRange,setSelectPriceRange]=useState('');
    // const [showPriceList, setShowPriceList] = useState(false);

    const {name}=userData;
  

  
    // const handlePriceSelection  =(selectRange)=>{
    //   setSelectPriceRange(selectRange)
    //   setShowPriceList(!showPriceList)
    // }

    
    const [formInput,setFormInput]=useState({
      businessCategory:selectBusinessCateg,
      empID:HomeEntrpID,
      businessName:'',
      description:'',
      images:'',
      fundRequest:'',
    })
    
    const handlingPresentIdeaForm = async(e) => {
      e.preventDefault();
      // let formDataToSend = new FormData();
      // formDataToSend.append('businessCategory',formInput.businessCategory)
      // formDataToSend.append('empID',formInput.empID)
      // formDataToSend.append('businessName',formInput.businessName)
      // formDataToSend.append('description',formInput.description)
      // formDataToSend.append('fundRequest',formInput.fundRequest)
      // formDataToSend.append('images',formInput.images)

      // console.log(formInput)
      try {
        const request = await fetch(`${BASE_BACKEND_URL}/entre/presentIdea`,{method:'POST',headers:{'Content-Type':'application/json','x-access-token':token},body:JSON.stringify(formInput)})
        const data = request.json();
        if(data){
          toast.success('Succesfully added your request.');
          setFormInput({
            businessCategory:selectBusinessCateg,
            empID:HomeEntrpID,
            businessName:'',
            description:'',
            images:'',
            fundRequest:'',
          })
        }
      } catch (error) {
        toast.error(error)
      }
    }

    const inputFormHandling = (e)=>{
      const {name,value}=e.target;
      setFormInput({
        ...formInput,
        [name]:value,
      })
    }

    // const handleFileChange = (event) => {
    //   const {name}=event.target;
    //   // const selectedFiles = Array.from(event.target.files);
    //   // setFormInput({ ...formInput, images: selectedFiles });
    //   setFormInput({
    //     ...formInput,
    //     [name]:event.target.files[0]
    //   })
    // };
  
  return (
    <>
    <h2 style={{fontFamily: 'Preahvihear, sans-serif'}} className="text-center font-mono text-2xl">hello {name}!! <span className='text-lg'>your business Category <span className='underline'>{selectBusinessCateg}</span><sup className='text-red-800'>*</sup></span></h2>
    <form className="w-full" onSubmit={handlingPresentIdeaForm}>
        <div className="text-center mt-8">
                        
            <label htmlFor="empID">
            HomID : <input required className="py-1 px-1 mb-5 drop-shadow outline-none" type="text" name="empID" id="empID" disabled value={formInput.empID} onChange={inputFormHandling}/>
            </label>

            <br />
            <label htmlFor="businessName">
            Business Name : <input required type="text" name='businessName' id='businessName'  placeholder="Please enter your Idea 'Name' ..!" className="outline-none py-1 px-1 mb-14 w-[25%] drop-shadow text-black" value={formInput.businessName} onChange={inputFormHandling}/>
            </label>

            <br />
            <textarea required className="py-1 px-2 rounded-sm mb-10 text-black outline-none" name="description" id="description" cols="55" rows="3" placeholder={`hello ${name} 👋, please enter your Business idea in briefly & about your self also..!!`}  value={formInput.description} onChange={inputFormHandling}></textarea>

            <br />

            <label htmlFor="images">
            {/* Upload Images (url only): <input required className="py-1 px-2 mb-10 rounded-sm outline-none" type="file" id="images" onChange={(e)=>setFormInput({...formInput,[e.target.name]:e.target.files[0]})} accept="image/*"/> */}
            Upload Images (url only): <input required className="py-1 px-2 mb-10 rounded-sm outline-none text-black" type="text" id="images" name='images' placeholder='Please enter image URL' value={formInput.images} onChange={inputFormHandling}/>
            </label>

            <br />
            <label htmlFor="fundRequest">
            Request funds : <input required className="py-1 px-2 mb-10 rounded-sm text-black outline-none" type="text" id="fundRequest" placeholder='Enter your business required amount' name='fundRequest' value={formInput.fundRequest} onChange={inputFormHandling}/>
            </label>

            <br />

            <button type="submit" className="bg-green-700 px-3 py-1 mb-7 hover:bg-green-800 active:bg-green-900 rounded-md shadow">Post Your Idea.</button>

            <br />

            {/* <button type="button" onClick={()=>handlePriceSelection(null)} className="bg-blue-700 px-3 py-1 mb-3 hover:bg-blue-800 active:bg-blue-900 rounded-md shadow">Make fund Request</button>
                        
            {selectPriceRange !== null && (
            <div>
                <p>Selected Price Range: {selectPriceRange}</p>
            </div>
            )}

            {showPriceList && (
            <div className="flex flex-col gap-2">
                <p>Select a Price Range:</p>
                <button onClick={() => handlePriceSelection('30k - 40k')}>30k - 40k</button>
                <button onClick={() => handlePriceSelection('40k - 50k')}>40k - 50k</button>
                <button onClick={() => handlePriceSelection('50k - 60k')}>60k - 70k</button>
                <button onClick={() => handlePriceSelection('60k - 70k')}>60k - 70k</button>
                <button onClick={() => handlePriceSelection('70k - 80k')}>70k - 80k</button>
                <button onClick={() => handlePriceSelection('80k - 90k')}>80k - 90k</button>
                <button onClick={() => handlePriceSelection('90k - 1lak')}>90k - 1lak</button>
            </div>
            )} */}

        </div>
    </form>
      
    </>
  )
}

export default PresentIdea
