import React from "react"
import {
    Rating,
    Typography,
    Box,
    Grid
} from '@mui/material';

const Framework = (props) => {
    return (
        <Grid container sx={{ display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center', aliginContent: 'center'}}>
            {props.skill.framework.map((framework, key) =>
                <Box sx={{margin:'0px 5px'}}>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', aliginContent: 'center'}} key={key}>
                        <Typography fontSize={14}>{framework.name}</Typography>
                        <Rating size="small" name="half-rating-read" defaultValue={framework.level} precision={0.1} readOnly></Rating>
                    </Grid>
                </Box>
            )}
        </Grid>
    )
}
export default Framework