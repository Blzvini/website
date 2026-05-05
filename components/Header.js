export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      {/* Sky Background */}
      <div className="sky-background">
        {/* Pixel Art Sun with Sunglasses */}
        <div className="sun-character" aria-hidden="true">
          {/* Rays */}
          <div className="sun-ray ray-top" />
          <div className="sun-ray ray-top-right" />
          <div className="sun-ray ray-right" />
          <div className="sun-ray ray-bottom-right" />
          <div className="sun-ray ray-bottom" />
          <div className="sun-ray ray-bottom-left" />
          <div className="sun-ray ray-left" />
          <div className="sun-ray ray-top-left" />
          {/* Sun face */}
          <div className="sun-face">
            {/* Sunglasses */}
            <div className="sunglasses">
              <div className="lens lens-left" />
              <div className="lens lens-right" />
              <div className="bridge" />
            </div>
            {/* Smile */}
            <div className="smile" />
          </div>
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

        /* Pixel Art Sun Character with Sunglasses */
        .sun-character {
          position: absolute;
          top: 1rem;
          right: 8%;
          width: 100px;
          height: 100px;
          image-rendering: pixelated;
          animation: sun-bob 3s ease-in-out infinite;
        }

        @keyframes sun-bob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }

        .sun-face {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #fff176 0%, #ffee58 30%, #fdd835 70%, #f9a825 100%);
          border-radius: 50%;
          border: 3px solid #e65100;
          box-shadow: 
            0 0 30px rgba(255, 209, 102, 0.7),
            0 0 60px rgba(255, 159, 67, 0.4),
            inset -4px -4px 0 rgba(249, 168, 37, 0.5),
            inset 4px 4px 0 rgba(255, 255, 255, 0.3);
          z-index: 2;
        }

        /* Sun rays - triangular pixel style */
        .sun-ray {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          z-index: 1;
        }

        .ray-top {
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 24px solid #ff9800;
          transform: translate(-50%, -70px);
        }

        .ray-top::after {
          content: '';
          position: absolute;
          top: 8px;
          left: -5px;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 16px solid #ffb74d;
        }

        .ray-bottom {
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 24px solid #ff9800;
          transform: translate(-50%, 46px);
        }

        .ray-left {
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-right: 24px solid #ff9800;
          transform: translate(-70px, -50%);
        }

        .ray-right {
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 24px solid #ff9800;
          transform: translate(46px, -50%);
        }

        .ray-top-right {
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 20px solid #ff9800;
          transform: translate(20px, -58px) rotate(45deg);
        }

        .ray-top-left {
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 20px solid #ff9800;
          transform: translate(-36px, -58px) rotate(-45deg);
        }

        .ray-bottom-right {
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 20px solid #ff9800;
          transform: translate(20px, 36px) rotate(-45deg);
        }

        .ray-bottom-left {
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 20px solid #ff9800;
          transform: translate(-36px, 36px) rotate(45deg);
        }

        /* Sunglasses */
        .sunglasses {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 14px;
        }

        .lens {
          position: absolute;
          top: 0;
          width: 16px;
          height: 12px;
          background: linear-gradient(180deg, #424242 0%, #212121 50%, #37474f 100%);
          border: 2px solid #1a1a1a;
          border-radius: 2px;
        }

        .lens-left {
          left: 0;
        }

        .lens-right {
          right: 0;
        }

        .bridge {
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 3px;
          background: #1a1a1a;
        }

        /* Smile */
        .smile {
          position: absolute;
          bottom: 22%;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 10px;
          border: 3px solid #e65100;
          border-top: none;
          border-radius: 0 0 20px 20px;
          background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 100%);
        }

        .smile::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 5px;
          background: #fff;
          border-radius: 0 0 4px 4px;
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
          .sun-character {
            width: 70px;
            height: 70px;
            top: 0.5rem;
            right: 5%;
          }

          .sun-face {
            width: 40px;
            height: 40px;
            border-width: 2px;
          }

          .ray-top { 
            border-left-width: 6px;
            border-right-width: 6px;
            border-bottom-width: 16px;
            transform: translate(-50%, -48px);
          }
          .ray-bottom { 
            border-left-width: 6px;
            border-right-width: 6px;
            border-top-width: 16px;
            transform: translate(-50%, 32px);
          }
          .ray-left { 
            border-top-width: 6px;
            border-bottom-width: 6px;
            border-right-width: 16px;
            transform: translate(-48px, -50%);
          }
          .ray-right { 
            border-top-width: 6px;
            border-bottom-width: 6px;
            border-left-width: 16px;
            transform: translate(32px, -50%);
          }
          .ray-top-right,
          .ray-top-left,
          .ray-bottom-right,
          .ray-bottom-left {
            border-left-width: 5px;
            border-right-width: 5px;
            border-bottom-width: 14px;
            border-top-width: 14px;
          }
          .ray-top-right { transform: translate(14px, -40px) rotate(45deg); }
          .ray-top-left { transform: translate(-24px, -40px) rotate(-45deg); }
          .ray-bottom-right { transform: translate(14px, 26px) rotate(-45deg); }
          .ray-bottom-left { transform: translate(-24px, 26px) rotate(45deg); }

          .sunglasses {
            width: 28px;
            height: 10px;
          }

          .lens {
            width: 11px;
            height: 8px;
            border-width: 1px;
          }

          .bridge {
            width: 6px;
            height: 2px;
            top: 3px;
          }

          .smile {
            width: 14px;
            height: 7px;
            border-width: 2px;
          }

          .smile::before {
            width: 10px;
            height: 3px;
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
