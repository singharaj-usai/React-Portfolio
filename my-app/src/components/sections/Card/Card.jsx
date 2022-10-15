import React from 'react';
import{ FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import picture from '../../../images/noob.png';

const socials = [
    {
        id: 1,
        icon: <FaGithub/>,
        link: '#https://github.com/singharaj-usai',
    },
    {
        id: 2,
        icon: <FaLinkedinIn/>,
        link: '#https://www.linkedin.com/in/singharaj-usai',
    },
    {
        id: 3,
        icon: <FaTwitter/>,
        link: '#https://twitter.com/OMrbobbilly',
    },
]

const Card = () => {
    return (
        <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
            <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
            <img src={picture} alt="singharaj" className="w-full" />
            </div>
            <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Singharaj Usai</h1>
        <p className="text-sm text-gray-400 mb-3">
          Fullstack Web Developer Student at
          <a href="#https://bootcamp.msu.edu/" className="text-teal-500 pl-1 hover:text-teal-300 transition ease-out duration-200">
            Michigan State University's Code Camp
          </a>
        </p>
        <a
          href="#0"
          className="inline-block mb-3 rounded bg-teal-500 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-teal-300 transition ease-out duration-200"
          download="Resume"
        >
          Download Resume
        </a>

      </div>
        </aside>
    );
};

// From our React class notes props
const socials = (props) {

}

export default Card;