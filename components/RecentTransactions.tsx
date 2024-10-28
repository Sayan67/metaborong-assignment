import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
export const RecentTransactions= () => {
  const addRecentTransaction = useAddRecentTransaction();
  return (
    <button
      onClick={() => {
        addRecentTransaction({
          hash: '0x...',
          description: '...',
        });
      }}
    >
      Add recent transaction
    </button>
  );
};