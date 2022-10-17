import { Typography } from '@mui/material';

interface Props {
  error?: string | null;
}

export default function DisplayError({ error }: Props) {
  if (!error) return null;

  return (
    <Typography role='alert' color='error'>
      {error}
    </Typography>
  );
}
