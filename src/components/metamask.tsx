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
  useAutoConnectMetamask,
  useMetamaskConnector,
  useSwitchEtheruemNetwork,
  useWallet,
  WalletType,
  useMetamaskTranscation,
  ChainId,
} from '@xld/wallet';

import { evmChains, paymentWalletAddress } from '../lib/constants';
import { getTxLink } from '../lib/getTxLink';
import { metamaskProducts, Product } from '../lib/products';
import AutoOnMount from './AutoOnMount';
import DisplayError from './DisplayError';
import DisplayLoader from './DisplayLoader';
import Link from './Link';
import ProductsList from './ProductsList';
import WalletTable from './walletTable';

function Metamask() {
  const { account, walletType, chainId } = useWallet();
  const { connect, connecting, disconnect, disconnecting, error } =
    useMetamaskConnector();
  const {
    autoConnect,
    error: autoError,
    connecting: autoConnecting,
  } = useAutoConnectMetamask();
  const {
    switchNetwork,
    switchingNetwork,
    error: switchError,
  } = useSwitchEtheruemNetwork();
  const {
    createTransaction,
    data,
    isPending: txIsPending,
    error: txError,
  } = useMetamaskTranscation();

  const handleChange = (event: SelectChangeEvent) => {
    switchNetwork(Number(event.target.value));
  };

  const onItemSelected = async (product: Product) => {
    await createTransaction({
      recipientAddress: paymentWalletAddress,
      tokenAmount: product.price,
      tokenAddress: product.contract_address,
      tokenDecimals: product.decimals,
    });
  };

  return (
    <Stack spacing={4}>
      <Typography variant='h2'>Connect Metamask wallet</Typography>
      <AutoOnMount autoConnect={autoConnect} walletType={WalletType.METAMASK} />
      <Box>
        <DisplayLoader loading={connecting || autoConnecting}>
          Wallet connecting ...
        </DisplayLoader>
        <DisplayError error={error} />
        <DisplayError error={autoError} />
        <DisplayError error={switchError} />

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
            {evmChains.map((chain) => (
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
            href={getTxLink(data.hash, chainId || -1, WalletType.METAMASK)}
          >
            {data.hash}
          </Link>
        </Typography>
      )}
      <DisplayLoader loading={txIsPending}>
        Processing transaction ...
      </DisplayLoader>
      <DisplayError error={txError} />
      {account && (
        <ProductsList
          products={metamaskProducts}
          onUpdateItem={onItemSelected}
        />
      )}
    </Stack>
  );
}

export default Metamask;
