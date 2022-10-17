import { ChainId, WalletType } from '@xld/wallet';

export const getTxLink = (
  txHash: string,
  chainId: number,
  walletType: WalletType
) => {
  if (!txHash) return '';

  if (walletType === WalletType.METAMASK) {
    if (chainId === ChainId.BSC_TESTNET) {
      return `https://testnet.bscscan.com/tx/${txHash}`;
    }

    if (chainId === ChainId.MATIC_TESTNET) {
      return `https://mumbai.polygonscan.com/tx/${txHash}`;
    }

    if (chainId === ChainId.GOERLI) {
      return `https://goerli.etherscan.io/tx/${txHash}`;
    }

    if (chainId === ChainId.SEPOLIA) {
      return `https://sepolia.etherscan.io/tx/${txHash}`;
    }
  }

  if (walletType === WalletType.PHANTOM) {
    return `https://explorer.solana.com/tx/${txHash}?cluster=testnet`;
  }

  return '';
};
