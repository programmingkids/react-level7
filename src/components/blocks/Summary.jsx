import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { Box, Stack, Typography, Paper } from '@mui/material'
import { Container } from '@mui/material';

export const Summary = () => {
  const { budgetAmount, expenses } = useContext(StateContext);
  const totalExpense = expenses.reduce((val,ele) => val + parseInt(ele.price), 0);
  const balance = budgetAmount - totalExpense;
  
  return (
    <Container sx={{my:4}}>
      <Paper elevation={2}>
        <Typography 
          variant="subtitle3"
          component="h4"
          bgcolor="primary.light"
          sx={{borderRadius:'4px 4px 0 0'}}
          px={2}
          py={1}
        >
          支出まとめ
        </Typography>
        <Stack 
          direction="row" 
          spacing={2} 
          my={1}
          px={2}
          py={1}
          justifyContent="space-between" 
          sx={{borderBottom: '1px solid #cecece'}}
        >
          <Typography variant="subtitle2">
            予算額
          </Typography>
          <Typography>
            &yen;{budgetAmount.toLocaleString()}
          </Typography>
        </Stack>
        <Stack 
          direction="row" 
          spacing={2} 
          my={1} 
          px={2}
          py={1}
          justifyContent="space-between" 
          sx={{borderBottom: '1px solid #cecece'}}
        >
          <Typography variant="subtitle2">
            支出合計
          </Typography>
          <Typography>
            &yen;{totalExpense.toLocaleString()}
          </Typography>
        </Stack>
        <Stack 
          direction="row" 
          spacing={2} 
          my={1} 
          px={2}
          py={1}
          justifyContent="space-between" 
          sx={{borderBottom: '1px solid #cecece'}}
        >
          <Typography variant="subtitle2">
            残額
          </Typography>
          <Typography>
            {balance.toLocaleString()}
          </Typography>
        </Stack>
      </Paper>  
    </Container>
  );
};
