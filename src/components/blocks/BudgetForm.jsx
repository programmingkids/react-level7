import { useState, useContext } from "react";
import { StateContext } from "./../providers/StateContext";
import { DispatchContext } from "./../providers/DispatchContext";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, Typography, Paper } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";

export const BudgetForm = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const { budgetAmount } = useContext(StateContext);
  const [amount, setAmount] = useState(budgetAmount);

  const handleOnChangeAmount = (e) => {
    setAmount((v) => parseInt(e.target.value));
  };

  const handleOnClick = (e) => {
    dispatch({
      type: "setBudgetAmount",
      payload: {
        amount: amount,
      },
    });
    navigate("/");
  };

  return (
    <Container sx={{ my: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={3} sx={{}}>
          <Typography variant="subtitle1">予算額設定</Typography>
          <Box>
            <TextField
              id="budget"
              label="予算額"
              type="number"
              value={amount}
              onChange={handleOnChangeAmount}
            />
          </Box>
          <Box>
            <Button variant="contained" color="primary" onClick={handleOnClick}>
              設定
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};
