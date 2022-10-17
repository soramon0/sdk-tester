import {
  ChangeEvent,
  useEffect,
} from 'react';

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { WalletType } from '@xld/wallet';

import { useLocalStorage } from '../lib/useLocalStorage';

interface Props {
  autoConnect: (walletType?: WalletType) => void;
  walletType?: WalletType;
}

function AutoOnMount({ autoConnect, walletType }: Props) {
  const [onMount, setOnMount] = useLocalStorage(`${walletType}/onMount`, false);

  useEffect(() => {
    if (onMount) {
      if (walletType) {
        autoConnect(walletType);
      } else {
        autoConnect();
      }
    }
  }, [autoConnect, onMount]);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={onMount}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setOnMount(event.target.checked)
            }
          />
        }
        label={`Connect ${walletType} on mount`}
      />
    </FormGroup>
  );
}

export default AutoOnMount;
