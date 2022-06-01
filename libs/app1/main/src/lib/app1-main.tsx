import { Typography } from '@mui/material';
import {
  CardBox,
  JButton,
  Title,
} from '@juicy-module-federation/shared/components';
import { fDateTime } from '@juicy-module-federation/shared/utils';

/* eslint-disable-next-line */
export interface App1MainProps {}

export function App1Main(props: App1MainProps) {
  return (
    <CardBox sx={{ backgroundColor: '#959398', color: '#F3DF4E' }}>
      <Title variant="h3">Welcome to App1Main!</Title>
      <Typography variant="subtitle1">
        Shared utils: {fDateTime(new Date())}
      </Typography>
      <JButton>Shared Button</JButton>
    </CardBox>
  );
}

export default App1Main;
