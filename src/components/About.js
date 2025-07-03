import { FaLinkedin, FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-green-600">
        About Us
      </h1>

      <p className="text-gray-700 text-lg text-center mb-10">
        Welcome to my Food Delivery App! This project was built by me, Piyush
        Garg, as a way to practice and demonstrate real-world frontend and
        backend development skills. The goal is to create a smooth and
        responsive user experience for exploring and ordering food.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Piyush Garg</h2>
        <p className="text-gray-600 mb-2">Fullstack Developer</p>
        <p className="text-gray-700">
          I developed this app using React, Redux, JavaScript, Tailwind CSS, and
          integrated live APIs. It is hosted on Vercel with CI/CD setup, and
          includes features like dynamic routing, lazy loading, and automation
          unit and integration testing with Jest.
        </p>

        {/* Contact details */}
        <div className="mt-6 space-y-2">
          <a
            href="mailto:piyushgarg1021@gmail.com"
            className="block text-blue-600 hover:underline"
          >
            piyushgarg1021@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/piyush1021/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-blue-600 hover:underline"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://github.com/piyushga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-blue-600 hover:underline"
          >
            <FaGithub className="mr-2 text-black" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
