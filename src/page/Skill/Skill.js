import React from "react";
import {
    Card,
    CardContent,
    Rating,
    Typography,
    List,
    ListItem,
    Box,
    Grid
} from '@mui/material';
import SkillList from "./SkillList";
const Skill = (props) => {
    return (
        <Grid container xs={12} justifyContent="center" alignItems="center">
            <Card sx={{ width: '85%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#ffecd2" }}>
                    <h2>スキル</h2>
                    <div>スキルと習得度</div>
                    <SkillList skill={props.skill} />
                </Box>
            </Card>

        </Grid>
    )
}
export default Skill;