import { icons } from "@/public/content/icons"
import Image from "next/image"
import { useState } from "react"

const slippagesList = [
    0.3, 0.5, 1.5, 2.5
]

const transactionSpeeds = [
    'normal', 'fast', 'instant'
]

interface SpeedInterface {
    speed: 'normal' | 'fast' | 'instant'
}

export const SlippageModal = ({
    slippage,
    setSlippage,
    modalOpen,
    setModalOpen,
}: {
    slippage: number,
    setSlippage: (obj: { slippage: number, speed: 'normal' | 'fast' | 'instant' }) => void,
    modalOpen: boolean,
    setModalOpen: (bool: boolean) => void
}
) => {
    const [onlySlippage, setOnlySlippage] = useState(slippage)
    const [onlySpeed, setOnlySpeed] = useState<SpeedInterface['speed']>('normal')

    function closeModal() {
        setModalOpen(false)
    }
    if (modalOpen === false) return null
    else {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center pt-10 w-full h-svh">
                {/* Overlay with blur */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm w-full h-svh"
                    onClick={closeModal}
                ></div>

                {/* Modal content */}
                <div className="relative bg-bg-black rounded-lg px-5 py-4 min-w-[30rem] z-10 border border-white shadow-outline-white space-y-5">
                    <div className='flex items-center justify-between pb-4 border-b border-b-white/15'>
                        <div className='flex items-center gap-1'>
                            <Image src={icons.setting} width={30} height={30} alt='coin swap icon'></Image>
                            <h2 className="text-xl font-dx-bold">Slippage</h2>
                        </div>
                        <button
                            onClick={closeModal}
                            className="text-white"
                        >
                            <Image src={icons.cross} width={24} height={24} alt='close icon'></Image>
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        {slippagesList.map((slippageValue, index) => (
                            <button key={index} onClick={() => setOnlySlippage(slippageValue)} className={`w-full py-1 text-white border border-white shadow-outline-white rounded-md ${slippageValue === onlySlippage && "bg-[#F6851B]"}`}>
                                <h1>{slippageValue}%</h1>
                            </button>
                        ))}
                    </div>
                    <div className="space-y-4 border-b border-white/15 pb-5">
                        <h1 className="text-sm text-white/35">*Use recommended slippage tolerance levels for
                            optimal performance</h1>
                        <div className="flex border border-white shadow-outline-white rounded-md">
                            <input type="number" name="slippage" id="slippage" defaultValue={0}
                                className="w-full py-2 text-white bg-[#171A35] px-4 appearance-none focus:outline-none rounded-md"
                                onChange={(e) => setOnlySlippage(Number(e.target.value))}
                            />
                            <h1 className="bg-[#171A35] px-4 py-2 rounded-md">%</h1>
                        </div>

                    </div>
                    <h1 className="font-dx-bold">Transaction speed</h1>
                    <div className="flex gap-3">
                        {
                            transactionSpeeds.map((speed, index) => (
                                <button key={index} onClick={() => setOnlySpeed(speed as SpeedInterface['speed'])} className={`w-full py-1 text-white border border-white shadow-outline-white rounded-md ${speed === onlySpeed && "bg-[#F6851B]"}`}>
                                    <h1>{speed.split('')[0].toUpperCase() + speed.slice(1)}</h1>
                                </button>
                            ))
                        }
                    </div>
                    <button
                        onClick={() => {
                            setSlippage({ slippage: onlySlippage, speed: onlySpeed })
                            console.log(onlySlippage, onlySpeed);
                            closeModal()
                            return
                        }}
                        className="w-full py-2 text-white bg-primary-blue border border-white rounded-md shadow-outline-white"
                    >Set Slippage</button>
                </div>
            </div>
        )
    }
}