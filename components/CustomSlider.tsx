import React, { useState } from 'react';

const CustomSlider = () => {
    const [value, setValue] = useState(0);  // 0 = min, 1 = 25%, 2 = 75%, 3 = max

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <div className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
            <div className="relative w-full pt-8">
                {/* Custom slider */}
                <input
                    type="range"
                    min="0"
                    max="3"
                    step="1"
                    value={value}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-gray-400 rounded-full appearance-none outline-none"
                    style={{
                        background: `
                            linear-gradient(to right, #ffffff ${value * 33.3}%, #gray-400 ${value * 33.3}%)
                        `
                    }}
                />

                {/* White dots positioned on the slider */}
                <div className="absolute inset-0 flex justify-between items-center px-2">
                    <div className="bg-white rounded-full h-3 w-3"></div>
                    <div className="bg-white rounded-full h-3 w-3"></div>
                    <div className="bg-white rounded-full h-3 w-3"></div>
                    <div className="bg-white rounded-full h-3 w-3"></div>
                </div>

                {/* Custom thumb image */}
                <div
                    className="absolute top-[-18px] transform -translate-x-1/2 pointer-events-none"
                    style={{
                        left: `${value * 33.3}%`,
                    }}
                >
                    <img src="/path/to/custom-thumb-image.png" alt="slider-thumb" className="h-8 w-8" />
                </div>
            </div>

            {/* Labels below the slider */}
            <div className="w-full flex justify-between px-2 text-sm text-white">
                <span>Min</span>
                <span>25%</span>
                <span>75%</span>
                <span>Max</span>
            </div>
        </div>
    );
};

export default CustomSlider;
