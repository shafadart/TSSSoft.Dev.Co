'use client';

export default function CloudBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#050916]"
      style={{ transform: 'translate3d(0,0,0)', contain: 'strict' }}
    >
      {/* 1. Deep Midnight Velvet Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c1e] via-[#091332] to-[#040817]" />

      {/* 2. Soft Glowing Volumetric Cloud Blobs (100% GPU-accelerated CSS animations) */}
      <div className="absolute inset-0 overflow-hidden" style={{ transform: 'translate3d(0,0,0)' }}>
        {/* Main Center Luminous Cloud Formation */}
        <div 
          className="absolute -top-[10%] left-[25%] w-[680px] h-[480px] md:w-[980px] md:h-[620px] rounded-full bg-gradient-to-tr from-sky-400/25 via-blue-200/25 to-blue-600/15 blur-[60px] animate-cloud-drift-1 mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
        {/* Secondary Upper Left Cloud Puff */}
        <div 
          className="absolute top-[8%] left-[5%] w-[520px] h-[380px] md:w-[750px] md:h-[500px] rounded-full bg-gradient-to-br from-blue-300/20 via-sky-500/18 to-blue-800/14 blur-[55px] animate-cloud-drift-2 mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
        {/* Right-Side Soft Atmospheric Mist */}
        <div 
          className="absolute top-[12%] right-[5%] w-[600px] h-[420px] md:w-[850px] md:h-[550px] rounded-full bg-gradient-to-l from-indigo-500/16 via-blue-400/16 to-sky-300/12 blur-[65px] animate-cloud-drift-3 mix-blend-screen"
          style={{ willChange: 'transform' }}
        />
        {/* Lower Ambient Depth */}
        <div 
          className="absolute -bottom-[15%] left-[20%] w-[750px] h-[500px] rounded-full bg-blue-700/10 blur-[80px] mix-blend-screen"
        />
      </div>

      {/* 3. Vertical Fluted Glass Texture */}
      <div className="absolute inset-0 fluted-glass-pattern opacity-50 mix-blend-overlay" />

      {/* 4. Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050916]/70 via-[#050916]/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050916]/40 via-transparent to-[#040817]/80 pointer-events-none" />
    </div>
  );
}
