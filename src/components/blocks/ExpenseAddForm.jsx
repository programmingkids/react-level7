import { useState, useContext } from "react";
import { StateContext } from "./../providers/StateContext";
import { DispatchContext } from "./../providers/DispatchContext";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, Typography, Paper } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";

export const ExpenseAddForm = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const [expense, setExpense] = useState({
    name: "",
    price: "",
  });

  const handleOnChange = (e) => {
    const ex = { ...expense };
    ex[e.target.id] = e.target.value;
    setExpense((p) => ex);
  };

  const handleOnClick = (e) => {
    dispatch({
      type: "addExpense",
      payload: {
        expense: expense,
      },
    });
    navigate("/");
  };

  return (
    <Container sx={{ my: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={3} sx={{}}>
          <Typography variant="subtitle1">支出新規登録</Typography>
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
            <Button variant="contained" color="primary" onClick={handleOnClick}>
              登録
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};
