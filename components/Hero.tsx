import React from 'react'
import HighlightHeading from './HighlightHeading'
import Image from 'next/image'
import Link from 'next/link'
import { icons } from '@/public/content/icons'

const Hero = () => {
    return (
        <div className='min-h-svh flex flex-col text-white/40 items-center pt-44'>
            <div className='flex'>
                <Image src={'/images/hodling.svg'} width={246} height={43} alt='hodling' className='animate-rotate-left-2' />
                <span className='font-awesome font-bold text-[64px]'>isn't just a flex,</span>
            </div>
            <div className='flex items-center gap-2'>
                <span className='font-awesome font-bold text-[64px]'>it is a</span>
                <Image src={'/images/strategy.svg'} width={246} height={43} alt='strategy' className='animate-rotate-right-2' />
            </div>
            <div className='flex text-white gap-2 mt-8'>
                <Link href={'/'} className='bg-discord-violate rounded-xl border border-white drop-shadow-outline-white flex items-center justify-center sm:w-16 w-12 h-fit py-2'>
                    <Image src={icons.discord} width={32} height={32} alt='discord logo' className='sm:w-8 w-6' />
                </Link>
                <Link href={'/home'} className='flex items-center justify-center gap-1 border-[1.4px] border-white rounded-xl px-12 py-3'>
                    <h1>Launch App</h1>
                    <Image src={icons.rocket} width={20} height={20} alt='rocket' className='' />
                </Link>
            </div>
            <AnimatedComponent />
        </div>
    )
}

const AnimatedComponent = () => {
    return (
        <div className='relative py-44 flex justify-center items-center w-full'>
            <Image src={'/logos/signatureIcon.svg'} width={140} height={140} alt='signature icon' className='animate-moveRight'></Image>
            <div className='absolute -z-10'>
                <div className='flex'>
                    <Image src={'/images/ponke.png'} width={64} height={140} alt='signature icon' className='animate-scaleUpLeft2 scale-0'></Image>
                    <Image src={'/images/shiba.png'} width={64} height={140} alt='signature icon' className='animate-scaleUpRight2 scale-0'></Image>
                </div>
                <div className='flex'>
                    <Image src={'/images/dogesh.png'} width={64} height={140} alt='signature icon' className='animate-scaleUpLeft scale-0'></Image>
                    <Image src={'/images/frogy.png'} width={64} height={140} alt='signature icon' className='animate-scaleUpRight scale-0'></Image>
                </div>
            </div>
            <Image src={'/images/dashboard.svg'} width={450} height={400} alt='dashboard' className='absolute w-[450px] h-[400px] scale-0 animate-fadeInRotateLeft mt-16 ml-44'/>
        </div>
    )
}

export default Hero