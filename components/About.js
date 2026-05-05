import { useState } from 'react';

const TABS = [
  { id: 'sobre', label: 'Quem sou' },
  { id: 'formacao', label: 'Formação' },
];

const certifications = [
  {
    id: 1,
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    code: 'AZ-900',
    year: '2024',
  },
  {
    id: 2,
    name: 'Data Engineering with Microsoft Fabric',
    issuer: 'Microsoft Learn',
    code: 'Learning Path',
    year: '2024',
  },
  {
    id: 3,
    name: 'Python para Engenharia de Dados',
    issuer: 'Alura',
    code: 'Bootcamp',
    year: '2023',
  },
  {
    id: 4,
    name: 'SQL para Análise de Dados',
    issuer: 'Data Science Academy',
    code: 'Curso',
    year: '2023',
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('sobre');

  return (
    <section className="about" id="sobre">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="about-content">
          <div className="about-card">

            {/* ── Abas ── */}
            <div className="about-tabs" role="tablist">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`about-tab${activeTab === tab.id ? ' is-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* ── Painel: Quem sou ── */}
            {activeTab === 'sobre' && (
              <div className="about-panel" role="tabpanel">
                <div className="about-panel-inner">

                  {/* Foto placeholder — troque o bloco .about-photo-initials por um <img> quando tiver a foto */}
                  <div className="about-photo-wrap">
                    <div className="about-photo-placeholder" aria-label="Foto de Vinicius Marques">
                      <div className="about-photo-initials">VM</div>
                      <span className="about-photo-hint">troque pelo src da sua foto</span>
                    </div>
                  </div>

                  {/* Perguntas + respostas */}
                  <div className="about-text">
                    <div className="about-q">
                      <span className="about-q-label">Quem é você?</span>
                      <p>
                        Sou Vinicius Marques, Engenheiro de Dados formado em Análise e Desenvolvimento
                        de Sistemas. Comecei minha trajetória em desenvolvimento de software, passei por
                        QA e hoje meu foco é inteiramente em dados — pipelines, modelagem, cloud e tudo
                        que envolve transformar informação bruta em algo que gera valor real.
                      </p>
                    </div>

                    <div className="about-q">
                      <span className="about-q-label">O que você faz hoje?</span>
                      <p>
                        Trabalho com PySpark, SQL, Microsoft Fabric e Azure para construir soluções
                        robustas e escaláveis. Tenho experiência em ETL, automação com Power Platform e
                        qualidade de software — o que me dá uma visão ampla do ciclo de vida dos dados,
                        do dado bruto até o dashboard na mão do gestor.
                      </p>
                    </div>

                    <div className="about-q">
                      <span className="about-q-label">O que você busca profissionalmente?</span>
                      <p>
                        Uma oportunidade como Engenheiro de Dados Jr. em times que valorizem qualidade
                        técnica, autonomia e aprendizado contínuo. Ambientes com stacks modernas de dados
                        e cultura de engenharia forte são onde me sinto mais em casa.
                      </p>
                    </div>

                    <div className="about-q">
                      <span className="about-q-label">Como você é fora do trabalho?</span>
                      <p>
                        Nas horas livres exploro trilhas, ouço música (de jazz a metal, sem preconceito),
                        jogo games indie com estética retrô, leio sobre tecnologia e assisto séries até
                        tarde. Acredito que interesses variados constroem soluções mais criativas.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* ── Painel: Formação ── */}
            {activeTab === 'formacao' && (
              <div className="about-panel" role="tabpanel">

                <div className="formation-block">
                  <span className="formation-block-label">Graduação</span>
                  <div className="formation-degree-card">
                    <div className="formation-degree-icon" aria-hidden="true">🎓</div>
                    <div>
                      <p className="formation-degree-course">Análise e Desenvolvimento de Sistemas</p>
                      <p className="formation-degree-institution">Universidade Anhembi Morumbi</p>
                      <span className="formation-degree-period">2020 – 2022 · Concluído</span>
                    </div>
                  </div>
                </div>

                <div className="formation-block">
                  <span className="formation-block-label">Certificados &amp; Cursos</span>
                  <div className="formation-certs">
                    {certifications.map(cert => (
                      <div key={cert.id} className="formation-cert-card">
                        <div className="formation-cert-top">
                          <span className="formation-cert-code">{cert.code}</span>
                          <span className="formation-cert-year">{cert.year}</span>
                        </div>
                        <p className="formation-cert-name">{cert.name}</p>
                        <p className="formation-cert-issuer">{cert.issuer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="formation-block">
                  <span className="formation-block-label">Aprendizado contínuo</span>
                  <p className="formation-continuous">
                    Acompanho de perto as comunidades de dados — Microsoft Fabric, dbt, Modern Data Stack.
                    Estudo regularmente através de documentações oficiais, projetos práticos e conteúdos
                    técnicos de engenharia de dados. Acredito que aprender em público e construir portfólio
                    real é mais valioso do que acumular certificados.
                  </p>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`

        /* ── Card principal — espelho de .experience-card / .skill-category ── */
        .about-card {
          max-width: 900px;
          margin: 0 auto;
          background: var(--color-bg-card);
          border: 3px solid var(--color-accent-dark);
          box-shadow:
            6px 6px 0 0 var(--color-accent-dark),
            inset -2px -2px 0 0 rgba(0,0,0,0.08),
            inset 2px 2px 0 0 rgba(255,255,255,0.5);
        }

        /* ── Abas ── */
        .about-tabs {
          display: flex;
          border-bottom: 3px solid var(--color-accent-dark);
        }

        .about-tab {
          flex: 1;
          padding: 0.9rem 1rem;
          background: rgba(248,244,232,0.6);
          border: none;
          border-right: 3px solid var(--color-accent-dark);
          font-family: var(--font-family-display);
          font-size: 0.6rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-text-light);
          cursor: pointer;
          transition: background var(--transition-fast), color var(--transition-fast);
        }

        .about-tab:last-child {
          border-right: none;
        }

        .about-tab:hover {
          background: rgba(45,155,78,0.07);
          color: var(--color-accent-dark);
        }

        /* Aba ativa "levanta" cobrindo a borda inferior do card */
        .about-tab.is-active {
          background: var(--color-bg-card);
          color: var(--color-accent-dark);
          position: relative;
          margin-bottom: -3px;
          padding-bottom: calc(0.9rem + 3px);
        }

        /* ── Painel genérico ── */
        .about-panel {
          padding: var(--spacing-lg);
        }

        /* ── Aba Quem sou ── */
        .about-panel-inner {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: var(--spacing-lg);
          align-items: start;
        }

        .about-photo-wrap {
          position: sticky;
          top: 1rem;
        }

        .about-photo-placeholder {
          width: 100%;
          aspect-ratio: 1 / 1;
          background: linear-gradient(135deg,
            rgba(45,155,78,0.1),
            rgba(91,200,245,0.1)
          );
          border: 3px solid var(--color-accent-dark);
          box-shadow: 4px 4px 0 0 var(--color-accent-dark);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          overflow: hidden;
        }

        /* Quando tiver a foto, adicione <img> aqui e remova os dois elementos abaixo */
        .about-photo-initials {
          font-family: var(--font-family-display);
          font-size: 1.8rem;
          color: var(--color-accent-dark);
          line-height: 1;
        }

        .about-photo-hint {
          font-family: var(--font-family-display);
          font-size: 0.42rem;
          color: var(--color-text-light);
          text-align: center;
          padding: 0 0.6rem;
          line-height: 1.7;
          letter-spacing: 0.04em;
        }

        /* Perguntas */
        .about-text {
          display: grid;
          gap: 1.3rem;
        }

        .about-q {
          display: grid;
          gap: 0.25rem;
        }

        .about-q-label {
          font-family: var(--font-family-display);
          font-size: 0.54rem;
          letter-spacing: 0.07em;
          color: var(--color-accent-dark);
          text-transform: uppercase;
        }

        .about-q p {
          font-size: 0.97rem;
          line-height: 1.85;
          color: var(--color-text-secondary);
          margin: 0;
        }

        /* ── Aba Formação ── */
        .formation-block {
          margin-bottom: 1.75rem;
        }

        .formation-block:last-child {
          margin-bottom: 0;
        }

        .formation-block-label {
          display: inline-block;
          font-family: var(--font-family-display);
          font-size: 0.54rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-accent-dark);
          margin-bottom: 0.85rem;
        }

        /* Graduação */
        .formation-degree-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 1.1rem;
          background: rgba(248,244,232,0.7);
          border: 2px solid rgba(26,71,42,0.18);
          border-left: 4px solid var(--color-accent);
        }

        .formation-degree-icon {
          font-size: 1.4rem;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .formation-degree-course {
          font-weight: 800;
          font-size: 1.05rem;
          color: var(--color-text-primary);
          margin: 0 0 0.2rem;
        }

        .formation-degree-institution {
          color: var(--color-text-secondary);
          font-size: 0.92rem;
          margin: 0 0 0.45rem;
        }

        .formation-degree-period {
          font-family: var(--font-family-display);
          font-size: 0.5rem;
          letter-spacing: 0.06em;
          color: var(--color-accent);
          text-transform: uppercase;
        }

        /* Certificados */
        .formation-certs {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.75rem;
        }

        .formation-cert-card {
          padding: 0.85rem 1rem;
          background: rgba(248,244,232,0.7);
          border: 2px solid rgba(26,71,42,0.15);
          border-top: 3px solid var(--color-accent-dark);
          display: grid;
          gap: 0.3rem;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .formation-cert-card:hover {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0 0 var(--color-accent-dark);
        }

        .formation-cert-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .formation-cert-code {
          font-family: var(--font-family-display);
          font-size: 0.5rem;
          color: var(--color-accent);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .formation-cert-year {
          font-family: var(--font-family-display);
          font-size: 0.5rem;
          color: var(--color-text-light);
          letter-spacing: 0.04em;
        }

        .formation-cert-name {
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--color-text-primary);
          line-height: 1.35;
          margin: 0;
        }

        .formation-cert-issuer {
          font-size: 0.82rem;
          color: var(--color-text-light);
          margin: 0;
        }

        /* Aprendizado contínuo */
        .formation-continuous {
          font-size: 0.97rem;
          line-height: 1.85;
          color: var(--color-text-secondary);
          margin: 0;
          padding: 1rem 1.1rem;
          background: rgba(248,244,232,0.5);
          border: 2px solid rgba(26,71,42,0.1);
          border-left: 4px solid var(--color-accent-sky);
        }

        /* ── Responsivo ── */
        @media (max-width: 640px) {
          .about-panel-inner {
            grid-template-columns: 1fr;
          }

          .about-photo-wrap {
            position: static;
          }

          .about-photo-placeholder {
            width: 120px;
            margin: 0 auto;
          }

          .formation-certs {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}