import type { ReactNode } from 'react';

import { Typography } from '@mui/material';

interface Props {
  loading: boolean;
  children: ReactNode;
}

export default function DisplayLoader({ loading, children }: Props) {
  if (!loading) return null;

  return <Typography>{children}</Typography>;
}
