'use client';

import { useEffect, useRef } from 'react';

export default function CloudBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    // High-performance scaled rendering: 0.5x internal resolution delivers 4x fill-rate speedup & silkier blur
    const scaleFactor = 0.5;
    let w = (canvas.width = Math.floor(window.innerWidth * scaleFactor));
    let h = (canvas.height = Math.floor(window.innerHeight * scaleFactor));

    const onResize = () => {
      w = canvas.width = Math.floor(window.innerWidth * scaleFactor);
      h = canvas.height = Math.floor(window.innerHeight * scaleFactor);
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Realistic Silky Volumetric Clouds (Multi-lobe organic cumulus clusters, zero-grain)
    const cloudClusters = [
      // Primary luminous center-top formation (The main moonlit cloud in reference)
      {
        baseX: w * 0.45,
        baseY: h * 0.22,
        vx: 0.16,
        phase: 0,
        lobes: [
          { dx: 0, dy: 0, rx: 380, ry: 240, alpha: 0.38, color: 'whiteCore' },
          { dx: -120, dy: 30, rx: 280, ry: 190, alpha: 0.32, color: 'iceBlue' },
          { dx: 140, dy: -20, rx: 300, ry: 210, alpha: 0.34, color: 'skyBlue' },
          { dx: 60, dy: 50, rx: 320, ry: 200, alpha: 0.28, color: 'azure' },
        ]
      },
      // Left atmospheric billow (Soft horizon glow behind hero text)
      {
        baseX: w * 0.12,
        baseY: h * 0.32,
        vx: 0.12,
        phase: 2.1,
        lobes: [
          { dx: 0, dy: 0, rx: 320, ry: 200, alpha: 0.22, color: 'iceBlue' },
          { dx: 90, dy: -30, rx: 260, ry: 170, alpha: 0.18, color: 'azure' },
          { dx: -80, dy: 40, rx: 240, ry: 160, alpha: 0.2, color: 'skyBlue' },
        ]
      },
      // Right-side ambient cloud mass
      {
        baseX: w * 0.8,
        baseY: h * 0.26,
        vx: 0.14,
        phase: 3.8,
        lobes: [
          { dx: 0, dy: 0, rx: 360, ry: 220, alpha: 0.28, color: 'skyBlue' },
          { dx: -110, dy: 20, rx: 280, ry: 180, alpha: 0.24, color: 'whiteCore' },
          { dx: 100, dy: -25, rx: 260, ry: 170, alpha: 0.22, color: 'azure' },
        ]
      },
      // Deep lower drift
      {
        baseX: w * 0.5,
        baseY: h * 0.45,
        vx: 0.1,
        phase: 1.4,
        lobes: [
          { dx: 0, dy: 0, rx: 440, ry: 240, alpha: 0.18, color: 'azure' },
          { dx: -150, dy: 30, rx: 320, ry: 180, alpha: 0.15, color: 'skyBlue' },
          { dx: 130, dy: -20, rx: 300, ry: 170, alpha: 0.16, color: 'azure' },
        ]
      }
    ];

    let t = 0;

    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < cloudClusters.length; i++) {
        const cluster = cloudClusters[i];

        // Drift cluster gently
        cluster.baseX += cluster.vx;
        const clusterY = cluster.baseY + Math.sin(t * 0.7 + cluster.phase) * 18;

        // Wrap around smoothly
        if (cluster.baseX - 450 > w) {
          cluster.baseX = -450;
        }

        // Draw each soft organic lobe
        for (let j = 0; j < cluster.lobes.length; j++) {
          const lobe = cluster.lobes[j];
          const lx = cluster.baseX + lobe.dx;
          const ly = clusterY + lobe.dy + Math.cos(t * 0.8 + cluster.phase + j) * 8;

          const curRx = lobe.rx + Math.sin(t * 0.6 + cluster.phase + j * 0.5) * 22;
          const curRy = lobe.ry + Math.cos(t * 0.5 + cluster.phase + j * 0.5) * 16;
          const curAlpha = lobe.alpha + Math.sin(t * 0.4 + cluster.phase + j) * 0.04;

          ctx.save();
          ctx.translate(lx, ly);
          ctx.scale(curRx / curRy, 1);

          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, curRy);

          if (lobe.color === 'whiteCore') {
            grad.addColorStop(0, `rgba(242, 248, 255, ${curAlpha * 1.35})`);
            grad.addColorStop(0.3, `rgba(191, 219, 254, ${curAlpha * 0.9})`);
            grad.addColorStop(0.65, `rgba(96, 165, 250, ${curAlpha * 0.4})`);
            grad.addColorStop(1, 'rgba(5, 9, 22, 0)');
          } else if (lobe.color === 'iceBlue') {
            grad.addColorStop(0, `rgba(224, 242, 254, ${curAlpha * 1.1})`);
            grad.addColorStop(0.35, `rgba(147, 197, 253, ${curAlpha * 0.7})`);
            grad.addColorStop(0.7, `rgba(59, 130, 246, ${curAlpha * 0.3})`);
            grad.addColorStop(1, 'rgba(5, 9, 22, 0)');
          } else if (lobe.color === 'skyBlue') {
            grad.addColorStop(0, `rgba(186, 215, 255, ${curAlpha * 1.05})`);
            grad.addColorStop(0.4, `rgba(96, 165, 250, ${curAlpha * 0.65})`);
            grad.addColorStop(0.75, `rgba(37, 99, 235, ${curAlpha * 0.25})`);
            grad.addColorStop(1, 'rgba(5, 9, 22, 0)');
          } else {
            grad.addColorStop(0, `rgba(59, 130, 246, ${curAlpha * 0.8})`);
            grad.addColorStop(0.45, `rgba(30, 64, 175, ${curAlpha * 0.4})`);
            grad.addColorStop(1, 'rgba(5, 9, 22, 0)');
          }

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, curRy, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#050916]">
      
      {/* 1. Deep Midnight Velvet Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c1e] via-[#091332] to-[#040817]" />

      {/* 2. Soft Glowing Volumetric Organic Cloud Blobs (Hardware Accelerated CSS Fluid Layer) */}
      <div className="absolute inset-0 overflow-hidden" style={{ transform: 'translateZ(0)' }}>
        
        {/* Main Center Luminous Cloud Formation (White & Sky Blue - As in Reference) */}
        <div 
          className="absolute -top-[10%] left-[25%] w-[680px] h-[480px] md:w-[980px] md:h-[620px] rounded-full bg-gradient-to-tr from-sky-400/30 via-blue-200/35 to-blue-600/20 blur-[80px] animate-cloud-drift-1 mix-blend-screen"
        />

        {/* Secondary Upper Left Cloud Puff */}
        <div 
          className="absolute top-[8%] left-[5%] w-[520px] h-[380px] md:w-[750px] md:h-[500px] rounded-full bg-gradient-to-br from-blue-300/25 via-sky-500/20 to-blue-800/18 blur-[75px] animate-cloud-drift-2 mix-blend-screen"
        />

        {/* Right-Side Soft Ethereal Atmospheric Mist */}
        <div 
          className="absolute top-[12%] right-[5%] w-[600px] h-[420px] md:w-[850px] md:h-[550px] rounded-full bg-gradient-to-l from-indigo-500/20 via-blue-400/20 to-sky-300/15 blur-[85px] animate-cloud-drift-3 mix-blend-screen"
        />

        {/* Lower Horizon Soft Blue Depth */}
        <div 
          className="absolute -bottom-[15%] left-[20%] w-[750px] h-[500px] rounded-full bg-blue-700/12 blur-[100px] mix-blend-screen"
        />
      </div>

      {/* 3. Live Canvas Drifting Volumetric Puffs (Continuously moving clouds) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full mix-blend-screen opacity-90"
      />

      {/* 4. Vertical Fluted Glass Texture (Clean, subtle, exactly like the reference image) */}
      <div className="absolute inset-0 fluted-glass-pattern opacity-70 mix-blend-overlay" />

      {/* 5. Contrast Overlay: Ensures text is always 100% crystal-clear and razor-sharp */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050916]/75 via-[#050916]/35 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050916]/40 via-transparent to-[#040817]/80 pointer-events-none" />
    </div>
  );
}
