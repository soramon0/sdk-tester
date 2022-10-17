/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PublicKey } from '@solana/web3.js';

declare global {
  interface Window {
    // walletLinkExtension is injected by the Coinbase Wallet extension
    walletLinkExtension?: any;
    ethereum?: {
      selectedAddress: string | null;
      // value that is populated and returns true by the Coinbase Wallet mobile dapp browser
      isCoinbaseWallet?: true;
      isMetaMask?: true;
      request: any;
      enable: () => Promise<void>;
      on?: (...args: any[]) => void;
      removeListener?: (...args: any[]) => void;
      removeAllListeners?: (...args: any[]) => void;
      autoRefreshOnNetworkChange?: boolean;
    };
    solana?: {
      isPhantom: boolean;
      publicKey: PublicKey | null;
      connect(): Promise<PublicKey>;
    };
  }
}
