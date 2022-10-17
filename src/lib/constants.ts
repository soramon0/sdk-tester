import {
  ALL_TESTNET_NETWORKS,
  ChainId,
  SolanaChainId,
  WalletType,
  getNetworkParamtersName,
} from '@xld/wallet';

export const evmChains = [
  {
    name: 'Binance Smart Chain Testnet',
    chainId: ChainId.BSC_TESTNET,
    walletType: WalletType.METAMASK,
  },
  {
    name: 'Polygon Matic Mumbai',
    chainId: ChainId.MATIC_TESTNET,
    walletType: WalletType.METAMASK,
  },
  {
    name: 'Goerli test network',
    chainId: ChainId.GOERLI,
    walletType: WalletType.METAMASK,
  },
  {
    name: 'Sepolia test network',
    chainId: ChainId.SEPOLIA,
    walletType: WalletType.METAMASK,
  },
];

export const chains = [
  ...evmChains,
  {
    name: 'Solana Testnet',
    chainId: ChainId.SOLANA_TESTNET,
    walletType: WalletType.PHANTOM,
  },
];

export const solanaPaymentWalletAddress =
  'EDDvhuCfbAxuozoPSqfAinm5D88ghiFq1RDJAqVpwe6g';
export const paymentWalletAddress =
  '0xcb18c155d20e68356d8f5649fa732d6eef001e27';
