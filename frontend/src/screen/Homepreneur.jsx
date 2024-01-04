import { useState } from "react";
import { userData } from "../utils/credential"

const Homepreneur = () => {
  const {name,_id}=userData;
  const [selectFile,setSelectFile]=useState([]);


  const handleFileChange = (e) => {
    e.preventDefault()
    const files = Array.from(e.target.value);
    const newSelectedFiles = files.slice(0,3);
    setSelectFile(newSelectedFiles);
  }

  // pices list..
  const [selectPriceRange,setSelectPriceRange]=useState(null);
  const [showPriceList, setShowPriceList] = useState(false);

  const handlePriceSelection  =(selectRange)=>{
    setSelectPriceRange(selectRange)
    setShowPriceList(!showPriceList)
  }

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
                
                {/* welcome face.. */}
                <div className='w-[70%] h-full pt-10'>
                  <h2 style={{fontFamily: 'Preahvihear, sans-serif'}} className="text-center font-mono text-2xl">hello {name}!!</h2>

                  <form className="w-full">
                    <div className="text-center mt-8">
                      
                      <label htmlFor="HomID">
                        HomID : <input className="py-1 px-1 mb-5 drop-shadow" type="text" name="HomID" id="HomID" disabled value={`HOM${_id.slice(-4)}`} />
                      </label>

                      <br />
                      <label htmlFor="name">
                        Business Name : <input className="py-1 px-1 mb-14 w-[25%] drop-shadow" type="text" placeholder="Please enter your Idea 'Name' ..!"/>
                      </label>

                      <br />
                      <textarea className="py-1 px-2 rounded-sm mb-10" name="description" id="description" cols="55" rows="3" placeholder={`hello ${name} 👋, please enter your Business idea in briefly & about your self also..!!`}></textarea>

                      <br />

                      <label htmlFor="imageInput">
                        Upload Images (up to 3): <input className="py-1 px-2 mb-10 rounded-sm" type="file" id="imageInput" accept="image/*" multiple onChange={handleFileChange}/>
                      </label>

                      <br />

                      <button type="submit" className="bg-green-700 px-3 py-1 mb-7 hover:bg-green-800 active:bg-green-900 rounded-md shadow">Post Your Idea.</button>

                      <br />

                      <button type="button" onClick={()=>handlePriceSelection(null)} className="bg-blue-700 px-3 py-1 mb-3 hover:bg-blue-800 active:bg-blue-900 rounded-md shadow">Make fund Request</button>
                      
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
                      )}

                    </div>
                  </form>
                </div>
            </section>
        </section>

    </section>
  )
}

export default Homepreneur
