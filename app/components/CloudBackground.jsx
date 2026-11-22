'use client';

export default function CloudBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none transition-colors duration-300 bg-white dark:bg-[#050916]"
      style={{ transform: 'translate3d(0,0,0)', contain: 'strict' }}
    >
      {/* 1. Base: Pure White in Light Mode, Midnight in Dark Mode */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-b dark:from-[#060c1e] dark:via-[#091332] dark:to-[#040817]" />

      {/* 2. Soft Glowing Volumetric Blobs */}
      <div className="absolute inset-0 overflow-hidden" style={{ transform: 'translate3d(0,0,0)' }}>
        {/* Main Center Ambient Glow */}
        <div 
          className="absolute -top-[10%] left-[25%] w-[680px] h-[480px] md:w-[980px] md:h-[620px] rounded-full 
            bg-gradient-to-tr from-blue-100/35 via-sky-100/25 to-blue-200/20 blur-[90px] animate-cloud-drift-1 
            dark:from-sky-400/25 dark:via-blue-200/25 dark:to-blue-600/15 dark:blur-[60px] dark:mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
        {/* Secondary Upper Left Puff */}
        <div 
          className="absolute top-[8%] left-[5%] w-[520px] h-[380px] md:w-[750px] md:h-[500px] rounded-full 
            bg-gradient-to-br from-indigo-50/40 via-blue-100/25 to-sky-100/20 blur-[85px] animate-cloud-drift-2 
            dark:from-blue-300/20 dark:via-sky-500/18 dark:to-blue-800/14 dark:blur-[55px] dark:mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
        {/* Right-Side Soft Atmospheric Mist */}
        <div 
          className="absolute top-[12%] right-[5%] w-[600px] h-[420px] md:w-[850px] md:h-[550px] rounded-full 
            bg-gradient-to-l from-sky-100/30 via-blue-50/25 to-indigo-50/20 blur-[90px] animate-cloud-drift-3 
            dark:from-indigo-500/16 dark:via-blue-400/16 dark:to-sky-300/12 dark:blur-[65px] dark:mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* 3. Subtle Technical Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
