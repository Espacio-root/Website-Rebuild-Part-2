import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsInstagram, BsTiktok, BsTwitter, BsTwitch, BsFacebook, BsDiscord } from 'react-icons/bs'

const Footer = () => {

    const socials = [{ icon: BsInstagram, link: 'https://www.instagram.com/monstercat/' }, { icon: BsTiktok, link: 'https://www.tiktok.com/@monstercat' }, { icon: BsTwitter, link: 'https://twitter.com/monstercat' }, { icon: BsTwitch, link: 'https://www.twitch.tv/monstercat' }, { icon: BsFacebook, link: 'https://www.facebook.com/monstercat' }, { icon: BsDiscord, link: 'https://discord.gg/monstercat' }]

  return (
    <div className='flex flex-col w-[75%] mx-auto mt-16 justify-center items-center'>
        <hr className='bg-white w-full mb-16'></hr>
        <div className='flex flex-col md:flex-row justify-between w-full font-monument gap-8'>
            <div className='md:hidden flex flex-col items-start gap-3 w-full'>
                {['About Monstercat', 'Contact Us', 'Careers', 'News', 'Press', 'Terms of Service', 'Privacy Policy'].map((item, index) => (
                    <a href='#' key={index} className='text-lg uppercase'>{item}</a>
                ))}
            </div>
            
            <div className='hidden md:flex flex-col items-start gap-3 w-full'>
                {['About Monstercat', 'Contact Us', 'Careers', 'News', 'Press'].map((item, index) => (
                    <a href='#' key={index} className='text-lg uppercase'>{item}</a>
                ))}
            </div>

            <div className='flex flex-col items-start gap-3 w-full'>
                {['Terms of services', 'Privacy Policy'].map((item, index) => (
                    <a href='#' key={index} className='text-lg uppercase'>{item}</a>
                ))}
            </div>

            <div className='flex flex-col items-start gap-3 w-full'>
                <p className='text-gray-400 text-[16px] uppercase mb-8'>Monstercat News</p>
                <p className='text-gray-300 text-[12px] uppercase mb-8'>Don't miss a thing, stay up to date with the latest news from us.</p>
                <div className='w-full relative'>
                    <input type='email' placeholder='Enter email' className='border-b border-gray-500 bg-transparent outline-none w-full h-[40px] text-[18px] placeholder:text-[18px] pr-11'></input>
                    <AiOutlineArrowRight className='absolute right-0 -top-[18%] h-10 w-10 text-gray-500 cursor-pointer hover:bg-white hover:text-black transition-colors duration-100 px-2 py-1' />
                </div>
            </div>
        </div>
        <hr className='bg-white w-full my-16'></hr>
        <div className='w-full flex justify-between items-center mb-24'>
              <p className='font-montserrat text-sm w-full'>2011 - 2023 © Monstercat, All Rights Reserved</p>
              <div className='w-full flex flex-row justify-end items-center gap-4'>
                  {socials.map((item, index) => (
                      <a href={item.link}><item.icon key={index} className='h-5 w-5 cursor-pointer' /></a>
                  ))}
              </div>
        </div>
        <div className='flex flex-col justify-center text-center items-center text-gray-500'>
            <p className='font-montserrat text-sm mb-5'>We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the (Squamish), Selilwitulh (Tsleil-Waututh) and (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.</p>
            <p className='font-montserrat text-sm'>This website is not affiliated with Monstercat. Monstercat is a record label and music publishing company based in Vancouver, British Columbia, Canada. Monstercat was founded in 2011 by Mike Darlington and Ari Paunonen.</p>
        </div>
    </div>
  )
}

export default Footer