import React from 'react'
import TiltText from '../component/TiltText'
import Summary from '../component/Summary'
import Header from '../component/Header'

const Page1 = () => {

  const mouseMoving = (e) =>{
    console.log("hello")
  }

  return (
   <>
    <div onMouseMove={(e)=>{
      mouseMoving(eval)}} className='h-screen bg-white px-3 py-3'>
         <div className="text-white h-full w-full rounded-[50px] shadow-2xl shadow-black bg-gradient-to-r
         from-gray-600 to-black   ">

        <button className=' px-3 py-3 rounded-full  bg-black 
        text-white border-2 border-white text-xl 
        hover:bg-gray-300 hover:text-black hover:border-black absolute right-32 mt-8 '>Contact</button>

         <Header/>

        <img className='absolute top-4 left-4 h-[150px] w-[150px]' src="src\assets\images\logo.png" alt="image" />

        

        <TiltText/>
        <Summary/>
        </div>
    </div>
   
   
   </>
  )
}

export default Page1