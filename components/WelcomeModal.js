import { useState, useEffect, useRef } from 'react';
import styles from './WelcomeModal.module.css';

const ASCII_ART = `
        _..._
      .'     '.      _
     /    .-""-\\   _/ \\
   .-|   /:.   |  |   |
   |  \\  |:.   /.-'-./
   | .-'-;:__.'    =/
   .'=  *=|NASA _.='
  /   _.  |    ;
 ;-.-'|    \\   |
/   | \\    _\\  _\\
\\__/'._;.  ==' ==\\
         \\    \\   |
         /    /   /
         /-._/-._/
         \\   \`\\  \\
          \`-._/._/`;

export default function WelcomeModal({ theme }) {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const focusPendingRef = useRef(false);

  useEffect(() => {
    if (!sessionStorage.getItem('welcomed')) {
      focusPendingRef.current = true;
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (focusPendingRef.current && closeBtnRef.current) {
      closeBtnRef.current.focus();
      focusPendingRef.current = false;
    }
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible]);

  const close = () => {
    sessionStorage.setItem('welcomed', '1');
    setVisible(false);
  };

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) close();
  };

  if (!visible) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={onBackdropClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onBackdropClick(e); }}
      role="button"
      tabIndex={-1}
      aria-label="Fechar"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        className={styles.modal}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className={styles.closeBtn}
          onClick={close}
          aria-label="Fechar boas-vindas"
        >
          ✕
        </button>

        <div className={styles.asciiWrap}>
          <pre className={styles.ascii} aria-hidden="true">{ASCII_ART}</pre>
        </div>

        <h2 id="welcome-title" className={styles.title}>
          Olá, Explorador!
        </h2>

        <div className={styles.hint}>
          <div className={styles.hintRow}>
            <span className={styles.hintIcon} aria-hidden="true">
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
            <span>
              {theme === 'dark'
                ? <>Clique na <strong>lua</strong> para ativar o modo claro.</>
                : <>Clique no <strong>sol</strong> para ativar o modo escuro.</>
              }
            </span>
          </div>
          <p className={styles.hintNote}>
            {theme === 'dark'
              ? 'Mas tome cuidado e não deixe o mouse por muito tempo no lua.'
              : 'Mas tome cuidado e não deixe o mouse por muito tempo na sol.'
            }
          </p>
        </div>

        <button type="button" className={styles.okBtn} onClick={close}>
          Entendi!
        </button>
      </div>
    </div>
  );
}
