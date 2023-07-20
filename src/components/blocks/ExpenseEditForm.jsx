import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DispatchContext } from './../providers/DispatchContext';
import { StateContext } from './../providers/StateContext';
import { Box, Stack, Typography, Paper } from '@mui/material'
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { TextField } from '@mui/material';

export const ExpenseEditForm = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const { expenses } = useContext(StateContext);
  const { id } = useParams();
  const [ expense, setExpense ] = useState({
    id : '',
    name: '',
    price: '',
  });
  
  useEffect(() => {
    if(expenses.length > 0) {
      const data = expenses.find(e => e.id === parseInt(id));
      setExpense(data);
    }
  },[expenses, id]);
  
  const handleOnChange = (e) => {
    const ex = {...expense};
    ex[e.target.id] = e.target.value;
    setExpense(p => ex);
  };
  
  const handleOnClick = (e) => {
    dispatch({
      type: 'editExpense',
      payload : {
        expense : expense,
      }
    });
    navigate('/');
  };
  
  return (
    <Container sx={{my:4}}>
      <Paper sx={{p:4}}>
        <Stack spacing={3} sx={{}}>
          <Typography variant="subtitle1">
            支出編集
          </Typography>
          <Box>
            <TextField
              id="name"
              label="支出名"
              type="text"
              value={expense.name}
              onChange={handleOnChange}
            />
          </Box>
          <Box>
            <TextField
              id="price"
              label="金額"
              type="number"
              value={expense.price}
              onChange={handleOnChange}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOnClick}
            >
              登録
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};
