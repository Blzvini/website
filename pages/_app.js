import '../styles/globals.css';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  // Inicializa coerente com o script pré-hidratação em _document.js.
  // Default: 'light'; será corrigido no useEffect de mount sem causar flash
  // (o <body> já recebeu a classe correta antes do React montar).
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  const ALT_THEMES = ['grid', 'bbs', 'rpg'];

  useEffect(() => {
    const initial = document.documentElement.dataset.themePreload;
    const stored = window.localStorage.getItem('site-theme');
    let resolved = 'light';

    if (stored === 'dark' || stored === 'light' || ALT_THEMES.includes(stored)) {
      resolved = stored;
    } else if (initial === 'dark' || initial === 'light' || ALT_THEMES.includes(initial)) {
      resolved = initial;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      resolved = 'dark';
    }

    setTheme(resolved);
    setMounted(true);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      const s = window.localStorage.getItem('site-theme');
      if (!s || s === 'light' || s === 'dark') {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.classList.remove('theme-dark', 'theme-grid', 'theme-bbs', 'theme-rpg');
    if (theme !== 'light') document.body.classList.add(`theme-${theme}`);
    document.documentElement.classList.remove('theme-dark-preload');
    window.localStorage.setItem('site-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'dark';
      return prev;
    });
  };

  const selectTheme = (t) => setTheme(t);

  return (
    <>
      <a href="#main" className="skip-link">Pular para o conteúdo</a>

      <div className="site-stars" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={`star star-${i + 1}`} />
        ))}
      </div>

      <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} selectTheme={selectTheme} />
    </>
  );
}
