import { Link } from 'react-router-dom';
import { Box, Stack, Typography, Paper } from '@mui/material';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';

export const MyAppBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton component={Link} to={'/'} color="inherit">
          <MoneyIcon size="large" />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, ml: 2, display: { sm: 'block' } }}
        >
          予算くん
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
