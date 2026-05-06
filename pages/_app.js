import '../styles/globals.css';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  // Inicializa coerente com o script pré-hidratação em _document.js.
  // Default: 'light'; será corrigido no useEffect de mount sem causar flash
  // (o <body> já recebeu a classe correta antes do React montar).
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Lê o tema definido pelo script inline em _document.js
    const initial = document.documentElement.dataset.themePreload;
    const stored = window.localStorage.getItem('site-theme');
    let resolved = 'light';

    if (stored === 'dark' || stored === 'light') {
      resolved = stored;
    } else if (initial === 'dark' || initial === 'light') {
      resolved = initial;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      resolved = 'dark';
    }

    setTheme(resolved);
    setMounted(true);

    // Sincroniza com mudança da preferência do SO se o usuário ainda não escolheu manualmente
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      if (!window.localStorage.getItem('site-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.classList.toggle('theme-dark', theme === 'dark');
    // Remove a classe pré-load do <html> assim que o React assume o controle
    document.documentElement.classList.remove('theme-dark-preload');
    window.localStorage.setItem('site-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* Skip link para usuários de teclado/leitor de tela */}
      <a href="#main" className="skip-link">Pular para o conteúdo</a>

      {/* Estrelas globais (visíveis só em modo escuro via CSS) */}
      <div className="site-stars" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={`star star-${i + 1}`} />
        ))}
      </div>

      <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}
