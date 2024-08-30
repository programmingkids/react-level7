import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DispatchContext } from './../providers/DispatchContext';
import { StateContext } from './../providers/StateContext';
import { Box, Stack, Typography, Paper } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { TextField } from '@mui/material';

export const ExpenseEditForm = () => {
  // 支出を更新するためのフォーム処理
  // 支出のnameとpriceを表示するフォーム処理
  // URLパラメータからidを取得する
  // distpatchを呼び出してexpensesの配列の要素を更新する
  const navigate = useNavigate();
  const distpatch = useContext(DispatchContext);
  const { expenses } = useContext(StateContext);
  const { id } = useParams();

  const [expense, setExpense] = useState({
    id: '',
    name: '',
    price: '',
  });

  useEffect(() => {
    if (expenses.length > 0) {
      const ex = expenses.find((e) => e.id === parseInt(id));
      setExpense((p) => ex);
    }
  }, []);

  const handleChange = (e) => {
    setExpense((p) => ({
      ...p,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    distpatch({
      type: 'editExpense',
      payload: {
        expense,
      },
    });
    navigate('/');
  };

  return (
    <Container sx={{ my: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={3} sx={{}}>
          <Typography variant="subtitle1">支出編集</Typography>
          <Box>
            <TextField
              id="name"
              label="支出名"
              type="text"
              value={expense.name}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <TextField
              id="price"
              label="金額"
              type="number"
              value={expense.price}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Button variant="contained" color="primary" onClick={handleClick}>
              登録
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};
