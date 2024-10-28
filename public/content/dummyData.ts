import { Transaction } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export const transactions: Transaction[] = [
    {
        timestamp: formatDate(new Date("2024-02-01T08:30:00Z")),
        ethereumAmount: 0.5,
        msEthereumAmount: 500,
    },
    {
        timestamp: formatDate(new Date("2024-02-01T09:00:00Z")),
        ethereumAmount: 1.2,
        msEthereumAmount: 1200,
    },
    {
        timestamp: formatDate(new Date("2024-02-01T09:30:00Z")),
        ethereumAmount: 0.75,
        msEthereumAmount: 750,
    },
    {
        timestamp: formatDate(new Date("2024-02-01T10:00:00Z")),
        ethereumAmount: 2.3,
        msEthereumAmount: 2300,
    },
    {
        timestamp: formatDate(new Date("2024-02-01T10:30:00Z")),
        ethereumAmount: 0.95,
        msEthereumAmount: 950,
    }
];
