import { Button } from '@/components/ui/button';
import { useWallet } from '@/contexts/WalletContext';


export default function Index() {
  const { connectWallet, isConnecting } = useWallet();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Button onClick={connectWallet} disabled={isConnecting} size="lg">
        {isConnecting ? 'Connecting...' : 'Connect Wallet'}
      </Button>
    </div>
  );
}