import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const ExpenseList = () => {
  const { expenses } = useContext(StateContext);

  return (
    <Container sx={{ mt: 4, mb: 20 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="table">
          <TableHead>
            <TableRow>
              <StyledTableCell>支出名</StyledTableCell>
              <StyledTableCell align="right">金額&nbsp;（円）</StyledTableCell>
              <StyledTableCell align="right">アクション</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((e, index) => (
              <TableRow key={index} hover>
                <StyledTableCell component="th" scope="row">
                  {e.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  &yen;{Math.round(e.price).toLocaleString()}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    color="iconButtonLink"
                    aria-label="edit"
                    component={Link}
                    to={`/edit/${e.id}`}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    color="iconButtonLink"
                    aria-label="delete"
                    component={Link}
                    to={`/delete/${e.id}`}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
