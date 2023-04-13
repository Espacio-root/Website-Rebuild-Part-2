'use client';

import Image from 'next/image'
import React from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { BsInstagram, BsTiktok, BsTwitter, BsTwitch, BsFacebook, BsDiscord } from 'react-icons/bs'
import NavBar from './NavBar'
import { useGlobalContext } from '@/context/General';

const Header = () => {

    const { setShow } = useGlobalContext();
    const data = [{ icon: BsInstagram, link: 'https://www.instagram.com/monstercat/' }, { icon: BsTiktok, link: 'https://www.tiktok.com/@monstercat' }, { icon: BsTwitter, link: 'https://twitter.com/monstercat' }, { icon: BsTwitch, link: 'https://www.twitch.tv/monstercat' }, { icon: BsFacebook, link: 'https://www.facebook.com/monstercat' }, { icon: BsDiscord, link: 'https://discord.gg/monstercat' }]

    const handleOpen = (e) => {
        e.preventDefault()
        setShow(true);
    };

    return (
        <>
            <div className='fixed w-full'>
                <div className='flex w-[95%] justify-between items-center max-w-[2170px] py-12 mx-auto relative'>

                    <a href='https://www.monstercat.com/'>
                        <Image src='https://cdn.monstercat.com/monstercat-logo.webp' height='50' width='50' title='Monstercat' alt='Monstercat logo' />
                    </a>

                    <CgMenuRight className='h-[35px] w-[35px] cursor-pointer' onClick={handleOpen} />

                    <div className='absolute top-[150px] right-0 flex flex-col justify-center items-start gap-10'>
                        {data.map((item, index) => (
                            <a href={item.link}><item.icon key={index} className='h-5 w-5 cursor-pointer' /></a>
                        ))}
                    </div>
                </div>
            </div>

            <NavBar />
        </>
    );
}

export default Header
