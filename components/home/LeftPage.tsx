import { icons } from '@/public/content/icons'
import Image from 'next/image'
import React from 'react'
import { useAccountModal } from '@rainbow-me/rainbowkit'

const LeftPage = () => {
    const data = undefined
    const { openAccountModal } = useAccountModal()
    return (
        <div className='relative border border-white rounded-xl px-8 w-[500px] shadow-outline-white flex flex-col justify-center items-center'>
            <div className='pt-4 pb-6 flex justify-between w-full'>
                <h1 className='font-dx-bold'>Analytics</h1>
                <Image src={icons.info} width={25} height={25} alt='' />
            </div>
            <div className='w-fit'>
                <div className='min-w-[434px] border-[1.5px] border-white shadow-outline-white rounded-xl h-[200px] bg-[#171A35] flex items-center justify-center'>
                    {data ?
                        null
                        :
                        <h1 className='font-dx-bold text-white/30'>No data available</h1>
                    }
                </div>
            </div>

        </div>
    )
}

export default LeftPage