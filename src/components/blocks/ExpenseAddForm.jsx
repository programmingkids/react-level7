import { useState, useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { DispatchContext } from './../providers/DispatchContext';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Stack, Typography, Paper } from '@mui/material'
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { TextField } from '@mui/material';

export const ExpenseAddForm = () => {
  // 支出を新規追加するためのフォーム処理
  // 支出のnameとpriceを表示するフォーム処理
  // distpatchを呼び出してexpensesの配列に要素を追加する
  
  
  
  
  return (
    <Container sx={{my:4}}>
      <Paper sx={{p:4}}>
        <Stack spacing={3} sx={{}}>
          <Typography variant="subtitle1">
            支出新規登録
          </Typography>
          <Box>
            <TextField
              id="name"
              label="支出名"
              type="text"
            />
          </Box>
          <Box>
            <TextField
              id="price"
              label="金額"
              type="number"
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
            >
              登録
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};
