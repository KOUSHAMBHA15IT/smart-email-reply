import React from 'react'

function Header() {
    return (
        <div className='w-full flex flex-col items-center justify-center mt-20 px-4 relative'>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[600px] bg-glow-radial blur-[120px] opacity-40 rounded-full"></div>
            </div>

            <h1 className='relative text-white text-4xl md:text-5xl font-extrabold tracking-tight text-center z-10'>
                Smart Email Assistant
            </h1>
            <p className='relative text-[#a2abb3] text-base md:text-lg font-normal mt-4 text-center z-10'>
                Write better, faster — with AI.
            </p>
        </div>
    )
}

export default Header
