import styles from './Experiences.module.css';

const TECH_DESCRIPTIONS = {
  'Power Apps': 'Plataforma low-code da Microsoft para criar apps web e mobile integrados a dados corporativos.',
  'Power Automate': 'Automatiza fluxos de trabalho entre aplicações e serviços sem necessidade de código.',
  'Azure DevOps': 'Suite Microsoft para CI/CD, gestão de projetos e controle de versão.',
  'Gherkin (BDD)': 'Linguagem legível por humanos para descrever comportamentos em testes BDD.',
  'SQL': 'Linguagem padrão para consulta e manipulação de bancos de dados relacionais.',
  'Microsoft Teams': 'Plataforma de comunicação e colaboração corporativa da Microsoft.',
  'SharePoint': 'Plataforma Microsoft para gestão de documentos e intranets corporativas.',
  'C#': 'Linguagem orientada a objetos da Microsoft, base do ecossistema .NET.',
  '.NET': 'Framework multiplataforma para desenvolvimento de apps web, mobile e desktop.',
  'Angular': 'Framework TypeScript do Google para SPAs com arquitetura baseada em componentes.',
  'Git': 'Sistema de controle de versão distribuído para rastrear mudanças no código.',
  'Power BI': 'Ferramenta de BI da Microsoft para criação de dashboards e relatórios interativos.',
  'Power Query': 'ETL visual da Microsoft para extração e transformação de dados sem código.',
  'DAX': 'Linguagem de fórmulas do Power BI e Analysis Services para cálculos analíticos.',
};

const experiences = [
  {
    id: 1,
    company: 'Niteo',
    role: 'Analista de Power Platform Jr.',
    period: 'Dez 2023 – Jan 2026',
    projects: [
      {
        id: 'p1',
        name: 'Close Up',
        context: 'O projeto consistia no desenvolvimento de um sistema web para gerenciamento de Ordens de Serviço (OS) da Close-Up. A plataforma possuía diferentes fluxos e permissões para cada perfil de usuário, incluindo telas de cadastro, aprovação, encaminhamento de solicitações, monitoramento, geração e extração de relatórios, além de registro de logs. Era um sistema complexo, com diversas regras de negócio relacionadas à criação e aprovação das ordens de serviço, como permissões específicas por cargo, validações de preenchimento, prazos de aprovação e regras específicas para cada tipo de OS.',
        contribution: `Atuei na área de testes e validação do sistema, sendo responsável pela criação e execução de roteiros de testes com base nos requisitos funcionais e não funcionais do projeto. Após a validação interna, os testes eram encaminhados ao cliente para homologação, acompanhando de perto todo o processo para esclarecer dúvidas, validar documentações e registrar novos requisitos identificados durante os testes.

Participei ativamente das reuniões com o cliente, auxiliando no entendimento das funcionalidades e no levantamento de melhorias. Também realizei visitas presenciais para suporte em testes, alinhamento de fluxos e validação das telas do sistema.

Como o projeto não utilizava ferramentas como Azure DevOps para gerenciamento de testes, desenvolvi uma estrutura própria em Excel para organização e controle dos cenários testados, incluindo identificação dos testes, resultados esperados, resultados obtidos e status das execuções.

Além disso, fui responsável pela abertura e documentação de bugs, buscando sempre fornecer o máximo de contexto possível para facilitar a análise dos desenvolvedores. Isso incluía envio de requisições via cURL, investigação de respostas no Postman, validação de dados no MSSQL e acompanhamento individual com os desenvolvedores para reprodução e correção dos problemas encontrados. 

Eu criava todos os cards de bugs, tentava ao máximo cooperar com o desenvolvedor, informando no card o bug, passando o CURL das requisições que eu tinha feito até chegar em determinado erro, ou até mesmo investigando as respostas que eu tinha no Postman, fazia averiguação dos dados no MSSQL, me juntava com cada desenvolvedor separadamente para informar sobre os erros que estavam acontecendo.`,
        stack: ['Excel', 'Postman', 'SQL', 'Gherkin (BDD)', 'Jira' ],
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
                          <span key={i} className={styles.stackTagWrapper}>
                            <span
                              className={styles.stackTag}
                              tabIndex="0"
                              aria-describedby={`tip-${project.id}-${i}`}
                            >
                              {tech}
                            </span>
                            {TECH_DESCRIPTIONS[tech] && (
                              <span
                                role="tooltip"
                                id={`tip-${project.id}-${i}`}
                                className={styles.tooltip}
                              >
                                {TECH_DESCRIPTIONS[tech]}
                              </span>
                            )}
                          </span>
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
