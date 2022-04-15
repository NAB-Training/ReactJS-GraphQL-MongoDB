import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";

export default function FormSchool() {
    const createSchool = (event) => {
        // toast.error(`You have not been created an account by admin !!!`, {
        //     position: 'top-center',
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
        // toast.success(`Active account successfully !!!`, {
        //     position: 'top-center',
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });       
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
            //  onDelete(id);
            }
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
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Address" variant="outlined" />
                <Button variant="contained" onClick={(event) => createSchool(event)}>Submit</Button>
            </Box>
        </Box>
    );
}
