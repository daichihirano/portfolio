import React from "react"
import {
    Grid,
    Chip
} from '@mui/material';

const Purpose = (props) => {
    return (
       <Grid container sx={{justifyContent: 'center', alignItems: 'center', aliginContent: 'center'}}>
           {props.skill.purpose.map((purpose) =>
                <Chip variant="contained" label={purpose} size="small"/>
            )}
        </Grid>
    )
}
export default Purpose