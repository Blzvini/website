export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      {/* Sky Background */}
      <div className="sky-background">
        {/* Pixel Art Sunrise Sun */}
        <div className="sun-container" aria-hidden="true">
          {/* Sun rays - behind the sun body */}
          <div className="sun-ray ray-1" />
          <div className="sun-ray ray-2" />
          <div className="sun-ray ray-3" />
          <div className="sun-ray ray-4" />
          <div className="sun-ray ray-5" />
          <div className="sun-ray ray-6" />
          <div className="sun-ray ray-7" />
          <div className="sun-ray ray-8" />
          <div className="sun-ray ray-9" />
          {/* Sun body - semi-circle */}
          <div className="sun-body" />
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

        /* Pixel Art Sunrise Sun */
        .sun-container {
          position: absolute;
          top: 1.5rem;
          right: 8%;
          width: 100px;
          height: 70px;
          image-rendering: pixelated;
        }

        .sun-body {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 56px;
          height: 28px;
          background: linear-gradient(180deg, #ffd166 0%, #ff9f43 100%);
          border-radius: 56px 56px 0 0;
          box-shadow: 
            0 0 20px rgba(255, 209, 102, 0.6),
            0 0 40px rgba(255, 159, 67, 0.3);
          z-index: 2;
        }

        .sun-body::before {
          content: '';
          position: absolute;
          top: 4px;
          left: 4px;
          right: 4px;
          height: 12px;
          background: linear-gradient(180deg, #ffe599 0%, #ffd166 100%);
          border-radius: 48px 48px 0 0;
        }

        /* Sun rays */
        .sun-ray {
          position: absolute;
          bottom: 20px;
          left: 50%;
          width: 6px;
          background: linear-gradient(0deg, #ff9f43 0%, #ffd166 50%, transparent 100%);
          transform-origin: bottom center;
          z-index: 1;
        }

        .ray-1 {
          height: 40px;
          transform: translateX(-50%) rotate(-60deg);
        }

        .ray-2 {
          height: 48px;
          transform: translateX(-50%) rotate(-45deg);
        }

        .ray-3 {
          height: 52px;
          transform: translateX(-50%) rotate(-25deg);
        }

        .ray-4 {
          height: 56px;
          transform: translateX(-50%) rotate(-10deg);
        }

        .ray-5 {
          height: 58px;
          transform: translateX(-50%) rotate(0deg);
        }

        .ray-6 {
          height: 56px;
          transform: translateX(-50%) rotate(10deg);
        }

        .ray-7 {
          height: 52px;
          transform: translateX(-50%) rotate(25deg);
        }

        .ray-8 {
          height: 48px;
          transform: translateX(-50%) rotate(45deg);
        }

        .ray-9 {
          height: 40px;
          transform: translateX(-50%) rotate(60deg);
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



        @media (max-width: 768px) {
          .sun-container {
            width: 70px;
            height: 50px;
            top: 1rem;
            right: 5%;
          }

          .sun-body {
            width: 40px;
            height: 20px;
          }

          .sun-ray {
            width: 4px;
          }

          .ray-1, .ray-9 { height: 28px; }
          .ray-2, .ray-8 { height: 32px; }
          .ray-3, .ray-7 { height: 36px; }
          .ray-4, .ray-6 { height: 38px; }
          .ray-5 { height: 40px; }

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
