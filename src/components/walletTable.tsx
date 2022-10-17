/* eslint-disable import/no-extraneous-dependencies */
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getWalletName, WalletType } from '@xld/wallet';
import { chains } from '../lib/constants';

interface Props {
  account?: string | null;
  walletType?: WalletType | null;
  chainId?: number | null;
}

export default function WalletTable({ account, chainId, walletType }: Props) {
  const safeGetWalletName = () => {
    try {
      return getWalletName(walletType);
    } catch {
      return '-';
    }
  };

  const getNetworkName = () => {
    if (!chainId) return '-';
    const chain = chains.find((chain) => chain.chainId === chainId);
    return chain?.name || 'unknown';
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label='Wallet table'>
        <TableHead>
          <TableRow>
            <TableCell>Wallet Type</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Network</TableCell>
            <TableCell>Chain Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell sx={{ textTransform: 'capitalize' }}>
              {safeGetWalletName()}
            </TableCell>
            <TableCell>{account || '-'}</TableCell>
            <TableCell>{getNetworkName()}</TableCell>
            <TableCell>{chainId || '-'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
