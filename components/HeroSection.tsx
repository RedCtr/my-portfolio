import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse justify-between items-center 
        py-5 md:pb-9 gap-y-2 gap-x-20 px-7'>
            <div className='relative rounded-full mx-auto w-[130px] h-[130px] md:w-[180px] md:h-[180px] group'>
                <Image
                    alt='Image of Red Ctr'
                    src='/avatar.jpg'
                    className='relative object-cover rounded-full filter grayscale z-10 cursor-pointer group-hover:border-2 
                    group-hover:border-slate-200 group-hover:shadow-md transition'
                    priority
                    fill
                />

                <div className='absolute z-0 bottom-2 left-1 ring-1 w-[100px] h-[100px] md:w-[170px] md:h-[170px] scale-110 opacity-0 group-hover:opacity-100 
                animate-rotate filter blur-lg aspect-square rounded-full bg-gradient-to-t from-purple-900 via-orange-700 to-red-600'/>

            </div>
            <div className='relative overflow-hidden flex flex-col md:mt-16'>

                <div className='flex flex-col gap-y-3 md:gap-y-6 text-center md:text-start'>
                    <h2 className='block md:hidden text-xs sm:text-sm font-normal italic text-[#9a9a9a]'>
                        Hi, I'm Redouane 👋
                    </h2>
                    <h2 className='hidden md:block md:text-4xl lg:text-5xl tracking-tight font-bold text-gray-100'>
                        I'm Redzyyy 👋
                    </h2>
                    <h1 className='text-2xl md:text-3xl font-semibold md:font-medium tracking-tight
                    bg-gradient-to-r from-gray-200 to-gray-500 text-transparent bg-clip-text md:max-w-sm'>
                        Building digital <br className='block md:hidden' /> products, brands, and
                        <span className='md:inline-flex text-center w-fit px-1 md:px-2 md:py-1 font-semibold rounded-lg text-gray-900 mx-auto ml-1 bg-yellow-400 mt-1'>
                            experience.
                        </span>

                    </h1>

                    <p className='text-slate-400 text-xs sm:text-sm font-medium font-mono tracking-tight '>
                        a <span className='font-semibold text-slate-600'>Product Designer</span> and <span className='font-semibold text-slate-600'>Visual Developer</span> in Sf,<br />
                        I specialize in UI/UX Design, Responsive Web Design, <br />
                        and Visual Development

                    </p>

                </div>
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className='relative mx-auto md:mr-auto md:ml-0 isolate overflow-hidden rounded-lg w-28 sm:w-40 md:w-[200px] px-6 py-4 sm:px-10 sm:py-6 
                    mt-4 transition-transform duration-200 ease-out hover:scale-90'>
                    <button className='absolute inset-px z-10 rounded-lg bg-gray-800 border border-gray-700
                    text-base sm:text-lg font-medium text-slate-200 flex items-center justify-center '>
                        Contact Me
                    </button>
                    <span
                        aria-hidden
                        className="absolute inset-0 z-0 scale-x-[2.0] 
                        blur before:absolute before:inset-0 before:top-1/2 
                        before:aspect-square before:animate-disco before:bg-gradient-conic 
                        before:from-purple-200 before:via-gray-900 before:to-[#444]"
                    />
                </a>
            </div>



        </div>
    )
}

export default HeroSection