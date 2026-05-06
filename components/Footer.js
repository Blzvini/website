import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.midground}>
          <div className={`${styles.mountainFar} ${styles.mountainFarLeft}`} />
          <div className={`${styles.mountainFar} ${styles.mountainFarRight}`} />
          <div className={`${styles.mountainMid} ${styles.mountainMidLeft}`} />
          <div className={`${styles.mountainMid} ${styles.mountainMidRight}`} />
        </div>
      </div>
    </footer>
  );
}
