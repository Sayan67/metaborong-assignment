'use client'
import { icons } from '@/public/content/icons'
import Image from 'next/image'
import React, { useState } from 'react'
import { useAccount } from 'wagmi'
import SelectModal, { options } from '../SelectModal'

export interface Option {
    id: number;
    label: string;
    icon?: keyof typeof icons;
}

const RightPage = () => {
    const [mode, setMode] = useState('deposit')
    const chain = useAccount()
    const [selectedOption, setSelectedOption] = useState<Option | null>(options[0]);
    return (
        <div className='border border-white shadow-outline-white w-[620px] min-h-[504px] z-10 bg-bg-black rounded-xl  relative pt-14'>
            {/* Head */}
            <div className='flex gap-3 px-8 absolute w-full top-0 -translate-y-1/2'>
                <div className='border border-white shadow-outline-white rounded-lg p-2  w-2/3 text-sm flex font-dx-bold bg-[#171A35]'>
                    <button id='deposit' className={`border ${mode === 'deposit' ? "border border-white bg-primary-blue rounded-md" : "border-transparent"} w-full py-2 duration-150`}
                        onClick={() => setMode('deposit')}>Deposit</button>
                    <button id='withdraw' className={`border ${mode === 'withdraw' ? " border-white bg-primary-blue rounded-md" : "border-transparent"} w-full py-2 duration-150`}
                        onClick={() => setMode('withdraw')}>Withdraw</button>
                </div>

                <div className='w-1/3 border border-white rounded-lg shadow-outline-white flex font-dx-bold text-sm items-center gap-1 bg-primary-blue justify-center'>
                    <Image src={icons.setting} width={24} height={24} alt='setting'></Image>
                    <h1>Slippage: 0.5%</h1>
                </div>
            </div>
            {/* Metrics */}
            <div className='px-8 w-full'>
                <div className='border border-white shadow-outline-white rounded-md px-4 py-3'>
                    <div className='flex text-sm justify-between items-center'>
                        <h1 className='font-dx-bold'>Deposit</h1>
                        <h1 className='font-dx-bold'>Assest Balance: 0.000 {chain.chain?.nativeCurrency.symbol}</h1>
                    </div>
                    <div className='flex text-sm justify-between items-center'>
                        <h1 className='text-3xl font-dx-bold text-white/55'>0.00</h1>
                        <SelectModal selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                    </div>
                    <div className='flex text-sm items-center justify-between'>
                        <h1>$0</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightPage