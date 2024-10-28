export interface Transaction {
    timestamp: string;          // ISO 8601 format for date/time
    ethereumAmount: number;     // Ethereum amount in Ether
    msEthereumAmount: number;   // Ethereum amount in milliEther (1 ms = 0.001 Ether)
}
