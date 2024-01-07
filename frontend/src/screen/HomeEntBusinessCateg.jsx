import { HomeEntrpID } from "../utils/credential"

const HomeEntBusinessCateg = ({categories,setSelectBusinessCateg}) => {
  return (
    <section className="w-full text-center">
        <h2 style={{fontFamily: 'Preahvihear, sans-serif'}} className="text-2xl mb-8">Business Categories</h2>
        <input className="py-1 px-1 mb-5 drop-shadow text-center" type="text" name="HomID" id="HomID" disabled value={HomeEntrpID} />
      {
        categories && categories.map((arr,index)=>(
            <div key={index} className="w-full text-center">
                <p onClick={()=>setSelectBusinessCateg(arr)} className="hover:underline cursor-pointer text-lg active:text-red-900">{arr}</p>
            </div>
        ))
      }
    </section>
  )
}

export default HomeEntBusinessCateg
