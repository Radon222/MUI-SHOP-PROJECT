import { ShoppingBasket } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';

export const Header = ({ handleCart, orderLen }) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
          MUI SHOP
        </Typography>
        <IconButton color='inherit' onClick={handleCart}>
          <Badge color='secondary' badgeContent={orderLen}>
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
