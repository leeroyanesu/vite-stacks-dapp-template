import { STACKS_MAINNET,STACKS_TESTNET } from '@stacks/network';

// Network selection based on environment
export const getNetwork = () => {
  const isMainnet = import.meta.env.VITE_STACKS_NETWORK === 'mainnet';
  return isMainnet ? STACKS_MAINNET : STACKS_TESTNET;
};

// Format address for display
export const formatAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// Helper to verify if the user's wallet is connected
export const checkWalletConnectionFromStorage = () => {
  try {
    const storageData = localStorage.getItem('stacks-wallet-data');
    if (!storageData) return null;
    
    const parsedData = JSON.parse(storageData);
    return parsedData?.addresses?.stx?.[0]?.address || null;
  } catch (error) {
    console.error('Error reading wallet data from storage:', error);
    return null;
  }
};

// Generate a nonce for signing
export const generateNonce = (): string => {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

// Format STX amount for display
export const formatSTX = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  }).format(amount);
};

// Convert microSTX to STX
export const microToSTX = (microStx: number): number => {
  return microStx / 1000000;
};

// Convert STX to microSTX
export const STXToMicro = (stx: number): number => {
  return Math.floor(stx * 1000000);
};
