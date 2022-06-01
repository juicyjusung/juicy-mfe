import { Card, CardProps, Stack } from '@mui/material';

type CardBoxProps = CardProps;

export const CardBox = ({ children, sx, ...rest }: CardBoxProps) => {
  return (
    <Card
      sx={{ p: 2, boxShadow: 3, backgroundColor: '#c9c9c9', ...sx }}
      {...rest}
    >
      <Stack spacing={2}>{children}</Stack>
    </Card>
  );
};

export default CardBox;
