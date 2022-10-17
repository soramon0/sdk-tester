import { ReactNode } from 'react';

import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-coinbase';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import {
  EtheruemProvider,
  SolanaProvider,
  ALL_TESTNET_CHAINS,
  ALL_SUPPORTED_NETWORKS,
  WalletProvider,
  WalletsProvider,
} from '@xld/wallet';

interface Props {
  children: ReactNode;
}

const solanaWallets = [new PhantomWalletAdapter(), new CoinbaseWalletAdapter()];

export function SolProvider({ children }: Props) {
  return (
    <WalletProvider>
      <SolanaProvider solanaWallets={solanaWallets}>{children}</SolanaProvider>
    </WalletProvider>
  );
}

export function EtherProvider({ children }: Props) {
  return (
    <WalletProvider
      supportedChainIds={ALL_TESTNET_CHAINS}
      supportedNetworks={ALL_SUPPORTED_NETWORKS}
    >
      <EtheruemProvider>{children}</EtheruemProvider>
    </WalletProvider>
  );
}

export function AllProviders({ children }: Props) {
  return <WalletsProvider>{children}</WalletsProvider>;
}
