import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import Swal from "sweetalert2";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useQuery } from "@apollo/client"
import { getAllSchools } from '../graphql_client/queries';
import { getAllStudents } from '../graphql_client/queries';
import { createStudentMutation } from '../graphql_client/mutations';
import { useMutation } from "@apollo/client";
import { getAllTeachers } from '../graphql_client/queries';
const Input = styled('input')({
    display: 'none',
});
const FormStudent = () => {
    const [schoolSelect, setSchoolSelect] = React.useState('');
    const [teacherSelect, setTeacherSelect] = React.useState('');
    const [genderSelect, setGenderSelect] = React.useState('');
    const [student, setStudent] = React.useState({
        name: "",
        age: "",
        gender: "",
        image: "",
    });
    const handleChangeInput = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value;
        setStudent({
            ...student,
            [field]: value
        })
    }
    const [createStudent, mutation] = useMutation(createStudentMutation)
    const onSubmit = (event) => {
        event.preventDefault();
        createStudent({
            variables: { image: "http://localhost:3000/assets/images/user.jpg", gender: genderSelect, name: student.name, age: parseInt(student.age), teacherId: teacherSelect, schoolId: schoolSelect },
            refetchQueries: [{ queries: getAllStudents }]
        });
        Swal.fire({
            title: 'Create Successfully?',
            icon: "success",
            marginTop: "200px",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cancel",
        });
    }
    const handleChangeSchool = (event) => {
        setSchoolSelect(event.target.value);
    };
    const handleChangeTeacher = (event) => {
        setTeacherSelect(event.target.value);
    };
    const handleChangeGender = (event) => {
        setGenderSelect(event.target.value);
    };
    const { loading: loadingSchool, error: errorSchool, data: dataSchool } = useQuery(getAllSchools);
    const { loading: loadingTeacher, error: errorTeacher, data: dataTeacher } = useQuery(getAllTeachers);
    if (loadingSchool) return <p>Loading schools....</p>
    if (errorSchool) return <p>Error loading schools!</p>
    if (loadingTeacher) return <p>Loading teachers....</p>
    if (errorTeacher) return <p>Error loading teachers!</p>
    return (
        <Box sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: 2, padding: 2, border: "1px solid #8c9eff" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Create Student
            </Typography>
            <Box
                component="form"
                sx={{
                    display: "flex",
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="Name" name="name" onChange={(event) => handleChangeInput(event)} variant="outlined" />
                <label style={{ width: 35 }} htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera sx={{ marginTop: 1 }} />
                    </IconButton>
                </label>
                <TextField name="age" onChange={(event) => handleChangeInput(event)} id="outlined-basic" type="number" label="Age" variant="outlined" />
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
                            {
                                dataSchool.schools.length ?
                                    dataSchool.schools.map((item, index) => (
                                        <MenuItem key={index} value={item.id ? item.id : null}>{item.name ? item.name : null}</MenuItem>
                                    )) : null
                            }
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
                            {
                                dataTeacher.teachers.length ?
                                    dataTeacher.teachers.map((item, index) => (
                                        <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                    )) : null
                            }
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
                <Button onClick={(event) => onSubmit(event)} variant="contained">Submit</Button>
            </Box>
        </Box>
    );
}
export default FormStudent;