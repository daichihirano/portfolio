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
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginLeft:'50px', marginRight:'50px'}}>
            <Grid container >
                {props.skill.map((skill, key) => (
                    <Grid item md={4} sx={6} key={key}>
                        <SkillCard skill={skill} />                        
                    </Grid>
                ))}
            </Grid>
            </Box>
        </List>
    )
}
export default SkillList