import { Box, Button, Stack, Typography } from '@mui/material';
import {
  useAutoConnectSolana,
  useSolanaConnector,
  useSolanaTranscation,
  useWallet,
  WalletType,
} from '@xld/wallet';
import { solanaPaymentWalletAddress } from '../lib/constants';
import { getTxLink } from '../lib/getTxLink';
import { Product, solanaProducts } from '../lib/products';

import AutoOnMount from './AutoOnMount';
import DisplayError from './DisplayError';
import DisplayLoader from './DisplayLoader';
import Link from './Link';
import ProductsList from './ProductsList';
import WalletTable from './walletTable';

function Phantom() {
  const { account, walletType, chainId } = useWallet();
  const { connect, connecting, disconnect, disconnecting, error } =
    useSolanaConnector();
  const {
    autoConnect,
    error: autoError,
    connecting: autoConnecting,
  } = useAutoConnectSolana();
  const {
    createTransaction,
    data,
    error: txError,
    isPending: txIsPending,
  } = useSolanaTranscation();

  const onItemSelected = async (product: Product) => {
    await createTransaction({
      recipientAddress: solanaPaymentWalletAddress,
      tokenAmount: product.price,
      tokenAddress: product.contract_address,
      tokenDecimals: product.decimals,
    });
  };

  return (
    <Stack spacing={4}>
      <Typography variant='h2'>Connect Phantom wallet</Typography>
      <AutoOnMount autoConnect={autoConnect} walletType={WalletType.PHANTOM} />
      <Box>
        <DisplayLoader loading={connecting || autoConnecting}>
          Wallet connecting ...
        </DisplayLoader>
        <DisplayError error={error} />
        <DisplayError error={autoError} />

        <WalletTable
          account={account}
          walletType={walletType}
          chainId={chainId}
        />
      </Box>

      <Stack direction='row' spacing={2}>
        <Button
          variant='outlined'
          onClick={() => connect()}
          disabled={connecting}
        >
          Connect Wallet
        </Button>
        <Button
          type='button'
          variant='outlined'
          onClick={() => disconnect()}
          disabled={disconnecting}
        >
          Disconnect Wallet
        </Button>
      </Stack>

      {data && (
        <Typography>
          View Transaction Hash:{' '}
          <Link
            target='_blank'
            href={getTxLink(data, chainId || -1, WalletType.PHANTOM)}
          >
            {data}
          </Link>
        </Typography>
      )}
      <DisplayLoader loading={txIsPending}>
        Processing transaction ...
      </DisplayLoader>
      <DisplayError error={txError} />
      {account && (
        <ProductsList products={solanaProducts} onUpdateItem={onItemSelected} />
      )}
    </Stack>
  );
}

export default Phantom;
