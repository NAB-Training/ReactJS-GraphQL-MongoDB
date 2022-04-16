import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import { useMutation } from "@apollo/client";
import { getAllSchools } from '../graphql_client/queries';
import { createSchoolMutation } from '../graphql_client/mutations';
export default function FormSchool() {
    const [school, setSchool] = React.useState({
        name: '',
        address: ""
    });
    const { name, address } = school
    const [create, dataMutation] = useMutation(createSchoolMutation)
    const handleChangeInput = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value;
        setSchool({
            ...school,
            [field]: value,
        });
    }
    const onCreateSchool = (event) => {
        event.preventDefault()
        create({
            variables: { name, address },
            refetchQueries: [{ query: getAllSchools }]
        })
        setSchool({ name: '', address: '' })
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
    return (
        <Box sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: 2, padding: 2, border: "1px solid #8c9eff" }}>
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
                <TextField name="name" onChange={(event) => handleChangeInput(event)} id="outlined-basic" label="Name" variant="outlined" />
                <TextField name="address" onChange={(event) => handleChangeInput(event)} id="outlined-basic" label="Address" variant="outlined" />
                <Button variant="contained" onClick={(event) => onCreateSchool(event)}>Submit</Button>
            </Box>
        </Box>
    );
}
