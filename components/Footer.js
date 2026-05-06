import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* ─── Paisagem decorativa ─── */}
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.midground}>
          <div className={`${styles.mountainFar} ${styles.mountainFarLeft}`} />
          <div className={`${styles.mountainFar} ${styles.mountainFarRight}`} />
          <div className={`${styles.mountainMid} ${styles.mountainMidLeft}`} />
          <div className={`${styles.mountainMid} ${styles.mountainMidRight}`} />
        </div>
      </div>

      {/* ─── Conteúdo ─── */}
      <div className={`container ${styles.content}`}>
        <div className={styles.brand}>
          <span className={styles.brandPixel} aria-hidden="true" />
          <div>
            <p className={styles.brandName}>Vinicius Marques</p>
            <p className={styles.brandRole}>Engenheiro de Dados</p>
          </div>
        </div>

        <nav className={styles.links} aria-label="Links do rodapé">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
          <a
            href="https://github.com/Blzvini"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </nav>

        <p className={styles.meta}>
          © {year} Vinicius Marques · Construído com Next.js, CSS Modules e muito ☕
        </p>
      </div>
    </footer>
  );
}
