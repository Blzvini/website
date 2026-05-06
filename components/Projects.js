import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Pipeline ETL em Azure Data Lake',
    description: 'Desenvolvimento de pipeline robusto de ETL utilizando PySpark e Microsoft Fabric, com ingestão de dados em Azure Data Lake e transformações complexas para modelagem dimensional.',
    stack: ['PySpark', 'SQL', 'Fabric', 'Azure Data Lake'],
    link: '#',
    highlight: true,
  },
  {
    id: 2,
    title: 'Automação com Power Platform',
    description: 'Criação de fluxos de automação com Power Automate integrados a Power Apps, reduzindo tempo manual de processamento em 60% e melhorando qualidade dos dados.',
    stack: ['Power Automate', 'Power Apps', 'SQL', 'Azure'],
    link: '#',
  },
  {
    id: 3,
    title: 'Dashboard Analítico em Power BI',
    description: 'Desenvolvimento de dashboard executivo com KPIs em tempo real, utilizando DAX avançado e modelagem de dados otimizada para performance.',
    stack: ['Power BI', 'DAX', 'SQL', 'Power Query'],
    link: '#',
  },
  {
    id: 4,
    title: 'Sistema de Testes BDD',
    description: 'Implementação de framework de testes com cenários Gherkin para validação de funcionalidades complexas, melhorando rastreabilidade de requisitos.',
    stack: ['Gherkin', 'BDD', 'Azure DevOps', 'QA'],
    link: '#',
  },
  {
    id: 5,
    title: 'Migração de Dados para Cloud',
    description: 'Planejamento e execução de migração de base de dados on-premises para Azure SQL Database, garantindo zero downtime e integridade dos dados.',
    stack: ['Azure SQL', 'Data Migration', 'T-SQL', 'Azure'],
    link: '#',
  },
  {
    id: 6,
    title: 'API REST com C# e Angular',
    description: 'Desenvolvimento full-stack de aplicação web com backend em C# e frontend em Angular, seguindo padrões SOLID e práticas ágeis.',
    stack: ['C#', 'Angular', '.NET', 'Git'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projetos">
      <div className="container">
        <h2 className="section-title on-dark">Projetos</h2>

        <p className={styles.intro}>
          Uma seleção de projetos que melhor representam minha forma de trabalhar:
          dados ponta a ponta, automação e construção em público.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => {
            const isExternal = project.link && project.link.startsWith('http');
            const hasLink = project.link && project.link !== '#';
            return (
              <article
                key={project.id}
                className={styles.card}
              >
                <div className={styles.cardContent}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>

                  <ul className={styles.stack}>
                    {project.stack.map((tech, i) => (
                      <li key={i} className={styles.stackTag}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.actions}>
                  {hasLink ? (
                    <a
                      href={project.link}
                      className="btn"
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      Ver projeto →
                      {isExternal && <span className="sr-only"> (abre em nova aba)</span>}
                    </a>
                  ) : (
                    <span className={styles.soonTag}>Em breve</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
