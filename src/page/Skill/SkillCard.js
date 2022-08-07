import React from "react"
import {
    Card,
    Typography,
    Box,
    Grid
} from '@mui/material';
import Framework from "./Framework";
import Language from "./Language"

const SkillCard = (props) => {
    return (
        <Card elevation={3}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center', bgcolor: "#fffcf2" }}>
                <Grid container  sx={{justifyContent: 'center', alignItems: 'center', alignContent: 'center',}}>
                    <Language skill={props.skill} />
                    {("framework" in props.skill) ?
                        <Framework skill={props.skill} />
                        :
                        <div></div>}
                    <Typography fontSize={14}><br/>{props.skill.description}</Typography>
                </Grid>
            </Box>
        </Card>
    )
}
export default SkillCard