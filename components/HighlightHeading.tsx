import React from 'react'

const HighlightHeading = ({ text }: { text: string }) => {
    return (
        <div className="relative w-fit">
            <h1 className="text-[64px] font-extrabold text-blue-500 ">
                {text}
            </h1>
            <h1 className='text-[64px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 stroke-layer'>
                {text}
            </h1>
        </div>

    )
}

export default HighlightHeading