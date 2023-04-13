import React from 'react'
import Main from './Main'
import { GrSoundcloud, GrSpotify, GrApple, GrYoutube, GrAmazon } from 'react-icons/gr'
import { MonstercatPlayer } from './Svg'
import { BsPlay, BsShare } from 'react-icons/bs'

const Content = () => {

    const stream = [{ icon: GrAmazon, tooltip: 'Stream On Amazon' }, { icon: GrSoundcloud, tooltip: 'Stream On SoundCloud' }, { icon: GrSpotify, tooltip: 'Stream On Spotify' }, { icon: GrApple, tooltip: 'Stream On Apple Music' }, { icon: GrYoutube, tooltip: 'Stream On YouTube' }]
    const songs = [{ title: 'The Small Things', time: '3:35' }, { title: 'Without Your Love', time: '3:09' }, { title: 'Therapy', time: '3:06' }, { title: 'Fighters', time: '3:46' }, { title: 'Way Up', time: '3:32' }, { title: 'Waiting', time: '3:07' }, { title: 'Dreaming', time: '2:57' }, { title: 'Tattoo', time: '3:29' }, { title: 'Out for the Night', time: '3:05' }, { title: 'Overdue', time: '2:48' }, { title: 'Say It', time: '3:04' }, { title: 'Here to Stay', time: '2:44' }]

    return (
        <div className='flex flex-col gap-10 items-start w-[75%] max-w-[1850px] mx-auto'>

            <Main />

            <div className='flex flex-col gap-8 mt-16'>
                <p className='text-5xl font-monument uppercase tracking-widest'>Stream it your way</p>
                <div className='inline-flex'>
                    <div className='px-5 py-5 border border-white'>
                        <a className='group relative cursor-pointer'><MonstercatPlayer />
                            <div className="opacity-0 group-hover:opacity-100 bg-gray-100 text-black px-3 absolute -top-[20px] left-1/2 transform -translate-x-1/2 mb-2 shadow-lg transition-all duration-200">
                                <p className="text-sm font-bold whitespace-nowrap">Click to stream on monstercap</p>
                            </div>
                        </a>
                    </div>
                    {stream.map((item, index) => (
                        <div className='px-5 py-5 border-t border-b border-r border-white'>
                            <a href={item.tooltip} key={index} className='group relative'><item.icon className='h-5 w-5' />
                                <div className="opacity-0 group-hover:opacity-100 bg-gray-100 text-black px-3 absolute -top-[20px] left-1/2 transform -translate-x-1/2 mb-2 shadow-lg transition-all duration-200">
                                    <p className="text-sm font-bold whitespace-nowrap">{item.tooltip}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col items-start gap-5 w-full mt-16'>
                <p className='text-5xl font-monument uppercase tracking-widest'>Track List</p>
                <div className='flex flex-col gap-7 font-montserrat w-full'>
                    {songs.map((item, index) => (
                        <div className='flex justify-between items-center w-full'>
                            <div className='flex items-start justify-center'>
                                <p className='text-lg mr-8 mt-1'>{index + 1}</p>
                                <BsPlay className='h-8 w-8 mr-3 cursor-pointer' />
                                <div className='flex flex-col items-start'>
                                    <p className='text-[22px] font-bold'>{item.title}</p>
                                    <p className='text-md text-gray-400 font-semibold'>Conro</p>
                                </div>
                            </div>

                            <div className='flex justify-center items-center text-gray-400'>
                                <p className='text-md mr-12'>{item.time}</p>
                                <BsShare className='h-5 w-5 cursor-pointer' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-12 mt-16 w-full'>
                <p className='text-5xl font-monument uppercase tracking-widest'>Music Video</p>
                <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/7nObtWENgxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Content