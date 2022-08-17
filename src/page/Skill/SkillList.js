import React from "react"
import {
    List,
    Box,
    Grid
} from '@mui/material';
import SkillCard from './SkillCard'

const SkillList = (props) => {
    return (
        <List>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {props.skill.map((skill, key) => (
                    <Grid item xs={4} key={key}>
                        <SkillCard skill={skill} />                        
                    </Grid>
                ))}
            </Grid>
            </Box>
        </List>
    )
}
export default SkillList