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

export default function SlippageModalButton({
    slippage,
    setModalOpen
}:{
    slippage:number,
    modalOpen:boolean,
    setModalOpen:(bool:boolean)=>void
}) {

    const openModal = () => setModalOpen(true);


    return (
        <div className="relative w-1/3">
            <button
                onClick={openModal}
                className="h-full px-5 rounded-xl transition duration-200 font-dx-bold bg-primary-blue text-white border border-white flex items-center shadow-outline-white"
            >
                {/* <div className='flex items-center gap-2'> */}
                    <Image src={icons.setting} width={21} height={21} alt=''></Image>
                    {`Slippage: ${slippage}%`}
                {/* </div> */}
            </button>

        </div>
    );
}
