import React, { useRef } from "react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const tl = useRef(null);
  const boxRef = useRef(null);

  useGSAP(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .to(boxRef.current, {
        right: 38,
        duration: 0.4,
      })
      .from(
        boxRef.current.querySelectorAll("h4 , #social  "), // Use querySelectorAll to target h4 elements
        {
          x: 1000,
          duration: 0.5,
          opacity: 0,
          stagger: 0.2,
        }
      );
  });

  function handleOpen() {
    tl.current.play();
  }

  function handleClose() {
    tl.current.reverse();
  }

  return (
    <div className=" p-2 flex items-center justify-end ">
      <i
        onClick={handleOpen}
        className="ri-menu-line text-5xl text-white px-3  top-12 right-10 fixed"
      ></i>

      <div 
        ref={boxRef}
        className="z-10 text-white backdrop-blur-lg  text-[2.3vw] w-[340px] 
         right-[-360px] fixed border-2 border-white
          top-6  h-[560px] pl-4 flex flex-col gap-[30px] "
      >
        <div>
          <i
            onClick={handleClose}
            className="text-white ri-close-line text-5xl p-2 absolute right-5 top-1  rounded-[50%] "
          ></i>
        </div>

        <div className="absolute top-16 pl-10 flex flex-col gap-1">
          <h4>Work</h4>
          <h4>Project</h4>
          <h4>Skills</h4>
          <h4>Contact</h4>
        </div>

        <div id="social"
         className=" absolute bottom-4 left-14 flex flex-col gap-2 text-4xl ">
          <a
            href="https://www.linkedin.com/in/paras-gulvanshi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-box-fill hover:text-blue-400"></i>
          </a>
          <a
            href="https://www.instagram.com/parasgulvanshi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-line hover:text-pink-500"></i>
          </a>
          <a
            href="https://wa.me/+917737977406"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-whatsapp-line hover:text-green-400"></i>
          </a>
          <a
            href="https://github.com/Paras-29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill hover:text-gray-400"></i>
          </a>
          <a
            href="https://github.com/Paras-29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-mail-fill hover:text-red-600"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
