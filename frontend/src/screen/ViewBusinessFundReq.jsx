import React, { useState } from 'react'
import EntpreneurDetails from './EntpreneurDetails';

const ViewBusinessFundReq = ({entrepreneurIdea,findingEntr}) => {
    const [fundReq,userFundReq]=useState(true)
  return (
    <>
      <section className='w-full md:w-[142%] h-full'>
            <h1 style={{fontFamily: 'Preahvihear, sans-serif'}} className="text-center font-mono text-2xl mb-10">Entpreneur Details</h1>

            <section className='w-4/12 h-[90%] px-5 m-auto overflow-y-auto'>
                {
                    entrepreneurIdea.map((home)=>{
                        const matchingDetails = findingEntr.find(item2=>item2._id === home.user);

                        if(matchingDetails){
                            return(
                                <EntpreneurDetails fundReq={fundReq} key={home._id} home={home} matchingDetails={matchingDetails}/>
                            )
                        }
                        return null
                    })
                }
            </section>
        </section>
    </>
  )
}

export default ViewBusinessFundReq
