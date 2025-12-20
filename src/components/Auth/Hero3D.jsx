import React from 'react';

const Hero3D = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Outer Ring */}
            <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] lg:w-[300px] lg:h-[300px] border border-emerald-500/30 rounded-full animate-[spin_10s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
            </div>

            {/* Middle Ring */}
            <div className="absolute w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] border border-emerald-400/40 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
            </div>

            {/* Inner Ring */}
            <div className="absolute w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] lg:w-[140px] lg:h-[140px] border border-emerald-300/50 rounded-full animate-[spin_8s_linear_infinite]">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-300 rounded-full shadow-[0_0_10px_rgba(110,231,183,0.8)]"></div>
            </div>

            {/* Central Core */}
            <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg sm:rounded-xl rotate-45 animate-pulse shadow-2xl shadow-emerald-500/30 flex items-center justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#1c1c1c]/90 rounded flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-emerald-500/50 rounded animate-bounce"></div>
                </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500/40 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500/40 rounded-full animate-ping delay-700"></div>
        </div>
    );
};

export default Hero3D;
