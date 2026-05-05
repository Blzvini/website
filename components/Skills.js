export default function Skills() {
  const skillsByType = [
    {
      type: 'Linguagens',
      items: ['Python', 'SQL', 'JavaScript', 'C#']
    },
    {
      type: 'Dados & Cloud',
      items: ['PySpark', 'ETL', 'Microsoft Fabric', 'Azure Data Lake', 'Azure SQL Database']
    },
    {
      type: 'BI & Analytics',
      items: ['Power Query', 'DAX', 'Power Platform', 'Power BI']
    },
    {
      type: 'Desenvolvimento',
      items: ['Next.js', 'Angular', 'APIs REST']
    },
    {
      type: 'Ferramentas & Metodologias',
      items: ['Git', 'Azure DevOps', 'Gherkin (BDD)', 'Scrum/Ágil', 'Power Automate', 'Power Apps']
    }
  ];

  return (
    <section className="skills" id="habilidades">
      <div className="container">
        <span className="section-eyebrow">// stack</span>
        <h2 className="section-title">Habilidades</h2>

        <div className="skills-container">
          <div className="skills-grid">
            {skillsByType.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{category.type}</h3>
                <ul className="skill-list">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="skill-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}