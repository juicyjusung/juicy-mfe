import * as React from 'react';

import { AccountCircle } from '@mui/icons-material';
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { JButton } from '@juicy-module-federation/shared/components';

interface Props {
  label?: string;
  auth: boolean;
}

export function App({ auth, label = '' }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <JButton color="secondary" href="/">
            Home
          </JButton>
          <Typography variant="subtitle1" sx={{ ml: 4 }}>
            header
          </Typography>
          <Stack gap={3} direction="row" sx={{ ml: 'auto' }}>
            <JButton color="secondary" href="/app1">
              app1
            </JButton>
            <JButton color="secondary" href="/app2">
              app2
            </JButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
