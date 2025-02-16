import React from 'react'

const TiltText = () => {
  return (
   <div className='flex gap-10'>
        <div className='absolute left-32 top-[250px]'>
        <h1 className='text-[5.5vw] font-[anzo4] text-white leading-[40px] ml-[18px]'>I'M<span className="bg-[url('src/assets/images/fire.jpg')] bg-cover bg-center  bg-clip-text text-transparent
         font-[anzo2] text-[5.5vw] ml-[65px]">PARAS</span></h1>
        <h1 className='text-white text-[6.3vw] font-[anzo4]  ml-[10px]'>Gulvanshi</h1>

        </div>

        <div>

          <img className='absolute right-[200px] top-[160px] h-[300px]' src="src\assets\welcome-unscreen.gif" alt=""/>   
        </div>

   </div>
  )
}

export default TiltText