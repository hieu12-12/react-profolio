import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Weather.App",
      description: "Your Ultimate Travel Weather Companion",
      image: "/images/weather-app.png", 
      deployedUrl: "https://hieu12-12.github.io/Weather.App/",
      github: "https://github.com/hieu12-12/Weather.App",
      className: "project-1"
    },
    {
      id: 2,
      title: "Breaking News",
      description: "Stay Updated with Real-Time Events",
      image: "/images/breaking-news.png", 
      deployedUrl: "https://breaking-new.onrender.com/",
      github: "https://github.com/hieu12-12/Breaking-New",
      className: "project-2"
    },
    {
      id: 3,
      title: "README Generator",
      description: "Effortlessly Create Professional README Files",
      image: "/images/readme-generator.png", 
      deployedUrl: "https://github.com/hieu12-12/README-Generator-/blob/main/README.md",
      github: "https://github.com/hieu12-12/README-Generator-",
      className: "project-3"
    },
    {
      id: 4,
      title: "Vehicle Creator",
      description: "Customize and Generate Vehicles with Ease",
      image: "/images/vehicle-creator.png", 
      deployedUrl: "https://github.com/hieu12-12/Vehicle-Creator-/blob/main/README.md",
      github: "https://github.com/hieu12-12/Vehicle-Creator-",
      className: "project-4"
    }
  ];

  return (
    <div className="bg-gray-100">
      <h2 className="text-4xl pt-8 text-center text-gray-800 font-serif mb-8">
        Featured Projects
      </h2>
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
