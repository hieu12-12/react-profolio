import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "JourneySync",
      description: "Travel Planning Companion",
      image: "https://github.com/MadamLoki/tech-titan-travel-app/blob/main/assets/images/journeysync.png?raw=true", 
      deployedUrl: "https://madamloki.github.io/tech-titan-travel-app/",
      github: "https://github.com/MadamLoki/tech-titan-travel-app",
      className: "project-2"
    },
    {
      id: 2,
      title: "Loki-Rodeo",
      description: "A RedM Script",
      image: "https://github.com/MadamLoki/sara-ryan-portfolio/blob/main/assets/images/rodeopngwebsite.png?raw=true",
      deployedUrl: "https://mloki-scripts.tebex.io/",
      github: "https://github.com/MadamLoki/Loki-Rodeo",
      className: "project-1"
    },
    {
      id: 3,
      title: "SQL Employee Tracker",
      description: "CLI application to manage employees and database",
      image: "https://github.com/MadamLoki/sqlemployeetracker/blob/master/asset/image.png?raw=true",
      deployedUrl: "https://github.com/MadamLoki/sqlemployeetracker/blob/master/README.md",
      github: "https://github.com/MadamLoki/sqlemployeetracker",
      className: "project-3"
    },
    {
      id: 4,
      title: "README Generator",
      description: "CLI application to generate README.md files",
      image: "https://github.com/MadamLoki/sara-ryan-portfolio/blob/main/assets/images/creativeproject.png?raw=true",
      deployedUrl: "https://github.com/MadamLoki/readme-generator/blob/main/README.md",
      github: "https://github.com/MadamLoki/readme-generator",
      className: "project-4"
    },
  ];

  return (
    <div className="bg-gray-100">
      <h2 className="text-4xl pt-8 text-center text-gray-800 font-serif mb-8">Featured Projects</h2>
      <section className="py-12">
        <div className="container mx-auto px-3">
          <div className="flex flex-wrap -mx-4">
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;