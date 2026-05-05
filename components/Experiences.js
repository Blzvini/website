export default function Experiences() {
  const experiences = [
    {
      id: 1,
      company: 'Niteo',
      role: 'Analista de Power Platform Jr.',
      period: 'Dezembro 2023 - Janeiro 2026',
      summary:
        'Atuação em testes funcionais, apoio à qualidade de entregas e documentação de cenários em contexto ágil.',
      highlights: [
        'Elaboração e manutenção de planos de teste (test plans) com foco em validação ponta a ponta.',
        'Execução de testes manuais em diferentes etapas do ciclo de vida do software.',
        'Criação de cenários BDD (Gherkin) para representar requisitos de forma clara.',
        'Uso do Azure DevOps para controle de execuções, bugs e evidências.',
        'Apoio à equipe de desenvolvimento na identificação de falhas e melhoria da qualidade.'
      ]
    },
    {
      id: 2,
      company: 'Niteo',
      role: 'Estagiário em Projetos',
      period: 'Janeiro 2023 - Dezembro 2023',
      summary:
        'Experiência em apoio a desenvolvimento, integrações e documentação técnica com foco em entrega assistida.',
      highlights: [
        'Apoio no desenvolvimento de funcionalidades com C#, Angular e Git.',
        'Execução de testes manuais básicos e validação de funcionalidades.',
        'Colaboração em fluxos e integrações com Power Apps, Power Automate e SQL.',
        'Auxílio na elaboração e manutenção de documentação técnica.'
      ]
    }
  ];

  return (
    <section className="experiences" id="experiencias">
      <div className="container">
        <span className="section-eyebrow">// carreira</span>
        <h2 className="section-title">Experiências</h2>

        <div className="experiences-container">
          <p className="experiences-intro">
            Experiência prática em testes, automação, integrações e suporte a entregas técnicas, com foco em qualidade e colaboração.
          </p>

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

                <p className="experience-summary">{experience.summary}</p>

                <ul className="experience-highlights">
                  {experience.highlights.map((highlight, index) => (
                    <li key={index} className="experience-highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}