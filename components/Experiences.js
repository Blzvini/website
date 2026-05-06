import styles from './Experiences.module.css';

const experiences = [
  {
    id: 1,
    company: 'Niteo',
    role: 'Analista de Power Platform Jr.',
    period: 'Dez 2023 – Jan 2026',
    projects: [
      {
        id: 'p1',
        name: 'Portal de Gestão de Contratos',
        context: 'Plataforma interna de um cliente do setor financeiro para centralizar o ciclo de vida de contratos — criação, aprovação, renovação e encerramento.',
        contribution: 'Responsável pela criação de planos de teste end-to-end, cobrindo fluxos críticos de aprovação e integração com sistemas legados. Desenvolvi cenários BDD em Gherkin que reduziram ambiguidades entre negócio e dev. Reportei e acompanhei bugs via Azure DevOps até encerramento.',
        stack: ['Power Apps', 'Power Automate', 'Azure DevOps', 'Gherkin (BDD)', 'SQL'],
      },
      {
        id: 'p2',
        name: 'Automação de Onboarding de Colaboradores',
        context: 'Solução de RH para automatizar o processo de integração de novos funcionários: criação de acessos, envio de documentos e notificações automáticas.',
        contribution: 'Executei testes manuais em múltiplos ambientes (dev, homologação e produção), documentei cenários críticos e apoiei o refinamento dos fluxos de automação junto ao time de desenvolvimento.',
        stack: ['Power Automate', 'Power Apps', 'Microsoft Teams', 'SharePoint', 'Azure DevOps'],
      },
    ],
  },
  {
    id: 2,
    company: 'Niteo',
    role: 'Estagiário em Projetos',
    period: 'Jan 2023 – Dez 2023',
    projects: [
      {
        id: 'p3',
        name: 'Sistema de Chamados Internos',
        context: 'Aplicação web para abertura e acompanhamento de chamados de suporte interno, substituindo um processo manual via e-mail.',
        contribution: 'Apoiei o desenvolvimento de funcionalidades com C# e Angular, implementei pequenas melhorias na interface e participei de integrações com banco de dados SQL. Também fui responsável pela documentação técnica das rotas de API.',
        stack: ['C#', '.NET', 'Angular', 'SQL', 'Git'],
      },
      {
        id: 'p4',
        name: 'Dashboard de Indicadores Operacionais',
        context: 'Painel de acompanhamento de KPIs para times de operação de um cliente de médio porte, com atualização diária via integração de dados.',
        contribution: 'Contribuí na integração de fontes de dados com Power Query, validei métricas junto às áreas de negócio e auxiliei na documentação dos cálculos implementados em DAX.',
        stack: ['Power BI', 'Power Query', 'DAX', 'SQL', 'Power Automate'],
      },
    ],
  },
];

export default function Experiences() {
  return (
    <section className={styles.experiences} id="experiencias">
      <div className="container">
        <h2 className="section-title">Experiências</h2>

        <div className={styles.container}>
          <div className={styles.timeline}>
            {experiences.map((exp) => (
              <article key={exp.id} className={styles.card}>
                <div className={styles.marker} aria-hidden="true" />

                <div className={styles.header}>
                  <div>
                    <p className={styles.company}>{exp.company}</p>
                    <h3 className={styles.role}>{exp.role}</h3>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>

                <div className={styles.projects}>
                  {exp.projects.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                      <div className={styles.projectHeader}>
                        <span className={styles.projectTag}>projeto</span>
                        <h4 className={styles.projectName}>{project.name}</h4>
                      </div>

                      <div className={styles.projectBody}>
                        <div className={styles.projectSection}>
                          <span className={styles.projectLabel}>Contexto</span>
                          <p className={styles.projectText}>{project.context}</p>
                        </div>
                        <div className={styles.projectSection}>
                          <span className={styles.projectLabel}>Contribuição</span>
                          <p className={styles.projectText}>{project.contribution}</p>
                        </div>
                      </div>

                      <div className={styles.projectStack}>
                        {project.stack.map((tech, i) => (
                          <span key={i} className={styles.stackTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
