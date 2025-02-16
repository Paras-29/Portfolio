import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const Skills = () => {
  const imagesContainerRef = useRef(null); // Reference for images container

  // Handle scroll with gsap and trigger infinite scrolling
  const handleWheel = (e) => {
    const container = imagesContainerRef.current;

    // If scrolling down, move the images to the left
    if (e.deltaY > 0) {
      gsap.to(container, {
        x: '-100%', // Move the images to the left
        duration: 15,
        ease: 'none',
        onComplete: () => {
          // Reset position instantly after animation completes for smooth loop
          gsap.set(container, { x: '0%' });
        },
      });
    } else {
      // If scrolling up, move the images to the right
      gsap.to(container, {
        x: '100%', // Move the images to the right
        duration: 15,
        ease: 'none',
        onComplete: () => {
          // Reset position instantly after animation completes for smooth loop
          gsap.set(container, { x: '0%' });
        },
      });
    }
  };

  useLayoutEffect(() => {
    // Add event listener for wheel scroll
    window.addEventListener('wheel', handleWheel);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="h-screen bg-white px-3 py-3">
      {/* Gradient container with border */}
      <div className="text-white relative h-full w-full rounded-[50px] shadow-2xl shadow-black bg-gradient-to-r from-gray-600
       to-black py-5">
        
        <h2 className="w-[95%] p-2  backdrop-blur-3xl   rounded-2xl text-white text-center text-[3vw] border-2 border-white
         font-[anzo1] ml-5">
          Skills
        </h2>

        {/* Outer container that holds everything (with border and overflow hidden) */}
        <div className="relative overflow-hidden w-[100%] h-[150px] top-48">
          {/* Scrolling images */}
          <div
            ref={imagesContainerRef}
            className="skill-images flex gap-8 absolute top-0 py-3 px-6"
            style={{ display: 'flex', transform: 'translateX(-30%)' }}
          >
            {/* Image set */}
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-html-48.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-github-64.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-js-48.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-react-80.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-nodejs-144.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-express-js-96.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-tailwind-css-96.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/gsap-removebg-preview.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-mongo-db-96.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-css-48.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            {/* Duplicating images for smooth transition */}
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-html-48.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-github-64.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-js-48.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-react-80.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="w-[100px]">
              <img
                src="src/assets/icons/icons8-nodejs-144.png"
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
