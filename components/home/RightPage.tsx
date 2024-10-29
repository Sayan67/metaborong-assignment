'use client'
import { icons } from '@/public/content/icons'
import Image from 'next/image'
import React, { useState } from 'react'
import { useAccount } from 'wagmi'
import { options } from '../SelectModal'
import { DepositComponent } from './DepositComponent'
import { WithdrawComponent } from './WithdrawComponent'
import { CustomConnectButton } from './CustomConnectButton'
import SlippageModalBUtton from '../SlippageModalButton'
import SlippageModalButton from '../SlippageModalButton'
import { SlippageModal } from '../SlippageModal'

export interface Option {
    id: number;
    label: string;
    icon?: keyof typeof icons;
}

export const sliderPoints = [
    { label: 'Min', value: 0 },
    { label: '25%', value: 1 },
    { label: '75%', value: 3 },
    { label: 'Max', value: 4 },
]

interface Slippage {
    slippage: number,
    speed: 'normal' | 'fast' | 'instant'
}

const RightPage = () => {
    const [mode, setMode] = useState('deposit')
    const chain = useAccount()
    const [selectedOption, setSelectedOption] = useState<Option | null>(options[0]);
    const [value, setValue] = useState(0)
    const [slippage, setSlippage] = useState<Slippage>({ slippage: 0, speed: 'normal' })
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className='border border-white shadow-outline-white w-[620px] min-h-[504px] z-10 rounded-xl pt-14 pb-8 bg-white bg-opacity-[0.07]'>
            {/* Head */}
            <div className='relative flex items-center w-full'>
                <div className='flex gap-3 px-8 absolute w-full -top-full -translate-y-[150%]'>
                    <div className='border border-white shadow-outline-white rounded-lg p-2  w-2/3 text-sm flex font-dx-bold bg-[#171A35]'>
                        <button id='deposit' className={`border ${mode === 'deposit' ? "border border-white bg-primary-blue rounded-md" : "border-transparent"} w-full py-2 duration-150`}
                            onClick={() => setMode('deposit')}>Deposit</button>
                        <button id='withdraw' className={`border ${mode === 'withdraw' ? " border-white bg-primary-blue rounded-md" : "border-transparent"} w-full py-2 duration-150`}
                            onClick={() => setMode('withdraw')}>Withdraw</button>
                    </div>

                    {/* <div className='w-1/3 border border-white rounded-lg shadow-outline-white flex font-dx-bold text-sm items-center gap-1 bg-primary-blue justify-center'>
                    <Image src={icons.setting} width={24} height={24} alt='setting'></Image>
                    <h1>Slippage: 0.5%</h1>
                </div> */}
                    <SlippageModalButton slippage={slippage.slippage} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                </div>
            </div>
            {/* Metrics */}
            {
                mode === 'deposit' &&
                <DepositComponent selectedOption={selectedOption} setSelectedOption={setSelectedOption} setValue={setValue} value={value} />
            }
            {
                mode === 'withdraw' &&
                <WithdrawComponent selectedOption={selectedOption} setSelectedOption={setSelectedOption} setValue={setValue} value={value} />
            }
            {/* Buttons based on the mode and the wallet status */}
            <div className='px-8'>
                {
                    chain.status === 'disconnected' &&
                    <CustomConnectButton />
                }
                {
                    chain.status === 'connected' && mode === 'deposit' &&
                    <button className='w-full border border-white shadow-outline-white rounded-xl flex justify-center py-3 bg-black'>
                        <h1 className='flex items-center gap-2'>Deposit <Image src={icons.arrowright} width={20} height={20} alt='wallet'></Image></h1>
                    </button>
                }
                {
                    chain.status === 'connected' && mode === 'withdraw' &&
                    <button className='w-full border border-white shadow-outline-white rounded-xl flex justify-center py-3 bg-black'>
                        <h1 className='flex items-center gap-2'>Withdraw <Image src={icons.withdraw} width={20} height={20} alt='wallet'></Image></h1>
                    </button>
                }
            </div>

            <SlippageModal slippage={slippage.slippage} setSlippage={setSlippage} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            
        </div>
    )
}




export default RightPage