import React from "react";
import {
    Card,
    Box,
    Grid
} from '@mui/material';
import {
    styled
  } from '@mui/system';

import SkillList from "./SkillList";
const StyledCard =styled(Card)({
    display:'flex',
    background:'#f5f7fa',
    width:'95%'
  })
const Skill = (props) => {
    
    return (
        <Grid container sx={12} justifyContent="center" alignItems="center">
            <StyledCard >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                    <h2><font color="#333333">スキル</font></h2>
                    <div>スキルと習得度</div>
                    <SkillList skill={props.skill} />
                </Box>
            </StyledCard>
        </Grid>
    )
}
export default Skill;