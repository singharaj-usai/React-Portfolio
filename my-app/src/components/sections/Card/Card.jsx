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
        <aside >
            <div>
            <img src={picture} alt="singharaj" className="w-full" />
            </div>
            <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">John Doe</h1>
        <p className="text-sm text-gray-400 mb-3">
          Frontend Web Developer at
          <a href="#0" className="text-purple-600 pl-1">
            Abc Company
          </a>
        </p>
        <a
          href="#0"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume"
        >
          Download Resume
        </a>

      </div>
        </aside>
    );
};

export default Card;