import Image from 'next/image'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsInstagram, BsTiktok, BsTwitter, BsTwitch, BsFacebook, BsDiscord } from 'react-icons/bs'
import { useGlobalContext } from '@/context/General';

const NavBar = () => {

    const { show, setShow } = useGlobalContext();
    const data = ['Music  >', 'Artists', 'About  >', 'News', 'Events  >', 'Programming  >', 'Gold', 'Partners', 'Press', 'Player', 'Shop', 'Lost Civilization']
    const socials = [{ icon: BsInstagram, link: 'https://www.instagram.com/monstercat/' }, { icon: BsTiktok, link: 'https://www.tiktok.com/@monstercat' }, { icon: BsTwitter, link: 'https://twitter.com/monstercat' }, { icon: BsTwitch, link: 'https://www.twitch.tv/monstercat' }, { icon: BsFacebook, link: 'https://www.facebook.com/monstercat' }, { icon: BsDiscord, link: 'https://discord.gg/monstercat' }]

    const handleClose = (e) => {
        e.preventDefault()
        setShow(false);
    }

    return (
        <div className={`absolute top-0 right-0 h-screen w-[420px] bg-black py-10 px-8 flex flex-col justify-between ${!show && 'translate-x-[100%]'} transition-transform duration-300`}>

            <div className='flex flex-col justify-between'>

            </div>
            <div className='flex justify-between items-center mb-10'>
                <a href='https://www.monstercat.com/'>
                    <Image src='https://cdn.monstercat.com/monstercat-logo-white.svg' height='35' width='200' title='Monstercat' alt='Monstercat logo' />
                </a>
                <AiOutlineClose className='h-8 w-8 cursor-pointer' onClick={handleClose} />
            </div>

            {data.map((item, index) => (
                <a href='https://www.monstercat.com/' key={index} className='text-white text-lg mt-4 uppercase cursor-pointer font-monument tracking-wider'>{item}</a>
            ))}

            <div className='flex justify-center items-start gap-10 mt-36'>
                {socials.map((item, index) => (
                    <a href={item.link}><item.icon key={index} className='h-5 w-5 cursor-pointer' /></a>
                ))}
            </div>

            <div className='flex justify-center items-center mt-6'>
                <button className='tracking-widest text-lg font-bold border-2 border-white px-4 py-2 hover:bg-white hover:text-black'>SIGN IN</button>
                <span className='tracking-widest text-xl font-bold ml-4 cursor-pointer'>Or Sign Up</span>
            </div>


        </div>
    )
}

export default NavBar