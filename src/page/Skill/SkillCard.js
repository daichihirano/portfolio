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
import Framework from "./Framework";
const SkillCard = (props) => {
    return (
        
        <Card elevation={3}>
            {console.log(props)}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#fffcf2" }}>
                <ListItem key={props.key}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', aliginContent: 'center', bgcolor: "#fffcf2" }}>
                        <Typography fontSize={20}>{props.skill.lang}</Typography>
                        <Rating name="half-rating-read" defaultValue={props.skill.level} precision={0.1} readOnly></Rating>
                    </Box>
                </ListItem>
                {("framework" in props.skill) ?
                    <Framework skill={props.skill} />
                    :
                    <div></div>}
            </Box>
        </Card>
       
    )
}
export default SkillCard