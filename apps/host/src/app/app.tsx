import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Landing from './Landing';
import { Box } from '@mui/material';

const App1 = React.lazy(() => import('app1/Module'));
const App2 = React.lazy(() => import('app2/Module'));
const Header = React.lazy(() => import('header/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <CssBaseline />
      <Header label="app" />
      <Box sx={{ p: 2 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app1" element={<App1 />} />
          <Route path="/app2" element={<App2 />} />
        </Routes>
      </Box>
    </React.Suspense>
  );
}

export default App;
