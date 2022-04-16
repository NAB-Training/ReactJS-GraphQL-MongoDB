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
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Avatar from '@mui/material/Avatar';
import { useQuery } from "@apollo/client"
import { getAllStudents } from '../graphql_client/queries';
import { deleteStudentMutation } from '../graphql_client/mutations';
import { useMutation } from "@apollo/client";
import { getAllTeachers } from '../graphql_client/queries';
import { getAllSchools } from '../graphql_client/queries';
import { updateStudentMutation } from '../graphql_client/mutations';

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
    const [openSchool, setOpenSchool] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [schoolSelect, setSchoolSelect] = React.useState('');
    const [teacherSelect, setTeacherSelect] = React.useState('');
    const [genderSelect, setGenderSelect] = React.useState('');
    const [teacherDetail, setTeacherDetail] = React.useState([]);
    const [schoolDetail, setSchoolDetail] = React.useState([]);
    const [edit, setEdit] = React.useState([]);
    const handleChangeSchool = (event) => {
        setSchoolSelect(event.target.value);
    };
    const handleChangeTeacher = (event) => {
        setTeacherSelect(event.target.value);
    };
    const handleChangeGender = (event) => {
        setGenderSelect(event.target.value);
    };
    const handleOpenTeacherDetail = (event, object) => {
        setOpenTeacher(!openTeacher);
        setTeacherDetail(object);
    }
    const handleOpenSchoolDetail = (event, object) => {
        setOpenSchool(!openSchool);
        setSchoolDetail(object);
    }
    const handleOpenEditStudent = (event, object) => {
        console.log(object)
        setOpenEdit(!openEdit);
        setEdit(object);
    }
    const [student, setStudent] = React.useState({
        name: "",
        age: "",
        gender: "",
        image: "",
    });
    const onSubmit = (event) => {
        event.preventDefault();
        updateStudent({
            variables: { id: edit.id, image: "http://localhost:3000/assets/images/user.jpg", gender: genderSelect, name: student.name, age: parseInt(student.age), teacherId: teacherSelect, schoolId: schoolSelect },
            refetchQueries: [{ queries: getAllStudents }]
        })
        Swal.fire({
            title: 'Update Successfully?',
            icon: "success",
            marginTop: "200px",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cancel",
        });
    }
    const [deleteStudent, mutationD] = useMutation(deleteStudentMutation)
    const [updateStudent, mutationR] = useMutation(updateStudentMutation)
    const handledeleteStudent = (event, id) => {
        Swal.fire({
            title: 'Delete Student?',
            text: "Do you want to permanently delete this student?",
            icon: "warning",
            marginTop: "200px",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancel",
            confirmButtonText: "Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                onDeleteStudent(id);
            }
        });
    }
    const handleChangeInput = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value;
        setStudent({
            ...student,
            [field]: value
        })
    }
    const onDeleteStudent = (idStudent) => {
        deleteStudent({
            variables: { id: idStudent },
            refetchQueries: [{ queries: getAllStudents }]
        });
        Swal.fire({
            title: 'Delete Successfully?',
            icon: "success",
            marginTop: "200px",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cancel",
        });
    }
    const { loading, error, data } = useQuery(getAllStudents);
    const { loading: loadingS, error: errorS, data: dataS } = useQuery(getAllSchools)
    const { loading: loadingT, error: errorT, data: dataT } = useQuery(getAllTeachers)
    if (loading) return <p>Loading students....</p>
    if (error) return <p>Error loading students!</p>
    if (loadingS) return <p>Loading schools....</p>
    if (errorS) return <p>Error loading schools!</p>
    if (loadingT) return <p>Loading teachers....</p>
    if (errorT) return <p>Error loading teacher!</p>
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
                            textAlign: "center",
                            fontWeight: "bold",
                            marginBottom: 3
                        }}
                    >
                        Teacher Details
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                fontSize: 16,
                                fontWeight: "bold",
                            }}>
                            Name
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                fontSize: 16,
                                marginLeft: 5
                            }}>
                            {teacherDetail.name}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                fontSize: 16,
                                fontWeight: "bold",
                            }}>
                            Age
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                fontSize: 16,
                                marginLeft: 5
                            }}>
                            {teacherDetail.age}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                fontSize: 16,
                                fontWeight: "bold",
                            }}>
                            Gender
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                fontSize: 16,
                                marginLeft: 5
                            }}>
                            {teacherDetail.gender}
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
                            textAlign: "center",
                            fontWeight: "bold",
                            marginBottom: 3
                        }}
                    >
                        School Details
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                fontSize: 16,
                                fontWeight: "bold",
                            }}>
                            Name
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                fontSize: 16,
                                marginLeft: 5
                            }}>
                            {schoolDetail.name}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                fontSize: 16,
                                fontWeight: "bold",
                            }}>
                            Address
                        </Typography>
                        <Typography
                            id="modal-modal-description"
                            sx={{
                                fontSize: 16,
                                marginLeft: 5
                            }}>
                            {schoolDetail.address}
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
                            textAlign: "center",
                            fontWeight: "bold",
                            marginBottom: 3
                        }}
                    >
                        Student Edit
                    </Typography>
                    <Box sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: 2, padding: 2, border: "1px solid #8c9eff" }}>
                        <Box
                            component="form"
                            sx={{
                                display: "flex",
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off">
                            <TextField onChange={(event) => handleChangeInput(event)} name="name" defaultValue={edit.name} id="outlined-basic" label="Name" variant="outlined" />
                            <label style={{ width: 35 }} htmlFor="icon-button-file">
                                <Input accept="image/*" id="icon-button-file" type="file" />
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera sx={{ marginTop: 1 }} />
                                </IconButton>
                            </label>
                            <TextField onChange={(event) => handleChangeInput(event)} name="age" defaultValue={edit.age} id="outlined-basic" type="number" label="Age" variant="outlined" />
                            <Box>
                                <FormControl sx={{ width: 150 }}>
                                    <InputLabel id="demo-simple-select-label">{edit.school ? edit.school.name : null}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={schoolSelect}
                                        label="School"
                                        onChange={handleChangeSchool}
                                    >
                                        {
                                            dataS.schools.length ?
                                                dataS.schools.map((item, index) => (
                                                    <MenuItem key={index} value={item.id ? item.id : null}>{item.name ? item.name : null}</MenuItem>
                                                )) : null
                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl sx={{ width: 150 }}>
                                    <InputLabel id="demo-simple-select-label">{edit.teacher ? edit.teacher.name : null}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={teacherSelect}
                                        label="Teacher"
                                        onChange={handleChangeTeacher}
                                    >
                                        {
                                            dataT.teachers.length ?
                                                dataT.teachers.map((item, index) => (
                                                    <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                                )) : null
                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl sx={{ width: 150 }}>
                                    <InputLabel id="demo-simple-select-label">{edit.gender ? edit.gender : null}</InputLabel>
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
                            <Button onClick={(event) => onSubmit(event)} variant="contained">Submit</Button>
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
                    {
                        data.students.length ?
                            data.students.map((row, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row">
                                        {index}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.name ? row.name : null}</StyledTableCell>
                                    <StyledTableCell align="right"><Avatar sx={{ marginLeft: "auto", width: 60, height: 60 }} alt="Remy Sharp" src={row.image ? row.image : null} /></StyledTableCell>
                                    <StyledTableCell align="right">{row.age ? row.age : null}</StyledTableCell>
                                    <StyledTableCell align="right">{row.gender ? row.gender : null}</StyledTableCell>
                                    <StyledTableCell align="right" onClick={(event) => handleOpenSchoolDetail(event, row.school)}>{row.school.name ? row.school.name : null}</StyledTableCell>
                                    <StyledTableCell align="right" onClick={(event) => handleOpenTeacherDetail(event, row.teacher)}>{row.teacher.name ? row.teacher.name : null}</StyledTableCell>
                                    <StyledTableCell align="right"><EditOutlinedIcon onClick={(event) => handleOpenEditStudent(event, row)} sx={{ color: "blue" }} /></StyledTableCell>
                                    <StyledTableCell align="right"><DeleteOutlineOutlinedIcon onClick={(event) => handledeleteStudent(event, row.id)} sx={{ color: "red" }} /></StyledTableCell>
                                </StyledTableRow>
                            )) : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
