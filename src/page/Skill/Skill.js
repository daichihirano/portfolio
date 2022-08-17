import React from "react";
import {
    Card,
    Box,
    Grid
} from '@mui/material';
import SkillList from "./SkillList";
const Skill = (props) => {
    return (
        <Grid container sx={12} justifyContent="center" alignItems="center">
            <Card sx={{ width: '95%' }} md={{width:'85%'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#f5f7fa" }}>
                    <h2><font color="#333333">スキル</font></h2>
                    <div>スキルと習得度</div>
                    <SkillList skill={props.skill} />
                </Box>
            </Card>
        </Grid>
    )
}
export default Skill;