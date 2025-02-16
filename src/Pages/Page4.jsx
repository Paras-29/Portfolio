import React from 'react'
import Certification from '../component/Certification'

const Page4 = () => {
  return (
    <>
     <div className='h-screen bg-white px-3 py-3'>
    <div className="text-white h-full w-full rounded-[50px] shadow-2xl shadow-black bg-gradient-to-r
     from-gray-600 to-black pt-2">

    <h2 className="w-[97%] p-2  backdrop-blur-3xl  rounded-2xl text-white text-center text-[2.3vw] border-2 border-white
         font-[anzo1] ml-5 mb-14">
          Certifications
      </h2>


        <Certification/>

      </div>
    </div>
    </>
  )
}

export default Page4