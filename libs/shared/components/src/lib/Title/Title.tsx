import { Typography, TypographyProps } from '@mui/material';

export const Title = (props: TypographyProps) => {
  return <Typography variant="h3" color="secondary" {...props} />;
};

export default Title;
