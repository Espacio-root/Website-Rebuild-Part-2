import Image from 'next/image'
import React from 'react'
import { BsPlay, BsShare } from 'react-icons/bs'

const Main = () => {
    return (
        <div className='text-lg flex flex-col gap-12 justify-start custom:flex-row custom:items-center mt-10 w-full'>
            <div className='flex-1 w-full'>
                <div className='relative flex items-end gap-3 w-full'>
                    <div className='w-8 transform -rotate-90'>
                        <p className='italic whitespace-nowrap text-md custom:text-[24px] lg:text-3xl cursor-vertical-text font-semibold'><span className='text-green-700'>Instinct</span> -- Released May 22, 2020</p>
                    </div>
                    <img src="https://cdx.monstercat.com/resized/8a169d846576fcdad7a0a6e04d371eb05b2a9397/1024.webp" className='h-auto w-[480px] lg:w-[648px] xl:w-[808px] object-contain' />
                </div>

            </div>
            <div className='flex-1 flex flex-col gap-3 justify-center items-start font-monument mt-8 custom:ml-20 '>
                <div className='mb-8'>
                    <p className='text-3xl uppercase'><div className='mb-3 fancy text-6xl'>Level Days</div>Conro</p>
                </div>
                <div className='flex gap-2'>
                    <button className='tracking-widest bg-green-700 text-lg font-bold px-4 py-2 hover:bg-white hover:text-black flex justify-center items-center gap-3'>
                        <BsPlay className='h-8 w-8' />  
                        <p>Listen Now</p>
                    </button>
                    <button className='tracking-widest bg-transparent text-lg font-bold border-2 border-white px-4 py-2 hover:bg-white hover:text-black flex justify-center items-center gap-3'>
                        <BsShare className='h-6 w-6' />  
                        <p>Share</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main