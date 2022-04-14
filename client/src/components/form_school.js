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
const Input = styled('input')({
    display: 'none',
});
export default function FormSchool() {
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
        <Box sx={{marginBottom:2, backgroundColor: "white", borderRadius: 2, padding: 2, border: "1px solid #8c9eff" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Create School
            </Typography>
            <Box
                component="form"
                sx={{
                    display: "flex",
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="Name" variant="outlined" /> 
                <TextField id="outlined-basic" label="Address" variant="outlined" />
                <Button variant="contained">Submit</Button>
                </Box>
        </Box>
    );
}
