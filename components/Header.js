import styles from './Header.module.css';

export default function Header({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header} id="top">
      {/* ─── Céu de fundo (some em modo escuro para o gradiente unificado aparecer) ─── */}
      <div className={styles.sky} aria-hidden="true">
        {/* Sol/Lua interativo — toggle de tema discoverable */}
        <button
          type="button"
          className={`${styles.sunCharacter} ${isDark ? styles.isNight : ''}`}
          onClick={toggleTheme}
          aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
          aria-pressed={isDark}
          title={isDark ? 'Modo claro' : 'Modo escuro'}
        >
          <span className={`${styles.sunRay} ${styles.rayTop}`} />
          <span className={`${styles.sunRay} ${styles.rayTopRight}`} />
          <span className={`${styles.sunRay} ${styles.rayRight}`} />
          <span className={`${styles.sunRay} ${styles.rayBottomRight}`} />
          <span className={`${styles.sunRay} ${styles.rayBottom}`} />
          <span className={`${styles.sunRay} ${styles.rayBottomLeft}`} />
          <span className={`${styles.sunRay} ${styles.rayLeft}`} />
          <span className={`${styles.sunRay} ${styles.rayTopLeft}`} />

          <span className={styles.sunFace}>
            <span className={styles.sunglasses}>
              <span className={`${styles.lens} ${styles.lensLeft}`} />
              <span className={`${styles.lens} ${styles.lensRight}`} />
              <span className={styles.bridge} />
            </span>
            <span className={styles.smile} />
            <span className={`${styles.moonCrater} ${styles.crater1}`} aria-hidden="true" />
            <span className={`${styles.moonCrater} ${styles.crater2}`} aria-hidden="true" />
            <span className={`${styles.moonCrater} ${styles.crater3}`} aria-hidden="true" />
          </span>
        </button>

        {/* Nuvens animadas (modo claro) */}
        <span className={`${styles.cloud} ${styles.cloud1}`} aria-hidden="true" />
        <span className={`${styles.cloud} ${styles.cloud2}`} aria-hidden="true" />
        <span className={`${styles.cloud} ${styles.cloud3}`} aria-hidden="true" />

        {/* Pipas (só de dia) */}
        {!isDark && (
          <>
            <span className={`${styles.kite} ${styles.kite1}`} aria-hidden="true">
              <span className={styles.kiteBody} />
              <span className={styles.kiteTail} />
            </span>
            <span className={`${styles.kite} ${styles.kite2}`} aria-hidden="true">
              <span className={styles.kiteBody} />
              <span className={styles.kiteTail} />
            </span>
          </>
        )}
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Olá, mundo</p>
          <h1>Vinicius Marques</h1>
          <p className={styles.subtitle}>Engenheiro de Dados</p>
          <p className={styles.description}>
            Construo pipelines, modelagens e automações que transformam dados brutos
            em decisões. Apaixonado por arquitetura de dados, cloud e ferramentas
            modernas — com um toque de pixel art no caminho.
          </p>

          <nav className={styles.nav} aria-label="Navegação do hero">
            <a
              href="#sobre"
              onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}
              className="btn btn-secondary"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              onClick={(e) => { e.preventDefault(); scrollToSection('projetos'); }}
              className="btn btn-secondary"
            >
              Projetos
            </a>
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}
              className="btn"
            >
              Vamos conversar
            </a>
          </nav>
        </div>

        {/* ─── Coluna visual (paisagem pixel) ─── */}
        <div className={styles.visual} aria-hidden="true">
          <span className={`${styles.heroCloud} ${styles.heroCloudOne}`} />
          <span className={`${styles.heroCloud} ${styles.heroCloudTwo}`} />

          <span className={styles.heroOrb}>
            DATA
            <span>&gt;_</span>
          </span>

          <span className={styles.heroKite}>
            <span className={styles.heroKiteBody} />
            <span className={styles.heroKiteTail} />
          </span>

          <span className={styles.heroMascot}>
            <span className={styles.mascotPixel} />
          </span>

          <span className={styles.heroGround} />
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollArrow} />
      </div>
    </header>
  );
}
