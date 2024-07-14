import React from 'react';

const projects = [
  {
    title: 'PleasantWeb',
    description: 'PleasantWeb is a smart browser extension designed to enhance your online experience by alerting you of unsuitable content. It analyses web pages and provides warnings for content that may be inappropriate or offensive. PleasantWeb helps ensure your online environment remains positive and safe!',
    link: 'https://github.com/imkrishnasarathi/pleasantweb/',
  },
  {
    title: 'News For My Bro',
    description: 'This is a simple python program which reads out the latest news for you! The project is made for educational purposes and you can tinker with it to make your very own news reader app!',
    link: 'https://github.com/imkrishnasarathi/News-For-My-Bro/',
  },
  {
    title: 'Coming Soon...',
    description: '',
    link: '',
  },
];

const ProjectsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
