import React from "react"
import {
    Card,
    Typography,
    Box,
    Stack
} from '@mui/material';
import Framework from "./Framework";
import Purpose from "./Purpose";
import Language from "./Language"

const SkillCard = (props) => {
    return (
        <Card elevation={3} sx={{bgcolor: "#fffcf2"}} >
            <Stack container  sx={{justifyContent: 'center', alignItems: 'center', alignContent: 'center',}}>
                <Language skill={props.skill} />
                <Box>
                    {("framework" in props.skill) ?
                        <Framework skill={props.skill} />
                        :
                        <div></div>}
                </Box>
                <Box>
                    {("purpose" in props.skill) ?
                        <Purpose skill={props.skill} />
                        :
                        <div></div>}
                </Box>
                <Box>
                    <Typography fontSize={14}><br/>{props.skill.description}</Typography>
                </Box>
            </Stack>
        </Card>
    )
}
export default SkillCard