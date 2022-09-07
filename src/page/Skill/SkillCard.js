import React from "react"
import {
    Card,
    Typography,
    Box,
    Stack,
    Grid
} from '@mui/material';
import {
    styled
} from '@mui/system';
import Framework from "./Framework";
import Purpose from "./Purpose";
import Language from "./Language"

const SkillCard = (props) => {
    const StyledBox =styled(Box)({
        display:'flex',
        justifyContent:'center',
        alignmentItems:'center',
        alignContent:'center',
        padding:'10px'
    })
    const StyledCard =styled(Card)({
        margin:'10px',
        backgroundColor:"#d5d7da",
        elevation:3
    })

    return (
        <StyledCard>
            <Stack container  >
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
                <StyledBox>
                    <Typography fontSize={14}><br/>{props.skill.description}</Typography>
                </StyledBox>
            </Stack>
        </StyledCard>
    )
}
export default SkillCard