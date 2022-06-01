import { Button, ButtonProps } from '@mui/material';

type JButtonProps = Omit<ButtonProps, 'size' | 'variant'>;

export function JButton(props: JButtonProps) {
  return <Button size="medium" variant="contained" {...props} />;
}

export default JButton;
