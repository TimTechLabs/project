import nyumbaImg from '../assets/nyumba.png';
import emergencyImg from '../assets/emergency.png';
import apexImg from '../assets/apex.jpg';

function featuredProject() {
    const projects = [
        {
            title: "Apex Mobile E-commerce",
            description:"A full-stack e-commerce web application built with React, Node.js, and MongoDB. It features user authentication, product listings, shopping cart functionality, and payment integration.",
            techStack: ["React", "Node.js", "MongoDB", "Express", "Python"],
            link: "https://github.com/Timtechlabs/apex-mobile-ecommerce",
            image: apexImg,
            githubLink: "https://github.com/Timtechlabs/apex-mobile-ecommerce"
        },
        {
            title: "Nyumbapay Rental Management System",
            description: "A web application for managing rental properties, tenants, and payments. Built with React, Node.js, and MongoDB, it allows landlords to track rent payments, manage tenant information, and generate reports.",
            techStack: ["React", "Node.js", "MongoDB", "Express"],
            link: "https://github.com/Timtechlabs/nyumbapay",
            image: nyumbaImg,
            githubLink: "https://github.com/Timtechlabs/nyumbapay"
        },
        {
            title: "Emergency Room Booking System",
            description: "A web application that allows users to book appointments for emergency room visits. Built with React, Node.js, and MongoDB, it provides a user-friendly interface for scheduling appointments and managing patient information.",
            techStack: ["React", "Node.js", "MongoDB", "Express"],
            link: "https://github.com/Timtechlabs/emergency-room-booking-system",
            image: emergencyImg,
            githubLink: "https://github.com/Timtechlabs/emergency-room-booking-system"
        }
    ];

  return (
    <section id="projects" className="px-6 py-16 md:py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <article 
            key={index} 
            className="bg-white p-6 rounded-lg border border-gray-200"
          >
            
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title} 
                className="float-right ml-4 mb-2 w-12 h-12 rounded-lg object-cover border border-gray-200"
              />
            )}

            
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            
            <div className="flex flex-wrap gap-2 mb-4 clear-left">
              {project.techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
    );
}
export default featuredProject;