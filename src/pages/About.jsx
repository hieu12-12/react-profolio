import React from 'react';

function About() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-6 py-12 md:px-12 xl:px-6">
        <div className="flex flex-col md:flex-row md:gap-6 lg:items-center lg:gap-12">
          {/* Image Container */}
          <div className="md:w-3/12 lg:w-3/12">
            <img
              className="rounded-2xl object-cover object-center shadow-lg w-full"
              alt="Hieu Tran Portfolio"
              src="/images/hieuPorfolio.jpg"
            />
          </div>
          {/* Text Container */}
          <div className="md:w-9/12 lg:w-9/12">
            <h2 className="text-2xl text-gray-800 font-serif font-bold md:text-4xl mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Hi, I'm Hieu Tran, a passionate web developer based in Orlando, FL. My journey into coding began with a love for gaming and technology, which soon grew into a deep curiosity about software development. What excites me most is how a few lines of code can transform ideas into engaging digital experiences.
              </p>
              <p>
                I'm currently expanding my study at the University of Florida Coding Bootcamp, specializing in Full Stack Development. From front-end technologies like HTML, CSS, and React to back-end frameworks such as Node.js and MongoDB, I am dedicated to mastering the tools that bring digital experiences to life.
              </p>
              <p>
                My goal is to create innovative, user-friendly applications that address real-world challenges. I’m passionate about exploring emerging web technologies, contributing to open-source projects, and continuously pushing the limits of what I can build.
              </p>
              <p>
                Outside of coding, you’ll often find me gaming or attending tech meetups. I love connecting with fellow developers and tech enthusiasts—feel free to reach out on LinkedIn or explore my projects on GitHub!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
