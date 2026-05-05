export default function Experiences() {
  const experiences = [
    {
      id: 1,
      company: 'Niteo',
      role: 'Analista de Power Platform Jr.',
      period: 'Dezembro 2023 – Janeiro 2026',
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
      period: 'Janeiro 2023 – Dezembro 2023',
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

  return (
    <section className="experiences" id="experiencias">
      <div className="container">
        <h2 className="section-title">Experiências</h2>

        <div className="experiences-container">
          <div className="experience-timeline">
            {experiences.map(experience => (
              <article key={experience.id} className="experience-card">
                <div className="experience-marker" aria-hidden="true" />

                <div className="experience-header">
                  <div>
                    <p className="experience-company">{experience.company}</p>
                    <h3 className="experience-role">{experience.role}</h3>
                  </div>
                  <span className="experience-period">{experience.period}</span>
                </div>

                <div className="experience-projects">
                  {experience.projects.map(project => (
                    <div key={project.id} className="exp-project-card">
                      <div className="exp-project-header">
                        <span className="exp-project-tag">projeto</span>
                        <h4 className="exp-project-name">{project.name}</h4>
                      </div>

                      <div className="exp-project-body">
                        <div className="exp-project-section">
                          <span className="exp-project-label">Contexto</span>
                          <p className="exp-project-text">{project.context}</p>
                        </div>
                        <div className="exp-project-section">
                          <span className="exp-project-label">Contribuição</span>
                          <p className="exp-project-text">{project.contribution}</p>
                        </div>
                      </div>

                      <div className="exp-project-stack">
                        {project.stack.map((tech, i) => (
                          <span key={i} className="stack-tag">{tech}</span>
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

      <style jsx>{`
        .exp-project-card {
          margin-top: 1.25rem;
          padding: 1rem 1.1rem;
          background: rgba(248, 244, 232, 0.7);
          border: 2px solid rgba(26, 71, 42, 0.18);
          border-left: 4px solid var(--color-accent);
        }

        .exp-project-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.85rem;
        }

        .exp-project-tag {
          font-family: var(--font-family-display);
          font-size: 0.52rem;
          letter-spacing: 0.08em;
          color: #fff;
          background: var(--color-accent);
          padding: 0.25rem 0.5rem;
          text-transform: uppercase;
          flex-shrink: 0;
        }

        .exp-project-name {
          font-family: var(--font-family-body);
          font-size: 1rem;
          font-weight: 800;
          color: var(--color-text-primary);
          margin: 0;
          line-height: 1.3;
        }

        .exp-project-body {
          display: grid;
          gap: 0.65rem;
          margin-bottom: 1rem;
        }

        .exp-project-section {
          display: grid;
          gap: 0.2rem;
        }

        .exp-project-label {
          font-family: var(--font-family-display);
          font-size: 0.55rem;
          letter-spacing: 0.07em;
          color: var(--color-accent-dark);
          text-transform: uppercase;
        }

        .exp-project-text {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        .exp-project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
      `}</style>
    </section>
  );
}