import { Stack } from '@mui/material';
import * as React from 'react';

const App1 = React.lazy(() => import('app1/Module'));
const App2 = React.lazy(() => import('app2/Module'));

const Landing = () => {
  return (
    <Stack gap={4} direction="row">
      <App1 />
      <App2 />
    </Stack>
  );
};

export default Landing;
