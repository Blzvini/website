import { useRef, useState } from 'react';
import styles from './About.module.css';
import TerminalChat from './TerminalChat';

const ORKUT_RATINGS = [
  { label: 'Confiável', count: 3, max: 3, type: 'face'  },
  { label: 'Legal',     count: 3, max: 3, type: 'ice'   },
  { label: 'Sexy',      count: 0, max: 3, type: 'heart' },
];

function OrkutIcon({ type, dim }) {
  const cls = `${styles.orkutIcon}${dim ? ` ${styles.orkutIconDim}` : ''}`;
  if (type === 'face') return (
    <svg width="18" height="18" viewBox="0 0 22 22" aria-hidden="true" className={cls}>
      <circle cx="11" cy="11" r="9" fill="#f5c518" stroke="#c8960c" strokeWidth="1.5"/>
      <circle cx="8.2" cy="9" r="1.3" fill="#5a3e00"/>
      <circle cx="13.8" cy="9" r="1.3" fill="#5a3e00"/>
      <path d="M7.5 13.5 Q11 16.5 14.5 13.5" stroke="#5a3e00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="8" cy="7.5" rx="1.2" ry="0.7" fill="rgba(255,255,255,0.55)" transform="rotate(-15 8 7.5)"/>
    </svg>
  );
  if (type === 'ice') return (
    <svg width="18" height="18" viewBox="0 0 22 22" aria-hidden="true" className={cls}>
      <rect x="4" y="3" width="14" height="16" rx="2" fill="#4ec4f5" stroke="#1a8fc8" strokeWidth="1.5"/>
      <rect x="6.5" y="5" width="5" height="2.5" rx="1" fill="rgba(255,255,255,0.8)"/>
      <line x1="4" y1="10.5" x2="18" y2="10.5" stroke="#1a8fc8" strokeWidth="0.7" opacity="0.35"/>
    </svg>
  );
  if (type === 'heart') return (
    <svg width="18" height="18" viewBox="0 0 22 22" aria-hidden="true" className={cls}>
      <path d="M11 18 C11 18 2 12.5 2 7 A4.5 4.5 0 0 1 11 5 A4.5 4.5 0 0 1 20 7 C20 12.5 11 18 11 18Z" fill="#ff2255" stroke="#cc0033" strokeWidth="1.5"/>
      <ellipse cx="7.5" cy="8" rx="2" ry="1.2" fill="rgba(255,255,255,0.55)" transform="rotate(-30 7.5 8)"/>
    </svg>
  );
  return null;
}

const TABS = [
  { id: 'sobre',    label: 'Quem sou' },
  { id: 'formacao', label: 'Formação' },
];

const certifications = [
  { id: 1, name: 'Curso de Programação do Filipe Deschamps', issuer: '', code: 'Curso.dev', year: '2026', link: 'https://curso.dev/', tooltip: 'Acessar curso.dev' },
  { id: 2, name: 'Microsoft Power Platform & Sharepoint', issuer: '', code: 'Niteo', year: '2022' },
  { id: 3, name: 'Python para Análise de Dados', issuer: '', code: 'Niteo', year: '2022' },
  
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
                  <ul className={styles.ratingList}>
                    {ORKUT_RATINGS.map(({ label, count, max, type }) => (
                      <li key={label} className={styles.ratingRow}>
                        <span className={styles.ratingLabel}>{label}</span>
                        <div className={styles.orkutIconGroup} aria-hidden="true">
                          {Array.from({ length: max }, (_, i) => (
                            <OrkutIcon key={`${type}-${i}`} type={type} dim={i >= count} />
                          ))}
                          {count === 0 && <span className={styles.ratingNone}></span>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <TerminalChat />
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
                    <p className={styles.degreeInstitution}>FMU - Centro Universitário das Faculdades Metropolitanas Unidas</p>
                    <span className={styles.degreePeriod}>2022 – 2024 · Concluído</span>
                  </div>
                </div>
              </div>

              <div className={styles.formationBlock}>
                <h3 className={styles.blockLabel}>Certificados &amp; Cursos</h3>
                <div className={styles.certs}>
                  {certifications.map((cert) => {
                    const inner = (
                      <>
                        <div className={styles.certTop}>
                          <span className={styles.certCode}>{cert.code}</span>
                          <span className={styles.certYear}>{cert.year}</span>
                        </div>
                        <p className={styles.certName}>{cert.name}</p>
                        {cert.issuer && <p className={styles.certIssuer}>{cert.issuer}</p>}
                        {cert.tooltip && <span role="tooltip" className={styles.certTooltip}>{cert.tooltip}</span>}
                      </>
                    );
                    return cert.link
                      ? <a key={cert.id} href={cert.link} target="_blank" rel="noopener noreferrer" className={`${styles.certCard} ${styles.certCardLink}`} aria-label={`${cert.name} (abre em nova aba)`}>{inner}</a>
                      : <div key={cert.id} className={styles.certCard}>{inner}</div>;
                  })}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
