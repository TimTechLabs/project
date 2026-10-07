

function Skills() {
    const skillCategories =[
        {title: "Frontend Development",
        skills: ["HTML", "CSS", "JavaScript", "React"]},
        {title: "Backend Development", 
        skills: ["Node.js", "Python", "Database Design"]},
        {title: "Tools and Workflows",
        skills:["Git", "GitHub", "VS Code", "Agile Methodologies"]}
    ];
  return (
    <section id="projects" className="px-6 py-16" md:py-16>
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <p className="text-lg text-gray-600">
            Here are some of the technologies and tools I'm proficient in:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <span className="text-lg font-semibold mb-4">Frontend Development</span>
                <ul className="list-disc pl-5 text-gray-600">
                    {skillCategories[0].skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div>
                <span className="text-lg font-semibold mb-4">Backend Development</span>
                <ul className="list-disc pl-5 text-gray-600">
                    {skillCategories[1].skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div>
                <span className="text-lg font-semibold mb-4">Tools and Workflows</span>
                <ul className="list-disc pl-5 text-gray-600">
                    {skillCategories[2].skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  );

}
export default Skills;
