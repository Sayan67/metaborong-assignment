import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='text-white/60 w-full sm:px-20 px-8'>
            <div className='flex justify-between w-full flex-col sm:flex-row gap-6'>
                <div className='space-y-7 sm:w-[27rem]'>
                    <Image src={'/logos/footerLogo.svg'} width={130} height={40} alt='footer logo' />
                    <h1>The ultimate platform for turning coins into long-term gains. Stake, hold, and grow your assets with strategies designed for degen investors</h1>
                </div>
                <div>
                    <h1 className='font-dx-bold text-white text-2xl'>Product</h1>
                    <div className='flex flex-col gap-1 mt-2'>
                        <Link href={'/'}>About product</Link>
                        <Link href={'/'}>Guide</Link>
                        <Link href={'/'} className='flex items-center'>
                            Join Discord
                            <Image src={'/icons/discord_color.svg'} width={20} height={20} alt='discord link' className='w-8'/>
                        </Link>

                    </div>
                </div>
            </div>

            <div className='flex justify-center pt-8 pb-6 w-full'>
                <h1>2024 @metaborong all rights reserved</h1>
            </div>

        </div>
    )
}

export default Footer