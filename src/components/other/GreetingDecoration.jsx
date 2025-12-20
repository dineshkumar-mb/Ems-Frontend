import React from 'react';

const GreetingDecoration = ({ timeOfDay }) => {

    // Morning: Sun rising, birds flying
    if (timeOfDay === 'morning') {
        return (
            <div className="absolute -top-4 right-10 sm:right-20 md:right-40 w-40 h-32 pointer-events-none opacity-50 sm:opacity-100">
                {/* Sun */}
                <div className="absolute top-4 right-10 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.6)] animate-[rise_2s_ease-out_forwards]"></div>
                {/* Birds */}
                <div className="hidden sm:block absolute top-4 right-2 text-gray-400 text-xs animate-[fly_15s_linear_infinite]">
                    <svg width="24" height="12" viewBox="0 0 20 10">
                        <path d="M0,5 Q5,0 10,5 Q15,10 20,5" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
            </div>
        );
    }

    // Afternoon: Bright Sun
    if (timeOfDay === 'afternoon') {
        return (
            <div className="absolute -top-4 right-20 sm:right-32 md:right-52 w-24 h-24 pointer-events-none opacity-50 sm:opacity-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300 rounded-full shadow-[0_0_50px_rgba(253,224,71,0.8)] animate-pulse"></div>
            </div>
        );
    }

    // Evening: Sunset
    if (timeOfDay === 'evening') {
        return (
            <div className="absolute top-0 right-10 sm:right-20 md:right-40 w-40 h-32 pointer-events-none opacity-50 sm:opacity-100">
                <div className="absolute top-4 right-10 w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.6)] animate-[set_3s_ease-in_forwards]"></div>
            </div>
        );
    }

    // Night: Moon and Stars
    return (
        <div className="absolute -top-4 right-10 sm:right-20 md:right-40 w-40 h-32 pointer-events-none opacity-50 sm:opacity-100">
            {/* Moon */}
            <div className="absolute top-4 right-10 w-10 h-10 sm:w-14 sm:h-14 bg-gray-200 rounded-full shadow-[0_0_20px_rgba(229,231,235,0.4)]">
                <div className="absolute -left-3 top-0 w-10 h-10 sm:w-14 sm:h-14 bg-[#1c1c1c] rounded-full"></div>
            </div>
            {/* Stars */}
            <div className="hidden sm:block absolute top-6 right-24 w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-12 right-16 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
            <div className="hidden sm:block absolute top-4 right-6 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
        </div>
    );
};

export default GreetingDecoration;
