import React from "react";
import {
    Card,
    Typography,
    Box,
    Grid
} from '@mui/material';
import Education from './Education'
import Work from "./Work";

const Career = (props) => {
    return (
        <Grid container xs={12} justifyContent="center" alignItems="center">
            <Card sx={{ width: '85%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#e7f0fd" }}>
                    <h2>経歴</h2>
                    <Work career={props.career} />
                    <Education career={props.career} />
    
                </Box>
            </Card>
        </Grid>
    )
}
export default Career;