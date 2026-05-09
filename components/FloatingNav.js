import { useEffect, useState } from 'react';
import styles from './FloatingNav.module.css';

const SECTIONS = [
  { id: 'sobre',         label: 'Sobre' },
  { id: 'experiencias',  label: 'Experiências' },
  { id: 'habilidades',   label: 'Habilidades' },
  { id: 'projetos',      label: 'Projetos' },
  { id: 'contato',       label: 'Contato' },
];

export default function FloatingNav({ theme, toggleTheme }) {
  const isDark = theme === 'dark';
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState('');

  // Mostra a nav após o usuário rolar para fora do hero
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Destaca a seção atual com IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`${styles.nav} ${visible ? styles.visible : ''}`}
      aria-label="Navegação principal fixa"
    >
      <div className={styles.inner}>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={styles.brand}
          aria-label="Voltar ao topo"
        >
          <span className={styles.brandArrow} aria-hidden="true">↑</span>
        </button>

        <ul className={styles.list}>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => handleClick(e, s.id)}
                className={`${styles.link} ${activeId === s.id ? styles.active : ''}`}
                aria-current={activeId === s.id ? 'true' : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.themePicker} role="group" aria-label="Selecionar tema">
          <button
            type="button"
            onClick={toggleTheme}
            className={`${styles.themeBtn} ${styles.themeBtnActive}`}
            aria-label="Alternar tema Pixel"
            aria-pressed="true"
            title="Pixel"
          >
            <span className={styles.themeBtnIcon} aria-hidden="true">{isDark ? '☾' : '☀'}</span>
            <span className={styles.themeBtnLabel}>Tema</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
