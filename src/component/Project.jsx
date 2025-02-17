import React from 'react';

// Certificate Data
const projectData = [
  {
    title: '🌟Ai Code Reviewer MERN',
    image: 'assets/images/cr.png',
    link: 'https://code-reviewer-five.vercel.app/'
  },
  {
    title: '🌟Notes Saver App Using React',
    image: 'assets/images/Notes.png',
    link: 'https://paste-app-xi-seven.vercel.app/'
  },
  {
    title: '🌟FAAMS Website',
    image: 'assets/images/Famms.png',
    link: 'https://famms-nine.vercel.app/'
  },
  {
    title: '🌟Locomotive Website',
    image: 'assets/images/Locomotive.png',
    link: 'https://locomotive-iota.vercel.app/'
  },
  {
    title: '🌟LeetCode Metric App',
    image: 'assets/images/LeetCode.png',
    link: 'https://leet-code-metric-app.vercel.app/'
  }
];

const Project = () => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-x-16 gap-y-5 mt-10 ">
      {projectData.map((cert, index) => (
        <a 
          key={index} 
          href={cert.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="backdrop-blur-lg w-[25%] h-50 p-2 rounded-2xl shadow-md hover:shadow-[white] overflow-hidden transition-shadow"
        >
          <div className="overflow-hidden rounded-t-2xl ">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-center transition-transform duration-300 hover:scale-110 filter brightness-[90%]"
            />
          </div>
          <h3 className="text-lg font-bold ml-2">{cert.title}</h3>
        </a>
      ))}
    </div>
  );
};

export default Project;
