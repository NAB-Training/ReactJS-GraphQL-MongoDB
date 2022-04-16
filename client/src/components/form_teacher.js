import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useQuery} from "@apollo/client"
import { getAllSchools } from '../graphql_client/queries';
import { createTeacherMutation } from '../graphql_client/mutations';
import { getAllTeachers } from '../graphql_client/queries';
import {useMutation} from "@apollo/client"
const Input = styled('input')({
    display: 'none',
});
const FormTeacher=()=>{
    const [schoolSelect, setSchoolSelect] = React.useState('');
    const [genderSelect, setGenderSelect] = React.useState('');
    const [teacher,setTeacher]=React.useState({
        name:"",
        age:0,
        schoolId:"",
        gender:""
    })
    const handleChangeSchool = (event) => {
        setSchoolSelect(event.target.value);
    };
    const handleChangeGender = (event) => {
        setGenderSelect(event.target.value);
    };
    const {loading,error,data}=useQuery(getAllSchools);
    console.log(data)
    const handleChangeInput=(event)=>{
        const target=event.target;
        const field=target.name;
        const value=target.value;
        setTeacher({
            ...teacher,
            [field]:value
        })
    }
    const [createData,mutation]=useMutation(createTeacherMutation)
    const {name,age}=teacher
    const onSubmit=(event)=>{
        event.preventDefault()
        createData({
            variables:{name,age:parseInt(age),schoolId:schoolSelect,gender:genderSelect},
            refetchQueries:[{queries:getAllTeachers}]
        });
        setTeacher({name:"",age:""});
        setSchoolSelect("");
        setGenderSelect("")
    }
    if (loading)return<p>Loading data</p>
    if (error)return<p>Error loading data</p>
    return (
        <Box sx={{marginBottom:2, backgroundColor: "white", borderRadius: 2, padding: 2, border: "1px solid #8c9eff" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Create Teacher
            </Typography>
            <Box
                component="form"
                sx={{
                    display: "flex",
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField onChange={(event)=>handleChangeInput(event)} name="name" id="outlined-basic" label="Name" variant="outlined" />
                <TextField onChange={(event)=>handleChangeInput(event)} name="age" id="outlined-basic" type="number" label="Age" variant="outlined" />
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
                                data.schools.length?
                                data.schools.map((item,index)=>(
                                    <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                )):null
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
                <Button onClick={(event)=>onSubmit(event)} variant="contained">Submit</Button>
                </Box>
        </Box>
    );
}
export default FormTeacher;