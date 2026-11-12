'use client';

export default function CloudBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#050916]">
      {/* Deep Atmospheric Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b1b] via-[#08112b] to-[#040713]" />

      {/* Volumetric Animated Clouds (Megh) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cloud 1: Main Luminous Blue / Cyan Mist */}
        <div 
          className="absolute -top-[10%] left-[15%] w-[650px] h-[550px] md:w-[950px] md:h-[750px] rounded-full bg-gradient-to-tr from-blue-600/35 via-sky-500/25 to-blue-700/20 blur-[130px] animate-cloud-a"
        />

        {/* Cloud 2: Deep Midnight Indigo Cloud on Right */}
        <div 
          className="absolute top-[20%] right-[-5%] w-[550px] h-[550px] md:w-[850px] md:h-[800px] rounded-full bg-gradient-to-br from-indigo-600/30 via-blue-700/25 to-slate-900/40 blur-[150px] animate-cloud-b"
        />

        {/* Cloud 3: Soft Ambient Oceanic Glow Center-Bottom */}
        <div 
          className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] md:w-[900px] md:h-[700px] rounded-full bg-gradient-to-t from-blue-700/25 via-blue-500/15 to-transparent blur-[160px] animate-cloud-c"
        />

        {/* Subtle Shimmer Beam */}
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-blue-400/20 via-transparent to-transparent opacity-40" />
      </div>

      {/* Vertical Fluted / Ribbed Glass Texture from Reference Image */}
      <div className="absolute inset-0 fluted-glass-pattern opacity-80 mix-blend-overlay" />

      {/* Subtle Radial Vignette for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,6,15,0.7)_100%)]" />
    </div>
  );
}
