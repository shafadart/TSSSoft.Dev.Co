'use client';

import { useEffect, useRef } from 'react';

export default function CloudBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    // Ultra-lightweight low-res canvas for silky smooth GPU composite
    const scaleFactor = 0.35;
    let w = (canvas.width = Math.floor(window.innerWidth * scaleFactor));
    let h = (canvas.height = Math.floor(window.innerHeight * scaleFactor));

    const onResize = () => {
      w = canvas.width = Math.floor(window.innerWidth * scaleFactor);
      h = canvas.height = Math.floor(window.innerHeight * scaleFactor);
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Streamlined cloud nodes (fewer gradients, hardware-accelerated blend)
    const clouds = [
      { x: w * 0.45, y: h * 0.22, r: 180, vx: 0.08, color: 'rgba(219, 234, 254, 0.28)' },
      { x: w * 0.15, y: h * 0.32, r: 160, vx: 0.06, color: 'rgba(147, 197, 253, 0.22)' },
      { x: w * 0.82, y: h * 0.26, r: 170, vx: 0.07, color: 'rgba(96, 165, 250, 0.20)' },
      { x: w * 0.52, y: h * 0.48, r: 200, vx: 0.05, color: 'rgba(59, 130, 246, 0.18)' },
    ];

    let lastTime = 0;
    const fpsInterval = 1000 / 30; // 30 FPS cap for background atmospheric puffs saves 50%+ GPU load

    const render = (time) => {
      animId = requestAnimationFrame(render);
      const elapsed = time - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = time - (elapsed % fpsInterval);

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < clouds.length; i++) {
        const c = clouds[i];
        c.x += c.vx;
        if (c.x - c.r > w) c.x = -c.r;

        const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
        grad.addColorStop(0, c.color);
        grad.addColorStop(0.7, 'rgba(30, 58, 138, 0.08)');
        grad.addColorStop(1, 'rgba(5, 9, 22, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#050916]"
      style={{ transform: 'translate3d(0,0,0)', contain: 'strict' }}
    >
      {/* 1. Deep Midnight Velvet Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c1e] via-[#091332] to-[#040817]" />

      {/* 2. Soft Glowing Volumetric Cloud Blobs (GPU Accelerated with translate3d) */}
      <div className="absolute inset-0 overflow-hidden" style={{ willChange: 'transform' }}>
        <div 
          className="absolute -top-[10%] left-[25%] w-[680px] h-[480px] md:w-[980px] md:h-[620px] rounded-full bg-gradient-to-tr from-sky-400/25 via-blue-200/25 to-blue-600/15 blur-[70px] animate-cloud-drift-1 mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
        <div 
          className="absolute top-[8%] left-[5%] w-[520px] h-[380px] md:w-[750px] md:h-[500px] rounded-full bg-gradient-to-br from-blue-300/20 via-sky-500/18 to-blue-800/14 blur-[65px] animate-cloud-drift-2 mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
        <div 
          className="absolute top-[12%] right-[5%] w-[600px] h-[420px] md:w-[850px] md:h-[550px] rounded-full bg-gradient-to-l from-indigo-500/16 via-blue-400/16 to-sky-300/12 blur-[75px] animate-cloud-drift-3 mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* 3. Live Canvas Drifting Volumetric Puffs */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full mix-blend-screen opacity-80"
        style={{ willChange: 'transform' }}
      />

      {/* 4. Vertical Fluted Glass Texture */}
      <div className="absolute inset-0 fluted-glass-pattern opacity-60 mix-blend-overlay" />

      {/* 5. Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050916]/70 via-[#050916]/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050916]/40 via-transparent to-[#040817]/80 pointer-events-none" />
    </div>
  );
}
