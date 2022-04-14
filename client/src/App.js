import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import StudentTable from "./components/students_table";
import FormStudent from './components/form_student';
import FormSchool from './components/form_school';
import FormTeacher from './components/form_teacher';
function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ bgcolor: 'black', bgcolor: '#cfe8fc', height: 'lg' }}>
                <Container sx={{ paddingTop: 50, padding: 20 }}>
                    <FormSchool />
                    <FormTeacher />
                    <FormStudent />
                    <StudentTable />
                </Container>
            </Box>
        </React.Fragment>
    );
}

export default App;
