import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Script inline executado ANTES da hidratação do React.
 * - Lê localStorage (preferência salva) ou prefers-color-scheme do SO.
 * - Aplica `theme-dark` no <body> via classe inicial — evita o "flash" claro
 *   quando o usuário deveria ver o tema escuro.
 */
const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('site-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme;
    if (stored === 'dark' || stored === 'light') {
      theme = stored;
    } else {
      theme = prefersDark ? 'dark' : 'light';
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('theme-dark-preload');
    }
    document.documentElement.dataset.themePreload = theme;
  } catch (_) {}
})();
`;

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        {/* Aplica o tema antes da hidratação para evitar flash */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {process.env.NODE_ENV === 'development' && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
