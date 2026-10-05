

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
        <section className="skills">
            <h2 className="skills-title">Skills & Technologies</h2>
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skills-category">
                        <h3 className="category-title">{category.title}</h3> 
                        <div className="skills-list">
                            {category.skills.map((skill, skillIndex) => (
          <span key={skillIndex} className="skill-item">{skill}</span>
        ))}
      </div>
    </div>
  ))}
</div>
</section>
    );
}
export default Skills;
