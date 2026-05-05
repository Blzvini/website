export default function Footer() {
  return (
    <footer className="footer">
      {/* Landscape Scene */}
      <div className="footer-landscape" aria-hidden="true">
        {/* Mountains in background */}
        <div className="mountains">
          <div className="mountain mountain-1" />
          <div className="mountain mountain-2" />
          <div className="mountain mountain-3" />
          <div className="mountain mountain-4" />
        </div>

        {/* Hills in midground */}
        <div className="hills">
          <div className="hill hill-1" />
          <div className="hill hill-2" />
          <div className="hill hill-3" />
        </div>

        {/* Village with houses */}
        <div className="village">
          {/* House 1 - Small */}
          <div className="house house-1">
            <div className="house-chimney" />
            <div className="house-roof" />
            <div className="house-body">
              <div className="house-door" />
              <div className="house-window" />
            </div>
          </div>

          {/* House 2 - Main/Larger */}
          <div className="house house-2">
            <div className="house-chimney" />
            <div className="house-roof" />
            <div className="house-body">
              <div className="house-door" />
              <div className="house-window window-1" />
              <div className="house-window window-2" />
            </div>
          </div>

          {/* House 3 - Small */}
          <div className="house house-3">
            <div className="house-chimney" />
            <div className="house-roof" />
            <div className="house-body">
              <div className="house-door" />
              <div className="house-window" />
            </div>
          </div>
        </div>

        {/* Trees distributed around */}
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
        <div className="tree tree-6">
          <div className="tree-foliage" />
          <div className="tree-trunk" />
        </div>

        {/* Pixel Cat Mascot */}
        <div className="pixel-mascot">
          <div className="mascot-body" />
        </div>

        {/* Ground layer */}
        <div className="ground" />
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          min-height: 400px;
          overflow: hidden;
        }

        .footer-landscape {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, 
            #43a047 0%, 
            #66bb6a 20%,
            #81c784 40%,
            #a5d6a7 60%,
            #c8e6c9 80%,
            #81c784 100%
          );
        }

        /* Mountains - Background layer */
        .mountains {
          position: absolute;
          bottom: 100px;
          left: 0;
          right: 0;
          height: 200px;
        }

        .mountain {
          position: absolute;
          bottom: 0;
          width: 0;
          height: 0;
        }

        .mountain-1 {
          left: 5%;
          border-left: 80px solid transparent;
          border-right: 80px solid transparent;
          border-bottom: 140px solid #5d8a66;
        }

        .mountain-1::before {
          content: '';
          position: absolute;
          top: 60px;
          left: -50px;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-bottom: 80px solid #4a7c59;
        }

        .mountain-2 {
          left: 25%;
          border-left: 120px solid transparent;
          border-right: 120px solid transparent;
          border-bottom: 180px solid #6b9b74;
        }

        .mountain-2::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -30px;
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 40px solid #c8e6c9;
        }

        .mountain-3 {
          right: 20%;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-bottom: 160px solid #5d8a66;
        }

        .mountain-4 {
          right: 0;
          border-left: 90px solid transparent;
          border-right: 60px solid transparent;
          border-bottom: 130px solid #4a7c59;
        }

        /* Hills - Midground layer */
        .hills {
          position: absolute;
          bottom: 80px;
          left: 0;
          right: 0;
          height: 100px;
        }

        .hill {
          position: absolute;
          bottom: 0;
          border-radius: 50% 50% 0 0;
        }

        .hill-1 {
          left: -5%;
          width: 35%;
          height: 70px;
          background: #4caf50;
        }

        .hill-2 {
          left: 35%;
          width: 40%;
          height: 90px;
          background: #43a047;
        }

        .hill-3 {
          right: -5%;
          width: 35%;
          height: 60px;
          background: #4caf50;
        }

        /* Village */
        .village {
          position: absolute;
          bottom: 80px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 40px;
        }

        /* Houses - Pixel style */
        .house {
          position: relative;
          image-rendering: pixelated;
        }

        /* Small houses (1 and 3) */
        .house-1, .house-3 {
          width: 56px;
        }

        .house-1 .house-roof,
        .house-3 .house-roof {
          width: 0;
          height: 0;
          border-left: 32px solid transparent;
          border-right: 32px solid transparent;
          border-bottom: 28px solid #8d6e63;
          margin-left: -4px;
        }

        .house-1 .house-body,
        .house-3 .house-body {
          width: 56px;
          height: 40px;
          background: #f8f4e8;
          border: 4px solid #5d4037;
          border-top: none;
          position: relative;
        }

        .house-1 .house-door,
        .house-3 .house-door {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 22px;
          background: #5d4037;
          border-radius: 3px 3px 0 0;
        }

        .house-1 .house-window,
        .house-3 .house-window {
          position: absolute;
          top: 6px;
          left: 6px;
          width: 12px;
          height: 12px;
          background: #5bc8f5;
          border: 2px solid #5d4037;
        }

        .house-1 .house-chimney,
        .house-3 .house-chimney {
          position: absolute;
          top: -20px;
          right: 8px;
          width: 10px;
          height: 20px;
          background: #8d6e63;
          z-index: 1;
        }

        .house-1 .house-chimney::before,
        .house-3 .house-chimney::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -2px;
          right: -2px;
          height: 4px;
          background: #a1887f;
        }

        /* Main house (2) - Larger */
        .house-2 {
          width: 90px;
        }

        .house-2 .house-roof {
          width: 0;
          height: 0;
          border-left: 52px solid transparent;
          border-right: 52px solid transparent;
          border-bottom: 40px solid #a1887f;
          margin-left: -7px;
        }

        .house-2 .house-body {
          width: 90px;
          height: 60px;
          background: #fff8e1;
          border: 4px solid #5d4037;
          border-top: none;
          position: relative;
        }

        .house-2 .house-door {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 30px;
          background: #5d4037;
          border-radius: 3px 3px 0 0;
        }

        .house-2 .house-door::before {
          content: '';
          position: absolute;
          top: 12px;
          right: 4px;
          width: 4px;
          height: 4px;
          background: #ffd166;
          border-radius: 50%;
        }

        .house-2 .house-window {
          position: absolute;
          top: 10px;
          width: 16px;
          height: 16px;
          background: #5bc8f5;
          border: 2px solid #5d4037;
        }

        .house-2 .window-1 {
          left: 8px;
        }

        .house-2 .window-2 {
          right: 8px;
        }

        .house-2 .house-window::before,
        .house-2 .house-window::after {
          content: '';
          position: absolute;
          background: #5d4037;
        }

        .house-2 .house-window::before {
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          transform: translateY(-50%);
        }

        .house-2 .house-window::after {
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          transform: translateX(-50%);
        }

        .house-2 .house-chimney {
          position: absolute;
          top: -32px;
          right: 12px;
          width: 14px;
          height: 32px;
          background: #8d6e63;
          z-index: 1;
        }

        .house-2 .house-chimney::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -2px;
          right: -2px;
          height: 4px;
          background: #a1887f;
        }

        /* Trees - Pixel style */
        .tree {
          position: absolute;
          bottom: 80px;
        }

        .tree-foliage {
          width: 0;
          height: 0;
          border-left: 16px solid transparent;
          border-right: 16px solid transparent;
          border-bottom: 32px solid #1a472a;
          position: relative;
        }

        .tree-foliage::before {
          content: '';
          position: absolute;
          top: 12px;
          left: -12px;
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-bottom: 28px solid #1a472a;
        }

        .tree-foliage::after {
          content: '';
          position: absolute;
          top: 22px;
          left: -10px;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 24px solid #1a472a;
        }

        .tree-trunk {
          width: 10px;
          height: 16px;
          background: #5d4037;
          margin: 0 auto;
          margin-top: -2px;
        }

        .tree-1 { left: 3%; transform: scale(0.7); }
        .tree-2 { left: 10%; transform: scale(1); }
        .tree-3 { left: 18%; transform: scale(0.85); }
        .tree-4 { right: 18%; transform: scale(0.9); }
        .tree-5 { right: 8%; transform: scale(1.1); }
        .tree-6 { right: 2%; transform: scale(0.75); }

        /* Pixel Cat Mascot */
        .pixel-mascot {
          position: absolute;
          bottom: 84px;
          right: 30%;
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
            4px 0 0 #1a472a,
            28px 0 0 #1a472a,
            4px 4px 0 #1a472a,
            8px 4px 0 #f8f4e8,
            24px 4px 0 #f8f4e8,
            28px 4px 0 #1a472a,
            /* Head top */
            4px 8px 0 #1a472a,
            8px 8px 0 #f8f4e8,
            12px 8px 0 #f8f4e8,
            16px 8px 0 #f8f4e8,
            20px 8px 0 #f8f4e8,
            24px 8px 0 #f8f4e8,
            28px 8px 0 #1a472a,
            /* Eyes row */
            4px 12px 0 #1a472a,
            8px 12px 0 #f8f4e8,
            12px 12px 0 #17311f,
            16px 12px 0 #f8f4e8,
            20px 12px 0 #17311f,
            24px 12px 0 #f8f4e8,
            28px 12px 0 #1a472a,
            /* Nose/mouth */
            4px 16px 0 #1a472a,
            8px 16px 0 #f8f4e8,
            12px 16px 0 #f8f4e8,
            16px 16px 0 #ff6b6b,
            20px 16px 0 #f8f4e8,
            24px 16px 0 #f8f4e8,
            28px 16px 0 #1a472a,
            /* Body */
            4px 20px 0 #1a472a,
            8px 20px 0 #f8f4e8,
            12px 20px 0 #f8f4e8,
            16px 20px 0 #f8f4e8,
            20px 20px 0 #f8f4e8,
            24px 20px 0 #f8f4e8,
            28px 20px 0 #1a472a,
            /* Lower body */
            4px 24px 0 #1a472a,
            8px 24px 0 #1a472a,
            12px 24px 0 #f8f4e8,
            16px 24px 0 #f8f4e8,
            20px 24px 0 #f8f4e8,
            24px 24px 0 #1a472a,
            28px 24px 0 #1a472a,
            /* Feet */
            8px 28px 0 #1a472a,
            12px 28px 0 #1a472a,
            20px 28px 0 #1a472a,
            24px 28px 0 #1a472a;
        }

        @keyframes mascot-idle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        /* Ground layer */
        .ground {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(180deg,
            #4caf50 0%,
            #43a047 30%,
            #388e3c 60%,
            #2e7d32 100%
          );
        }

        .ground::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 12px;
          background: 
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 8px,
              #2e7d32 8px,
              #2e7d32 12px,
              transparent 12px,
              transparent 20px,
              #388e3c 20px,
              #388e3c 24px,
              transparent 24px,
              transparent 36px
            );
        }

        @media (max-width: 768px) {
          .footer {
            min-height: 320px;
          }

          .village {
            gap: 20px;
          }

          .house-1, .house-3 {
            transform: scale(0.8);
          }

          .house-2 {
            transform: scale(0.85);
          }

          .tree-2, .tree-5 { display: none; }

          .mountain-1, .mountain-4 {
            display: none;
          }

          .pixel-mascot {
            right: 20%;
          }
        }

        @media (max-width: 480px) {
          .footer {
            min-height: 280px;
          }

          .village {
            gap: 10px;
          }

          .house-1, .house-3 {
            transform: scale(0.65);
          }

          .house-2 {
            transform: scale(0.7);
          }

          .tree { transform: scale(0.6); }
          .tree-3, .tree-4 { display: none; }

          .pixel-mascot {
            transform: scale(0.8);
            right: 15%;
          }
        }
      `}</style>
    </footer>
  );
}
