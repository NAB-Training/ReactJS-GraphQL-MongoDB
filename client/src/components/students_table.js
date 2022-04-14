import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3d5afe",
    color: theme.palette.common.white,
    fontWeight:"bold"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TableStudent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">IMAGE</StyledTableCell>
            <StyledTableCell align="right">AGE</StyledTableCell>
            <StyledTableCell align="right">GENDER</StyledTableCell>
            <StyledTableCell align="right">SCHOOL</StyledTableCell>
            <StyledTableCell align="right">TEACHER</StyledTableCell>
            <StyledTableCell align="right">TOOL</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                a
              </StyledTableCell>
              <StyledTableCell align="right">a</StyledTableCell>
              <StyledTableCell align="right">a</StyledTableCell>
              <StyledTableCell align="right">a</StyledTableCell>
              <StyledTableCell align="right">a</StyledTableCell>
              <StyledTableCell align="right">a</StyledTableCell>
              <StyledTableCell align="right">a</StyledTableCell>
              <StyledTableCell align="right"><EditOutlinedIcon color="primary" /></StyledTableCell>
              <StyledTableCell align="right"><DeleteOutlineOutlinedIcon color="primary" /></StyledTableCell>
            </StyledTableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
