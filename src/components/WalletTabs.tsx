import {
  ReactNode,
  SyntheticEvent,
} from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import { useLocalStorage } from '../lib/useLocalStorage';
import Metamask from './metamask';
import Phantom from './phantom';
import {
  AllProviders,
  EtherProvider,
  SolProvider,
} from './Providers';
import Wallets from './wallets';

interface TabPanelProps {
  children: ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, index, value }: TabPanelProps) {
  return (
    <div role='tabpanel' hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function WalletTabs() {
  const [value, setValue] = useLocalStorage('wallet/tab', 0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='Wallet tabs'>
          <Tab label='Metamask' />
          <Tab label='Phantom' />
          <Tab label='Wallets' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <EtherProvider>
          <Metamask />
        </EtherProvider>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SolProvider>
          <Phantom />
        </SolProvider>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AllProviders>
          <Wallets />
        </AllProviders>
      </TabPanel>
    </Box>
  );
}
