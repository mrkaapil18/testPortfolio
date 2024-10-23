// src/pages/index.js
import React from 'react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center">
                    Hi, I'm Kapil,
                </h1>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center">
                    This is still under construction
                </h1>
                <p className="text-xl md:text-2xl text-white text-center mb-8">
                    Full Stack Developer | MERN Stack Enthusiast | Next.js Expert
                </p>
                <a
                    href="#projects"
                    className="px-6 py-3 text-lg text-white bg-blue-700 rounded-full hover:bg-teal-600 transition-all"
                >
                    Explore My Work
                </a>
            </section>

            {/* About Section */}
            <section id="about" className="flex flex-col items-center py-20 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    About Me
                </h2>
                <p className="text-lg text-gray-600 text-center max-w-3xl">
                    I'm a passionate web developer skilled in building responsive and
                    dynamic web applications using React.js, Next.js, and the MERN stack.
                    With a focus on clean design and efficient performance, I aim to
                    create seamless user experiences. I'm also exploring backend
                    technologies like Appwrite and DigitalOcean to expand my skillset.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
                    {/* Project Cards */}
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Jira Clone</h3>
                        <p className="text-gray-600 mb-4">
                            A Next.js project replicating Jira's functionality with a robust,
                            industry-standard file structure and dynamic task management.
                        </p>
                        <a
                            href="https://github.com/your-github/jira-clone"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-teal-500"
                        >
                            View Project
                        </a>
                    </div>

                    <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                        <p className="text-gray-600 mb-4">
                            A personal portfolio built using React, Next.js, and Tailwind CSS
                            to showcase my skills and projects.
                        </p>
                        <a
                            href="https://your-portfolio.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-teal-500"
                        >
                            View Project
                        </a>
                    </div>

                    {/* Add more project cards as needed */}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="flex flex-col items-center py-20 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Get In Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
                    Have a project in mind or just want to connect? Feel free to reach out
                    to me via email or connect on my social media profiles below.
                </p>
                <a
                    href="mailto:youremail@example.com"
                    className="px-6 py-3 text-lg text-white bg-blue-700 rounded-full hover:bg-teal-600 transition-all"
                >
                    Contact Me
                </a>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-gray-800 text-center text-white">
                <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
