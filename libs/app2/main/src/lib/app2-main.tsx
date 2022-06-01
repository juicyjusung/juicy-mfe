import { Typography } from '@mui/material';
import { JButton, Title } from '@juicy-module-federation/shared/components';
import { CardBox } from '@juicy-module-federation/shared/components';
import { fDateTime } from '@juicy-module-federation/shared/utils';

/* eslint-disable-next-line */
export interface App2MainProps {}

export function App2Main(props: App2MainProps) {
  return (
    <CardBox sx={{ backgroundColor: '#F3DF4E', color: '#959398' }}>
      <Title variant="h3">Welcome to App2Main!</Title>
      <Typography variant="subtitle1">
        Shared utils: {fDateTime(new Date())}
      </Typography>
      <JButton>Shared Button</JButton>
    </CardBox>
  );
}

export default App2Main;
