import { useRef, useState } from 'react';
import styles from './About.module.css';

const TABS = [
  { id: 'sobre',    label: 'Quem sou' },
  { id: 'formacao', label: 'Formação' },
];

const certifications = [
  { id: 1, name: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', code: 'AZ-900', year: '2024' },
  { id: 2, name: 'Data Engineering with Microsoft Fabric', issuer: 'Microsoft Learn', code: 'Learning Path', year: '2024' },
  { id: 3, name: 'Python para Engenharia de Dados', issuer: 'Alura', code: 'Bootcamp', year: '2023' },
  { id: 4, name: 'SQL para Análise de Dados', issuer: 'Data Science Academy', code: 'Curso', year: '2023' },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const tabRefs = useRef({});

  // Navegação por setas (padrão WAI-ARIA Tabs)
  const onTabKeyDown = (e) => {
    const idx = TABS.findIndex((t) => t.id === activeTab);
    let nextIdx = null;
    if (e.key === 'ArrowRight') nextIdx = (idx + 1) % TABS.length;
    if (e.key === 'ArrowLeft')  nextIdx = (idx - 1 + TABS.length) % TABS.length;
    if (e.key === 'Home')       nextIdx = 0;
    if (e.key === 'End')        nextIdx = TABS.length - 1;
    if (nextIdx !== null) {
      e.preventDefault();
      const next = TABS[nextIdx];
      setActiveTab(next.id);
      tabRefs.current[next.id]?.focus();
    }
  };

  return (
    <section className={styles.about} id="sobre">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>

        <div className={styles.aboutContent}>
          <div className={styles.aboutCard}>
            <div role="tablist" aria-label="Sobre Vinicius" className={styles.tabs}>
              {TABS.map((tab) => {
                const selected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`tab-${tab.id}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls={`panel-${tab.id}`}
                    tabIndex={selected ? 0 : -1}
                    ref={(el) => (tabRefs.current[tab.id] = el)}
                    onClick={() => setActiveTab(tab.id)}
                    onKeyDown={onTabKeyDown}
                    className={`${styles.tab} ${selected ? styles.tabActive : ''}`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* ─── Painel: Quem sou ─── */}
            <div
              id="panel-sobre"
              role="tabpanel"
              aria-labelledby="tab-sobre"
              hidden={activeTab !== 'sobre'}
              className={styles.panel}
            >
              <div className={styles.panelInner}>
                {/* Avatar pixel art (substituível por uma <img> real) */}
                <div className={styles.avatarWrap}>
                  <div className={styles.avatar}>
                    <span className={styles.avatarPixel} aria-hidden="true" />
                    <span className={styles.avatarLabel}>VM</span>
                  </div>
                </div>

                <div className={styles.text}>
                  <div className={styles.qa}>
                    <h3 className={styles.qaLabel}>Quem é Vinicius?</h3>
                    <p>
                      Sou Vinicius Marques, formado em Análise e Desenvolvimento
                      de Sistemas. Comecei minha trajetória em desenvolvimento de software, passei por
                      QA e hoje meu foco é inteiramente em dados — pipelines, modelagem, cloud e tudo
                      que envolve transformar informação bruta em algo que gera valor real.
                    </p>
                  </div>

                  <div className={styles.qa}>
                    <h3 className={styles.qaLabel}>O que Vinicius faz hoje?</h3>
                    <p>
                      Trabalho com PySpark, SQL, Microsoft Fabric e Azure para construir soluções
                      robustas e escaláveis. Tenho experiência em ETL, automação com Power Platform e
                      qualidade de software — o que me dá uma visão ampla do ciclo de vida dos dados,
                      do dado bruto até o dashboard na mão do gestor.
                    </p>
                  </div>

                  <div className={styles.qa}>
                    <h3 className={styles.qaLabel}>O que Vinicius busca profissionalmente?</h3>
                    <p>
                      Uma oportunidade como Engenheiro de Dados Jr. em times que valorizem qualidade
                      técnica, autonomia e aprendizado contínuo. Ambientes com stacks modernas de dados
                      e cultura de engenharia forte são onde me sinto mais em casa.
                    </p>
                  </div>

                  <div className={styles.qa}>
                    <h3 className={styles.qaLabel}>Como Vinicius é fora do trabalho?</h3>
                    <p>
                      Nas horas livres exploro trilhas, ouço música (de jazz a metal, sem preconceito),
                      jogo games indie com estética retrô, leio sobre tecnologia e assisto séries até
                      tarde. Acredito que interesses variados constroem soluções mais criativas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Painel: Formação ─── */}
            <div
              id="panel-formacao"
              role="tabpanel"
              aria-labelledby="tab-formacao"
              hidden={activeTab !== 'formacao'}
              className={styles.panel}
            >
              <div className={styles.formationBlock}>
                <h3 className={styles.blockLabel}>Graduação</h3>
                <div className={styles.degreeCard}>
                  <span className={styles.degreeIcon} aria-hidden="true">🎓</span>
                  <div>
                    <p className={styles.degreeCourse}>Análise e Desenvolvimento de Sistemas</p>
                    <p className={styles.degreeInstitution}>Universidade Anhembi Morumbi</p>
                    <span className={styles.degreePeriod}>2020 – 2022 · Concluído</span>
                  </div>
                </div>
              </div>

              <div className={styles.formationBlock}>
                <h3 className={styles.blockLabel}>Certificados &amp; Cursos</h3>
                <div className={styles.certs}>
                  {certifications.map((cert) => (
                    <div key={cert.id} className={styles.certCard}>
                      <div className={styles.certTop}>
                        <span className={styles.certCode}>{cert.code}</span>
                        <span className={styles.certYear}>{cert.year}</span>
                      </div>
                      <p className={styles.certName}>{cert.name}</p>
                      <p className={styles.certIssuer}>{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.formationBlock}>
                <h3 className={styles.blockLabel}>Aprendizado contínuo</h3>
                <p className={styles.continuous}>
                  Acompanho de perto as comunidades de dados — Microsoft Fabric, dbt, Modern Data Stack.
                  Estudo regularmente através de documentações oficiais, projetos práticos e conteúdos
                  técnicos de engenharia de dados. Acredito que aprender em público e construir portfólio
                  real é mais valioso do que acumular certificados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
