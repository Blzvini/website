export default function Footer() {
  return (
    <footer className="footer">
      {/* Landscape Scene */}
      <div className="footer-landscape" aria-hidden="true">
        {/* Hills in background */}
        <div className="hills">
          <div className="hill hill-1" />
          <div className="hill hill-2" />
          <div className="hill hill-3" />
        </div>

        {/* Trees */}
        <div className="tree tree-1">
          <div className="tree-foliage" />
          <div className="tree-trunk" />
        </div>
        <div className="tree tree-2">
          <div className="tree-foliage" />
          <div className="tree-trunk" />
        </div>
        <div className="tree tree-3">
          <div className="tree-foliage" />
          <div className="tree-trunk" />
        </div>
        <div className="tree tree-4">
          <div className="tree-foliage" />
          <div className="tree-trunk" />
        </div>
        <div className="tree tree-5">
          <div className="tree-foliage" />
          <div className="tree-trunk" />
        </div>

        {/* Pixel House */}
        <div className="pixel-house">
          <div className="house-roof" />
          <div className="house-body">
            <div className="house-door" />
            <div className="house-window" />
          </div>
          <div className="house-chimney" />
        </div>

        {/* Pixel Cat Mascot */}
        <div className="pixel-mascot">
          <div className="mascot-body" />
        </div>

        {/* Grass layer */}
        <div className="footer-grass" />
      </div>

      {/* Footer content */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-brand">
            <span>VINICIUS.PORTFOLIO</span>
            <p>&copy; {new Date().getFullYear()} Vinicius Marques. Dados, natureza e tecnologia em equilíbrio.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          min-height: 320px;
          background: linear-gradient(180deg, #43a047 0%, #388e3c 50%, #2e7d32 100%);
          overflow: hidden;
        }

        .footer-landscape {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* Hills */
        .hills {
          position: absolute;
          bottom: 60px;
          left: 0;
          right: 0;
          height: 120px;
        }

        .hill {
          position: absolute;
          bottom: 0;
          border-radius: 50% 50% 0 0;
        }

        .hill-1 {
          left: -5%;
          width: 40%;
          height: 100px;
          background: #2e7d32;
        }

        .hill-2 {
          left: 30%;
          width: 50%;
          height: 120px;
          background: #388e3c;
        }

        .hill-3 {
          right: -5%;
          width: 45%;
          height: 90px;
          background: #2e7d32;
        }

        /* Trees - pixel style */
        .tree {
          position: absolute;
          bottom: 60px;
        }

        .tree-foliage {
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 40px solid var(--color-accent-dark);
          position: relative;
        }

        .tree-foliage::before {
          content: '';
          position: absolute;
          top: 15px;
          left: -15px;
          width: 0;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-bottom: 35px solid var(--color-accent-dark);
        }

        .tree-foliage::after {
          content: '';
          position: absolute;
          top: 28px;
          left: -12px;
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-bottom: 30px solid var(--color-accent-dark);
        }

        .tree-trunk {
          width: 12px;
          height: 20px;
          background: #5d4037;
          margin: 0 auto;
          margin-top: -2px;
        }

        .tree-1 { left: 5%; transform: scale(0.8); }
        .tree-2 { left: 15%; transform: scale(1.2); }
        .tree-3 { right: 20%; transform: scale(1); }
        .tree-4 { right: 10%; transform: scale(0.9); }
        .tree-5 { right: 2%; transform: scale(0.7); }

        /* Pixel House */
        .pixel-house {
          position: absolute;
          bottom: 60px;
          left: 25%;
          transform: translateX(-50%);
        }

        .house-roof {
          width: 0;
          height: 0;
          border-left: 48px solid transparent;
          border-right: 48px solid transparent;
          border-bottom: 36px solid #8d6e63;
          position: relative;
        }

        .house-roof::before {
          content: '';
          position: absolute;
          top: 8px;
          left: -40px;
          width: 80px;
          height: 8px;
          background: #a1887f;
        }

        .house-body {
          width: 80px;
          height: 56px;
          background: var(--color-bg-primary);
          margin: 0 auto;
          margin-left: -40px;
          position: relative;
          border: 4px solid #5d4037;
          border-top: none;
        }

        .house-door {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 32px;
          background: #5d4037;
          border-radius: 4px 4px 0 0;
        }

        .house-door::before {
          content: '';
          position: absolute;
          top: 14px;
          right: 4px;
          width: 4px;
          height: 4px;
          background: var(--color-accent-sand);
          border-radius: 50%;
        }

        .house-window {
          position: absolute;
          top: 8px;
          left: 8px;
          width: 16px;
          height: 16px;
          background: var(--color-accent-sky);
          border: 2px solid #5d4037;
        }

        .house-window::before,
        .house-window::after {
          content: '';
          position: absolute;
          background: #5d4037;
        }

        .house-window::before {
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          transform: translateY(-50%);
        }

        .house-window::after {
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          transform: translateX(-50%);
        }

        .house-chimney {
          position: absolute;
          top: -24px;
          right: -12px;
          width: 12px;
          height: 24px;
          background: #8d6e63;
        }

        .house-chimney::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -2px;
          right: -2px;
          height: 4px;
          background: #a1887f;
        }

        /* Pixel Cat Mascot */
        .pixel-mascot {
          position: absolute;
          bottom: 64px;
          right: 35%;
          animation: mascot-idle 2s ease-in-out infinite;
        }

        .mascot-body {
          width: 32px;
          height: 32px;
          position: relative;
          image-rendering: pixelated;
        }

        .mascot-body::before {
          content: '';
          position: absolute;
          width: 32px;
          height: 32px;
          background: transparent;
          box-shadow:
            /* Ears */
            4px 0 0 var(--color-accent-dark),
            28px 0 0 var(--color-accent-dark),
            4px 4px 0 var(--color-accent-dark),
            8px 4px 0 #f8f4e8,
            24px 4px 0 #f8f4e8,
            28px 4px 0 var(--color-accent-dark),
            /* Head top */
            4px 8px 0 var(--color-accent-dark),
            8px 8px 0 #f8f4e8,
            12px 8px 0 #f8f4e8,
            16px 8px 0 #f8f4e8,
            20px 8px 0 #f8f4e8,
            24px 8px 0 #f8f4e8,
            28px 8px 0 var(--color-accent-dark),
            /* Eyes row */
            4px 12px 0 var(--color-accent-dark),
            8px 12px 0 #f8f4e8,
            12px 12px 0 #17311f,
            16px 12px 0 #f8f4e8,
            20px 12px 0 #17311f,
            24px 12px 0 #f8f4e8,
            28px 12px 0 var(--color-accent-dark),
            /* Nose/mouth */
            4px 16px 0 var(--color-accent-dark),
            8px 16px 0 #f8f4e8,
            12px 16px 0 #f8f4e8,
            16px 16px 0 #ff6b6b,
            20px 16px 0 #f8f4e8,
            24px 16px 0 #f8f4e8,
            28px 16px 0 var(--color-accent-dark),
            /* Body */
            4px 20px 0 var(--color-accent-dark),
            8px 20px 0 #f8f4e8,
            12px 20px 0 #f8f4e8,
            16px 20px 0 #f8f4e8,
            20px 20px 0 #f8f4e8,
            24px 20px 0 #f8f4e8,
            28px 20px 0 var(--color-accent-dark),
            /* Lower body */
            4px 24px 0 var(--color-accent-dark),
            8px 24px 0 var(--color-accent-dark),
            12px 24px 0 #f8f4e8,
            16px 24px 0 #f8f4e8,
            20px 24px 0 #f8f4e8,
            24px 24px 0 var(--color-accent-dark),
            28px 24px 0 var(--color-accent-dark),
            /* Feet */
            8px 28px 0 var(--color-accent-dark),
            12px 28px 0 var(--color-accent-dark),
            20px 28px 0 var(--color-accent-dark),
            24px 28px 0 var(--color-accent-dark);
        }

        /* Grass layer */
        .footer-grass {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: 
            repeating-linear-gradient(
              90deg,
              var(--color-accent-dark) 0px,
              var(--color-accent-dark) 4px,
              #2e7d32 4px,
              #2e7d32 8px,
              var(--color-accent) 8px,
              var(--color-accent) 12px,
              #2e7d32 12px,
              #2e7d32 16px
            );
        }

        .footer-grass::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 0;
          right: 0;
          height: 20px;
          background: 
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 8px,
              var(--color-accent-dark) 8px,
              var(--color-accent-dark) 12px,
              transparent 12px,
              transparent 24px,
              var(--color-accent) 24px,
              var(--color-accent) 28px,
              transparent 28px,
              transparent 40px
            );
          mask-image: linear-gradient(to top, black 50%, transparent 100%);
        }

        /* Footer Content */
        .footer-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: var(--spacing-md) 0;
          background: linear-gradient(180deg, transparent, rgba(26, 71, 42, 0.9));
          z-index: 10;
        }

        .footer-brand {
          text-align: center;
        }

        .footer-brand span {
          display: block;
          font-family: var(--font-family-display);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0.5rem;
        }

        .footer-brand p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer {
            min-height: 280px;
          }

          .pixel-house {
            left: 20%;
            transform: scale(0.8) translateX(-50%);
          }

          .pixel-mascot {
            right: 25%;
          }

          .tree-2 { display: none; }
          .tree-4 { display: none; }
        }

        @media (max-width: 480px) {
          .pixel-house {
            left: 15%;
            transform: scale(0.7) translateX(-50%);
          }

          .tree { transform: scale(0.6); }
          .tree-3 { display: none; }
        }
      `}</style>
    </footer>
  );
}
