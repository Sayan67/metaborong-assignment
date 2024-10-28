import { useState, MouseEvent } from 'react';
import  {CustomConnectButton}  from '@/components/home/CustomConnectButton';

export default function CustomModal() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={openModal}
                className="font-semibold transition duration-200"
            >
                Connect Wallet
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg p-6 w-full max-w-md relative z-10"
                        onClick={handleModalClick}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition duration-150"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Connect Your Wallet
                        </h2>
                        <CustomConnectButton />
                    </div>
                </div>
            )}
        </div>
    );
}
