export default function Skills() {
  const skillsData = [
    { name: 'SQL', level: 90 },
    { name: 'PySpark', level: 88 },
    { name: 'ETL', level: 87 },
    { name: 'Power Query', level: 85 },
    { name: 'DAX', level: 83 },
    { name: 'Microsoft Fabric', level: 88 },
    { name: 'Azure Data Lake', level: 86 },
    { name: 'Azure SQL Database', level: 85 },
    { name: 'Azure DevOps', level: 84 },
    { name: 'Power Platform', level: 82 },
    { name: 'Python', level: 89 },
    { name: 'JavaScript', level: 86 },
    { name: 'C#', level: 84 },
    { name: 'Angular', level: 82 },
    { name: 'Next.js', level: 85 },
    { name: 'Git', level: 91 },
    { name: 'Gherkin (BDD)', level: 80 },
    { name: 'Scrum/Ágil', level: 88 },
    { name: 'Power Automate', level: 81 },
    { name: 'Power Apps', level: 79 }
  ];

  return (
    <section className="skills" id="habilidades">
      <div className="container">
        <span className="section-eyebrow">// stack</span>
        <h2 className="section-title">Habilidades</h2>

        <div className="skills-container">
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-card-level">
                  <span className="skill-level-label">LVL</span>
                  <span className="skill-level-number">{skill.level}</span>
                </div>
                <div className="skill-card-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}