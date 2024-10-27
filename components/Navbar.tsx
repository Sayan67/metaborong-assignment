import Image from 'next/image'
import React from 'react'
import { navElements } from '@/public/content/navElements'
import { icons } from '@/public/content/icons'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='absolute top-8 left-1/2 -translate-x-1/2 flex gap-3'>
            <div className='rounded-lg flex gap-[60px] items-center justify-center bg-primary-blue w-fit py-3 pl-4 pr-9 border-2 border-white box-border drop-shadow-outline-white'>
                <Link href={'/'}>
                    <Image src='/logos/mainLogo.svg' width={73} height={32} alt='logo' />
                </Link>
                <div className='flex gap-8 items-center justify-center'>
                    {navElements.map((element, index) => (
                        <Link href={element.link} key={index} className='flex gap-1 items-center justify-center'>
                            {/* Using the icon property as a key of the icons */}
                            <Image src={icons[element.icon as keyof typeof icons]} width={20} height={20} alt='icon' />
                            <p className='text-white font-neue-medium text-sm'>{element.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <Link href={'/'} className='bg-discord-violate rounded-xl border border-white drop-shadow-outline-white flex items-center justify-center w-16'>
                <Image src={icons.discord} width={32} height={32} alt='discord logo' />
            </Link>
        </div>
    )
}

export default Navbar