import React from "react"
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
import SkillCard from './SkillCard'

const SkillList = (props) => {
    return (

        <List>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#ffecd2" }}>
                {props.skill.map((skill, key) => (
                    <ListItem>
                        <SkillCard skill={skill} />
                    </ListItem>
                ))}
            </Box>
        </List>
    )
}
export default SkillList