import { icons } from '@/public/content/icons'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { useAccountModal } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi';
import { transactions } from '@/public/content/dummyData';
import Graph from '../Graph';



const LeftPage = () => {
    const { status, chain } = useAccount()
    const openAccountModal = useAccountModal()
    return (
        <div className='relative border border-white rounded-xl px-8 w-[500px] shadow-outline-white flex flex-col justify-center items-center pb-6 bg-white bg-opacity-[0.07]'>
            <div className='py-4 flex justify-between w-full'>
                <h1 className='font-dx-bold'>Analytics</h1>
                <Image src={icons.info} width={25} height={25} alt='' />
            </div>
            <div className='w-fit space-y-3'>
                <div className='min-w-[434px] border-[1.5px] border-white shadow-outline-white rounded-xl h-[200px] bg-[#171A35] flex items-center justify-center overflow-hidden'>
                    {status==='connected' ?
                        <Graph/>
                        :
                        <h1 className='font-dx-bold text-white/30'>No data available</h1>
                    }
                </div>
                <div className='space-y-3'>
                    <div className='flex gap-[6px]'>
                        <Card title='Current Price' value={status === 'connected' ? 1.1 : 0} unit={chain?.nativeCurrency.symbol}>
                            <Image src={icons.currentPrice} width={30} height={30} alt='' />
                        </Card>
                        <Card title='Total Fees' value={status === 'connected' ? 134.8 : 0} unit='M'>
                            <Image src={icons.tvl} width={30} height={30} alt='' />
                        </Card>
                        <Card title='Total Fees' value={status === 'connected' ? 13.5 : 0} unit='M'>
                            <Image src={icons.oneDayPrice} width={30} height={30} alt='' />
                        </Card>

                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-dx-bold'>Recent Trades</h1>
                        <div>
                            {
                                status === 'connecting' &&
                                <div className='flex justify-center py-6'>
                                    <h1 className='text-white w-16 h-16 border-t rounded-full animate-spin'></h1>
                                </div>
                            }
                            {
                                status === 'disconnected' &&
                                <div>
                                    <h1 className='text-white/30'>Connect to view recent trades</h1>
                                    <button className='bg-primary-blue rounded-md px-4 py-2 mt-2' onClick={openAccountModal.openAccountModal}>Connect Wallet</button>
                                </div>
                            }
                            {status === 'connected' &&
                                <div className='flex flex-col gap-2'>
                                    <div className='border rounded-xl px-4 py-2 bg-[#F6851B2B] w-full grid grid-cols-3 text-nowrap text-sm'>
                                        <h1>Timestamp</h1>
                                        <h1>{chain?.name} amount</h1>
                                        <h1>{`ms ${chain?.name} amount`}</h1>
                                    </div>
                                    {
                                        transactions.map((transaction, index) => (
                                            <div key={index} className='border rounded-xl px-4 py-2 w-full grid grid-cols-3 text-nowrap text-sm'>
                                                <h1>{transaction.timestamp}</h1>
                                                <h1>{transaction.ethereumAmount} {chain?.name}</h1>
                                                <h1>{`${transaction.msEthereumAmount} ms ${chain?.name}`}</h1>
                                            </div>
                                        ))
                                    }
                                </div>
                            }



                        </div>
                    </div>

                </div>
            </div>
            <div className='absolute right-1 top-1/2 -translate-y-1/2 space-y-36 flex flex-col items-end -z-0'>
                {new Array(3).fill(0).map((_, index) => {
                    const lineNo = `/icons/line${index + 1}.svg`
                    return (
                        <div key={index} className=' w-[7.9rem] relative flex flex-col items-end'>
                            <div className='bg-white rounded-full size-4'></div>
                            <Image layout='intrinsic' src={lineNo} width={74} height={4} alt='line' className='absolute w-[10rem] -right-[95%] top-1/2 -translate-y-[45%]'></Image>
                        </div>
                    )
                }
                )}
            </div>

        </div>
    )
}


const Card = ({ title, value, children, unit }: { title: string, value: number, children: ReactNode, unit?: string }) => {
    return (
        <div className='flex justify-center items-center border border-white rounded-md bg-primary-blue py-2 px-2 gap-2 w-full'>
            {children}
            <div className='flex flex-col justify-between'>
                <h1 className=' text-nowrap text-sm'>{title}</h1>
                <h1 className=' text-nowrap font-bold text-base'>{value} {unit && unit}</h1>
            </div>
        </div>
    )
}

export default LeftPage