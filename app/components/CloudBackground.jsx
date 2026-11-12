'use client';

import { useEffect, useRef } from 'react';

export default function CloudBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Realistic Volumetric Cloud Particles
    // Each particle is a soft, semi-transparent cloud billow with its own radius, speed, and opacity pulse
    const clouds = [];
    const numClouds = 22;

    for (let i = 0; i < numClouds; i++) {
      clouds.push({
        x: Math.random() * (width + 600) - 300,
        y: Math.random() * (height * 0.75) - 50, // Concentrated in the upper & middle screen like reference
        radius: Math.random() * 220 + 160,
        vx: Math.random() * 0.25 + 0.12, // Slow majestic horizontal drift
        vy: (Math.random() - 0.5) * 0.08,
        baseAlpha: Math.random() * 0.22 + 0.14,
        pulseSpeed: Math.random() * 0.0015 + 0.0008,
        pulseOffset: Math.random() * Math.PI * 2,
        // Color variation: from luminous silver-white to ice-blue and royal atmospheric blue
        colorType: i % 3 === 0 ? 'white' : i % 3 === 1 ? 'iceBlue' : 'deepBlue',
      });
    }

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Draw each volumetric cloud puff
      for (let i = 0; i < clouds.length; i++) {
        const c = clouds[i];

        // Move cloud
        c.x += c.vx;
        c.y += c.vy;

        // Wrap around smoothly
        if (c.x - c.radius > width) {
          c.x = -c.radius;
          c.y = Math.random() * (height * 0.7) - 50;
        }

        // Calculate pulsating opacity
        const alpha = c.baseAlpha + Math.sin(time * c.pulseSpeed + c.pulseOffset) * 0.06;

        // Create volumetric soft radial gradient for this cloud puff
        const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.radius);

        if (c.colorType === 'white') {
          // Silvery white core cloud like in reference image
          grad.addColorStop(0, `rgba(235, 245, 255, ${alpha * 1.2})`);
          grad.addColorStop(0.35, `rgba(186, 215, 255, ${alpha * 0.85})`);
          grad.addColorStop(0.7, `rgba(90, 145, 230, ${alpha * 0.35})`);
          grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
        } else if (c.colorType === 'iceBlue') {
          // Luminous sky blue
          grad.addColorStop(0, `rgba(147, 197, 253, ${alpha * 1.1})`);
          grad.addColorStop(0.4, `rgba(59, 130, 246, ${alpha * 0.65})`);
          grad.addColorStop(0.75, `rgba(29, 78, 216, ${alpha * 0.25})`);
          grad.addColorStop(1, 'rgba(10, 15, 30, 0)');
        } else {
          // Deep atmospheric royal blue mist
          grad.addColorStop(0, `rgba(37, 99, 235, ${alpha * 0.9})`);
          grad.addColorStop(0.5, `rgba(30, 58, 138, ${alpha * 0.45})`);
          grad.addColorStop(1, 'rgba(5, 9, 20, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#060b18]">
      
      {/* Deep Midnight Atmospheric Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e24] via-[#091436] to-[#040817]" />

      {/* Layer 1: High-Density Luminous Texture Clouds (Billowing & Drifting) */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Main Prominent White/Sky-Blue Cloud formation (Top-Center / Left as in reference) */}
        <div 
          className="absolute -top-[15%] left-[5%] w-[1100px] h-[750px] md:w-[1500px] md:h-[950px] opacity-80 mix-blend-screen animate-cloud-drift-1"
          style={{
            backgroundImage: "url('/clouds/cloud-1.webp')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            filter: 'contrast(125%) brightness(120%)',
          }}
        />

        {/* Secondary Billowing Cloud Layer (Drifting from Right / Center) */}
        <div 
          className="absolute top-[5%] right-[-10%] w-[1000px] h-[700px] md:w-[1300px] md:h-[850px] opacity-65 mix-blend-screen animate-cloud-drift-2"
          style={{
            backgroundImage: "url('/clouds/cloud-2.webp')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            filter: 'contrast(120%) brightness(110%)',
          }}
        />

        {/* Third Deep Indigo Volumetric Cloud Layer */}
        <div 
          className="absolute top-[25%] left-[-15%] w-[1200px] h-[800px] opacity-55 mix-blend-screen animate-cloud-drift-3"
          style={{
            backgroundImage: "url('/clouds/cloud-3.webp')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            filter: 'contrast(115%)',
          }}
        />
      </div>

      {/* Layer 2: Live HTML5 Canvas Volumetric Particle Clouds (Continuously Moving Across Screen) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full mix-blend-screen opacity-90"
      />

      {/* Layer 3: Vertical Fluted Glass Texture (Direct match to reference image) */}
      <div className="absolute inset-0 fluted-glass-pattern opacity-85 mix-blend-overlay" />

      {/* Subtle Ambient Vignette to keep text ultra-crisp and legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#040817] via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b18]/40 via-transparent to-[#040817]/60" />
    </div>
  );
}
