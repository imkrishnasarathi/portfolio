import React from 'react';

const ContactPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen rounded-lg mb-5">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Me</h1>
      <p className="text-lg mb-4 text-gray-700">
        Feel free to reach out to me through any of the following channels. I'm always interested in new opportunities and collaborations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg shadow-md p-4 bg-blue-500 text-white">
          <h2 className="text-xl font-bold mb-2">Email</h2>
          <p className="text-lg mb-4">Email me at <a href="mailto:krishnasarathishem@gmail.com" className="underline" target="_blank">krishnasarathishem@gmail.com</a></p>
          <a href="mailto:krishnasarathishem@gmail.com" className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200" target="_blank">Send Email</a>
        </div>
        <div className="rounded-lg shadow-md p-4 bg-green-500 text-white">
          <h2 className="text-xl font-bold mb-2">LinkedIn</h2>
          <p className="text-lg mb-4">Connect with me on <a href="https://www.linkedin.com/in/imkrishnasarathi" className="underline" target="_blank">LinkedIn</a></p>
          <a href="https://www.linkedin.com/in/imkrishnasarathi" className="bg-white text-green-500 px-4 py-2 rounded hover:bg-gray-200" target="_blank">Visit LinkedIn</a>
        </div>
        <div className="rounded-lg shadow-md p-4 bg-blue-400 text-white">
          <h2 className="text-xl font-bold mb-2">Twitter</h2>
          <p className="text-lg mb-4">Follow me on <a href="https://www.twitter.com/@CodesKae" className="underline" target="_blank">Twitter</a></p>
          <a href="https://www.twitter.com/@CodesKae" className="bg-white text-blue-400 px-4 py-2 rounded hover:bg-gray-200" target="_blank">Visit Twitter</a>
        </div>
        <div className="rounded-lg shadow-md p-4 bg-gray-800 text-white">
          <h2 className="text-xl font-bold mb-2">GitHub</h2>
          <p className="text-lg mb-4">Check out my projects on <a href="https://www.github.com/imkrishnasarathi" className="underline" target="_blank">GitHub</a></p>
          <a href="https://www.github.com/imkrishnasarathi" className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200" target="_blank">Visit GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
