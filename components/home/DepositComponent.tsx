import { icons } from "@/public/content/icons"
import Image from "next/image"
import SelectModal from "../SelectModal"
import { useAccount } from "wagmi"
import { Option, sliderPoints } from "./RightPage"

export const DepositComponent = ({ setSelectedOption, selectedOption, value, setValue }: { selectedOption: Option | null, setSelectedOption: (obj: Option) => void, value: number, setValue: (num: number) => void }) => {
    const chain = useAccount()
    return (
        <div className='px-8 w-full space-y-8 pb-6'>
            <div className='border border-white shadow-outline-white rounded-md px-4 py-3 space-y-3'>
                <div className='flex text-sm justify-between items-center'>
                    <h1 className='font-dx-bold'>Deposit</h1>
                    <h1 className='font-dx-bold'>Assest Balance: 0.000 {chain.chain?.nativeCurrency.symbol}</h1>
                </div>
                <div className='flex text-sm justify-between items-center'>
                    <h1 className='text-3xl font-dx-bold text-white/55'>0.00</h1>
                    <SelectModal selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                </div>
                <div className='flex text-sm items-center justify-between'>
                    <h1>$0</h1>
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
                            className='w-full items-center flex justify-between absolute -translate-y-[0.80rem] -z-10 font-dx-bold'>
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
            <div className='border border-white shadow-outline-white rounded-md px-4 pt-3 pb-5 space-y-3'>
                <div className='flex text-sm justify-between items-center'>
                    <h1 className='font-dx-bold'>Receive</h1>
                    <h1 className='font-dx-bold'>ms DOGE Balance: 0.000 DOGE</h1>
                </div>
                <div className='flex text-sm justify-between items-center'>
                    <h1 className='text-3xl font-dx-bold text-white/55'>0.00</h1>
                    <button className='bg-primary-blue border border-white shadow-outline-white w-1/3 rounded-md py-4 px-4 '>
                        <div className='relative flex justify-start items-center translate-y-2'>
                            <Image src={'/logos/signatureIcon.svg'} width={20} height={20} alt='' className='rounded-full absolute -translate-x-1 -translate-y-1 border'></Image>
                            <Image src={icons.shiba} width={20} height={20} alt='' className='rounded-full absolute translate-x-1 translate-y-1'></Image>
                        </div>
                        <h1 className='font-dx-bold'>ms {chain.chain?.name}</h1>
                    </button>
                </div>
                <div className='flex text-sm items-center justify-between'>
                    <div className='bg-[#F6851B] px-3 py-1 rounded-full font-semibold text-sm text-black -rotate-3'>
                        <h1>1DOGE = 0.890 ms DOGE</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-between '>
                <div className='flex items-center gap-2'>
                            <Image src={icons.info} width={18} height={18} alt='info'></Image>
                            <h1 className='text-sm'>Vault entry fees</h1>
                </div>
                <h1>0.80%</h1>
            </div>
        </div>
    )
}
