import React from 'react';

const projects = [
  {
    title: 'PleasantWeb',
    description: 'PleasantWeb is a smart browser extension designed to enhance your online experience by alerting you of unsuitable content. It analyses web pages and provides warnings for content that may be inappropriate or offensive. PleasantWeb helps ensure your online environment remains positive and safe!',
    link: 'https://github.com/imkrishnasarathi/pleasantweb/',
    bg: '/project/pleasantweb.png',
  },
  {
    title: 'News For My Bro',
    description: 'This is a simple python program which reads out the latest news for you! The project is made for educational purposes and you can tinker with it to make your very own news reader app!',
    link: 'https://github.com/imkrishnasarathi/News-For-My-Bro/',
    bg: '/project/news-for-my-bro.png',
  },
  {
    title: 'Coming Soon...',
    description: '',
    link: '',
    bg: '',
  },
];

const ProjectsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-4 ${project.title === 'Coming Soon...' ? 'bg-gray-800 text-white' : 'bg-white'} flex flex-col justify-center items-center h-full transition-transform transform hover:scale-105 hover:shadow-lg`}
            style={{ backgroundImage: `url(${project.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-2xl font-bold mb-2 text-center">{project.title}</h2>
            <p className="text-lg mb-4 text-center overflow-hidden">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
