import React from 'react';

// Certificate Data
const certificateData = [
  {
    title: 'Cloud Computing',
    description: 'Issued By NPTEL, IIT Kharagpur',
    image: 'src/assets/images/CC.jpeg',
  },
  {
    title: 'SQL And Relational Database',
    description: 'Issued by IBM, Cognitiveclass.ai',
    image: 'src/assets/images/IBM.jpeg',
  },
  {
    title: 'Micro Certification',
    description: 'Issued by Service Now',
    image: 'src/assets/images/SN.png',
  },
  {
    title: 'Postman API Fundamental Student Expert',
    description: 'Issued By Postman Academy',
    image: 'src/assets/images/PAPI.jpeg',
  },
  {
    title: 'Entrepreneurship & IP Strategy',
    description: 'Issued By NPTEL, IIT Kharagpur',
    image: 'src/assets/images/E&IP.jpeg',
  }
];

const Certification = () => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-x-16 gap-y-5 mt-10">
      {certificateData.map((cert, index) => (
        <div 
          key={index} 
          className="backdrop-blur-lg w-[25%] h-56 p-1 rounded-2xl shadow-md hover:shadow-[white] overflow-hidden transition-shadow"
        >
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-center transition-transform duration-300 hover:scale-110 filter brightness-[90%]"
            />
          </div>
          <h3 className="text-md font-bold ml-2">{cert.title}</h3>
          <p className="text-sm ml-2">{cert.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Certification;
