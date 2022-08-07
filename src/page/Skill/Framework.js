import React from "react"
import {
    Rating,
    Typography,
    Box,
    Grid
} from '@mui/material';

const Framework = (props) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', aliginContent: 'center', bgcolor: "#fffcf2" }}>
            <Grid container>
                {props.skill.framework.map((framework, key) =>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', aliginContent: 'center', bgcolor: "#fffcf2" }} key={key}>
                        <Typography fontSize={14}>{framework.name}</Typography>
                        <Rating size="small" name="half-rating-read" defaultValue={framework.level} precision={0.1} readOnly></Rating>
                    </Box>
                )}
            </Grid>
        </Box>

    )
}
export default Framework