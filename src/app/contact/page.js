import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      value: 'krishnasarathishem@gmail.com',
      link: 'mailto:krishnasarathishem@gmail.com',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      title: 'LinkedIn',
      value: 'imkrishnasarathi',
      link: 'https://www.linkedin.com/in/imkrishnasarathi',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: <FaTwitter className="text-3xl" />,
      title: 'Twitter',
      value: '@CodesKae',
      link: 'https://www.twitter.com/@CodesKae',
      color: 'from-cyan-400 to-blue-400',
    },
    {
      icon: <FaGithub className="text-3xl" />,
      title: 'GitHub',
      value: 'imkrishnasarathi',
      link: 'https://www.github.com/imkrishnasarathi',
      color: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <div className="p-8 min-h-screen text-white">
      <h1 className="text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-white">
        Get in Touch
      </h1>
      <p className="text-xl mb-12 text-center text-gray-300 max-w-2xl mx-auto">
        I'm always open to new opportunities and collaborations. Feel free to reach out through any of the following channels.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${method.color}`}
          >
            <div className="p-6 flex flex-col items-center">
              <div className="mb-4">{method.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{method.title}</h2>
              <p className="text-lg mb-4 text-center break-all">{method.value}</p>
              <a
                href={method.link}
                className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
