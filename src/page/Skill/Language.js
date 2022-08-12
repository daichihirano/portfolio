import React from "react"
import {
    Rating,
    Typography,
    Box,
} from '@mui/material';

const Language = (props) => {
    return (
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', aliginContent: 'center'}}>
                <Typography fontSize={20}>{props.skill.lang}</Typography>
                <Rating name="half-rating-read" defaultValue={props.skill.level} precision={0.1} readOnly></Rating>
            </Box>
    )
}
export default Language