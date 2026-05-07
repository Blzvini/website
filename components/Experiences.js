import { useState } from 'react';
import styles from './Experiences.module.css';
import { TECH_DESCRIPTIONS } from '../lib/techDescriptions';

const experiences = [
  {
    id: 1,
    company: 'Niteo',
    role: 'Analista de Power Platform Jr.',
    period: 'Dez 2023 – Jan 2026',
    projects: [
      {
        id: 'p1',
        name: 'Close-Up',
        context: 'O projeto consistia no desenvolvimento de um sistema web para gerenciamento de Ordens de Serviço (OS) da Close-Up. A plataforma possuía diferentes fluxos e permissões para cada perfil de usuário, incluindo telas de cadastro, aprovação, encaminhamento de solicitações, monitoramento, geração e extração de relatórios, além de registro de logs. Era um sistema complexo, com diversas regras de negócio relacionadas à criação e aprovação das ordens de serviço, como permissões específicas por cargo, validações de preenchimento, prazos de aprovação e regras específicas para cada tipo de OS.',
        contribution: `Atuei na área de testes e validação do sistema, sendo responsável pela criação e execução de roteiros de testes com base nos requisitos funcionais e não funcionais do projeto. Após a validação interna, os testes eram encaminhados ao cliente para homologação, acompanhando de perto todo o processo para esclarecer dúvidas, validar documentações e registrar novos requisitos identificados durante os testes.

Participei ativamente das reuniões com o cliente, auxiliando no entendimento das funcionalidades e no levantamento de melhorias. Também realizei visitas presenciais para suporte em testes, alinhamento de fluxos e validação das telas do sistema.

Como o projeto não utilizava ferramentas como Azure DevOps para gerenciamento de testes, desenvolvi uma estrutura própria em Excel para organização e controle dos cenários testados, incluindo identificação dos testes, resultados esperados, resultados obtidos e status das execuções.

Além disso, fui responsável pela abertura e documentação de bugs, buscando sempre fornecer o máximo de contexto possível para facilitar a análise dos desenvolvedores. Isso incluía envio de requisições via cURL, investigação de respostas no Postman, validação de dados no MSSQL e acompanhamento individual com os desenvolvedores para reprodução e correção dos problemas encontrados. 

Eu criava todos os cards de bugs, tentava ao máximo cooperar com o desenvolvedor, informando no card o bug, passando o CURL das requisições que eu tinha feito até chegar em determinado erro, ou até mesmo investigando as respostas que eu tinha no Postman, fazia averiguação dos dados no MSSQL, me juntava com cada desenvolvedor separadamente para informar sobre os erros que estavam acontecendo.`,
        stack: ['Excel', 'Postman', 'SQL', 'Microsoft Teams', 'Gherkin (BDD)', 'Jira' ],
      },
      {
        id: 'p2',
        name: 'Niteo/Gestao-de-Equipamentos-e-Controle-de-Estoque',
        context: `A empresa possuía um aplicativo interno utilizado pelo RH para cadastro de novos colaboradores, gerenciamento de permissões na Azure e acompanhamento de processos internos. Dentro desse cenário, surgiu a necessidade de desenvolver um novo módulo voltado para a gestão de equipamentos e controle de estoque. \n

O sistema foi projetado para centralizar todo o ciclo de vida dos equipamentos da empresa, desde o cadastro dos contratos de locação até o acompanhamento da utilização dos dispositivos pelos colaboradores. O módulo incluía gerenciamento de contratos, controle de estoque, acompanhamento de vencimentos, controle de entrega e devolução de equipamentos, além de monitoramento completo dos ativos.

Foram desenvolvidas funcionalidades como:

• CRUD de equipamentos e contratos;
• Associação entre equipamentos, contratos e responsáveis;
• Controle de equipamentos em uso e disponíveis;
• Gestão de entregas e devoluções;
• Monitoramento de contratos ativos, vencidos e próximos do vencimento;
• Relatórios com indicadores financeiros e quantitativos;
• Registro de logs para rastreamento e histórico das movimentações.

Antes da implementação do sistema, grande parte desse controle era realizado manualmente através de planilhas. Eu era responsável por atualizar essas informações, acompanhar devoluções de equipamentos de colaboradores desligados, organizar envios para novos funcionários, calcular prazos e custos de frete, além de realizar o controle de devolução de notebooks para empresas terceirizadas de aluguel quando os contratos expiravam.`,
        contribution: `Atuei diretamente no planejamento, design e desenvolvimento completo da aplicação. Tive liberdade para desenhar toda a interface do sistema, respeitando os padrões de UI/UX definidos pela empresa.

Participei de reuniões de levantamento de requisitos e definição de fluxos do sistema, contribuindo tanto na parte técnica quanto na organização das regras de negócio. Fui responsável pela criação de todas as telas e operações CRUD no Power Apps, além da implementação dos fluxos automatizados no Power Automate para criação, atualização e remoção de dados.

Também desenvolvi procedures e views no MSSQL para integração com os fluxos automatizados e consumo das informações dentro da aplicação.`,
        stack: ['Power Automate', 'Power Apps', 'Microsoft Teams', 'Excel', 'SQL', 'MSSQL'],
      },
      {
        id: 'p3',
        name: 'Braskem/SharePoint',
        context: `O projeto consistia no desenvolvimento de soluções personalizadas dentro do SharePoint para gerenciamento de fluxos internos semelhantes a ordens de serviço. O sistema possuía diferentes níveis de permissão de acordo com os cargos dos usuários e abrangia desde a criação das solicitações até os processos de aprovação.

A aplicação incluía funcionalidades como:

• Fluxos de aprovação;
• Cadastro de informações e upload de arquivos;
• Extração de relatórios;
• Disparos automáticos de e-mails para notificações de criação, aprovação e edição;
• Controle de permissões por perfil de usuário.

Era um sistema corporativo completo, focado em automatizar processos internos e centralizar o gerenciamento das solicitações dentro do ambiente SharePoint.`,
        contribution: `Atuei como Tester | QA no projeto, sendo responsável pela criação e organização dos cenários de testes no Azure DevOps com base nos requisitos do sistema.

Realizava testes funcionais das funcionalidades implementadas, registrava bugs e inconsistências encontradas durante as validações e acompanhava o processo de correção junto aos desenvolvedores. Após as validações internas, os testes eram encaminhados para homologação do cliente.

Também participei de reuniões técnicas com a equipe de desenvolvimento para entendimento das regras de negócio, alinhamento de funcionalidades e discussão de problemas identificados durante os testes.`,
        stack: ['Sharepoint', 'Azure DevOps', 'Microsoft Teams', 'Excel'],
      },
      {
        id: 'p4',
        name: 'Braskem/Power-BI',
        context: `O projeto consistia na modernização visual de dashboards já existentes, desenvolvidos anteriormente para a Braskem. A proposta era melhorar a experiência do usuário e atualizar o visual das interfaces com base em um novo protótipo criado no Figma, seguindo as diretrizes visuais e cores da marca.

O desafio do projeto era equilibrar melhorias de UI/UX sem comprometer a usabilidade, a legibilidade das informações e as limitações técnicas do Power BI.`,
        contribution: `Fui responsável pela implementação das melhorias visuais nos dashboards, realizando a adaptação da interface com base nos protótipos definidos no Figma.

Atuei na estilização dos componentes dentro do Power BI, buscando manter a consistência visual da marca e, ao mesmo tempo, preservar a clareza das informações e a boa experiência de navegação dos usuários.

Durante o processo, avaliei quais alterações eram viáveis tecnicamente e quais poderiam impactar negativamente a utilização dos dashboards, garantindo um equilíbrio entre design e funcionalidade.`,
        stack: ['Power BI', 'HTML', 'CSS'],
      },
      {
        id: 'p5',
        name: 'Braskem/Documentacoes',
        context: `O projeto consistia na criação de documentações técnicas e funcionais para diferentes aplicações desenvolvidas em Power Apps. O objetivo era produzir materiais que servissem tanto como guia para novos usuários quanto como fonte de consulta para usuários mais experientes.

As documentações precisavam ser claras, didáticas e acessíveis, contendo exemplos visuais, imagens e GIFs demonstrando o funcionamento das funcionalidades. Além disso, todo o conteúdo deveria estar disponível em múltiplos idiomas: português, inglês, alemão e espanhol.`,
        contribution: `Fui responsável pela criação e organização das documentações dentro do SharePoint.

Participei de reuniões com as equipes envolvidas para compreender o funcionamento de cada aplicação e levantar todas as informações necessárias para construção dos materiais. Também utilizei os próprios sistemas para gerar os insumos visuais das documentações, realizando capturas de tela e gravações em GIF das funcionalidades demonstradas.

Para o processo de tradução do conteúdo, utilizei ferramentas como DeepL e ChatGPT para adaptação das documentações para os demais idiomas, garantindo consistência e clareza das informações.`,
        stack: ['SharePoint', 'LightShot', 'ScreenToGif', 'DeepL', 'Chat GPT' ],
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

function renderText(text, className) {
  return text.split('\n\n').filter(p => p.trim()).map((para, i) => (
    <p key={i} className={className}>
      {para.trim().split('\n').map((line, j, arr) => (
        <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
      ))}
    </p>
  ));
}

export default function Experiences() {
  const [expanded, setExpanded] = useState(new Set());

  function toggle(id) {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

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
                  {exp.projects.map((project) => {
                    const isOpen = expanded.has(project.id);
                    return (
                      <div key={project.id} className={styles.projectCard}>
                        <button
                          className={styles.projectToggle}
                          aria-expanded={isOpen}
                          aria-controls={`details-${project.id}`}
                          onClick={() => toggle(project.id)}
                        >
                          <span
                            className={`${styles.folderIcon} ${isOpen ? styles.folderIconOpen : ''}`}
                            aria-hidden="true"
                          />
                          <h4 className={styles.projectName}>
                            <span className={styles.projectNamePrefix} aria-hidden="true">./</span>
                            {project.name}
                          </h4>
                        </button>

                        <div
                          id={`details-${project.id}`}
                          className={`${styles.projectDetails}${isOpen ? ` ${styles.open}` : ''}`}
                        >
                          <div className={styles.projectDetailsInner}>
                            <div className={styles.projectDetailsContent}>
                              <div className={styles.projectBody}>
                                <div className={styles.projectSection}>
                                  <span className={styles.projectLabel}>Contexto</span>
                                  {renderText(project.context, styles.projectText)}
                                </div>
                                <div className={styles.projectSection}>
                                  <span className={styles.projectLabel}>Contribuição</span>
                                  {renderText(project.contribution, styles.projectText)}
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
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
