export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      {/* Sky Background */}
      <div className="sky-background">
        {/* Sun */}
        <div className="sun" aria-hidden="true">
          <div className="sun-rays" />
        </div>

        {/* Clouds */}
        <div className="cloud cloud-1" aria-hidden="true" />
        <div className="cloud cloud-2" aria-hidden="true" />
        <div className="cloud cloud-3" aria-hidden="true" />

        {/* Kites */}
        <div className="kite kite-1" aria-hidden="true">
          <div className="kite-body" />
          <div className="kite-tail" />
        </div>
        <div className="kite kite-2" aria-hidden="true">
          <div className="kite-body" />
          <div className="kite-tail" />
        </div>
      </div>

      <div className="container header-content">
        <div className="header-copy">
          <h1>Vinicius Marques</h1>
          <div className="header-subtitle">Engenheiro de Dados</div>
          <nav className="header-nav" aria-label="Navegação principal">
            <button type="button" onClick={() => scrollToSection('sobre')} className="btn btn-secondary">
              Sobre
            </button>
            <button type="button" onClick={() => scrollToSection('habilidades')} className="btn btn-secondary">
              Habilidades
            </button>
            <button type="button" onClick={() => scrollToSection('projetos')} className="btn btn-secondary">
              Projetos
            </button>
            <button type="button" onClick={() => scrollToSection('contato')} className="btn">
              Contato
            </button>
          </nav>
        </div>
      </div>

      {/* Grass transition at bottom of header */}
      <div className="header-grass" aria-hidden="true" />

      <style jsx>{`
        .sky-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, 
            #5bc8f5 0%, 
            #7dd4f7 30%, 
            #a8e4fa 60%, 
            #d4f0fc 80%, 
            var(--color-bg-primary) 100%
          );
          overflow: hidden;
          z-index: 0;
        }

        /* Sun */
        .sun {
          position: absolute;
          top: 2rem;
          right: 10%;
          width: 80px;
          height: 80px;
          background: var(--color-accent-sand);
          border-radius: 50%;
          box-shadow: 
            0 0 60px rgba(255, 209, 102, 0.6),
            0 0 100px rgba(255, 209, 102, 0.4);
          animation: sun-pulse 4s ease-in-out infinite;
          image-rendering: pixelated;
        }

        .sun::before {
          content: '';
          position: absolute;
          inset: 8px;
          background: #ffe599;
          border-radius: 50%;
        }

        /* Pixel-style sun rays */
        .sun-rays {
          position: absolute;
          inset: -20px;
        }

        .sun-rays::before,
        .sun-rays::after {
          content: '';
          position: absolute;
          background: var(--color-accent-sand);
          opacity: 0.7;
        }

        .sun-rays::before {
          top: 50%;
          left: -12px;
          right: -12px;
          height: 8px;
          transform: translateY(-50%);
        }

        .sun-rays::after {
          left: 50%;
          top: -12px;
          bottom: -12px;
          width: 8px;
          transform: translateX(-50%);
        }

        /* Pixel Clouds */
        .cloud {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          image-rendering: pixelated;
        }

        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          background: inherit;
        }

        .cloud-1 {
          top: 15%;
          left: -100px;
          width: 80px;
          height: 32px;
          border-radius: 4px;
          animation: cloud-drift 45s linear infinite;
        }

        .cloud-1::before {
          width: 40px;
          height: 40px;
          top: -20px;
          left: 10px;
          border-radius: 4px;
        }

        .cloud-1::after {
          width: 48px;
          height: 36px;
          top: -16px;
          left: 35px;
          border-radius: 4px;
        }

        .cloud-2 {
          top: 25%;
          left: -80px;
          width: 60px;
          height: 24px;
          border-radius: 4px;
          animation: cloud-drift 55s linear infinite;
          animation-delay: -20s;
        }

        .cloud-2::before {
          width: 32px;
          height: 32px;
          top: -16px;
          left: 8px;
          border-radius: 4px;
        }

        .cloud-2::after {
          width: 36px;
          height: 28px;
          top: -12px;
          left: 28px;
          border-radius: 4px;
        }

        .cloud-3 {
          top: 10%;
          left: -60px;
          width: 48px;
          height: 20px;
          border-radius: 4px;
          animation: cloud-drift 60s linear infinite;
          animation-delay: -35s;
        }

        .cloud-3::before {
          width: 28px;
          height: 28px;
          top: -14px;
          left: 6px;
          border-radius: 4px;
        }

        .cloud-3::after {
          width: 32px;
          height: 24px;
          top: -10px;
          left: 22px;
          border-radius: 4px;
        }

        /* Pixel Kites */
        .kite {
          position: absolute;
          animation: kite-float 6s ease-in-out infinite;
        }

        .kite-1 {
          top: 20%;
          left: 15%;
        }

        .kite-2 {
          top: 30%;
          right: 25%;
          animation-delay: -2s;
        }

        .kite-body {
          width: 48px;
          height: 48px;
          background: var(--color-accent-kite);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          position: relative;
          image-rendering: pixelated;
          box-shadow: inset -8px -8px 0 rgba(0,0,0,0.15);
        }

        .kite-1 .kite-body {
          background: var(--color-accent-kite);
        }

        .kite-2 .kite-body {
          width: 36px;
          height: 36px;
          background: var(--color-accent-sand);
        }

        .kite-body::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          background: rgba(255,255,255,0.3);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }

        .kite-tail {
          position: absolute;
          left: 50%;
          top: 100%;
          width: 2px;
          height: 80px;
          background: repeating-linear-gradient(
            180deg,
            var(--color-accent-dark) 0px,
            var(--color-accent-dark) 8px,
            transparent 8px,
            transparent 16px
          );
          transform-origin: top center;
        }

        .kite-1 .kite-tail {
          height: 100px;
        }

        .kite-2 .kite-tail {
          height: 70px;
        }

        .kite-tail::before,
        .kite-tail::after {
          content: '';
          position: absolute;
          width: 12px;
          height: 8px;
          background: var(--color-accent-kite);
          border-radius: 2px;
        }

        .kite-tail::before {
          top: 30%;
          left: -5px;
          transform: rotate(-15deg);
        }

        .kite-tail::after {
          top: 60%;
          left: -5px;
          transform: rotate(15deg);
        }

        .kite-2 .kite-tail::before,
        .kite-2 .kite-tail::after {
          background: var(--color-accent-sand);
        }

        /* Header content positioning */
        .header-content {
          position: relative;
          z-index: 1;
          padding-top: clamp(4rem, 10vw, 8rem);
          padding-bottom: clamp(6rem, 12vw, 10rem);
        }

        /* Grass transition */
        .header-grass {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: 
            repeating-linear-gradient(
              90deg,
              var(--color-accent-dark) 0px,
              var(--color-accent-dark) 4px,
              var(--color-accent) 4px,
              var(--color-accent) 8px,
              var(--color-accent-light) 8px,
              var(--color-accent-light) 12px,
              var(--color-accent) 12px,
              var(--color-accent) 16px
            );
          z-index: 2;
        }

        .header-grass::before {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 0;
          right: 0;
          height: 24px;
          background: 
            linear-gradient(to top,
              var(--color-accent) 0%,
              transparent 100%
            );
        }

        .header-grass::after {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 0;
          right: 0;
          height: 32px;
          background-image: 
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 6px,
              var(--color-accent-dark) 6px,
              var(--color-accent-dark) 10px,
              transparent 10px,
              transparent 20px
            );
          background-size: 40px 100%;
          mask-image: linear-gradient(to top, black 60%, transparent 100%);
        }

        @media (max-width: 768px) {
          .sun {
            width: 60px;
            height: 60px;
            top: 1rem;
            right: 5%;
          }

          .kite-1 {
            top: 15%;
            left: 5%;
          }

          .kite-2 {
            display: none;
          }

          .kite-body {
            width: 36px;
            height: 36px;
          }

          .kite-tail {
            height: 60px;
          }

          .header-content {
            padding-top: clamp(3rem, 8vw, 5rem);
            padding-bottom: clamp(5rem, 10vw, 7rem);
          }
        }
      `}</style>
    </header>
  );
}
