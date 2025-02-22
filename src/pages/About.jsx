import React from 'react';

function About() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-6 py-12 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          {/* Adjusted image container to 3/12 of the width */}
          <div className="md:w-3/12 lg:w-3/12">
            <img
              className="relative inline-block rounded-2xl object-cover object-center shadow-lg w-full"
              alt="Portfolio Image"
              src="/images/hieuPorfolio.jpg"
            />
          </div>
          {/* Text container occupies the remaining space */}
          <div className="md:w-9/12 lg:w-9/12">
            <h2 className="text-2xl text-gray-800 font-serif font-bold md:text-4xl mb-6">
              About Me: Web Developer
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hi, I'm Hieu Tran, a passionate web developer based in Orlando, FL. My journey into coding started with a love for gaming and technology, which evolved into a deep curiosity about how software works behind the scenes. What fascinates me most is how a few lines of code can create interactive experiences that people around the world can engage with.
              </p>
              <p>
                I'm currently honing my skills at the University of Florida Coding Bootcamp, focusing on Full Stack Development. From front-end technologies like HTML, CSS, and React to back-end frameworks like Node.js and MongoDB, I'm dedicated to mastering the tools that bring digital experiences to life.
              </p>
              <p>
                My goal is to build innovative, user-friendly applications that solve real-world problems. I'm eager to explore emerging web technologies, contribute to open-source projects, and continuously push the boundaries of what I can create.
              </p>
              <p>
                When I'm not coding, you'll find me gaming or attending tech meetups. I'm always open to collaborating with fellow developers and tech enthusiasts—so feel free to connect with me on LinkedIn or check out my projects on GitHub!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
