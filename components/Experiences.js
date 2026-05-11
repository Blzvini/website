import { useState, useEffect } from 'react';
import styles from './Experiences.module.css';
import { TECH_DESCRIPTIONS } from '../lib/techDescriptions';

const experiences = [
  {
    id: 1,
    company: 'Niteo',
    role: 'Analista de Dados Jr.',
    period: 'Dez 2023 – Jan 2026',
    projects: [
      {
        id: 'p1',
        name: 'Close-Up',
        context: 'O projeto consistia no desenvolvimento de um sistema web para gerenciamento de Ordens de Serviço (OS) da Close-Up. A plataforma possuía diferentes fluxos e permissões para cada perfil de usuário, incluindo telas de cadastro, aprovação, encaminhamento de solicitações, monitoramento, geração e extração de relatórios, além de registro de logs. Era um sistema complexo, com diversas regras de negócio relacionadas à criação e aprovação das ordens de serviço, como permissões específicas por cargo, validações de preenchimento, prazos de aprovação e regras específicas para cada tipo de OS.',
        contribution: `Atuei na área de testes e validação do sistema, sendo responsável pela criação e execução de roteiros de testes com base nos requisitos funcionais e não funcionais do projeto. Após a validação interna, os testes eram encaminhados ao cliente para homologação, acompanhando de perto todo o processo para esclarecer dúvidas, validar documentações e registrar novos requisitos identificados durante os testes.

Participei ativamente das reuniões com o cliente, auxiliando no entendimento das funcionalidades e no levantamento de melhorias. Também realizei visitas presenciais para suporte em testes, alinhamento de fluxos e validação das telas do sistema.

Como o projeto não utilizava ferramentas como Azure DevOps para gerenciamento de testes, desenvolvi uma estrutura própria em Excel para organização e controle dos cenários testados, incluindo identificação dos testes, resultados esperados, resultados obtidos e status das execuções. 

Além disso, participei da validação de integrações e análise de inconsistências utilizando SQL, Postman e requisições via API, auxiliando na identificação e documentação de bugs relacionados às regras de negócio e aos fluxos do sistema.`,
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
        contribution: `Atuei diretamente no desenvolvimento da aplicação utilizando Power Apps, participando da criação das interfaces operacionais e da estrutura funcional do sistema.

Também desenvolvi automações e integrações utilizando Power Automate e MSSQL para gerenciamento, sincronização e rastreamento de informações relacionadas aos ativos corporativos.

Fui responsável pela criação de procedures e views utilizadas na consolidação de dados operacionais e geração de indicadores consumidos pela aplicação.

Além das integrações e automações, participei da implementação de workflows relacionados ao controle de estoque, contratos, movimentações e acompanhamento dos equipamentos.`,
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
        stack: ['SharePoint', 'Azure DevOps', 'Microsoft Teams', 'Excel'],
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
      {
        id: 'p6',
        name: 'Esqueci-o-Nome-do-Projeto',
        context: `O projeto consistia no desenvolvimento de dashboards em Power BI com base em requisitos funcionais e não funcionais definidos pelo cliente. Diferente de outros projetos, não havia um design previamente elaborado em ferramentas como Figma, existindo apenas uma definição de paleta de cores e diretrizes gerais para construção das interfaces.

Os dashboards possuíam diversas regras de negócio e tinham como objetivo apresentar informações de forma clara e estratégica para acompanhamento de indicadores e tomada de decisão.`,
        contribution: `Atuei como Tester | QA do projeto, sendo responsável pela criação e gerenciamento dos cenários de testes dentro do Azure DevOps.

Realizava testes funcionais nos dashboards desenvolvidos, validando regras de negócio, comportamento dos filtros, integridade das informações apresentadas e conformidade com os requisitos definidos pelo cliente. Após as validações internas, os testes eram encaminhados para homologação.

Também fui responsável pela abertura e acompanhamento de bugs, documentando problemas encontrados e alinhando diretamente com os desenvolvedores para entendimento e correção das inconsistências identificadas.`,
        stack: ['Power BI', 'Azure DevOps'],
      },
      {
        id: 'p7',
        name: 'Niteo/Bot/RDConversas',
        context: `O projeto tinha como objetivo automatizar o atendimento de clientes que entravam em contato pelo site ou via WhatsApp em busca de informações sobre cursos e treinamentos.

A proposta era criar um fluxo automatizado capaz de interpretar as informações fornecidas pelos usuários e direcionar o atendimento de acordo com o perfil e necessidade do lead. Dependendo das respostas e informações recebidas, o sistema poderia:

Encaminhar o lead diretamente para um consultor;
Solicitar aguardo para atendimento humano;
Ou enviar automaticamente uma proposta comercial em PDF.

No fluxo via WhatsApp, os usuários respondiam perguntas de escopo fechado que guiavam toda a jornada até a conclusão do atendimento.`,
        contribution: `Inicialmente, desenvolvi a automação utilizando o Make, integrando APIs do RD Station e WhatsApp. Nesse fluxo, o sistema realizava a criação automática de leads no RD Station e fazia o envio de mensagens e propostas em PDF via WhatsApp e e-mail.

Posteriormente, devido aos custos operacionais da solução, o projeto passou por uma nova implementação utilizando o Kommo integrado ao RD Station. Como essa abordagem ainda não atendia completamente às necessidades do processo, uma terceira versão foi desenvolvida utilizando as próprias plataformas do RD Station em conjunto com o RD Conversas.

Nessa implementação final, o fluxo automatizado via WhatsApp conduzia o usuário por perguntas objetivas, seguindo regras previamente definidas para qualificação do atendimento. Ao final do processo, o sistema poderia criar automaticamente o lead no RD Station, direcionar imediatamente para um consultor ou enviar propostas comerciais em PDF de forma automatizada.`,
        stack: ['Kommo', 'RD Station', 'RD Conversas', 'WhatsApp API', 'Make' ],
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
        id: 'p8',
        name: 'Close-Up/PoC',
        context: `O projeto consistia em uma prova de conceito (PoC) voltada para a migração e adaptação de processos que originalmente rodavam em MSSQL para o ecossistema Microsoft Fabric.

O objetivo era reproduzir dentro do Fabric toda a lógica existente no ambiente SQL Server, incluindo queries, procedures e views, além de estruturar um fluxo completo de ingestão, transformação e disponibilização de dados.

O processo envolvia:

Consumo de dados armazenados no Azure Blob Storage;
Organização e limpeza dos dados dentro do Data Lake;
Conversão de regras e transformações SQL para PySpark;
Execução de processos ETL utilizando notebooks;
Geração de relatórios em Excel respeitando todas as regras de negócio existentes;
Envio dos arquivos processados novamente para o Azure Blob Storage.

Toda a execução era orquestrada através de pipelines responsáveis pela ingestão, transformação, geração dos relatórios e distribuição dos arquivos finais.`,
        contribution: `Atuei no desenvolvimento de pipelines ETL no Microsoft Fabric utilizando Spark (PySpark), Azure Data Factory e Azure Data Lake para ingestão, transformação e disponibilização de dados.

Contribuí na migração de processos MSSQL para arquitetura cloud, convertendo regras e transformações SQL para notebooks PySpark.

Também participei da organização e manipulação de dados em ambiente Data Lake, além da automação de workflows responsáveis pelo processamento e distribuição dos dados processados.`,
        stack: ['Python', 'SQL', 'PySpark', 'Microsoft Fabric', 'WareHouse', 'DataLake', 'Data Factory', 'Power BI', 'Azure DevOps', 'MSSQL', 'Máquinas virtuais Azure', 'Excalidraw'],
      },
      {
        id: 'p9',
        name: 'Niteo/TimeTrack',
        context: `O projeto tinha como objetivo recriar o sistema interno de apontamento de horas da empresa, chamado TimeTrack, utilizando o ecossistema Microsoft.

A proposta era substituir a plataforma anterior por uma solução desenvolvida com Power Apps, Power Automate e banco de dados Azure, centralizando o controle de horas trabalhadas pelos colaboradores em seus respectivos projetos.

O sistema permitia que os usuários registrassem suas horas de trabalho diariamente, acompanhassem pendências de lançamento e visualizassem informações consolidadas da semana através de uma interface em formato de calendário.

Além disso, o aplicativo possuía integração com o Azure AD para identificação automática dos usuários e carregamento dos projetos vinculados a cada colaborador.`,
        contribution: `Participei do desenvolvimento da aplicação utilizando Power Apps, atuando tanto na criação de interfaces operacionais quanto na implementação de integrações e automações de dados utilizando Power Automate e Azure SQL Database.

Também desenvolvi procedures e views utilizadas para consolidação, processamento e disponibilização das informações consumidas pelo sistema.

Atuei na automação de workflows relacionados ao gerenciamento de usuários, projetos e apontamentos de horas, incluindo integrações com Azure AD para sincronização automática de informações entre sistemas.

Além da parte de dados e automações, também contribui na construção das telas da aplicação com base nos protótipos definidos no Figma.`,
        stack: ['Power Apps', 'Power Automate', 'CSS', 'HTML', 'SQL', 'Azure Database'],
      }
    ],
  },
  {
    id: 3,
    company: 'Lec Brasil',
    role: 'Auxiliar Administrativo',
    period: 'Dez 2020 – Dez 2022',
    projects: [
      {
        id: 'p10',
        name: 'Leitura-da-Luz',
        context: `A empresa prestava serviços terceirizados para a Enel na área de leitura de consumo de energia elétrica na cidade de São Paulo.

O trabalho era organizado através de roteiros distribuídos em um sistema baseado em SAP, onde cada equipe recebia diariamente as rotas de leitura das instalações elétricas. O processo exigia acompanhamento constante das operações em campo para garantir que as leituras fossem realizadas corretamente e dentro das regras operacionais estabelecidas pela concessionária.`,
        contribution: `Minhas responsabilidades incluíam a distribuição diária das rotas entre os colaboradores, planejamento operacional das atividades do dia seguinte e acompanhamento em tempo real da execução das leituras realizadas em campo por uma equipe de aproximadamente 20 a 30 pessoas.

Também realizava o monitoramento das operações para garantir conformidade com as regras da Enel, acompanhando situações específicas como registros de notas em horários restritos ou sem justificativa adequada, algo que dependia de autorização da base operacional.

Além disso, auxiliava na coordenação da equipe para manter equilíbrio na distribuição do trabalho, suporte operacional durante as rotas e comunicação com empresas ou clientes quando necessário para viabilizar o acesso dos leituristas aos locais de leitura.`,
        stack: ['SAP', 'Excel'],
      }
    ],
  },
  {
    id: 4,
    company: 'Bolas Bellca',
    role: 'Auxiliar de linha de produção',
    period: 'Jan 2019 – Nov 2019',
    projects: [
      {
        id: 'p11',
        name: 'Producao-frenetica',
        context: `A empresa era responsável pela fabricação de bolas de vinil em linha de produção industrial. O trabalho era dividido entre a operação dos fornos e a bancada de finalização, exigindo ritmo constante, coordenação entre a equipe e muita resistência ao calor.`,
        contribution: `Atuei diretamente na linha de produção, auxiliando tanto na operação dos fornos quanto na parte de acabamento e preparação das bolas.

Na área dos fornos, trabalhava em dupla com o forneiro, realizando a limpeza das formas, colocação dos pinos e preparação das peças de acordo com a produção do dia. Após o processo no forno, era necessário resfriar as formas em uma banheira de água, auxiliar na abertura das formas e separar as bolas produzidas para envio à bancada.

Já na bancada, o trabalho consistia em encher manualmente as bolas utilizando uma pistola de ar, garantindo que ficassem corretamente infladas e sem deformações. Depois disso, era necessário vedá-las com pinos e armazená-las em grandes gaiolas para a próxima etapa do processo.

Também participei do rodízio operacional da equipe, incluindo a retirada manual dos pinos para esvaziamento das bolas destinadas ao ensaque, além da limpeza e organização do ambiente de produção.

Foi uma experiência que exigiu bastante trabalho em equipe, resistência física e adaptação a um ambiente extremamente quente. Provavelmente meu primeiro contato com “processamento em alta performance”.`,
        video: 'https://www.youtube.com/embed/bv9tvOiu7DE',
        stack: ['Esforço braçal', 'Resistência ao calor', 'Trabalho em equipe', 'Paciência', 'Coordenação motora' ],
      }
    ],
  },
  {
    id: 5,
    company: 'Hipermercado Bergamini',
    role: 'Jovem Aprendiz',
    period: 'Out 2016 – Mar 2018',
    projects: [
      {
        id: 'p12',
        name: 'Supermercado',
        context: `Meu primeiro emprego, aos 16 anos, e provavelmente o primeiro choque de realidade sobre como a vida adulta funciona de verdade. Foi uma experiência com muito contato social, atendimento ao público e várias responsabilidades dentro da loja.

Cada dia era diferente: ajudar clientes, organizar setores, resolver problemas rápidos e aprender na prática como funciona a operação de um mercado. E existia também um medo muito específico da época: o Celso Russomanno aparecer na loja e perguntar se podia levar só um rolo de papel higiênico do pacote.`,
        contribution: `Atuei em diferentes áreas do estabelecimento, auxiliando na reposição de mercadorias, organização das prateleiras, atendimento ao cliente e frente de caixa.

Foi uma experiência importante para desenvolver comunicação, responsabilidade, organização e jogo de cintura para lidar com pessoas e situações do dia a dia.`,
        video: 'https://www.youtube.com/embed/telLQWcgph8',
        stack: ['Pilotar carrinho de supermercado', 'Organização de prateleiras', 'Atendimento ao cliente', 'Empacotar compras', 'Reposição de mercadorias'],
      }
    ],
  },
];

function TextBlock({ text, className }) {
  const paras = text.split('\n\n').reduce((acc, para) => {
    if (para.trim()) acc.push(para.trim());
    return acc;
  }, []);
  return paras.map((para, i) => (
    <p key={`para-${i}`} className={className}>
      {para.split('\n').map((line, j, arr) => (
        <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
      ))}
    </p>
  ));
}

export default function Experiences() {
  const [expanded,   setExpanded]   = useState(new Set());
  const [showHint,   setShowHint]   = useState(false);
  const [hintDone,   setHintDone]   = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 1500);
    return () => clearTimeout(t);
  }, []);

  function toggle(id) {
    if (showHint && !hintDone) {
      setHintDone(true);
      setTimeout(() => setShowHint(false), 340);
    }
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
            {experiences.map((exp, expIdx) => (
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
                  {exp.projects.map((project, projIdx) => {
                    const isOpen    = expanded.has(project.id);
                    const isFirst   = expIdx === 0 && projIdx === 0;
                    return (
                      <div key={project.id} className={styles.projectCard}>
                        <div className={styles.hintWrap}>
                          {isFirst && showHint && (
                            <span
                              className={`${styles.expHint}${hintDone ? ` ${styles.expHintOut}` : ''}`}
                              aria-hidden="true"
                            >!</span>
                          )}
                          <span className={styles.folderTooltip} aria-hidden="true">
                            Não abra essa pasta…
                          </span>
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
                        </div>

                        <div
                          id={`details-${project.id}`}
                          className={`${styles.projectDetails}${isOpen ? ` ${styles.open}` : ''}`}
                        >
                          <div className={styles.projectDetailsInner}>
                            <div className={styles.projectDetailsContent}>
                              <div className={styles.projectBody}>
                                <div className={styles.projectSection}>
                                  <span className={styles.projectLabel}>Contexto</span>
                                  <TextBlock text={project.context} className={styles.projectText} />
                                </div>
                                <div className={styles.projectSection}>
                                  <span className={styles.projectLabel}>Contribuição</span>
                                  <TextBlock text={project.contribution} className={styles.projectText} />
                                </div>
                              </div>

                              {project.video && (
                                <div className={styles.projectVideo}>
                                  <iframe
                                    src={project.video}
                                    title="Vídeo do projeto"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />
                                </div>
                              )}

                              <div className={styles.projectStack}>
                                {project.stack.map((tech) => (
                                  <span key={tech} className={styles.stackTagWrapper}>
                                    <span
                                      className={styles.stackTag}
                                      tabIndex="0"
                                      aria-describedby={`tip-${project.id}-${tech}`}
                                    >
                                      {tech}
                                    </span>
                                    {TECH_DESCRIPTIONS[tech] && (
                                      <span
                                        role="tooltip"
                                        id={`tip-${project.id}-${tech}`}
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

          <aside className={styles.postIt} aria-label="Download do currículo">
            <p className={styles.postItText}>
              {`$ cat currículo.pdf\n\n// Disponível para\n// download abaixo`}
            </p>
            <a
              href="/cv.pdf"
              download="Currículo_Vinicius_Marques.pdf"
              className={`${styles.postItBtn}${downloaded ? ` ${styles.postItBtnDone}` : ''}`}
              onClick={() => setDownloaded(true)}
            >
              Baixar Currículo
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
