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
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Input = styled('input')({
    display: 'none',
});
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

export default function TableStudent() {
    const [openTeacher, setOpenTeacher] = React.useState(false);
    const [openSchool, setOpenSchool] = React.useState(false)
    const [openEdit, setOpenEdit] = React.useState(false)
    const handleOpenTeacherDetail = () => setOpenTeacher(!openTeacher);
    const handleOpenSchoolDetail = () => setOpenSchool(!openSchool);
    const handleOpenEditStudent = () => setOpenEdit(!openEdit);
    const [schoolSelect, setSchoolSelect] = React.useState('');
    const [teacherSelect, setTeacherSelect] = React.useState('');
    const [genderSelect, setGenderSelect] = React.useState('');

    const handleChangeSchool = (event) => {
        setSchoolSelect(event.target.value);
    };
    const handleChangeTeacher = (event) => {
        setTeacherSelect(event.target.value);
    };
    const handleChangeGender = (event) => {
        setGenderSelect(event.target.value);
    };
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
            <Modal
                open={openEdit}
                onClose={handleOpenEditStudent}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 1200,
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
                        Student Edit
                    </Typography>
                    <Box sx={{ marginBottom:2,backgroundColor: "white", borderRadius: 2, padding: 2, border: "1px solid #8c9eff" }}>
           <Box
                component="form"
                sx={{
                    display: "flex",
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <label style={{ width: 35 }} htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera sx={{ marginTop: 1 }} />
                    </IconButton>
                </label>
                <TextField id="outlined-basic" type="number" label="Age" variant="outlined" />
                <Box>
                    <FormControl sx={{ width: 150 }}>
                        <InputLabel id="demo-simple-select-label">School</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={schoolSelect}
                            label="School"
                            onChange={handleChangeSchool}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>        
                <Box>
                    <FormControl sx={{ width: 150 }}>
                        <InputLabel id="demo-simple-select-label">Teacher</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={teacherSelect}
                            label="Teacher"
                            onChange={handleChangeTeacher}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl sx={{ width: 150 }}>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={genderSelect}
                            label="Gender"
                            onChange={handleChangeGender}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                </Box>            
                <Button variant="contained">Submit</Button>
                </Box>
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
                        <StyledTableCell align="right"><EditOutlinedIcon onClick={handleOpenEditStudent} sx={{ color: "blue" }} /></StyledTableCell>
                        <StyledTableCell align="right"><DeleteOutlineOutlinedIcon sx={{ color: "red" }} /></StyledTableCell>
                    </StyledTableRow>
                    {/* ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
