'use client'
import Image from 'next/image'
import React from 'react'
import { navElements } from '@/public/content/navElements'
import { icons } from '@/public/content/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className={`absolute top-8 left-1/2 -translate-x-1/2 gap-2 sm:gap-3 flex px-2 sm:px-0 w-full ${pathname==='/home'? "justify-center ml-28":"justify-center"}`}>
            <div className='rounded-lg flex gap-[30px] sm:gap-[60px] items-center justify-center bg-primary-blue w-fit sm:py-3 sm:pl-4 sm:pr-9 py-2 px-4 border-2 border-white box-border drop-shadow-outline-white'>
                <Link href={'/'} className='w-14 sm:w-20'>
                    <Image src='/logos/mainLogo.svg' width={73} height={32} alt='logo' className='w-20 flex-none' />
                </Link>
                <div className='flex gap-6 sm:gap-8 items-center justify-center'>
                    {navElements.map((element, index) => (
                        <Link href={element.link} key={index} className='flex gap-1 items-center justify-center w-4 sm:w-full'>
                            {/* Using the icon property as a key of the icons */}
                            <Image src={icons[element.icon as keyof typeof icons]} width={20} height={20} alt='icon' className='w-5' />
                            <p className='text-white font-neue-medium text-xs sm:text-base hidden sm:flex'>{element.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <Link href={'/'} className='bg-discord-violate rounded-xl border border-white drop-shadow-outline-white flex items-center justify-center sm:w-16 w-12 h-fit py-3'>
                <Image src={icons.discord} width={32} height={32} alt='discord logo' className='sm:w-8 w-6' />
            </Link>
            {
                pathname === '/home' && <div>
                    <button className='flex items-center gap-1 justify-center border-[1.5px] border-white drop-shadow-md rounded-xl px-16 py-2 font-neue-medium h-full'>
                        <h1 className='text-nowrap'>
                            Connect Wallet
                        </h1>
                        <Image src={icons.wallet} width={20} height={20} alt='wallet' />
                    </button>
                </div>
            }
        </div>
    )
}

export default Navbar