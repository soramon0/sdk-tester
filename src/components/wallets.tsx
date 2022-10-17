import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import {
  useAutoConnect,
  useConnector,
  useCreateTransacation,
  useSwitchNetwork,
  useWallet,
  WalletType,
} from '@xld/wallet';

import {
  chains,
  paymentWalletAddress,
  solanaPaymentWalletAddress,
} from '../lib/constants';
import { getTxLink } from '../lib/getTxLink';
import { metamaskProducts, Product, solanaProducts } from '../lib/products';
import AutoOnMount from './AutoOnMount';
import DisplayError from './DisplayError';
import DisplayLoader from './DisplayLoader';
import Link from './Link';
import ProductsList from './ProductsList';
import WalletTable from './walletTable';

function Wallets() {
  const { account, walletType, chainId } = useWallet();
  const {
    connect,
    connecting,
    disconnect,
    disconnecting,
    connectError,
    disconnectError,
  } = useConnector();
  const {
    autoConnect,
    error: autoError,
    connecting: autoConnecting,
  } = useAutoConnect();
  const {
    switchNetwork,
    switchingNetwork,
    error: switchError,
  } = useSwitchNetwork();

  const {
    createTransaction,
    data,
    error: txError,
    transactionPending,
  } = useCreateTransacation();

  const handleChange = (event: SelectChangeEvent) => {
    const desiredChainId = Number(event.target.value);
    const chain = chains.find(({ chainId: id }) => id === desiredChainId);

    if (!chain) return;

    switchNetwork(chain.chainId, chain.walletType);
  };

  const onItemSelected = async (product: Product) => {
    await createTransaction({
      recipientAddress:
        walletType === WalletType.METAMASK
          ? paymentWalletAddress
          : solanaPaymentWalletAddress,
      tokenAmount: product.price,
      tokenAddress: product.contract_address,
      tokenDecimals: product.decimals,
    });
  };

  return (
    <Stack spacing={4}>
      <Typography variant='h2'>Connect wallet</Typography>
      <AutoOnMount autoConnect={autoConnect} walletType={WalletType.METAMASK} />
      <AutoOnMount autoConnect={autoConnect} walletType={WalletType.PHANTOM} />
      <Box>
        <DisplayLoader loading={connecting || autoConnecting}>
          Wallet connecting ...
        </DisplayLoader>
        <DisplayError error={connectError} />
        <DisplayError error={disconnectError} />
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
          onClick={() => connect(WalletType.METAMASK)}
          disabled={connecting}
        >
          Connect Metamask Wallet
        </Button>
        <Button
          variant='outlined'
          onClick={() => connect(WalletType.PHANTOM)}
          disabled={connecting}
        >
          Connect Phantom Wallet
        </Button>
      </Stack>

      <Stack direction='row' spacing={2}>
        <Button
          type='button'
          variant='outlined'
          onClick={() => disconnect(WalletType.METAMASK)}
          disabled={disconnecting}
        >
          Disconnect Metamask Wallet
        </Button>
        <Button
          type='button'
          variant='outlined'
          onClick={() => disconnect(WalletType.PHANTOM)}
          disabled={disconnecting}
        >
          Disconnect Phantom Wallet
        </Button>
        {account && (
          <Button
            type='button'
            variant='outlined'
            onClick={() => disconnect(walletType)}
            disabled={disconnecting}
          >
            Disconnect Connected Wallet
          </Button>
        )}
      </Stack>

      <DisplayLoader loading={switchingNetwork}>
        Switching network ...
      </DisplayLoader>
      <DisplayError error={switchError} />

      {account && (
        <FormControl sx={{ mt: 1 }} fullWidth>
          <InputLabel id='demo-simple-select-label'>Switch Network</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={chainId?.toString()}
            label='Switch Network'
            onChange={handleChange}
            disabled={switchingNetwork}
          >
            {chains.map((chain) => (
              <MenuItem key={chain.chainId} value={chain.chainId}>
                {chain.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {data && (
        <Typography>
          View Transaction Hash:{' '}
          <Link
            target='_blank'
            href={getTxLink(data, chainId || -1, walletType)}
          >
            {data}
          </Link>
        </Typography>
      )}
      <DisplayLoader loading={transactionPending}>
        Processing transaction ...
      </DisplayLoader>
      <DisplayError error={txError} />
      {account && (
        <ProductsList
          products={
            walletType === WalletType.METAMASK
              ? metamaskProducts
              : solanaProducts
          }
          onUpdateItem={onItemSelected}
        />
      )}
    </Stack>
  );
}

export default Wallets;
