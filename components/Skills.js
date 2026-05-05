export default function Skills() {
  const skills = {
    'Data & Analytics': [
      'SQL',
      'PySpark',
      'ETL',
      'Power Query',
      'DAX'
    ],
    'Cloud Platforms': [
      'Microsoft Fabric',
      'Azure Data Lake',
      'Azure SQL Database',
      'Azure DevOps',
      'Power Platform'
    ],
    'Desenvolvimento': [
      'Python',
      'JavaScript',
      'C#',
      'Angular',
      'Next.js'
    ],
    'Ferramentas & Metodologias': [
      'Git',
      'Gherkin (BDD)',
      'Scrum/Ágil',
      'Power Automate',
      'Power Apps'
    ]
  };

  return (
    <section className="skills" id="habilidades">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        
        <div className="skills-container">
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {skillList.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}