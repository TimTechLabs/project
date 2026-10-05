function featuredProject() {
    const projects = [
        {
            title: "Apex Mobile E-commerce",
            description:"A full-stack e-commerce web application built with React, Node.js, and MongoDB. It features user authentication, product listings, shopping cart functionality, and payment integration.",
            techStack: ["React", "Node.js", "MongoDB", "Express", "Python"],
            link: "https://github.com/Timtechlabs/apex-mobile-ecommerce",
            githubLink: "https://github.com/Timtechlabs/apex-mobile-ecommerce"
        },
        {
            title: "Nyumbapay Rental Management System",
            description: "A web application for managing rental properties, tenants, and payments. Built with React, Node.js, and MongoDB, it allows landlords to track rent payments, manage tenant information, and generate reports.",
            techStack: ["React", "Node.js", "MongoDB", "Express"],
            link: "https://github.com/Timtechlabs/nyumbapay",
            githubLink: "https://github.com/Timtechlabs/nyumbapay"
        },
        {
            title: "Emergency Room Booking System",
            description: "A web application that allows users to book appointments for emergency room visits. Built with React, Node.js, and MongoDB, it provides a user-friendly interface for scheduling appointments and managing patient information.",
            techStack: ["React", "Node.js", "MongoDB", "Express"],
            link: "https://github.com/Timtechlabs/emergency-room-booking-system",
            githubLink: "https://github.com/Timtechlabs/emergency-room-booking-system"
        },
    ];
    return (
        <section className="fetured-projects">
            <h2>Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                View Project
                            </a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default featuredProject;