import React from 'react';

const Contact = () => {
  return (
    
    <div className="flex text-[1.8vw]">
      <div className="flex flex-col gap-6  mt-10 justify-center">
        <h2 className="mb-5 font-[anzo1] ml-32 text-[2vw]  px-4 py-3 rounded-full bg-gradient-to-r
          from-slate-900 to-gray-900 text-white border-2 border-white  text-center w-[450px]">
          Contact me
        </h2>

        <form className="flex flex-col gap-6 ml-32">
          <div className="flex flex-col justify-center">
            <label htmlFor="name">Name:</label>
            <input
              className="rounded-xl text-[1vw] p-3 w-[450px]"
              type="text"
              id="name"
              placeholder="Enter your name"
            
            />
          </div>

          <div className="flex flex-col justify-center">
            <label htmlFor="email">Email:</label>
            <input
              className="rounded-xl text-[1vw] p-3 w-[450px]"
              type="email"
              id="email"
              placeholder="Enter your email"
           
            />
          </div>

          <div className="flex flex-col justify-center">
            <label htmlFor="message">Message:</label>
            <textarea
              className="rounded-xl text-[1vw] p-3 w-[450px] text-black"
              id="message"
              placeholder="Enter message"
             
            />
          </div>

          <div className="flex flex-col justify-center">
            <button
              className="px-2 py-1 rounded-full bg-black text-white border-2 border-white hover:bg-gray-800 hover:text-white hover:border-white w-[150px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div>
        <img
          className="absolute right-[200px] mt-36 h-[300px]"
          src="assets/images/Contact-unscreen.gif"
          alt="Contact animation"
        />
      </div>
    </div>
  );
};

export default Contact;
