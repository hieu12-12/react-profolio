function About() {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-6 py-12 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            className="relative inline-block rounded-2xl object-cover object-center shadow-lg w-full"
                            alt="Portfolio Image"
                            src="/images/sara.png"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-800 font-serif font-bold md:text-4xl mb-6">
                            About Me: Web Developer & Gaming Enthusiast
                        </h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Hi there! I'm Sara Ryan, a passionate and aspiring developer based in Virginia. My journey into coding and development is fueled by my lifelong love for gaming and technology. What truly drew me to development was seeing how a few lines of code could transform into interactive experiences that users can engage with worldwide. Crazy to think just what can be created at the tips of your fingers!
                            </p>
                            <p>
                                Currently, I'm enrolled in the University of Richmond Coding Bootcamp with EdX, focusing on Full Stack Development. I'm learning everything from HTML and CSS to Node.js and React, and I'm excited to apply these skills to real-world projects.
                            </p>
                            <p>
                                One of my proudest achievements so far is creating a custom script for RedM Roleplay game servers. This script enhances the community experience by bringing real-life competitions to the game world and furthering character stories, perfectly blending my passion for gaming with my newfound coding skills.
                            </p>
                            <p>
                                Looking ahead, I'm eager to explore emerging web technologies, contribute to open-source projects, and develop innovative web applications that solve real-world problems.
                            </p>
                            <p>
                                When I'm not coding, you can find me gaming, attending tech meetups, or reading a good book. I'm thrilled to be on this exciting journey and can't wait to see where it takes me in the world of web development! Feel free to connect with me on LinkedIn or explore my projects on GitHub - I'm always excited to collaborate with fellow developers and tech enthusiasts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;