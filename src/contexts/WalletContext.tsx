import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { connect, disconnect, isConnected, getLocalStorage } from '@stacks/connect';
import { toast } from "@/components/ui/use-toast";

// Define types
interface WalletContextType {
  userAddress: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

// Create context
const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Provider component
export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  // Check for existing wallet connection and referral codes on component mount
  useEffect(() => {
    const checkWalletConnection = () => {
      if (isConnected()) {
        const data = getLocalStorage();
        if (data?.addresses?.stx?.[0]?.address) {
          setUserAddress(data.addresses.stx[0].address);
        }
      } else {
        setUserAddress(null);
      }
    };
    
    checkWalletConnection();
    
   
  }, []);

  // Connect wallet function
  const connectWallet = async () => {
    setIsConnecting(true);
    
    try {
      await connect().then(async (data: any) => {
        if (data?.addresses?.[2]?.address) {
          const address = data.addresses[2].address;
          setUserAddress(address);
        }
        setIsConnecting(false);
      }).catch((error: any) => {
        console.error("Connection error:", error);
        throw new Error("Connection failed");
      });
    } catch (error) {
      console.error("Connection error:", error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet",
        variant: "destructive"
      });
      setIsConnecting(false);
    }
  };

  // Disconnect wallet function
  const disconnectWallet = () => {
    disconnect();
    setUserAddress(null);
    // Clear the JWT token from localStorage when disconnecting
    localStorage.removeItem('token');
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected"
    });
  };


  const value = {
    userAddress,
    isConnected: isConnected() && !!userAddress,
    isConnecting,
    connectWallet,
    disconnectWallet,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook for using wallet context
export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
