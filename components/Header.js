import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

const GREETINGS = [
  'Olá, mundo',
  'Hello, world',
  'Hola, mundo',
  'Bonjour, monde',
  'Ciao, mondo',
  'Hallo, Welt',
  '你好，世界',
  'こんにちは世界',
];

export default function Header({ theme, toggleTheme }) {
  const isDark = theme === 'dark';
  const isPixelTheme = theme === 'light' || theme === 'dark';
  const [greetIdx, setGreetIdx] = useState(0);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'out' | 'in'
  const reducedMotion = useRef(false);
  const kiteCursorRef = useRef(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Detecta prefers-reduced-motion no cliente
  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Ciclo de saudações
  useEffect(() => {
    const interval = setInterval(() => {
      if (reducedMotion.current) {
        setGreetIdx((prev) => (prev + 1) % GREETINGS.length);
        return;
      }
      setPhase('out');
      setTimeout(() => {
        setGreetIdx((prev) => (prev + 1) % GREETINGS.length);
        setPhase('in');
        setTimeout(() => setPhase('idle'), 600);
      }, 600);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Pipa que segue o mouse (somente em dispositivos com hover)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;

    let targetX = -300, targetY = -300;
    let currentX = -300, currentY = -300;
    let prevX = -300;
    let rafId;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const tick = () => {
      const prevKiteX = currentX;
      currentX = lerp(currentX, targetX, 0.06);
      currentY = lerp(currentY, targetY, 0.06);

      if (kiteCursorRef.current) {
        // offset: kite voa acima e à frente — sensação de liberdade
        kiteCursorRef.current.style.transform =
          `translate(${currentX + 48}px, ${currentY - 72}px)`;

        // cauda reage à velocidade horizontal
        const velX = currentX - prevKiteX;
        const tailAngle = clamp(velX * 4, -40, 40);
        const tail = kiteCursorRef.current.lastElementChild;
        if (tail) {
          tail.style.transform = `rotate(${tailAngle}deg)`;
        }
      }

      prevX = currentX;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className={styles.header} id="top">
      {/* Toggle de tema — só visível no tema Pixel */}
      {isPixelTheme && <button
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
          {/* Touca de dormir (modo escuro) */}
          <span className={styles.sleepingCap} aria-hidden="true">
            <span className={styles.sleepingCapPom} />
          </span>
          {/* Olhos dormindo */}
          <span className={`${styles.sleepEye} ${styles.sleepEyeLeft}`} aria-hidden="true" />
          <span className={`${styles.sleepEye} ${styles.sleepEyeRight}`} aria-hidden="true" />
          {/* Boca dormindo */}
          <span className={styles.sleepMouth} aria-hidden="true" />
        </span>

        {/* ZZZ */}
        <span className={styles.zzzWrap} aria-hidden="true">
          <span className={`${styles.zLetter} ${styles.z1}`}>z</span>
          <span className={`${styles.zLetter} ${styles.z2}`}>z</span>
          <span className={`${styles.zLetter} ${styles.z3}`}>Z</span>
        </span>
      </button>}

      {/* ─── Céu de fundo ─── */}
      <div className={styles.sky} aria-hidden="true">
        {/* Nuvens animadas */}
        <span className={`${styles.cloud} ${styles.cloud1}`} />
        <span className={`${styles.cloud} ${styles.cloud2}`} />
        <span className={`${styles.cloud} ${styles.cloud3}`} />

        {/* Pipas (só de dia) */}
        {!isDark && (
          <>
            <span className={`${styles.kite} ${styles.kite1}`}>
              <span className={styles.kiteBody} />
              <span className={styles.kiteTail} />
            </span>
            <span className={`${styles.kite} ${styles.kite2}`}>
              <span className={styles.kiteBody} />
              <span className={styles.kiteTail} />
            </span>
          </>
        )}

        {/* Estrelas (só de noite) */}
        {isDark && (
          <>
            <span className={`${styles.headerStar} ${styles.hStar1}`} />
            <span className={`${styles.headerStar} ${styles.hStar2}`} />
            <span className={`${styles.headerStar} ${styles.hStar3}`} />
            <span className={`${styles.headerStar} ${styles.hStar4}`} />
            <span className={`${styles.headerStar} ${styles.hStar5}`} />
          </>
        )}
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.copy}>
          <p
            className={styles.kicker}
            aria-live="polite"
            aria-atomic="true"
            aria-label={GREETINGS[greetIdx]}
          >
            {GREETINGS[greetIdx].split('').map((char, i) => (
              <span
                key={`${greetIdx}-${i}`}
                aria-hidden="true"
                className={
                  `${styles.kickerChar}` +
                  (phase !== 'idle' ? ` ${styles[`kickerChar--${phase}`]}` : '')
                }
                style={
                  !reducedMotion.current && phase !== 'idle'
                    ? { animationDelay: `${((i * 13 + 7) % 11) * 0.04}s` }
                    : undefined
                }
              >
                {char}
              </span>
            ))}
          </p>
          <h1>Vinicius<br />Marques</h1>
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
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        ↓ ROLE PARA EXPLORAR
      </div>

      {/* Pipa que segue o mouse */}
      <span ref={kiteCursorRef} className={styles.kiteCursor} aria-hidden="true">
        <span className={styles.kiteBody} />
        <span className={styles.kiteTail} />
      </span>
    </header>
  );
}
