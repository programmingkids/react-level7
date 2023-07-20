import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Paper, Container, Typography, } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const BottomStaticPaper = styled(Paper)(({theme}) => ({
  position: 'fixed', 
  bottom: 0,
  left: 0,
  right: 0,
}));

export const MyBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const handleOnChange = (e, newValue) => {
    setValue(newValue);
  };
  
  return (
    <BottomStaticPaper elevation={3}>
      <BottomNavigation 
        showLabels 
        value={value} 
        onChange={handleOnChange}
      >
        <BottomNavigationAction 
          label="Home" 
          icon={<HomeIcon />}
          component={Link}
          to={'/'}
        />
        <BottomNavigationAction 
          label="Budget" 
          icon={<MonetizationOnIcon />}
          href="/budget"
          component={Link}
          to={'/budget'}
        />
        <BottomNavigationAction
          label="About" 
          icon={<InfoIcon />}
          href="/about"
          component={Link}
          to={'/about'}
        />
      </BottomNavigation>
    </BottomStaticPaper>
  );
};
