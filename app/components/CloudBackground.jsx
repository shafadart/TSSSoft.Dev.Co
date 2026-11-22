'use client';

export default function CloudBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none transition-colors duration-300 bg-[#f8fafc] dark:bg-[#050916]"
      style={{ transform: 'translate3d(0,0,0)', contain: 'strict' }}
    >
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] dark:from-[#060c1e] dark:via-[#091332] dark:to-[#040817]" />

      {/* 2. Soft Glowing Volumetric Blobs (GPU-accelerated CSS animations) */}
      <div className="absolute inset-0 overflow-hidden" style={{ transform: 'translate3d(0,0,0)' }}>
        {/* Main Center Ambient Glow */}
        <div 
          className="absolute -top-[10%] left-[25%] w-[680px] h-[480px] md:w-[980px] md:h-[620px] rounded-full 
            bg-gradient-to-tr from-blue-200/40 via-sky-100/40 to-blue-300/30 blur-[80px] animate-cloud-drift-1 
            dark:from-sky-400/25 dark:via-blue-200/25 dark:to-blue-600/15 dark:blur-[60px] dark:mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
        {/* Secondary Upper Left Puff */}
        <div 
          className="absolute top-[8%] left-[5%] w-[520px] h-[380px] md:w-[750px] md:h-[500px] rounded-full 
            bg-gradient-to-br from-indigo-100/40 via-blue-100/35 to-sky-200/30 blur-[75px] animate-cloud-drift-2 
            dark:from-blue-300/20 dark:via-sky-500/18 dark:to-blue-800/14 dark:blur-[55px] dark:mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
        {/* Right-Side Soft Atmospheric Mist */}
        <div 
          className="absolute top-[12%] right-[5%] w-[600px] h-[420px] md:w-[850px] md:h-[550px] rounded-full 
            bg-gradient-to-l from-sky-200/35 via-blue-100/30 to-indigo-100/25 blur-[85px] animate-cloud-drift-3 
            dark:from-indigo-500/16 dark:via-blue-400/16 dark:to-sky-300/12 dark:blur-[65px] dark:mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
        {/* Lower Ambient Depth */}
        <div 
          className="absolute -bottom-[15%] left-[20%] w-[750px] h-[500px] rounded-full 
            bg-blue-100/30 blur-[90px] 
            dark:bg-blue-700/10 dark:blur-[80px] dark:mix-blend-screen"
        />
      </div>

      {/* 3. Subtle Technical Grid Pattern in Light & Dark Mode */}
      <div 
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />
    </div>
  );
}
