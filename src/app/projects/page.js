import React from 'react';

const projects = [
  {
    title: 'PleasantWeb',
    description: 'A smart browser extension designed to enhance your online experience by alerting you of unsuitable content, and ensuring your online experience is safe and pleasant!',
    link: 'https://github.com/imkrishnasarathi/pleasantweb/',
    bg: '/project/pleasantweb.png',
    stack: ['HTML', 'CSS', 'Vanilla JS'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'News For My Bro',
    description: 'A simple python program which reads out the latest news for you! Made for educational purposes and feel free to tinker with it!',
    link: 'https://github.com/imkrishnasarathi/News-For-My-Bro/',
    bg: '/project/news-for-my-bro.png',
    stack: ['Python', 'News API'],
    gradient: 'from-blue-400 to-emerald-400',
  },
  {
    title: 'Pixel Art Canvas',
    description: "Unleash your creative side and create simple but fun pixel artworks...",
    link: 'https://github.com/imkrishnasarathi/pixel-art-canvas/',
    bg: '/project/pixelart.jpg',
    stack: ["HTML", "CSS", "Vanilla JS"],
    gradient: 'from-emerald-500 to-pink-500',
  }
];

const ProjectsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 bg-gradient-to-br ${project.gradient}`}
          >
            {/* More visible background image */}
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center" 
              style={{backgroundImage: `url(${project.bg})`}}
            ></div>
            {/* Slightly lighter dark overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative p-6 h-full flex flex-col justify-between z-10 text-center">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">{project.title}</h2>
                <p className="text-white text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="bg-white bg-opacity-20 text-white text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-300 hover:bg-opacity-90"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
