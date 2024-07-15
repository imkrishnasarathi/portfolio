import React from 'react';
import { FaTwitter, FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex flex-col items-center mb-6'>
      <ul className='flex'>
        <li className='mx-2'>
          <a href="https://twitter.com/CodesKae" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </li>
        <li className='mx-2'>
          <a href="https://github.com/imkrishnasarathi" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
        <li className='mx-2'>
          <a href="https://youtube.com/@KrishCodes" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>
        </li>
        <li className='mx-2'>
          <a href="https://linkedin.com/in/imkrishnasarathi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </li>
      </ul>
      <br />
      <p>Built by Krishna Sarathi Ghosh</p>
    </div>
  );
}

export default Footer;
