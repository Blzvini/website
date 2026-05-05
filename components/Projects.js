export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Pipeline ETL em Azure Data Lake',
      description: 'Desenvolvimento de pipeline robusto de ETL utilizando PySpark e Microsoft Fabric, com ingestão de dados em Azure Data Lake e transformações complexas para modelagem dimensional.',
      stack: ['PySpark', 'SQL', 'Fabric', 'Azure Data Lake'],
      link: '#',
      highlight: true
    },
    {
      id: 2,
      title: 'Automação com Power Platform',
      description: 'Criação de fluxos de automação com Power Automate integrados a Power Apps, reduzindo tempo manual de processamento em 60% e melhorando qualidade dos dados.',
      stack: ['Power Automate', 'Power Apps', 'SQL', 'Azure'],
      link: '#'
    },
    {
      id: 3,
      title: 'Dashboard Analítico em Power BI',
      description: 'Desenvolvimento de dashboard executivo com KPIs em tempo real, utilizando DAX avançado e modelagem de dados otimizada para performance.',
      stack: ['Power BI', 'DAX', 'SQL', 'Power Query'],
      link: '#'
    },
    {
      id: 4,
      title: 'Sistema de Testes BDD',
      description: 'Implementação de framework de testes com cenários Gherkin para validação de funcionalidades complexas, melhorando rastreabilidade de requisitos.',
      stack: ['Gherkin', 'BDD', 'Azure DevOps', 'QA'],
      link: '#'
    },
    {
      id: 5,
      title: 'Migração de Dados para Cloud',
      description: 'Planejamento e execução de migração de base de dados on-premises para Azure SQL Database, garantindo zero downtime e integridade dos dados.',
      stack: ['Azure SQL', 'Data Migration', 'T-SQL', 'Azure'],
      link: '#'
    },
    {
      id: 6,
      title: 'API REST com C# e Angular',
      description: 'Desenvolvimento full-stack de aplicação web com backend em C# e frontend em Angular, seguindo padrões SOLID e práticas ágeis.',
      stack: ['C#', 'Angular', '.NET', 'Git'],
      link: '#'
    }
  ];

  return (
    <section className="projects" id="projetos">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <p className="project-card-description">{project.description}</p>
                  
                  <div className="project-stack">
                    {project.stack.map((tech, index) => (
                      <span key={index} className="stack-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="project-card-link">
                  <a href={project.link} className="btn">
                    Ver Projeto →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}