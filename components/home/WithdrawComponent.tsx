import { icons } from "@/public/content/icons"
import Image from "next/image"
import SelectModal from "../SelectModal"
import { useAccount } from "wagmi"
import { Option, sliderPoints } from "./RightPage"
import WithdrawSelectModal from "../WithdrawSelectModal"

export const WithdrawComponent = ({ setSelectedOption, selectedOption, value, setValue }: { selectedOption: Option | null, setSelectedOption: (obj: Option) => void, value: number, setValue: (num: number) => void }) => {
    const chain = useAccount()
    const halfLength = (chain.address?.length as number) / 2
    function truncateAddress(address: string) {
        return address.slice(0, halfLength - 13) + '...' + address.slice(-halfLength + 15)
    }
    return (
        <div className='px-8 w-full space-y-8 pb-6 '>
            <div className='border border-white shadow-outline-white rounded-md px-4 py-3 space-y-3 bg-[#171A35] '>
                <div className='flex text-sm justify-between items-center '>
                    <h1 className='font-dx-bold'>Withdraw</h1>
                    <h1 className='font-dx-bold'>ms DOGE Balance: 84.55 {chain.chain?.nativeCurrency.symbol}</h1>
                </div>
                <div className='flex text-sm justify-between items-center '>
                    <h1 className='text-3xl font-dx-bold text-white/55'>0.00</h1>
                    <WithdrawSelectModal selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                </div>
                <div className='flex text-sm items-center justify-end'>
                    <div className="relative mb-6 w-[40%]">
                        <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                        <input
                            id="labels-range-input" type="range" min="0" max="3"
                            defaultValue={value}
                            onChange={(e) => setValue(Number(e.target.value))}
                            className=" w-full h-2 bg-transparent rounded-lg cursor-pointer z-10 border appearance-none" />
                        <div
                            style={{
                                width: `${value * 33}%`,
                            }}
                            className='w-full bg-primary-blue py-1 absolute -translate-y-[0.80rem] -z-10'></div>
                        <div
                            className='w-full items-center flex justify-between absolute -translate-y-[0.80rem] -z-10'>
                            {sliderPoints.map((point, index) => {
                                return (
                                    <div key={index} className='rounded-full size-2 bg-white relative'>
                                        <h1 className='absolute translate-y-3 -translate-x-2'>
                                            {point.label}
                                        </h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-white shadow-outline-white rounded-md px-4 pt-3 pb-5 space-y-3 bg-[#171A35]'>
                <div className='flex text-sm justify-between items-center'>
                    <h1 className='font-dx-bold'>Receive</h1>
                </div>
                <div className='flex text-sm justify-between items-center'>
                    <h1 className='text-3xl font-dx-bold text-white/55'>0.00</h1>
                    <button className='bg-primary-blue border border-white shadow-outline-white w-1/3 rounded-md py-4 px-4 flex items-center gap-2'>
                        <Image src={icons.dogecoin} width={20} height={20} alt='' className='rounded-full'></Image>
                        <h1 className='font-dx-bold'>{chain.chain?.name}</h1>
                    </button>
                </div>
                <div className='flex text-sm items-center justify-between'>
                    <div className='bg-[#F6851B] px-3 py-1 rounded-full font-semibold text-sm text-black -rotate-3'>
                        <h1>1DOGE = 0.890 ms DOGE</h1>
                    </div>
                    <div className="space-y-2 w-1/3">
                        <h1>Received at</h1>
                        <div className="border border-white rounded-md bg-black px-4 py-3 shadow-outline-white flex items-center gap-2">
                            <Image src={icons.dogecoin} width={20} height={20} alt=""></Image>
                            <h1 className="text-sm">{truncateAddress(chain.address as string)}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col gap-2 items-end w-full">
                <h1 className="font-semibold text-[#F6851B]">Receive withdrawal in another wallet?</h1>
                <div className='flex justify-between w-full'>
                    <div className='flex items-center gap-2'>
                        <Image src={icons.info} width={18} height={18} alt='info'></Image>
                        <h1 className='text-sm'>Vault entry fees</h1>
                    </div>
                    <h1>0.80%</h1>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex items-center gap-2'>
                        <Image src={icons.info} width={18} height={18} alt='info'></Image>
                        <h1 className='text-sm'>Vault entry fees</h1>
                    </div>
                    <h1>0.80%</h1>
                </div>
            </div>
        </div>
    )
}
