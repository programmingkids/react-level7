import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const BottomStaticBox = styled(Box)(({theme}) => ({
  position: 'fixed', 
  bottom: 80,
  right: 10,
}));

export const MyFab = () => {
  return (
    <BottomStaticBox>
      <Fab 
        size="large" 
        color="secondary" 
        aria-label="add" 
        sx={{m:1}}
        component={Link}
        to={'/add'}
      >
        <AddIcon />
      </Fab>
    </BottomStaticBox>
  );
};
