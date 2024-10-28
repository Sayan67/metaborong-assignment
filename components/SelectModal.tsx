import { icons } from '@/public/content/icons';
import Image from 'next/image';
import React, { useState } from 'react';
import { Option } from './home/RightPage';



export const options: Option[] = [
    { id: 1, label: 'DOGE(DOGE)', icon: 'dogecoin' },
    { id: 2, label: 'Shiba Inu(SHIB)', icon: 'shiba' },
    { id: 3, label: 'Pepe(PEPE)', icon: 'pepe' },
    { id: 4, label: 'Bonk(BONK)', icon: 'bonk' },
    { id: 5, label: 'Floki(FLOKI)', icon: 'floki' },

];

export default function SelectModal({setSelectedOption,selectedOption}:{selectedOption:Option|null,setSelectedOption:(obj:Option)=>void}) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleOptionSelect = (option: Option) => {
        setSelectedOption(option);
        closeModal();
    };

    return (
        <div className="relative">
            <button
                onClick={openModal}
                className="py-2 px-3 rounded transition duration-200 font-dx-bold bg-primary-blue text-white border border-white flex items-center gap-14"
            >
                <div className='flex items-center gap-2'>
                    <Image src={icons[selectedOption?.icon ? selectedOption?.icon : "dogecoin"]} width={21} height={21} alt=''></Image>
                    {selectedOption ? selectedOption.label : 'Select Option'}
                </div>
                <Image src={icons['arrow-down']} width={24} height={24} alt='dropdown icon'></Image>
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pt-10">
                    {/* Overlay with blur */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                        onClick={closeModal}
                    ></div>

                    {/* Modal content */}
                    <div className="relative bg-bg-black rounded-lg px-5 py-4 w-full max-w-md z-10 border border-white shadow-outline-white">
                        <div className='flex items-center justify-between pb-4 border-b border-b-white/15'>
                            <div className='flex items-center gap-1'>
                                <Image src={icons.coinsswap} width={30} height={30} alt='coin swap icon'></Image>
                                <h2 className="text-xl font-dx-bold">Set a token</h2>
                            </div>
                            <button
                                onClick={closeModal}
                                className="text-white"
                            >
                                <Image src={icons.cross} width={24} height={24} alt='close icon'></Image>
                            </button>

                        </div>
                        <ul className="space-y-2 divide-y-[1px] divide-white/15">
                            {options.map(option => (
                                <li key={option.id}>
                                    <button
                                        onClick={() => handleOptionSelect(option)}
                                        className="w-full text-left py-3 px-4 rounded flex items-center gap-2 font-semibold text-xl"
                                    >
                                        <Image src={icons[option.icon ? option.icon : "dogecoin"]} width={36} height={36} alt=''></Image>
                                        {option.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
