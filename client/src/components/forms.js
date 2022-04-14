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
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#3d5afe",
        color: theme.palette.common.white,
        fontWeight: "bold"
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

export default function FormStudent() {
    const [openTeacher, setOpenTeacher] = React.useState(false);
    const [openSchool, setOpenSchool] = React.useState(false)
    const handleOpenTeacherDetail = () => setOpenTeacher(!openTeacher);
    const handleOpenSchoolDetail = () => setOpenSchool(!openSchool);
    return (
        <TableContainer component={Paper}>
            <Modal
                open={openTeacher}
                onClose={handleOpenTeacherDetail}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography 
                        id="modal-modal-title" 
                        variant="h6" 
                        component="h2"
                        sx={{
                            textAlign:"center",
                            fontWeight:"bold",
                            marginBottom:3
                        }}
                        >
                        Teacher Details
                    </Typography>
                    <Box sx={{display:"flex"}}>
                    <Typography 
                        id="modal-modal-description" 
                        sx={{
                            fontSize:16,
                            fontWeight:"bold",
                        }}>
                        Name
                    </Typography>
                    <Typography 
                        id="modal-modal-description" 
                        sx={{
                            fontSize:16,
                            marginLeft:5
                        }}>
                        Hà Mộng Khang
                    </Typography>
                    </Box>
                </Box>
            </Modal>
            <Modal
                open={openSchool}
                onClose={handleOpenSchoolDetail}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography 
                        id="modal-modal-title" 
                        variant="h6" 
                        component="h2"
                        sx={{
                            textAlign:"center",
                            fontWeight:"bold",
                            marginBottom:3
                        }}
                        >
                        School Details
                    </Typography>
                    <Box sx={{display:"flex"}}>
                    <Typography 
                        id="modal-modal-description" 
                        sx={{
                            fontSize:16,
                            fontWeight:"bold",
                        }}>
                        Name
                    </Typography>
                    <Typography 
                        id="modal-modal-description" 
                        sx={{
                            fontSize:16,
                            marginLeft:5
                        }}>
                        Hà Mộng Khang
                    </Typography>
                    </Box>
                </Box>
            </Modal>
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
                        <StyledTableCell align="right" onClick={handleOpenSchoolDetail}>a</StyledTableCell>
                        <StyledTableCell align="right" onClick={handleOpenTeacherDetail}>teacher</StyledTableCell>
                        <StyledTableCell align="right"><EditOutlinedIcon sx={{ color: "blue" }} /></StyledTableCell>
                        <StyledTableCell align="right"><DeleteOutlineOutlinedIcon sx={{ color: "red" }} /></StyledTableCell>
                    </StyledTableRow>
                    {/* ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
