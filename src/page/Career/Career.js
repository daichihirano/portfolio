import React from "react";
import {
    Card,
    Box,
    Grid
} from '@mui/material';
import Education from './Education'
import Work from "./Work";

const Career = (props) => {
    return (
        <Grid container sx={12} justifyContent="center" alignItems="center">
            <Card sx={{ width: '95%' }} md={{width:'85%'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#ffecd2" }}>
                    <h2>経歴</h2>
                    <Work career={props.career} />
                    <Education career={props.career} />
                </Box>
            </Card>
        </Grid>
    )
}
export default Career;