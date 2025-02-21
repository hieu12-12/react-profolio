function Project({project}) {
  return (
      <div className="w-full md:w-1/2 xl:w-1/3 px-4">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square w-full">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
              </div>
              <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-gray-900/60 backdrop-blur-sm p-2">
                  <h3>
                    <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-200 text-lg block hover:text-blue-400 transition-colors duration-300">{project.title}</a>
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-2">{project.description}</p>
                  <div className="flex justify-center space-x-4">
                      <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md border border-gray-700 py-1 px-4 text-sm font-semibold text-gray-300 hover:text-blue-400 hover:border-blue-400 transition-colors duration-300">View Details</a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md border border-gray-700 py-1 px-4 text-sm font-semibold text-gray-300 hover:text-blue-400 hover:border-blue-400 transition-colors duration-300">GitHub</a>
                  </div>
              </div>
          </div>
      </div>
  )
 }
 
 export default Project;