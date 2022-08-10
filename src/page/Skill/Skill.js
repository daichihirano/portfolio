import React from "react";
import {
    Card,
    Box,
    Grid
} from '@mui/material';
import SkillList from "./SkillList";
const Skill = (props) => {
    return (
        <Card sx={{ width: '95%' }} md={{width:'85%'}}>
            <Box sx={{ display: 'flesx', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#ffece2" }}>
                <h2>スキル</h2>
                <div>スキルと習得度</div>
                <SkillList skill={props.skill} />
            </Box>
        </Card>
    )
}
export default Skill;